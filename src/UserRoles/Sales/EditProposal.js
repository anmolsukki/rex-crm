import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";

class EditProposal extends React.Component {
    constructor() {
        super ()
        this.state = {
            editData: {}
        }
    }

    componentWillReceiveProps = (nextProps) => {
        const editedData = nextProps.salesData.data.map(data => data)
        if (editedData) {
            this.setState({
                editData: editedData.length > 0 ? editedData[0] : {}
            })
        }
    }

    componentDidMount = () => {
        this.props.proposalDataById({ id: this.props.match.params.id });
    };

    handleChange = (e) => {
        this.setState ({
            editData: {
            ...this.state.editData,
            [e.target.name]: e.target.value}
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const proposalData = {
            id:                         this.state.editData.id,
            profile:                    this.state.editData.profile,
            date:                       this.state.editData.date.slice(0,10),
            portal:                     this.state.editData.portal,
            clientName:                 this.state.editData.clientName,
            countryCityState:           this.state.editData.countryCityState,
            company:                    this.state.editData.company,
            email:                      this.state.editData.email,
            phone:                      this.state.editData.phone,
            domain:                     this.state.editData.domain,
            submissionTitle:            this.state.editData.submissionTitle,
            pitchContent:               this.state.editData.pitchContent,
            jobReqLink:                 this.state.editData.jobReqLink,
            proposalLink:               this.state.editData.proposalLink,
            clientPostedDateTime:       this.state.editData.clientPostedDateTime.slice(0,10),
            projectType:                this.state.editData.projectType,
            TargetAchieved:             this.state.editData.TargetAchieved,
            proposalSubmissionDateTime: this.state.editData.proposalSubmissionDateTime.slice(0,10),
            status:                     this.state.editData.status,
        }
        this.props.upProposalData(proposalData)
    }

    render () {
        return (
            <div>
                <div className="page-content-inner">
                    <div className="page-header">
                        <div className="main-title"><strong>Edit Client Proposal</strong></div>
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
                                                        <input type="text" className="form-control" name="profile"
                                                        value={this.state.editData.profile ? this.state.editData.profile : ""} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Date</label>
                                                    <div className="controls">
                                                        <input type="date" className="form-control" name="date"
                                                        value={this.state.editData.date ? this.state.editData.date.slice(0, 10) : ""} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Portal</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="portal"
                                                        value={this.state.editData.portal ? this.state.editData.portal : ""} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Client Name</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="clientName"
                                                        value={this.state.editData.clientName ? this.state.editData.clientName : ""} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Country City State</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="countryCityState"
                                                        value={this.state.editData.countryCityState ? this.state.editData.countryCityState : ""} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Company</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="company"
                                                        value={this.state.editData.company ? this.state.editData.company : ""} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Email</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="email"
                                                        value={this.state.editData.email ? this.state.editData.email : ""} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Phone</label>
                                                    <div className="controls">
                                                        <input type="number" className="form-control" name="phone"
                                                        value={this.state.editData.phone ? this.state.editData.phone : ""} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Domain</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="domain"
                                                        value={this.state.editData.domain ? this.state.editData.domain : ""} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Submission Title</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="submissionTitle"
                                                        value={this.state.editData.submissionTitle ? this.state.editData.submissionTitle : ""} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Pitch Content</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="pitchContent"
                                                        value={this.state.editData.pitchContent ? this.state.editData.pitchContent : ""} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Job Req Link</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="jobReqLink"
                                                        value={this.state.editData.jobReqLink ? this.state.editData.jobReqLink : ""} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Proposal Link</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="proposalLink"
                                                        value={this.state.editData.proposalLink ? this.state.editData.proposalLink : ""} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Client Posted Date Time</label>
                                                    <div className="controls">
                                                        <input type="date" className="form-control" name="clientPostedDateTime"
                                                        value={this.state.editData.clientPostedDateTime ? this.state.editData.clientPostedDateTime.slice(0,10) : ""} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Project Type</label>
                                                    <div className="controls">
                                                        <input type="text" className="form-control" name="projectType"
                                                        value={this.state.editData.projectType ? this.state.editData.projectType : ""} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Target Achieved</label>
                                                    <div className="controls">
                                                        <input type="number" className="form-control" name="TargetAchieved"
                                                        value={this.state.editData.TargetAchieved ? this.state.editData.TargetAchieved : ""} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Proposal Submission Date Time</label>
                                                    <div className="controls">
                                                        <input type="date" className="form-control" name="proposalSubmissionDateTime"
                                                        value={this.state.editData.proposalSubmissionDateTime ? this.state.editData.proposalSubmissionDateTime.slice(0,10) : ""} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Status</label>
                                                    <div className="controls">
                                                        {this.state.editData.status === "pending" ?
                                                        <select className="form-control" name="status"
                                                        onChange={this.handleChange}>
                                                            <option value="pending">Pending</option>
                                                            <option value="discussion">Discussion</option>
                                                            <option value="approved">Approved</option>
                                                            <option value="reject">Reject</option>
                                                        </select> :
                                                        this.state.editData.status === "discussion" ?
                                                        <select className="form-control" name="status" onChange={this.handleChange}>
                                                            <option value="discussion">Discussion</option>
                                                            <option value="pending">Pending</option>
                                                            <option value="approved">Approved</option>
                                                            <option value="reject">Reject</option>
                                                        </select> :
                                                        this.state.editData.status === "approved" ?
                                                        <select className="form-control" name="status" onChange={this.handleChange}>
                                                            <option value="approved">Approved</option>
                                                            <option value="pending">Pending</option>
                                                            <option value="discussion">Discussion</option>
                                                            <option value="reject">Reject</option>
                                                        </select> :
                                                        this.state.editData.status === "reject" ?
                                                        <select className="form-control" name="status" onChange={this.handleChange}>
                                                            <option value="reject">Reject</option>
                                                            <option value="pending">Pending</option>
                                                            <option value="discussion">Discussion</option>
                                                            <option value="approved">Approved</option>
                                                        </select> : null
                                                        }
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

const mapStateToProps = state => {
    return {
        salesData: state.CtrSales.getDataById.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        proposalDataById: (data) => dispatch(actionCreator.getProposalDataById(data)),
        upProposalData: (data) => dispatch(actionCreator.updateProposalData(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProposal);
