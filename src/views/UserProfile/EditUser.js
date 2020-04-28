import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";
import "../../assets/css/Theme/Main.css";

class EditUser extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            userData: {},
            departments: []
        }
    }

    componentDidMount = () => {
        this.props.userDataById({id: this.props.match.params.id});
        this.props.getDepartmentData();
        this.props.getpermissionData()
    }

    componentWillReceiveProps = (nextProps) => {
        const byIdUser = nextProps.userIdData.result && nextProps.userIdData.result.map(data => (data))
        const departmentdatas = nextProps.deptDatas
        this.setState({
            userData: byIdUser && byIdUser.length > 0 ? byIdUser[0] : {},
            departments: departmentdatas
        })
    }

    handleChange = (e) => {
        this.setState ({
            userData: {
            ...this.state.userData,
            [e.target.name]: e.target.value}
        })
    }

    handleSwitchChange = e => {
        this.setState({
            userData: {
                ...this.state.userData,
                [e.target.name]: e.target.checked
            }
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const permissionId = [];
        const allpermissionsCheckboxes = document.getElementsByClassName("permissionsCheckboxes");
        Array.from(allpermissionsCheckboxes).forEach(el => {
            if (el.checked) {
                permissionId.push(el.getAttribute("name"));
            }
        });
        const data = {
            id: this.state.userData.id,
            firstName: this.state.userData.firstName,
            lastName: this.state.userData.lastName,
            userKra: this.state.userData.userKra,
            dob: this.state.userData.dob.slice(0,10),
            gender: this.state.userData.gender,
            skills: this.state.userData.skills,
            email: this.state.userData.email,
            password: this.state.userData.password,
            departmentId: this.state.userData.departmentId,
            permissionId: permissionId.join("|"),
            isActive: this.state.userData.isActive === true ? 1 : 0
        };
        this.props && this.props.updateUserData(data);
    };

    render () {
        const department = this.state.departments.map(data => {
            return (
                <option key={data.id} name={data.departmentName} value={data.id}>{data.departmentName}</option>
            )
        })

        const permissionDatas = this.state.userData.permissionId && this.state.userData.permissionId.split("|")

        const groupingArr = [];
        const  groupsData = this.props.userPermission;
        if (groupsData) {
            for (var key in groupsData) {
                let first = (
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8">
                        <div className="acc-box">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="accordion-btn collapsed"  data-toggle="collapse" data-target={`#${key}`} aria-expanded="true" aria-controls={key}>
                                        <span><i className="fa fa-magic"></i></span>
                                        {key.charAt(0).toUpperCase() + key.slice(1)} Permissions
                                    </div>
                                    <div id={key} className="collapse" aria-labelledby={key} data-parent="#accordionExample">
                                        <div className="card-body form-vertical">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                                    {groupsData[key].map(permission => {
                                                        return (
                                                            <div className="checkbox-theme" key={permission.id}>
                                                                <input id={permission.id} className="styled permissionsCheckboxes" type="checkbox"
                                                                name={permission.id}
                                                                defaultChecked={permissionDatas && permissionDatas.includes(permission.id && permission.id.toString())} />
                                                                <label htmlFor={permission.id} className="arrow-label">
                                                                    <div className="radio-list-product">
                                                                        <div className="product-name">{permission.requestType + " "} ( {permission.description} )</div>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                groupingArr.push(first);
            }
        }

        return (
            <div>
                <div className="page-content-inner">
                    <div className="page-header">
                        <div className="main-title"><strong>Edit User</strong></div>
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
                                                    <div className="heading-title">User Details</div>
                                                    <div className="form-vertical">
                                                        <div className="row">
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">First Name</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="firstName"
                                                                        value={this.state.userData.firstName ? this.state.userData.firstName : "" }
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Last Name</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="lastName"
                                                                        value={this.state.userData.lastName ? this.state.userData.lastName : ""}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Email</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="email"
                                                                        value={this.state.userData.email ? this.state.userData.email : ""}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Password</label>
                                                                    <div className="controls">
                                                                        <input type="password" className="form-control" name="password"
                                                                        value={this.state.userData.password ? this.state.userData.password : ""}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Date of Birth</label>
                                                                    <div className="controls">
                                                                        <input type="date" className="form-control" name="dob"
                                                                        value={this.state.userData.dob ? this.state.userData.dob.slice(0,10) : ""}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Gender</label>
                                                                    <div className="controls">
                                                                        <select className="form-control" name="gender" value={this.state.userData.gender}
                                                                        onChange={this.handleChange}>
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
                                                                        value={this.state.userData.skills ? this.state.userData.skills : ""}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">KRA</label>
                                                                    <div className="controls">
                                                                        <textarea rows="4" cols="50" className="form-controlArea" name="userKra" placeholder="Please write here..."
                                                                        value={this.state.userData.userKra ? this.state.userData.userKra : ""}
                                                                        onChange={this.handleChange}></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Status</label><br/>
                                                                    <label className="switch">
                                                                        <input type="checkbox" name="isActive"
                                                                        checked={this.state.userData.isActive ? this.state.userData.isActive : false} onChange={e => this.handleSwitchChange(e)} />
                                                                        <span className="slider round"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Departments</label>
                                                                    <div className="controls">
                                                                       {department && department.length && 
                                                                            <select className="form-control" name="departmentId" defaultValue={this.state.userData.departmentId} onChange={this.handleChange}>
                                                                                {department}
                                                                            </select>
                                                                        }
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
                                {groupingArr.map((el, i) => {
                                    return (
                                        <div className="row" key={i}>{el}</div>
                                    )
                                })}
                                <div className="theme-footer">
                                    <Link to="/users" className="btn btn-gray btn-sm">Back</Link>
                                    <button type="button" onClick={this.handleSubmit} className="btn btn-theme btn-sm float-right">Save</button>
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
    const dataById = state.CtrUser.userDataById
    const deptData = state.CtrUser.userDepartData
    const permissionData = state.CtrUser.permissionData.permisionsData
    return {
        userIdData: dataById,
        deptDatas: deptData,
        userPermission: permissionData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        userDataById: data => dispatch(actionCreator.getUsersById(data)),
        getDepartmentData: () => dispatch(actionCreator.getUserDepartment()),
        getpermissionData: () => dispatch(actionCreator.userPermissionDataAction()),
        updateUserData: (data) => dispatch(actionCreator.updateUsers(data))
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
