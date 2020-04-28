import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";
import "../../assets/css/Theme/Main.css";

class EditDepartment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deptDatas: {}
        };
    }

    componentDidMount = () => {
        this.props.departmentById({id: this.props.match.params.id});
    };

    componentWillReceiveProps = (nextProps) => {
        const data = nextProps.deptData.map(data => data)
        this.setState({
            deptDatas: data.length > 0 ? data[0] : {}
        })
    }

    handleChange = e => {
        this.setState({
            deptDatas: {
                ...this.state.deptDatas,
                [e.target.name]: e.target.value
            }
        });
    };
    
    handleSwitchChange = e => {
        this.setState({
            deptDatas: {
                ...this.state.deptDatas,
                [e.target.name]: e.target.checked
            }
        });
    };
    
    handleDepartmentSubmit = e => {
        e.preventDefault();
        const deptEdit = {
            id: this.state.deptDatas.id,
            departmentName: this.state.deptDatas.departmentName,
            shortCode: this.state.deptDatas.shortCode,
            kra: this.state.deptDatas.kra,
            isActive: this.state.deptDatas.isActive
        };
        this.props.departmentEdit(deptEdit);
    };

    render() {
        return (
            <div>
                <div className="page-content-inner">
                    <div className="page-header">
                        <div className="main-title"><strong>Edit Department</strong></div>
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
                                                                        <input type="text" className="form-control" id={this.state.id} name="departmentName"
                                                                        value={this.state.deptDatas.departmentName ? this.state.deptDatas.departmentName : ""} onChange={e => this.handleChange(e)} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Short Code</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="shortCode"
                                                                        value={this.state.deptDatas.shortCode ? this.state.deptDatas.shortCode : ""} onChange={e => this.handleChange(e)} />
                                                                    </div>
                                                                </div>
                                                            </div>	
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">KRA</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="kra"
                                                                        value={this.state.deptDatas.kra ? this.state.deptDatas.kra : ""} onChange={e => this.handleChange(e)} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">isActive</label><br />
                                                                    <label className="switch">
                                                                        <input type="checkbox" name="isActive"
                                                                        checked={this.state.deptDatas.isActive ? this.state.deptDatas.isActive : ""} onChange={e => this.handleSwitchChange(e)} />
                                                                        <span className="slider round"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="theme-footer">
                                                    <Link to="/departments" className="btn btn-gray btn-sm">Back</Link>
                                                    <button type="button" onClick={this.handleDepartmentSubmit} className="btn btn-theme btn-sm float-right">Save</button>
                                                </div>
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
    const data = state.CtrDepartment.getDeptDataById
    return {
        deptData: data
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        departmentById: (data) => dispatch(actionCreator.getDepartmentById(data)),
        departmentEdit: data => dispatch(actionCreator.editDepartment(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditDepartment);
