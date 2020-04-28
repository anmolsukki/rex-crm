import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";
import "../../assets/css/Theme/Main.css";

class AddDepartment extends React.Component {
    constructor() {
        super();
        this.state = {
            departmentName: "",
            shortCode: "",
            kra: ""
        };
    }

    handleChange = (e) => {
        this.setState ({[e.target.name]: e.target.value});
    }

    handleDepartmentSubmit = (e) => {
        e.preventDefault();
        const deptAdd = {
            departmentName: this.state.departmentName,
            shortCode: this.state.shortCode,
            kra: this.state.kra,
            isActive: "1"
        }
        this.props.departmentAdd(deptAdd);
    };

    render() {
        return (
            <div className="page-content-inner">
                <div className="page-header">
                    <div className="main-title"><strong>Add Department</strong></div>
                    <ul className="page-top-actions">
                        <li><Link to="/departments" className="green">Back</Link></li>
                    </ul>
                </div>
                <div className="theme-panel">
                    <div className="main-page-content">
                        <div className="theme-header">
                            <div className="right-side"></div>
                        </div>
                        <div className="page-main">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                    <div className="tab-content b_l" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="theme-content">
                                                <div className="heading-title">
                                                    Department Details
                                                </div>
                                                <div className="form-vertical">
                                                    <div className="row">
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="form-group">
                                                                <label className="control-label">Department Name</label>
                                                                <div className="controls">
                                                                    <input type="text" className="form-control" name="departmentName" placeholder="Department Name"
                                                                    value={this.state.departmentName} onChange={(e) => this.handleChange(e)} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="form-group">
                                                                <label className="control-label">Short Code</label>
                                                                <div className="controls">
                                                                    <input type="text" className="form-control" name="shortCode" placeholder="Short Code"
                                                                    value={this.state.shortCode} onChange={this.handleChange} />
                                                                </div>
                                                            </div>
                                                        </div>	
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="form-group">
                                                                <label className="control-label">KRA</label>
                                                                <div className="controls">
                                                                    <input type="text" className="form-control" name="kra" placeholder="KRA"
                                                                    value={this.state.kra} onChange={this.handleChange} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="theme-footer">
                                                <Link to="/departments" className="btn btn-gray btn-sm">Back</Link>
                                                <button type="button" onClick={this.handleDepartmentSubmit} className="btn btn-theme btn-sm float-right">Add</button>
                                            </div>
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
    return {
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        departmentAdd: (data) => dispatch(actionCreator.addDepartments(data))
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(AddDepartment);
