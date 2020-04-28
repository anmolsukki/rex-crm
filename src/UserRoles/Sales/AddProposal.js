import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";

class AddProposal extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            userId: localStorage.getItem('userRole'),
            profile: "",
            date: "",
            portal: "",
            clientName: "",
            countryCityState: "",
            company: "",
            email: "",
            phone: "",
            domain: "",
            submissionTitle: "",
            pitchContent: "",
            jobReqLink: "",
            proposalLink: "",
            clientPostedDateTime: "",
            projectType: "",
            TargetAchieved: "",
            proposalSubmissionDateTime: "",
            isActive: "1"
        }
    }

    handleChange = (e) => {
        this.setState ({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const proposalData = {
            userId: this.state.userId,
            profile: this.state.profile,
            date: this.state.date,
            portal: this.state.portal,
            clientName: this.state.clientName,
            countryCityState: this.state.countryCityState,
            company: this.state.company,
            email: this.state.email,
            phone: this.state.phone,
            domain: this.state.domain,
            submissionTitle: this.state.submissionTitle,
            pitchContent: this.state.pitchContent,
            jobReqLink: this.state.jobReqLink,
            proposalLink: this.state.proposalLink,
            clientPostedDateTime: this.state.clientPostedDateTime,
            projectType: this.state.projectType,
            TargetAchieved: this.state.TargetAchieved,
            proposalSubmissionDateTime: this.state.proposalSubmissionDateTime,
            isActive: this.state.userId
        }
        this.props.proposalDataSubmit(proposalData)
    }

    render () {
        return (
            <div>
                <div className="page-content-inner">
                    <div className="page-header">
                        <div className="main-title"><strong>Add Client Proposal</strong></div>
                        <ul className="page-top-actions">
                            <li><Link to="/user/proposal" className="green">Back</Link></li>
                        </ul>
                    </div>
                    <div className="theme-panel">
                        <div className="main-page-content">
                            <div className="theme-header">
                                <div className="left-side"><strong>Client Proposal</strong></div>
                            </div>
                            <div className="page-main">
                                <div className="theme-content">
                                    <div className="form-vertical">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Profile</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="profile" placeholder="Profile"
                                                        value={this.state.profile} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>	
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Date</label>
                                                    <div className="controls">
                                                        <input type="date" className="form-control" name="date"
                                                        value={this.state.date} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Source</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="portal" placeholder="Source"
                                                        value={this.state.portal} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Client Name</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="clientName" placeholder="Client Name"
                                                        value={this.state.clientName} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Country City State</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="countryCityState" placeholder="Country /City /State"
                                                        value={this.state.countryCityState} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Company</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="company" placeholder="Company"
                                                        value={this.state.company} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Email</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="email" placeholder="Email"
                                                        value={this.state.email} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Phone</label>
                                                    <div className="controls">
                                                        <input type="number" className="form-control" name="phone" placeholder="Phone"
                                                        value={this.state.phone} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Domain</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="domain" placeholder="Domain"
                                                        value={this.state.domain} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Submission Title</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="submissionTitle" placeholder="Submission Title"
                                                        value={this.state.submissionTitle} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Pitch Content</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="pitchContent" placeholder="Pitch Content"
                                                        value={this.state.pitchContent} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Job Req Link</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="jobReqLink" placeholder="Job Req Link"
                                                        value={this.state.jobReqLink} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Proposal Link</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="proposalLink" placeholder="Proposal Link"
                                                        value={this.state.proposalLink} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Client Posted Date Time</label>
                                                    <div className="controls">
                                                        <input type="date" className="form-control" name="clientPostedDateTime"
                                                        value={this.state.clientPostedDateTime} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Project Type</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="projectType" placeholder="Project Type"
                                                        value={this.state.projectType} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Target Achieved</label>
                                                    <div className="controls">
                                                        <input type="number" className="form-control" name="TargetAchieved" placeholder="Target Achieved"
                                                        value={this.state.TargetAchieved} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Proposal Submission Date Time</label>
                                                    <div className="controls">
                                                        <input type="date" className="form-control" name="proposalSubmissionDateTime" placeholder="Proposal Submission Date Time"
                                                        value={this.state.proposalSubmissionDateTime} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="theme-footer">
                                    <Link to="/user/proposal" className="btn btn-gray btn-sm">Back</Link>
                                    <button onClick={this.handleSubmit} className="btn btn-theme btn-sm float-right">Save</button>
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
        proposalDataSubmit: (data) => dispatch(actionCreator.postProposalData(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProposal);
