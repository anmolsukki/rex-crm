import React from "react";
import { connect } from 'react-redux';
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Link } from "react-router-dom";

class SubPerformanceTable extends React.Component {
    constructor() {
        super()
        this.state = {
            viewData: {}
        }
    }

    componentDidMount = () => {
        this.props.getSubPerformanceData()
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
            { Header: "Name", accessor: "name",
            Cell : props =>
                <div className="client"  data-toggle="modal" data-target="#clientdetails" title="" data-original-title="View">
                    <span className='name'>{props.original.name}</span>
                </div>,
                style: {
                    marginLeft: "180px"
                },
            },
            { Header: "Actions",
                Cell: props => {
                    return (
                        <ul className="table-actions">
                            <span><Link to="#" className="fa fa-eye" data-toggle="modal" data-target="#viewprofile" title="" data-original-title="View" onClick={() => this.viewDetail(props.original)}></Link></span>
                            <span><Link to={{ pathname: `/subPerformance/edit/${props.original.id}`}} className="fa fa-edit" title="" data-original-title="Copy"></Link></span>
                            <span><Link to="#" className="fa fa-trash-o text-danger" data-toggle="modal" data-target="#delete" title="delete" data-original-title="delete"></Link></span>
                        </ul>
                    )
                },
                style: {
                    textAlign: "center",
                    marginLeft: "200px"
                },
            },
        ]
        return (
            <div>
                <div className="page-content-inner">
                    <div className="page-header">
                        <div className="main-title"><strong>Sub Performance List</strong></div>
                        <ul className="page-top-actions">
                            <li><Link to="/subPerformance/add" className="green">Add Sub Performance</Link></li>
                        </ul>
                    </div>
                    <div className="theme-panel">
                        <div className="table-overflow">
                            <ReactTable 
                                columns={columns}
                                data={this.props.subPerformanceData}
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
                                        <div className="user-name">{this.state.viewData.name}</div>
                                    </div>
                                    <div className="heading">
                                        Details :
                                    </div>
                                    <div className="user-details">
                                        <div className="user-details-list">
                                            isActive
                                            <span>{this.state.viewData.isActive === 1 ? "True" : "False"}</span>
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
        )
    }
}

const mapStateToProps = state => {
    const data = state.CtrSubPerformance.getSubPrefData
    return {
        subPerformanceData: data
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        getSubPerformanceData: () => dispatch(actionCreator.getSubPerformance()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubPerformanceTable);
