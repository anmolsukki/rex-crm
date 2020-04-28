import React from "react";
import { connect } from 'react-redux';
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment-timezone';

class UserTables extends React.Component {
    constructor() {
        super()
        this.state = {
            viewData: {}
        }
    }

    componentDidMount = () => {
        this.props.getUsersData();
    };

    viewDetail = (viewData) => {
        this.setState({ viewData })
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
            Cell : props =>
                <div className="user-dp"><img src="themes/images/users/user-9.jpg" alt="profile" /></div>,
                style: {
                    textAlign: "center",
                    marginLeft: "20px"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },
            { Header: "Full Name", accessor: "fullName",
            Cell : props =>
                <div className="client"  data-toggle="modal" data-target="#clientdetails" title="" data-original-title="View">
                    <span className='clientName'>{props.original.firstName + " "}</span>
                    <span className='clientName'>{props.original.lastName}</span>
                </div>,
                style: {
                    marginLeft: "70px"
                },
            },
            { Header: "Email", accessor: "email",
            Cell : props =>
                <div className="client"  data-toggle="modal" data-target="#projectdetails" title="" data-original-title="View">
                    <span className='submissionTitle'>{props.original.email}</span>
                </div>,
                style: {
                    marginLeft: "60px"
                },
            },
            { Header: "Actions",
                Cell: props => {
                    return (
                        <ul className="table-actions">
                            <span><Link to="#" className="fa fa-eye" data-toggle="modal" data-target="#viewprofile" title="" data-original-title="View" onClick={() => this.viewDetail(props.original)}></Link></span>
                            <span><Link to={{ pathname: `/users/edit/${props.original.id}`}} className="fa fa-edit" title="" data-original-title="Copy"></Link></span>
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
                        <div className="main-title"><strong>User List</strong></div>
                        <ul className="page-top-actions">
                            <li><Link to="/users/add" className="green">Add User</Link></li>
                        </ul>
                    </div>
                    <div className="theme-panel">
                        <div className="table-overflow">
                            <ReactTable 
                                columns={columns}
                                data={this.props.usersData}
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
                                        <div className="user-name">{this.state.viewData.firstName + " " + this.state.viewData.lastName}</div>
                                        <div className="user-post">{this.state.viewData.email}</div>
                                        <div className="user-pic" style={{backgroundImage: `url(${"themes/images/users/user-9.jpg"})`}}></div>
                                    </div>
                                    <div className="user-details">
                                        <div className="heading">
                                            Details :
                                        </div>
                                        <div className="user-details-list">
                                            Gender
                                            <span>{this.state.viewData.gender}</span>
                                        </div>
                                        <div className="user-details-list">
                                            DOB
                                            <span>{moment(this.state.viewData.dob).format("DD MMMM YYYY")}</span>
                                        </div>
                                        <div className="user-details-list">
                                            IsActive
                                            <span>{this.state.viewData.isActive === 1 ? "true" : "false"}</span>
                                        </div>
                                        <div className="user-details-list">
                                            Skill
                                            <span>{this.state.viewData.skills}</span>
                                        </div>
                                        <div className="user-details-list">
                                            KRA
                                            <span>{this.state.viewData.userKra}</span>
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
    const data = state.CtrUser.userData.result
    return {
      usersData: data
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
      getUsersData: () => dispatch(actionCreator.getUsersDataAction())
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(UserTables);
