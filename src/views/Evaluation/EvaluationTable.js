import React from "react";
import { Link } from "react-router-dom";

class EvaluationTable extends React.Component {
    render () {
        return (
            <div>
                <div className="page-content-inner">
                    <div className="page-header">
                        <div className="main-title"><strong>Calculation Matrix</strong></div>
                        <ul className="page-top-actions">
                            <li><Link to="/evaluation/show" className="green">Show</Link></li>
                        </ul>
                    </div>
                    <div className="theme-panel">
                        <div className="table-overflow">
                            <table className="table table-bordered table-nowhite-space table-shadows">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Sr.No</th>
                                        <th>Name</th>
                                        <th>Short Code</th>
                                        <th>Secondary Id</th>
                                        <th>Percentage</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td>1</td>
                                            <td>Work Ethics</td>
                                            <td>WE</td>
                                            <td>WE</td>
                                            <td>60</td>
                                            <td>
                                                <ul className="table-actions">
                                                    <li><Link to="#" className="fa fa-eye" style={{font: "normal normal normal 14px/1.9 FontAwesome", fontSize: "initial", cursor: "pointer"}} data-toggle="modal" data-target="#viewprofile" data-original-title="View"></Link></li>
                                                    <li><Link to="#" className="fa fa-edit" data-toggle="tooltip" title="" data-original-title="Copy"></Link></li>
                                                    <li><Link to="#" className="fa fa-trash-o text-danger" data-toggle="modal" data-target="#delete" title="delete" data-original-title="delete"></Link></li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="modal modal-right fade" id="viewprofile" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                    <div className="modal-dialog view-pop " role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="title">Calculation Details</div>
                                <button className="close" data-dismiss="modal"><i className="fa fa-times" aria-hidden="true" ></i></button>
                            </div>
                            <div className="modal-body">
                                <div className="user-view-box">
                                    <div className="user-bio">
                                        <div className="user-name">Work Ethics</div>
                                        <div className="user-post">WE</div>
                                    </div>
                                    <div className="user-details">
                                        <div className="user-details-list">
                                            Secondary Id
                                            <span>WE</span>
                                        </div>
                                        <div className="user-details-list">
                                            Percentage
                                            <span>60</span>
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

export default EvaluationTable;
