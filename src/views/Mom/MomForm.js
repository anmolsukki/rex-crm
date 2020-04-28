import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";

class MomForm extends React.Component {
    constructor () {
        super ()
        this.state = {
            email: "",
            reasonOfMeeting: {},
            dateOfMom: "",
            durationMeeting: "",
            initiated: "",
            participants: "",
            clientName: "",
            medium: {},
            communication: "",
            clientInput: "",
            development: "",
            core: "",
            designing: "",
            hr: "",
            approved: {},
            status: "pending"
        }
    }

    handleChange = (e) => {
        this.setState ({[e.target.name]: e.target.value});
    }

    handleCheckboxChange = (e) => {
        const { reasonOfMeeting } = this.state;
        reasonOfMeeting[e.target.name] = e.target.checked;
        if(!reasonOfMeeting[e.target.name]) delete reasonOfMeeting[e.target.name]
        this.setState({
            reasonOfMeeting: reasonOfMeeting
        });
    }

    approvedBy = (e) => {
        const { approved } = this.state;
        approved[e.target.name] = e.target.checked;
        if(!approved[e.target.name]) delete approved[e.target.name]
        this.setState({
            approved: approved
        });
    }

    meetingMedium = (e) => {
        const { medium } = this.state;
        medium[e.target.name] = e.target.checked;
        if(!medium[e.target.name]) delete medium[e.target.name]
        this.setState({
            medium: medium
        });
    }

    mettingInfoSubmit = () => {
        const data = {
            email: this.state.email,
            reasonOfMeeting: JSON.stringify(Object.keys(this.state.reasonOfMeeting)),
            dateOfMom: this.state.dateOfMom,
            durationMeeting: this.state.durationMeeting,
            initiated: this.state.initiated,
            participants: this.state.participants,
            clientName: this.state.clientName,
            medium: JSON.stringify(Object.keys(this.state.medium)),
            communication: this.state.communication,
            clientInput: this.state.clientInput,
            development: this.state.development,
            core: this.state.core,
            designing: this.state.designing,
            hr: this.state.hr,
            approved: JSON.stringify(Object.keys(this.state.approved)),
            status: this.state.status
        }
        this.props.submitMom(data)
    }

    render () {
        return (
            <div>
                <div className="page-content-inner">
                    <div className="theme-panel page-header">
                        <div className="box-heading-panel">
                            <ul className="page-top-actions">
                                <li><Link to="/meeting" className="green">Back</Link></li>
                            </ul>
                            <div className="box-heading-title">Minutes Of Meeting Form (MOM)</div>
                            <div className="box-pera">
                                Add all the details as we will discuss at the time of meeting The name and photo associated with your Google account will be recorded when you upload files and submit this form.
                            </div>
                        </div>  
                        <div className="mom-panel">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                                    <div className="theme-content padding-l">
                                        <div className="heading-title">Initiated By</div>
                                        <div className="additonal-service single-line">
                                            <div className="radio-theme">
                                                <input id="CEO" className="styled" name="initiated" type="radio"
                                                value="CEO" checked={this.state.initiated === "CEO"} onChange={(e) => this.handleChange(e)} />
                                                <label htmlFor="CEO">CEO</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Sumit" className="styled" name="initiated" type="radio"
                                                value="Sumit" checked={this.state.initiated === "Sumit"} onChange={(e) => this.handleChange(e)} />
                                                <label htmlFor="Sumit">Sumit</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Tarun" className="styled" name="initiated" type="radio"
                                                value="Tarun" checked={this.state.initiated === "Tarun"} onChange={(e) => this.handleChange(e)} />
                                                <label htmlFor="Tarun">Tarun</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Shubham" className="styled" name="initiated" type="radio"
                                                value="Shubham" checked={this.state.initiated === "Shubham"} onChange={(e) => this.handleChange(e)} />
                                                <label htmlFor="Shubham">Shubham</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Robin" className="styled" name="initiated" type="radio"
                                                value="Robin" checked={this.state.initiated === "Robin"} onChange={(e) => this.handleChange(e)} />
                                                <label htmlFor="Robin">Robin</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="HR" className="styled" name="initiated" type="radio"
                                                value="HR" checked={this.state.initiated === "HR"} onChange={(e) => this.handleChange(e)} />
                                                <label htmlFor="HR">HR</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Diksha" className="styled" name="initiated" type="radio"
                                                value="Diksha" checked={this.state.initiated === "Diksha"} onChange={(e) => this.handleChange(e)} />
                                                <label htmlFor="Diksha">Diksha</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Shelja" className="styled" name="initiated" type="radio"
                                                value="Shelja" checked={this.state.initiated === "Shelja"} onChange={(e) => this.handleChange(e)} />
                                                <label htmlFor="Shelja">Shelja</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Sarab" className="styled" name="initiated" type="radio"
                                                value="Sarab" checked={this.state.initiated === "Sarab"} onChange={(e) => this.handleChange(e)} />
                                                <label htmlFor="Sarab">Sarab</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Rohit" className="styled" name="initiated" type="radio"
                                                value="Rohit" checked={this.state.initiated === "Rohit"} onChange={(e) => this.handleChange(e)} />
                                                <label htmlFor="Rohit">Rohit</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Simran" className="styled" name="initiated" type="radio"
                                                value="Simran" checked={this.state.initiated === "Simran"} onChange={(e) => this.handleChange(e)} />
                                                <label htmlFor="Simran">Simran</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Other" className="styled" name="initiated" type="radio"
                                                value="Other" checked={this.state.initiated === "Other"} onChange={(e) => this.handleChange(e)} />
                                                <label htmlFor="Other">Other</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                    <div className="theme-content padding-l">
                                        <div className="heading-title">Email address</div>
                                        <div className="form-vertical">
                                            <div className="form-group">
                                                <div className="controls">
                                                    <input type="text" className="form-control" name="email" placeholder="email"
                                                    value={this.state.email} onChange={(e) => this.handleChange(e)} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="heading-title">Participants</div>
                                                <div className="controls">
                                                    <input type="text" className="form-control" name="participants" placeholder="participants"
                                                    value={this.state.participants} onChange={(e) => this.handleChange(e)} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="heading-title">Reason of Meeting</div>
                                                <div className="controls">
                                                    <div className="checkbox-theme">
                                                        <input id="Discussion" className="styled" type="checkbox"
                                                        name="Project Discussion"
                                                        value={this.state.reasonOfMeeting}
                                                        // value={this.state.reasonOfMeeting.projectDiscussion}
                                                        onChange={(e) => this.handleCheckboxChange(e)} />
                                                        <label htmlFor="Discussion" className="arrow-label">
                                                            <div className="radio-list-product">
                                                                <div className="product-name">Project Discussion</div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox-theme">
                                                        <input id="Call" className="styled" type="checkbox"
                                                        name="Client Call regarding existed project"
                                                        value={this.state.reasonOfMeeting}
                                                        onChange={this.handleCheckboxChange} />
                                                        <label htmlFor="Call" className="arrow-label">
                                                            <div className="radio-list-product">
                                                                <div className="product-name">Client Call regarding existed project</div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox-theme">
                                                        <input id="newproject" className="styled" type="checkbox"
                                                        name="Client call regarding new project"
                                                        value={this.state.reasonOfMeeting}
                                                        onChange={this.handleCheckboxChange} />
                                                        <label htmlFor="newproject" className="arrow-label">
                                                            <div className="radio-list-product">
                                                                <div className="product-name">Client call regarding new project</div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox-theme">
                                                        <input id="Internal" className="styled" type="checkbox"
                                                        name="Internal Discussion (In-house discussion)"
                                                        value={this.state.reasonOfMeeting}
                                                        onChange={this.handleCheckboxChange} />
                                                        <label htmlFor="Internal" className="arrow-label">
                                                            <div className="radio-list-product">
                                                                <div className="product-name">Internal Discussion (In-house discussion)</div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox-theme">
                                                        <input id="Business" className="styled" type="checkbox"
                                                        name="Business discussion with Management"
                                                        value={this.state.reasonOfMeeting}
                                                        onChange={this.handleCheckboxChange} />
                                                        <label htmlFor="Business" className="arrow-label">
                                                            <div className="radio-list-product">
                                                                <div className="product-name">Business discussion with Management</div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox-theme">
                                                        <input id="core" className="styled" type="checkbox"
                                                        name="Business discussion with core team"
                                                        value={this.state.reasonOfMeeting}
                                                        onChange={this.handleCheckboxChange} />
                                                        <label htmlFor="core" className="arrow-label">
                                                            <div className="radio-list-product">
                                                                <div className="product-name">Business discussion with core team</div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox-theme">
                                                        <input id="cold" className="styled" type="checkbox"
                                                        name="Cold calling"
                                                        value={this.state.reasonOfMeeting}
                                                        onChange={this.handleCheckboxChange} />
                                                        <label htmlFor="cold" className="arrow-label">
                                                            <div className="radio-list-product">
                                                                <div className="product-name">Cold calling</div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="heading-title">Date of MOM</div>
                                                <div className="controls">
                                                    <input type="date" className="form-control" name="dateOfMom"
                                                    value={this.state.dateOfMom} onChange={(e) => this.handleChange(e)} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="heading-title">Duration of meeting</div>
                                                <div className="controls">
                                                    <input type="time" id="timepicker" className="form-control" name="durationMeeting"
                                                    value={this.state.durationMeeting} onChange={(e) => this.handleChange(e)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="theme-content padding-l">
                                        <div className="heading-title-big">RexWeb team-centric:</div>
                                        <div className="Sub-heading-title-big">Share the inputs as we will discuss with client</div>
                                        <div className="form-group">
                                            <div className="heading-title">Inputs from Business Development team</div>
                                            <div className="controls">
                                                <input type="text" className="form-control" name="development"
                                                value={this.state.development} onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="heading-title">Inputs from Core Development team</div>
                                            <div className="controls">
                                                <input type="text" className="form-control" name="core"
                                                value={this.state.core} onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="heading-title">Inputs from Core Designing team</div>
                                            <div className="controls">
                                                <input type="text" className="form-control" name="designing"
                                                value={this.state.designing} onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="heading-title">Inputs from HR team</div>
                                            <div className="controls">
                                                <input type="text" className="form-control" name="hr"
                                                value={this.state.hr} onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="heading-title">Approved By</div>
                                            <div className="controls">
                                                <div className="checkbox-theme">
                                                    <input id="CEO1" className="styled" type="checkbox"
                                                    name="CEO"
                                                    value={this.state.approved}
                                                    onChange={this.approvedBy} />
                                                    <label htmlFor="CEO1" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">CEO</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="Sumit1" className="styled" type="checkbox"
                                                    name="Sumit"
                                                    value={this.state.approved}
                                                    onChange={this.approvedBy} />
                                                    <label htmlFor="Sumit1" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">Sumit</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="Tarun1" className="styled" type="checkbox"
                                                    name="Tarun"
                                                    value={this.state.approved}
                                                    onChange={this.approvedBy} />
                                                    <label htmlFor="Tarun1" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">Tarun</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="Shubham1" className="styled" type="checkbox"
                                                    name="Shubham"
                                                    value={this.state.approved}
                                                    onChange={this.approvedBy} />
                                                    <label htmlFor="Shubham1" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">Shubham</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="TL" className="styled" type="checkbox"
                                                    name="Development Team(TL's)"
                                                    value={this.state.approved}
                                                    onChange={this.approvedBy} />
                                                    <label htmlFor="TL" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">Development Team(TL's)</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="Designing" className="styled" type="checkbox"
                                                    name="Designing Team (Robin , Aashima)"
                                                    value={this.state.approved}
                                                    onChange={this.approvedBy} />
                                                    <label htmlFor="Designing" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">Designing Team (Robin , Aashima)</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="Businesst" className="styled" type="checkbox"
                                                    name="Business Team ( Rahul , Sweta , Pratik)"
                                                    value={this.state.approved}
                                                    onChange={this.approvedBy} />
                                                    <label htmlFor="Businesst" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">Business Team ( Rahul , Sweta , Pratik)</div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                    <div className="theme-content padding-l">
                                        <div className="heading-title-big">Client-Centric information:</div>
                                        <div className="Sub-heading-title-big">Add the details related client prospective</div>
                                        <div className="form-group">
                                            <div className="heading-title">Client name and Region/Zone (Country /State city)</div>
                                            <div className="controls">
                                                <input type="text" className="form-control" name="clientName"
                                                value={this.state.clientName} onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="heading-title">Medium</div>
                                            <div className="controls">
                                                <div className="checkbox-theme">
                                                    <input id="Upwork" className="styled" type="checkbox"
                                                    name="Upwork"
                                                    value={this.state.approved}
                                                    onChange={this.meetingMedium} />
                                                    <label htmlFor="Upwork" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">Upwork</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="Remote" className="styled" type="checkbox"
                                                    name="Remote"
                                                    value={this.state.approved}
                                                    onChange={this.meetingMedium} />
                                                    <label htmlFor="Remote" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">Remote</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="Freelancer" className="styled" type="checkbox"
                                                    name="Freelancer"
                                                    value={this.state.approved}
                                                    onChange={this.meetingMedium} />
                                                    <label htmlFor="Freelancer" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">Freelancer</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="PPH" className="styled" type="checkbox"
                                                    name="PPH"
                                                    value={this.state.approved}
                                                    onChange={this.meetingMedium} />
                                                    <label htmlFor="PPH" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">PPH</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="LinkedIn" className="styled" type="checkbox"
                                                    name="LinkedIn"
                                                    value={this.state.approved}
                                                    onChange={this.meetingMedium} />
                                                    <label htmlFor="LinkedIn" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">LinkedIn</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="Other2" className="styled" type="checkbox"
                                                    name="Other"
                                                    value={this.state.approved}
                                                    onChange={this.meetingMedium} />
                                                    <label htmlFor="Other2" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">Other</div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="additonal-service single-line">
                                            <div className="heading-title">Communication Medium</div>
                                            <div className="radio-theme">
                                                <input id="Skype" className="styled" type="radio" name="communication"
                                                value="Skype" checked={this.state.communication === "Skype"} onChange={(e) => this.handleChange(e)} />
                                                <label htmlFor="Skype">Skype</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Direct" className="styled" type="radio" name="communication"
                                                value="Direct call" checked={this.state.communication === "Direct call"} onChange={(e) => this.handleChange(e)} />
                                                <label htmlFor="Direct">Direct call</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Zoom" className="styled" type="radio" name="communication"
                                                value="Zoom Call" checked={this.state.communication === "Zoom Call"} onChange={(e) => this.handleChange(e)} />
                                                <label htmlFor="Zoom">Zoom Call</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Whats" className="styled" type="radio" name="communication"
                                                value="Whats app" checked={this.state.communication === "Whats app"} onChange={(e) => this.handleChange(e)} />
                                                <label htmlFor="Whats">Whats app</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="viewer" className="styled" type="radio" name="communication"
                                                value="Team viewer" checked={this.state.communication === "Team viewer"} onChange={(e) => this.handleChange(e)} />
                                                <label htmlFor="viewer">Team viewer</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Portal" className="styled" type="radio" name="communication"
                                                value="Portal (Upwork and others)" checked={this.state.communication === "Portal (Upwork and others)"} onChange={(e) => this.handleChange(e)} />
                                                <label htmlFor="Portal">Portal (Upwork and others)</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Other1" className="styled" type="radio" name="communication"
                                                value="Other" checked={this.state.communication === "Other"} onChange={(e) => this.handleChange(e)} />
                                                <label htmlFor="Other1">Other</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="heading-title">Client inputs at the time of discussion</div>
                                            <div className="controls">
                                                <input type="text" className="form-control" name="clientInput"
                                                value={this.state.clientInput} onChange={(e) => this.handleChange(e)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="theme-footer padding-l">
                            <Link to="/meeting" className="btn btn-gray btn-sm">Back</Link>
                            <button className="btn btn-theme btn-sm" onClick={this.mettingInfoSubmit}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        momData: state.CtrMom
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        submitMom: (data) => dispatch(actionCreator.submitMomData(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MomForm);
