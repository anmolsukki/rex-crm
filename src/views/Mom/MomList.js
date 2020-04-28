import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class MomList extends React.Component {
    constructor () {
        super()
        this.state = {
            viewData: {}
        }
    }

    componentDidMount = () => {
        this.props.momgetData()
    }

    viewDetail = (viewData) => {
        console.log(viewData)
        this.setState({ 
            viewData
        })
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
            { Header: "Profile", accessor: "profile",
            Cell : () =>
                <div className="user-dp"><img src="themes/images/users/user-9.jpg" alt="profile" /></div>,
                style: {
                    textAlign: "center",
                    marginLeft: "20px"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },
            { Header: "Initiated By", accessor: "initiated",
            Cell : props =>
                <div className="client"  data-toggle="modal" data-target="#clientdetails" title="" data-original-title="View">
                    <span className='departmentName'>{props.original.initiated}</span>
                </div>,
                style: {
                    marginLeft: "40px"
                },
            },
            { Header: "Date Of Meeting", accessor: "dateOfMom",
            Cell : props =>
                <div className="client"  data-toggle="modal" data-target="#projectdetails" title="" data-original-title="View">
                    <span className='shortCode'>{props.original.dateOfMom}</span>
                </div>,
                style: {
                    textAlign: "center",
                    marginLeft: "40px"
                },
            },
            { Header: "Actions",
                Cell: props => {
                    return (
                        <ul className="table-actions">
                            <span><Link to="#" className="fa fa-eye" data-toggle="modal" data-target="#viewprofile" title="" data-original-title="View" onClick={() => this.viewDetail(props.original)}></Link></span>
                            <span><Link to={{ pathname: `/meeting/edit/${props.original.guid}`}} className="fa fa-edit" title="" data-original-title="Copy"></Link></span>
                            <span><Link to="#" className="fa fa-trash-o text-danger" data-toggle="modal" data-target="#delete" title="delete" data-original-title="delete"></Link></span>
                        </ul>
                    )
                },
                style: {
                    textAlign: "center",
                    marginLeft: "120px"
                },
            },
        ]
        return (
            <div>
                <div className="page-content-inner">
                    <div className="page-header">
                        <div className="main-title"><strong>Minute Of Meetings of all employees</strong></div>
                        <ul className="page-top-actions">
                            <li><Link to="/meeting/add" className="green">Add MOM</Link></li>
                        </ul>
                    </div>
                    <div className="theme-panel">
                    <div className="table-overflow">
                        <ReactTable 
                            columns={columns}
                            data={this.props.momData}
                            defaultPageSize={10}>
                        </ReactTable>
                        </div>
                    </div>
                </div>
                <div className="modal modal-right fade " id="viewprofile" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                    <div className="modal-dialog view-pop " role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="title">View Details</div>
                                <button className="close" data-dismiss="modal"><i className="fa fa-times" aria-hidden="true"></i></button>
                            </div>
                            <div className="modal-body">
                                <div className="user-view-box">
                                    <div className="user-bio">
                                        <div className="user-name">{this.state.viewData.initiated}</div>
                                        <div className="user-post">{this.state.viewData.email}</div>
                                        <div className="user-pic" style={{backgroundImage: `url(${"themes/images/users/user-9.jpg"})`}}></div>
                                    </div>
                                    <div className="user-details">
                                        <div className="heading"><strong>Details</strong></div>
                                        <div className="user-details-list">Date Of Meeting<span className="gmail">{this.state.viewData.dateOfMom}</span></div>
                                        <div className="user-details-list">Duration Of Meetings<span>{this.state.viewData.durationMeeting}</span></div>
                                        <div className="user-details-list">Client Name<span>{this.state.viewData.clientName}</span></div>
                                        <div className="user-details-list">Participant<span>{this.state.viewData.participants}</span></div>
                                        <div className="user-details-list">Medium<span>{this.state.viewData.medium}</span></div>
                                        <div className="user-details-list">Inputs From Business Development Team<span>{this.state.viewData.development}</span></div>
                                        <div className="user-details-list">Inputs From Core Development Team<span>{this.state.viewData.core}</span></div>
                                        <div className="user-details-list">Inputs From Core Designing Team<span>{this.state.viewData.designing}</span></div>
                                        <div className="user-details-list">Communication Medium<span>{this.state.viewData.communication}</span></div>
                                        <div className="user-details-list">Client Inputs at the time of Discussion<span>{this.state.viewData.clientInput}</span></div>
                                        <div className="user-details-list">Reason of Meeting<span>{this.state.viewData.reasonOfMeeting}</span></div>
                                        <div className="user-details-list">Inputs From HR Team<span>{this.state.viewData.hr}</span></div>
                                        <div className="user-details-list">Approved By<span>{this.state.viewData.approved}</span></div>
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    const data = state.CtrMom.getMomData
    return {
        momData: data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        momgetData: () => dispatch(actionCreator.getMomData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MomList);
