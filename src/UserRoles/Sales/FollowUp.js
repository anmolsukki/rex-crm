import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Link } from "react-router-dom";
import moment from 'moment-timezone';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ProposalTable extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            filterUserData: [],
            viewData: {},
            pages: null,
            filterState:false,
            filterBy: {
                employee: localStorage.getItem("userRole"),
                timeSlot: "",
                source: "",
                status: "discussion"
            },
            pageSize:10,
            selected: -1,
            file: null
        }
    }

    componentDidMount = () => {
        this.props.getDropDownData();
    }

    componentWillReceiveProps = (nextProps) => {
        const salesDatas = nextProps.salesDropDown.result;
        const filterDataShow = nextProps.salesData.tableRecords && nextProps.salesData.tableRecords.totalRecords;
        this.setState({
            filterUserData: salesDatas,
            pages:  Math.ceil(filterDataShow/this.state.pageSize)
        })
    }

    viewDetail = (viewData) => {
        this.setState({ 
            viewData
        })
    }

    allProposal = () => {
        let path = `/user/proposal`;
        this.props.history.push(path);
    }

    closedProposal = () => {
        let path = `/user/proposal/close`;
        this.props.history.push(path);
    }

    employeeSelect = (e) => {
        const { filterBy } = this.state;
        filterBy[e.target.name] = e.target.value;
        this.setState({
            filterBy,
            filterState:true
        },() => {
            this.props.getSalesDataByID({limit: this.state.pageSize, page: 1,...filterBy});
        })
    }

    calulatePortal = (viewData) => {
        this.props.calcutateSource(viewData);
    }

    onchangePage = (pageSize,b) => {
        this.setState({pageSize: pageSize})
    }

    csvUpload = (e) => {
        this.setState({
            file:e.target.files[0]
        }, () => {
            this.props.csvFileUpload(this.state.file)
        })
    }

    render () {
        const filterReturnDataSource = this.props.salesData.data && this.props.salesData.data.map(source => {
            return (
                source.userId
            )
        })

        const followUp = [
            { Header: "Sr No.", id: "row",
                Cell: (row) => {
                    return <div>{row.index+1}</div>
                },
                style: {
                    textAlign: "center"
                },
                width: 50,
                maxWidth: 50,
                minWidth: 50
            },
            { Header: "Employee Name", accessor: "firstName",
            Cell : props =>
                <div className="client"  data-toggle="modal" data-target="#employeedetails" title="" data-original-title="View" onClick={() => this.viewDetail(props.original)}>
                    <span className='firstName'>{props.original.firstName + " "}</span>
                    <span className='lastName'>{props.original.lastName}</span>
                </div>,
                style: {
                    textAlign: "center"
                }
            },
            { Header: "Client Name", accessor: "clientName",
            Cell : props =>
                <div className="client"  data-toggle="modal" data-target="#clientdetails" title="" data-original-title="View" onClick={() => this.viewDetail(props.original)}>
                    <span className='clientName'>{props.original.clientName}</span>
                </div>,
                style: {
                    textAlign: "center"
                }
            },
            { Header: "Title", accessor: "submissionTitle",
            Cell : props =>
                <div className="client"  data-toggle="modal" data-target="#projectdetails" title="" data-original-title="View" onClick={() => this.viewDetail(props.original)}>
                    <span className='submissionTitle'>{props.original.submissionTitle}</span>
                </div>,
                style: {
                    textAlign: "center"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100
            },
            { Header: "Country/City", accessor: "countryCityState",
                style: {
                    textAlign: "center"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100
            },
            { Header: "Source", accessor: "portal",
                style: {
                    textAlign: "center"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100
            },
            { Header: "Submission Date", accessor: "proposalSubmissionDateTime",
            Cell : props =>
                <div>
                    <span className='firstName'>{moment(props.original.proposalSubmissionDateTime).format("DD MMM YYYY, h:mm A")}</span>
                </div>,
                style: {
                    textAlign: "center"
                }
            },
            { Header: "Status", accessor: "status",
                style: {
                    textAlign: "center"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
                Cell : props =>
                    <div>
                        {props.original.status === "pending" ?
                        <div className="status-step">
                            <ul>
                                <li>
                                    <button className="propsal" data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Pending"></button>
                                </li>
                                <li >
                                    <button data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Discussion"></button>
                                </li>
                                <li>
                                    <button data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Approved"></button>
                                </li>
                                <li>
                                    <button data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Reject"></button>
                                </li>
                            </ul>
                            <span>Pending</span>
                        </div> :
                        props.original.status === "discussion" ?
                        <div className="status-step">
                            <ul>
                                <li >
                                    <button className="disscussion" data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Pending"></button>
                                </li>
                                <li >
                                    <button className="disscussion" data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Discussion"></button>
                                </li>
                                <li>
                                    <button className="" data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Approved"></button>
                                </li>
                                <li>
                                    <button className="" data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Reject"></button>
                                </li>
                            </ul>
                            <span>Disscussion</span>
                        </div> :
                        props.original.status === "approved" ?
                        <div className="status-step">
                            <ul>
                                <li >
                                    <button className="underprogress" data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Pending"></button>
                                </li>
                                <li >
                                    <button className="underprogress" data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Discussion"></button>
                                </li>
                                <li>
                                    <button className="underprogress" data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Approved"></button>
                                </li>
                                <li >
                                    <button data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Reject"></button>
                                </li>
                            </ul>
                            <span>Approved</span>
                        </div> :
                        props.original.status === "reject" ?
                        <div className="status-step">
                            <ul>
                                <li>
                                    <button className="close" data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Pending"></button>
                                </li>
                                <li >
                                    <button className="close" data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Discussion"></button>
                                </li>
                                <li>
                                    <button className="close" data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Approved"></button>
                                </li>
                                <li>
                                    <button className="close" data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Reject"></button>
                                </li>
                            </ul>
                            <span>Reject</span>
                        </div> : null
                    }
                </div>
            }
        ]

        return (
            <div>
                <div className="page-content-inner">
                    <ToastContainer autoClose={3000} />
                    <div className="page-header">
                        <div className="main-title"><strong>User Proposal List</strong></div>
                        <ul className="page-top-actions">
                            <li><Link to="/user/proposal/add" className="green">Add Proposal</Link></li>
                            <li><label className="custom-file-upload"><input type="file" onChange={this.csvUpload}/>Import CSV</label></li>
                            <li><Link to="/user/proposal/target">Sales Target</Link></li>
                        </ul>
                    </div>
                    <div className="theme-panel">
                        <div className="prosess-tab">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <button className="nav-link" onClick={this.allProposal}>All</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link active">Follow Up</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={this.closedProposal}>Closed</button>
                                </li>
                            </ul>
                        </div>
                         <div className="page-top-search ">
                            <Link to="#" data-toggle="collapse" data-target="#searchfields" aria-expanded="true"><i className="fa fa-filter"></i></Link>
                        </div>
                        <div id="searchfields" className="search-fields collapse show">
                            <div className="searchfields-box">
                                <ul className="searchfields-ul">
                                    <li className="single-search-field">
                                        <div className="label">Month / Year</div>
                                        <select className="form-control" name="timeSlot" onChange={this.employeeSelect}>
                                            <option value="">All</option>
                                            <option value="today">Today</option>
                                            <option value="weekly">Weekly</option>
                                            <option value="monthly">Monthly</option>
                                        </select>
                                    </li>
                                    <li className="single-search-field">
                                        <div className="label">Source</div>
                                        <select className="form-control" name="source" onChange={this.employeeSelect}>
                                            <option value="">All</option>
                                            <option value="upwork">Upwork</option>
                                            <option value="freelancer">Freelancer</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="user-bid-list">
                            <ul>
                                {this.state.filterUserData && this.state.filterUserData.map(employee => {
                                    return (
                                        // eslint-disable-next-line
                                        filterReturnDataSource && filterReturnDataSource.includes(employee.id) ?
                                        <li key={employee.id}>
                                            <Link to="#" className="bidder" data-toggle="modal" data-target="#source-view" onClick={() => this.calulatePortal(employee.id)}>
                                                {employee.firstName + " " + employee.lastName}
                                                <span>{employee.count}</span>
                                            </Link>
                                        </li> : null
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="user-bid-list"></div>
                        <div className="tab-content">
                            <div className="tab-pane fade show active">
                                <div className="table-overflow">
                                    <ReactTable 
                                        loading={this.state.loading}
                                        manual  // this would indicate that server side pagination has been enabled 
                                        onFetchData={(state) => {this.props.getSalesDataByID({page: state.page+1, limit: state.pageSize, ...this.state.filterBy})}}
                                        getTrProps={(state, rowInfo, column, instance) => {
                                            if (typeof rowInfo !== "undefined") {
                                                return {
                                                    onClick: (e, handleOriginal) => {
                                                        this.setState({
                                                            selected: rowInfo.index
                                                        });
                                                        if (handleOriginal) {
                                                            handleOriginal()
                                                        }
                                                    },
                                                    style: {
                                                        background: rowInfo.index === this.state.selected ? '#e8e7e3' : 'white',
                                                        color: rowInfo.index === this.state.selected ? 'black' : 'black'
                                                    },
                                                }
                                            }
                                            else {
                                                return {
                                                    onClick: (e, handleOriginal) => {
                                                        if (handleOriginal) {
                                                            handleOriginal()
                                                        }
                                                    },
                                                    style: {
                                                        background: 'white',
                                                        color: 'black'
                                                    },
                                                }
                                            }
                                        }}
                                        pages={this.state.pages} 
                                        columns={followUp}
                                        data={this.props.salesData.data}
                                        defaultPageSize={this.state.pageSize}
                                        onPageSizeChange={this.onchangePage}>
                                    </ReactTable>
                                </div>
                            </div>
                            <div className="modal fade modal-theme" id="source-view" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body close-on-body">
                                            <div className="user-name">
                                                {this.props.salesButtonStatus.data ? this.props.salesButtonStatus.data[0].firstName + " " + this.props.salesButtonStatus.data[0].lastName : null}
                                            </div>
                                            <div className="source-detail">
                                                <div className="source-box">
                                                    upwork
                                                    <span>{this.props.salesButtonStatus.tableRecords && this.props.salesButtonStatus.tableRecords.upwork ? this.props.salesButtonStatus.tableRecords && this.props.salesButtonStatus.tableRecords.upwork : 0}</span>
                                                </div>
                                                <div className="source-box">
                                                    Freelancer
                                                    <span>{this.props.salesButtonStatus.tableRecords && this.props.salesButtonStatus.tableRecords.freelancer ? this.props.salesButtonStatus.tableRecords && this.props.salesButtonStatus.tableRecords.freelancer : 0}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-theme btn-sm" data-dismiss="modal">ok</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal modal-right fade " id="employeedetails" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                                <div className="modal-dialog view-pop " role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <div className="title">
                                                Employee Details
                                            </div>
                                            <button className="close" data-dismiss="modal"><i className="fa fa-times" aria-hidden="true"></i></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="user-view-box">
                                                <div className="user-bio">
                                                    <div className="user-name">{this.state.viewData.firstName + " " + this.state.viewData.lastName}</div>
                                                </div>
                                                <div className="user-details">
                                                    <div className="heading">
                                                        Details :
                                                    </div>
                                                    <div className="user-details-list">
                                                        Target Achieved
                                                        <span className="gmail">{this.state.viewData.TargetAchieved}</span>
                                                    </div>
                                                    <div className="user-details-list">
                                                        Date of Birth
                                                        <span>{moment(this.state.viewData.dob).format("DD MMMM YYYY")}</span>
                                                    </div>
                                                    <div className="user-details-list">
                                                        Gender
                                                        <span>{this.state.viewData.gender}</span>
                                                    </div>
                                                    <div className="user-details-list">
                                                        Skills
                                                        <span>{this.state.viewData.skills}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-theme btn-sm" data-dismiss="modal">Back</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal modal-right fade " id="clientdetails" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                                <div className="modal-dialog view-pop " role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <div className="title">
                                                Client Details
                                            </div>
                                            <button className="close" data-dismiss="modal"><i className="fa fa-times" aria-hidden="true"></i></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="user-view-box">
                                                <div className="user-bio">
                                                    <div className="user-name">{this.state.viewData.clientName}</div>
                                                </div>
                                                <div className="user-details">
                                                    <div className="heading">
                                                        Details :
                                                    </div>
                                                    <div className="user-details-list">
                                                        Job Posted Date
                                                        <span className="gmail">{moment(this.state.viewData.clientPostedDateTime).format("DD MMMM YYYY, h:mm A")}</span>
                                                    </div>
                                                    <div className="user-details-list">
                                                        Company
                                                        <span>{this.state.viewData.company}</span>
                                                    </div>
                                                    <div className="user-details-list">
                                                        Country / City / State
                                                        <span>{this.state.viewData.countryCityState}</span>
                                                    </div>
                                                    <div className="user-details-list">
                                                        Email
                                                        <span>{this.state.viewData.email}</span>
                                                    </div>
                                                    <div className="user-details-list">
                                                        Phone
                                                        <span>{this.state.viewData.phone}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-theme btn-sm" data-dismiss="modal">Back</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal modal-right fade " id="projectdetails" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                                <div className="modal-dialog view-pop full-view" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <div className="title">
                                                Project Details
                                            </div>
                                            <button className="close" data-dismiss="modal"><i className="fa fa-times" aria-hidden="true"></i></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="theme-panel">
                                                <div className="discussion-box">
                                                    <div className="discussion-header">
                                                        <div className="title">Assigned Person</div>
                                                    </div>
                                                    <div className="discussion-detail">
                                                        <div className="discussion-date">{moment(this.state.viewData.date).format("DD MMMM YYYY")}</div>
                                                        <div className="details-title">
                                                            <span className="lable">Proposal Id   </span>{this.state.viewData.id}
                                                        </div>
                                                        <div className="details-title">
                                                            <span className="lable">Person Name   </span>{this.state.viewData.firstName + " " + this.state.viewData.lastName}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="theme-panel">
                                                <div className="discussion-box">
                                                    <div className="discussion-header">
                                                        <div className="title">Client Discussion Details</div>
                                                    </div>
                                                    <div className="discussion-detail">
                                                        <div className="discussion-date">{moment(this.state.viewData.clientPostedDateTime).format("DD MMMM YYYY")}</div>
                                                        <div className="details-title">
                                                            <span className="lable">Company Name   </span>{this.state.viewData.company}
                                                        </div>
                                                        <div className="details-title">
                                                            <span className="lable">Client Email</span>{this.state.viewData.email}
                                                        </div>
                                                        <div className="details-title">
                                                            <span className="lable">Client Phone</span>{this.state.viewData.phone}
                                                        </div>
                                                        <div className="details-title">
                                                            <span className="lable">Client Country / City / State</span>{this.state.viewData.countryCityState}
                                                        </div>
                                                    </div>
                                                    <div className="discussion-header">
                                                        <div className="title">Project Details</div>
                                                    </div>
                                                    <div className="discussion-detail">
                                                        <div className="discussion-date">{moment(this.state.viewData.proposalSubmissionDateTime).format("DD MMMM YYYY")}</div>
                                                        <div className="details-title">
                                                            <span className="lable">Title   </span>{this.state.viewData.submissionTitle}
                                                        </div>
                                                        <div className="details-title">
                                                            <span className="lable">Profile</span>{this.state.viewData.profile}
                                                        </div>
                                                        <div className="details-title">
                                                            <span className="lable">Project Type</span>{this.state.viewData.projectType}
                                                        </div>
                                                        <div className="details-title">
                                                            <span className="lable">Domain</span>{this.state.viewData.domain}
                                                        </div>
                                                        <div className="details-title">
                                                            <span className="lable">Source</span>{this.state.viewData.portal}
                                                        </div>
                                                        <div className="details-title">
                                                            <span className="lable">Job Link</span>{this.state.viewData.jobReqLink}
                                                        </div>
                                                        <div className="details-title">
                                                            <span className="lable">Proposal Link</span>{this.state.viewData.proposalLink}
                                                        </div>
                                                        <div className="details-title">
                                                            <span className="lable">Pitch Content</span>{this.state.viewData.pitchContent}
                                                        </div>
                                                    </div>
                                                    <div className="requirment-details">
                                                        <div className="requirment-title">
                                                            Discussion: 
                                                        </div>
                                                        <div className="requirment-details">
                                                            The right questions and resulting answers not only help you to provide better results for your clients, but the act of asking questions that prompt productive dialogues can improve your relationships. With a better understanding of the client's business, her goals and challenges, needs, and values, you can find new ways to provide value to the client and connect with the larger team.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-theme btn-sm" data-dismiss="modal">Back</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const data = state.CtrSales.getData
    const dropDown = state.CtrSales.getDropDown
    const status = state.CtrSales.statusData
    return {
        salesData: data,
        salesDropDown: dropDown,
        salesButtonStatus: status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getSalesDataByID: (data) => dispatch(actionCreator.getSalesActionData(data)),
        calcutateSource: (data) => dispatch(actionCreator.buttonSelectStatus(data)),
        getDropDownData: (data) => dispatch(actionCreator.getSalesDropDownActionData(data)),
        csvFileUpload: (data) => dispatch(actionCreator.importCsvFileAction(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProposalTable);
