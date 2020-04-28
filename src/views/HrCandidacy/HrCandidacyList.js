import React from "react";
import { connect } from 'react-redux';
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment-timezone';

class HrCandidacy extends React.Component {
    constructor() {
        super()
        this.state = {
            viewData: {},
            timePeriod: {}
        }
    }

    componentDidMount = () => {
        this.props.getCandidateData();
    };

    viewDetail = (viewData) => {
        this.setState({ viewData })
    }

    pendingCandidate = () => {
        let path = `/hrCandidacy/pending`;
        this.props.history.push(path);
    }

    selectedCandidate = () => {
        let path = `/hrCandidacy/selected`;
        this.props.history.push(path);
    }

    filterTimePeriod = (e) => {
        const { timePeriod } = this.state
        timePeriod[e.target.name] = e.target.value ? e.target.value : ""
        this.setState({
            timePeriod
        }, () => {
            this.props.getCandidateData(timePeriod)
        })
    }

    salesDataClick = (data, outcome) => {
        this.forceUpdate()
        const statusData = {
            id: data.id,
            candidateName: data.candidateName,
            email: data.email,
            dob: data.dob.slice(0, 10),
            skills: data.skills,
            department: data.department,
            rounds: data.rounds,
            experience: data.experience,
            currentSalary: data.currentSalary,
            expectedSalary: data.expectedSalary,
            noticePeriod: data.noticePeriod,
            interviewDate: data.interviewDate.slice(0, 10),
            interviewTime: data.interviewTime,
            interviewMode: data.interviewMode,
            status: data.status,
            reasonForChange: data.reasonForChange,
            outcome: outcome,
            isActive: data.isActive
        }
        this.props.candidateEdit(statusData);
    }

    render () {
        const columns = [
            { Header: "Sr No.", id: "row",
                Cell: (row) => {
                    return <div>{row.index+1}</div>
                },
                style: {
                    textAlign: "center"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },
            { Header: "Candidate Name", accessor: "candidateName",
            Cell : props =>
                <div className="client"  data-toggle="modal" data-target="#clientdetails" title="" data-original-title="View">
                    <span className='clientName'>{props.original.candidateName}</span>
                </div>,
                style: {
                    marginLeft: "40px"
                },
            },
            { Header: "Candidate Name", accessor: "email",
            Cell : props =>
                <div className="client"  data-toggle="modal" data-target="#clientdetails" title="" data-original-title="View">
                    <span className='email'>{props.original.email}</span>
                </div>,
                style: {
                    marginLeft: "40px"
                },
            },
            { Header: "InterView Date", accessor: "interviewDate",
            Cell : props =>
                <div className="client"  data-toggle="modal" data-target="#projectdetails" title="" data-original-title="View">
                    <span className='submissionTitle'>{moment(props.original.interviewDate).format("DD MMMM YYYY")}</span>
                </div>,
                style: {
                    marginLeft: "60px"
                },
            },
            { Header: "Outcome", accessor: "outcome",
                style: {
                    textAlign: "center"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
                Cell : props =>
                    <div>
                        {props.original.outcome === "pending" ?
                        <div className="status-step">
                            <ul>
                                <li>
                                    <button onClick={() => this.salesDataClick(props.original, "pending")} className="propsal" data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Pending"></button>
                                </li>
                                <li>
                                    <button onClick={() => this.salesDataClick(props.original, "selected")} data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Selected"></button>
                                </li>
                                <li>
                                    <button onClick={() => this.salesDataClick(props.original, "reject")} data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Reject"></button>
                                </li>
                            </ul>
                            <span>Pending</span>
                        </div> :
                        props.original.outcome === "selected" ?
                        <div className="status-step">
                            <ul>
                                <li >
                                    <button onClick={() => this.salesDataClick(props.original, "pending")} className="underprogress" data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Pending"></button>
                                </li>
                                <li>
                                    <button onClick={() => this.salesDataClick(props.original, "selected")} className="underprogress" data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Approved"></button>
                                </li>
                                <li >
                                    <button onClick={() => this.salesDataClick(props.original, "reject")} data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Reject"></button>
                                </li>
                            </ul>
                            <span>selected</span>
                        </div> :
                        props.original.outcome === "reject" ?
                        <div className="status-step">
                            <ul>
                                <li>
                                    <button onClick={() => this.salesDataClick(props.original, "pending")} data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Pending"></button>
                                </li>
                                <li>
                                    <button onClick={() => this.salesDataClick(props.original, "selected")} data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="selected"></button>
                                </li>
                                <li>
                                    <button onClick={() => this.salesDataClick(props.original, "reject")} data-toggle="tooltip" data-placement="top"  data-original-title="disscussion" title="Reject"></button>
                                </li>
                            </ul>
                            <span>Reject</span>
                        </div> : null
                    }
                </div>
            },
            { Header: "Actions",
                Cell: props => {
                    return (
                        <ul className="table-actions">
                            <span><Link to="#" className="fa fa-eye" data-toggle="modal" data-target="#viewprofile" title="" data-original-title="View" onClick={() => this.viewDetail(props.original)}></Link></span>
                            <span><Link to={{ pathname: `/hrCandidacy/edit/${props.original.id}`}} className="fa fa-edit" title="" data-original-title="Copy"></Link></span>
                            <span><Link to="#" className="fa fa-trash-o text-danger" data-toggle="modal" data-target="#delete" title="delete" data-original-title="delete"></Link></span>
                        </ul>
                    )
                },
                style: {
                    textAlign: "center",
                    marginLeft: "50px"
                },
            },
        ]
        return (
            <div>
                <div className="page-content-inner">
                    <div className="page-header">
                        <div className="main-title"><strong>Candidate List</strong></div>
                        <ul className="page-top-actions">
                            <li><Link to="/hrCandidacy/add" className="green">Add Candidate</Link></li>
                        </ul>
                    </div>
                    <div className="theme-panel">
                        <div className="prosess-tab">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <button className="nav-link active">All</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={this.pendingCandidate}>Pending</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={this.selectedCandidate}>Selected</button>
                                </li>
                            </ul>
                            <ul>
                            <div className="action-btn" style={{width: "15%", float: "right"}}>
                                    <div className="input-form">
                                        <select className="form-control" name="timePeriod" onChange={this.filterTimePeriod}>
                                            <option value="">All</option>
                                            <option value="today">Today</option>
                                            <option value="weekly">Weekly</option>
                                            <option value="monthly">Monthly</option>
                                        </select>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div className="user-bid-list">
                            <ul>
                                <li>
                                    <Link to="#" className="bidder" data-toggle="modal" data-target="#source-view" style={{display: "none"}}>
                                        <span></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="table-overflow">
                            <ReactTable 
                                columns={columns}
                                data={this.props.hrData}
                                defaultPageSize={10}>
                            </ReactTable>
                        </div>
                    </div>
                </div>
                <div className="modal modal-right fade" id="viewprofile" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                    <div className="modal-dialog view-pop " role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="title">View Details</div>
                                <button className="close" data-dismiss="modal"><i className="fa fa-times" aria-hidden="true" ></i></button>
                            </div>
                            <div className="modal-body">
                                <div className="user-view-box">
                                    <div className="user-bio">
                                        <div className="user-name">{this.state.viewData.candidateName}</div>
                                        <div className="user-post">{this.state.viewData.email}</div>
                                    </div>
                                    <div className="user-details">
                                        <div className="heading"><strong>Details :</strong></div>
                                        <div className="user-details-list">InterView Date<span>{moment(this.state.viewData.interviewDate).format("DD MMMM YYYY")}</span></div>
                                        <div className="user-details-list">InterView Mode<span>{this.state.viewData.interviewMode}</span></div>
                                        <div className="user-details-list">InterView Time<span>{this.state.viewData.interviewTime}</span></div>
                                        <div className="user-details-list">Candidate Current Salary<span>{this.state.viewData.currentSalary}</span></div>
                                        <div className="user-details-list">Candidate Expected Salary<span>{this.state.viewData.expectedSalary}</span></div>
                                        <div className="user-details-list">Experience<span>{this.state.viewData.experience}</span></div>
                                        <div className="user-details-list">Notice Period<span>{this.state.viewData.noticePeriod}</span></div>
                                        <div className="user-details-list">Reason For Change<span>{this.state.viewData.reasonForChange}</span></div>
                                        <div className="user-details-list">Outcome<span>{this.state.viewData.outcome}</span></div>
                                        <div className="user-details-list">Date Of Birth<span>{moment(this.state.viewData.dob).format("DD MMMM YYYY")}</span></div>
                                        <div className="user-details-list">Skills<span>{this.state.viewData.skills}</span></div>
                                        <div className="user-details-list">Department<span>{this.state.viewData.department}</span></div>
                                        <div className="user-details-list">Rounds<span>{this.state.viewData.rounds}</span></div>
                                        <div className="user-details-list">Status<span>{this.state.viewData.status}</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-theme btn-sm" data-dismiss="modal">Back</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade modal-theme" id="delete" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body close-on-body">
                                <p>Are you really want to archive this entry?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-gray btn-sm" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-theme btn-sm" data-dismiss="modal">ok</button>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        )
    }
}

const mapStateToProps = state => {
    const data = state.CtrlHrCandidacy.getCandidate
    return {
      hrData: data
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
      getCandidateData: (data) => dispatch(actionCreator.getHrCandidacyAction(data)),
      candidateEdit: data => dispatch(actionCreator.editHrCandidacyStatus(data))
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(HrCandidacy);
