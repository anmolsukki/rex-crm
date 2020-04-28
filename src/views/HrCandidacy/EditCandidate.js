import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";
import "../../assets/css/Theme/Main.css";

class EditCandidate extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            candidate: {}
        }
    }

    componentDidMount = () => {
        this.props.candidateById({id: this.props.match.params.id})
    }

    componentWillReceiveProps = (nextProps) => {
        const data = nextProps.candidateData
        this.setState({
            candidate: data.length > 0 ? data[0] : {}
        })
    }

    handleChange = (e) => {
        this.setState ({
            candidate: {
            ...this.state.candidate,
            [e.target.name]: e.target.value}
        })
    }

    handleSwitchChange = e => {
        this.setState({
            candidate: {
                ...this.state.candidate,
                [e.target.name]: e.target.checked
            }
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            id: this.state.candidate.id,
            candidateName: this.state.candidate.candidateName,
            email: this.state.candidate.email,
            dob: this.state.candidate.dob.slice(0, 10),
            skills: this.state.candidate.skills,
            department: this.state.candidate.department,
            rounds: this.state.candidate.rounds,
            experience: this.state.candidate.experience,
            currentSalary: this.state.candidate.currentSalary,
            expectedSalary: this.state.candidate.expectedSalary,
            noticePeriod: this.state.candidate.noticePeriod,
            interviewDate: this.state.candidate.interviewDate.slice(0, 10),
            interviewTime: this.state.candidate.interviewTime,
            interviewMode: this.state.candidate.interviewMode,
            status: this.state.candidate.status,
            reasonForChange: this.state.candidate.reasonForChange,
            outcome: this.state.candidate.outcome,
            isActive: this.state.candidate.isActive  === true ? 1 : 0
        };
        this.props.candidateEdit(data);
    };

    render () {
        return (
            <div>
                <div className="page-content-inner">
                    <div className="page-header">
                        <div className="main-title"><strong>Edit Candidate</strong></div>
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
                                                                        <input type="text" className="form-control" name="candidateName"
                                                                        value={this.state.candidate.candidateName ? this.state.candidate.candidateName : "" }
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Email</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="email" placeholder="Email"
                                                                        value={this.state.candidate.email ? this.state.candidate.email : "" }
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Date Of Birth</label>
                                                                    <div className="controls">
                                                                        <input type="date" className="form-control" name="dob" placeholder="Email"
                                                                        value={this.state.candidate.dob ? this.state.candidate.dob : "" }
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Skills</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="skills" placeholder="Skills"
                                                                        value={this.state.candidate.skills ? this.state.candidate.skills : "" }
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Department</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="department" placeholder="Department"
                                                                        value={this.state.candidate.department ? this.state.candidate.department : "" }
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Interview Round</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="rounds" placeholder="Interview Round"
                                                                        value={this.state.candidate.rounds ? this.state.candidate.rounds : "" }
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">InterView Date</label>
                                                                    <div className="controls">
                                                                        <input type="date" className="form-control" name="interviewDate"
                                                                        value={this.state.candidate.interviewDate ? this.state.candidate.interviewDate.slice(0, 10) : ""}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">InterView time</label>
                                                                    <div className="controls">
                                                                        <input type="time" className="form-control" name="interviewTime"
                                                                        value={this.state.candidate.interviewTime ? this.state.candidate.interviewTime : ""}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Current Salary</label>
                                                                    <div className="controls">
                                                                        <input type="number" className="form-control" name="currentSalary"
                                                                        value={this.state.candidate.currentSalary ? this.state.candidate.currentSalary : ""}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Expected Salary</label>
                                                                    <div className="controls">
                                                                        <input type="number" className="form-control" name="expectedSalary"
                                                                        value={this.state.candidate.expectedSalary ? this.state.candidate.expectedSalary : ""}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Experience</label>
                                                                    <div className="controls">
                                                                        <input type="number" className="form-control" name="experience" placeholder="Skills"
                                                                        value={this.state.candidate.experience ? this.state.candidate.experience : ""}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Notice Period</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="noticePeriod" placeholder="Skills"
                                                                        value={this.state.candidate.noticePeriod ? this.state.candidate.noticePeriod : ""}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">InterView Mode</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="interviewMode"
                                                                        value={this.state.candidate.interviewMode ? this.state.candidate.interviewMode : ""}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Outcome</label>
                                                                    <div className="controls">
                                                                        <select className="form-control" name="outcome"
                                                                        value={this.state.candidate.outcome} onChange={this.handleChange}>
                                                                            <option value="pending">Pending</option>
                                                                            <option value="selected">Selected</option>
                                                                            <option value="reject">Reject</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Status</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="status" placeholder="Notice Period"
                                                                        value={this.state.candidate.status ? this.state.candidate.status : ""}
                                                                        onChange={this.handleChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Reasion For Change</label>
                                                                    <div className="controls">
                                                                        <textarea rows="4" cols="50" className="form-controlArea" name="reasonForChange"
                                                                        value={this.state.candidate.reasonForChange ? this.state.candidate.reasonForChange : ""}
                                                                        onChange={this.handleChange}></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">isActive</label><br/>
                                                                    <label className="switch">
                                                                        <input type="checkbox" name="isActive"
                                                                        checked={this.state.candidate.isActive ? this.state.candidate.isActive: false} onChange={e => this.handleSwitchChange(e)} />
                                                                        <span className="slider round"></span>
                                                                    </label>
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

const mapStateToProps = state => {
    const data = state.CtrlHrCandidacy.getCandidateById
    return {
       candidateData: data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        candidateById: data => dispatch(actionCreator.getCandidateById(data)),
        candidateEdit: data => dispatch(actionCreator.editHrCandidacy(data))
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(EditCandidate);
