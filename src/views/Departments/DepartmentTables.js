import React from "react";
import { connect } from 'react-redux';
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Link } from "react-router-dom";

class DepartmentTable extends React.Component {
    constructor() {
        super()
        this.state = {
            viewData: {}
        }
    }

    componentDidMount = () => {
        this.props.getDepartmentData()
    }

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
            { Header: "Department Name", accessor: "departmentName",
            Cell : props =>
                <div className="client"  data-toggle="modal" data-target="#clientdetails" title="" data-original-title="View">
                    <span className='departmentName'>{props.original.departmentName}</span>
                </div>,
                style: {
                    marginLeft: "40px"
                },
            },
            { Header: "Short Code", accessor: "shortCode",
            Cell : props =>
                <div className="client"  data-toggle="modal" data-target="#projectdetails" title="" data-original-title="View">
                    <span className='shortCode'>{props.original.shortCode}</span>
                </div>,
                style: {
                    textAlign: "center",
                    marginLeft: "40px"
                },
            },
            { Header: "isActive", accessor: "isActive",
            Cell : props =>
                <div className="client"  data-toggle="modal" data-target="#projectdetails" title="" data-original-title="View">
                    <span className='isActive'>{props.original.isActive === 1 ? "true" : "false"}</span>
                </div>,
                style: {
                    textAlign: "center",
                    marginLeft: "90px"
                },
            },
            { Header: "Actions",
                Cell: props => {
                    return (
                        <ul className="table-actions">
                            <span><Link to="#" className="fa fa-eye" data-toggle="modal" data-target="#viewprofile" title="" data-original-title="View" onClick={() => this.viewDetail(props.original)}></Link></span>
                            <span><Link to={{ pathname: `/departments/edit/${props.original.id}`}} className="fa fa-edit" title="" data-original-title="Copy"></Link></span>
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
                        <div className="main-title"><strong>Department List</strong></div>
                        <ul className="page-top-actions">
                            <li><Link to="/departments/add" className="green">Add Department</Link></li>
                        </ul>
                    </div>
                    <div className="theme-panel">
                        <div className="table-overflow">
                        <ReactTable 
                            columns={columns}
                            data={this.props.departmentData}
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
                                        <div className="user-name">{this.state.viewData.departmentName}</div>
                                    </div>
                                    <div className="user-details">
                                        <div className="heading">
                                            Details :
                                        </div>
                                        <div className="user-details-list">
                                            Short Code
                                            <span>{this.state.viewData.shortCode}</span>
                                        </div>
                                        <div className="user-details-list">
                                            KRA
                                            <span>{this.state.viewData.kra}</span>
                                        </div>
                                        <div className="user-details-list">
                                            IsActive
                                            <span>{this.state.viewData.isActive === 1 ? "true" : "false"}</span>
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
                                <p>Department Status Deactivated</p>
                            </div>
                            <div className="modal-footer">
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
    const data = state.CtrDepartment.getDeptData
    return {
        departmentData: data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDepartmentData: () => dispatch(actionCreator.getDepartment())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentTable);
