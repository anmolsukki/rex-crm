import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";
import "../../assets/css/Theme/Main.css";

class AddUser extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            userKra: "",
            skills: "",
            gender: "",
            dob: "",
            email: "",
            password: "",
            departmentId: ""
        };
    }

    componentDidMount = () => {
        this.props.getDepartmentData();
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userKra: this.state.userKra,
            skills: this.state.skills,
            gender: this.state.gender,
            dob: this.state.dob,
            email: this.state.email,
            password: this.state.password,
            departmentId: parseInt(this.state.departmentId)
        };
        this.props.addUsersData(data);
    };

    render() {
        const selectDepartment = this.props.userDept.map(department => (
            <option key={department.id} value={department.id}>
                {department.departmentName}
            </option>
        ));

        return (
            <div className="page-content-inner">
                <div className="page-header">
                    <div className="main-title"><strong>Add User</strong></div>
                    <ul className="page-top-actions">
                        <li><Link to="/users" className="green">Back</Link></li>
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
                                                    User Details
                                                </div>
                                                <div className="form-vertical">
                                                    <div className="row">
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="form-group">
                                                                <label className="control-label">First Name</label>
                                                                <div className="controls">
                                                                    <input type="text" className="form-control" name="firstName" placeholder="First Name"
                                                                    value={this.state.firstName} onChange={this.handleChange} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="form-group">
                                                                <label className="control-label">Last Name</label>
                                                                <div className="controls">
                                                                    <input type="text" className="form-control" name="lastName" placeholder="Last Name"
                                                                    value={this.state.lastName} onChange={this.handleChange} />
                                                                </div>
                                                            </div>
                                                        </div>	
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="form-group">
                                                                <label className="control-label">Email</label>
                                                                <div className="controls">
                                                                    <input type="text" className="form-control" name="email" placeholder="Email"
                                                                    value={this.state.email} onChange={this.handleChange} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="form-group">
                                                                <label className="control-label">Password</label>
                                                                <div className="controls">
                                                                    <input type="password" className="form-control" name="password" placeholder="Password"
                                                                    value={this.state.password} onChange={this.handleChange} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="form-group">
                                                                <label className="control-label">Date of Birth</label>
                                                                <div className="controls">
                                                                    <input type="date" className="form-control" name="dob"
                                                                    value={this.state.dob} onChange={this.handleChange} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="form-group">
                                                                <label className="control-label">Gender</label>
                                                                <div className="controls">
                                                                    <select className="form-control" name="gender"
                                                                    onChange={this.handleChange}>
                                                                        <option value="">Please Select</option>
                                                                        <option value="Male">Male</option>
                                                                        <option value="Female">Female</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="form-group">
                                                                <label className="control-label">Skills</label>
                                                                <div className="controls">
                                                                    <input type="text" className="form-control" name="skills" placeholder="Skills"
                                                                    value={this.state.skills} onChange={this.handleChange} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="form-group">
                                                                <label className="control-label">KRA</label>
                                                                <div className="controls">
                                                                    <textarea rows="4" cols="50" className="form-controlArea" name="userKra" placeholder="Please write here..."
                                                                    value={this.state.userKra} onChange={this.handleChange}></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="form-group">
                                                                <label className="control-label">Departments</label>
                                                                <div className="controls">
                                                                    <select className="form-control" name="departmentId"
                                                                    onChange={this.handleChange}>
                                                                        <option>Please Select</option>{selectDepartment}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="theme-footer">
                                                <Link to="/users" className="btn btn-gray btn-sm">Back</Link>
                                                <button type="button" onClick={this.handleSubmit} className="btn btn-theme btn-sm float-right">Add</button>
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
    const userDepartmentData = state.CtrUser.userDepartData
    return {
        userDept: userDepartmentData
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        addUsersData: data => dispatch(actionCreator.addUsersDataAction(data)),
        getDepartmentData: () => dispatch(actionCreator.getUserDepartment())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
