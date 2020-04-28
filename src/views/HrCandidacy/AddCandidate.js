import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";
import "../../assets/css/Theme/Main.css";

class EditCandidate extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            candidateName: "",
            email: "",
            dob: "",
            skills: "",
            department: "",
            rounds: "",
            experience: "",
            currentSalary: "",
            expectedSalary: "",
            noticePeriod: "",
            interviewDate: "",
            interviewTime: "",
            interviewMode: "",
            status: "",
            reasonForChange: "",
            isActive: 0
        }
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            candidateName: this.state.candidateName,
            email: this.state.email,
            dob: this.state.dob.slice(0, 10),
            skills: this.state.skills,
            department: this.state.department,
            rounds: this.state.rounds,
            experience: this.state.experience,
            currentSalary: this.state.currentSalary,
            expectedSalary: this.state.expectedSalary,
            noticePeriod: this.state.noticePeriod,
            interviewDate: this.state.interviewDate,
            interviewTime: this.state.interviewTime,
            interviewMode: this.state.interviewMode,
            reasonForChange: this.state.reasonForChange,
            status: this.state.status,
            isActive: this.state.isActive,
        };
        this.props.addCandidate(data);
    };

    render () {
        return (
            <div>
                <div className="page-content-inner">
                    <div className="page-header">
                        <div className="main-title"><strong>Add Candidate</strong></div>
                        <ul className="page-top-actions">
                            <li><Link to="/hrCandidacy" className="green">Back</Link></li>
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
                                                    <div className="heading-title">Candidate Details</div>
                                                    <div className="form-vertical">
                                                        <div className="row">
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Candidate Name</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="candidateName" placeholder="Candidate Name"
                                                                        value={this.state.candidateName}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Email</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="email" placeholder="Email"
                                                                        value={this.state.email}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Date Of Birth</label>
                                                                    <div className="controls">
                                                                        <input type="date" className="form-control" name="dob" placeholder="Email"
                                                                        value={this.state.dob}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Skills</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="skills" placeholder="Skills"
                                                                        value={this.state.skills}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Department</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="department" placeholder="Department"
                                                                        value={this.state.department}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Interview Round</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="rounds" placeholder="Interview Round"
                                                                        value={this.state.rounds}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">InterView Date</label>
                                                                    <div className="controls">
                                                                        <input type="date" className="form-control" name="interviewDate"
                                                                        value={this.state.interviewDate}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">InterView time</label>
                                                                    <div className="controls">
                                                                        <input type="time" className="form-control" name="interviewTime"
                                                                        value={this.state.interviewTime}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Current Salary</label>
                                                                    <div className="controls">
                                                                        <input type="number" className="form-control" name="currentSalary" placeholder="Current Salary"
                                                                        value={this.state.currentSalary}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Expected Salary</label>
                                                                    <div className="controls">
                                                                        <input type="number" className="form-control" name="expectedSalary" placeholder="Expected Salary"
                                                                        value={this.state.expectedSalary}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Experience</label>
                                                                    <div className="controls">
                                                                        <input type="number" className="form-control" name="experience" placeholder="Experience"
                                                                        value={this.state.experience}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Notice Period</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="noticePeriod" placeholder="Notice Period"
                                                                        value={this.state.noticePeriod}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Status</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="status" placeholder="Notice Period"
                                                                        value={this.state.status}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">InterView Mode</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="interviewMode" placeholder="InterView Mode"
                                                                        value={this.state.interviewMode}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Reasion For Change</label>
                                                                    <div className="controls">
                                                                        <textarea rows="4" cols="50" className="form-controlArea" name="reasonForChange" placeholder="Reasion For Change..."
                                                                        value={this.state.reasonForChange}
                                                                        onChange={this.handleChange}></textarea>
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
                                <div className="theme-footer">
                                    <Link to="/hrCandidacy" className="btn btn-gray btn-sm">Back</Link>
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

const mapStateToProps = () => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addCandidate: (data) => dispatch(actionCreator.addCandidateAction(data))
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(EditCandidate);
