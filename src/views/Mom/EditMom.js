import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";

class EditMom extends React.Component {
    constructor () {
        super ()
        this.state = {
            momDataById: {},
            reasonOfMeeting: {},
            medium: {},
            approved: {},
        }
    }

    componentDidMount = () => {
        this.props.momgetData({id: this.props.match.params.id})
    }

    componentWillReceiveProps = (nextProps) => {
        const data = nextProps.momData
        this.setState({
            momDataById: data.length > 0 ? data[0] : {}
        })
    }

    handleChange = (e) => {
        this.setState ({
            momDataById: {
                ...this.state.momDataById,
                [e.target.name]: e.target.value
            }
        })
    }

    mettingInfoSubmit = (e) => {
        e.preventDefault();
        const permissionId = [];
        const mediumId = [];
        const approvedId = [];

        const allpermissionsCheckboxes = document.getElementsByClassName("permissionsCheckboxes");
        const allMediumIdCheckboxes = document.getElementsByClassName("mediumCheckboxes");
        const allApprovedCheckboxes = document.getElementsByClassName("approvedCheckboxes");
        
        Array.from(allpermissionsCheckboxes).forEach(el => {
            if (el.checked) {
                permissionId.push(el.getAttribute("name"));
            }
        });

        Array.from(allMediumIdCheckboxes).forEach(el => {
            if (el.checked) {
                mediumId.push(el.getAttribute("name"));
            }
        });

        Array.from(allApprovedCheckboxes).forEach(el => {
            if (el.checked) {
                approvedId.push(el.getAttribute("name"));
            }
        });
        const data = {
            id: this.state.momDataById.guid,
            email: this.state.momDataById.email,
            reasonOfMeeting: permissionId.join(", "),
            dateOfMom: this.state.momDataById.dateOfMom,
            durationMeeting: this.state.momDataById.durationMeeting,
            initiated: this.state.momDataById.initiated,
            participants: this.state.momDataById.participants,
            clientName: this.state.momDataById.clientName,
            medium: mediumId.join(", "),
            communication: this.state.momDataById.communication,
            clientInput: this.state.momDataById.clientInput,
            development: this.state.momDataById.development,
            core: this.state.momDataById.core,
            designing: this.state.momDataById.designing,
            hr: this.state.momDataById.hr,
            approved: approvedId.join(", "),
            status: this.state.momDataById.status,
            isActive: 1
        }
        this.props.editMomData(data)
    }

    render () {
        const Momdata = this.state.momDataById.reasonOfMeeting 
        const approveddata = this.state.momDataById.approved 
        const mediumdata = this.state.momDataById.medium
        const Comm_mediumdata = this.state.momDataById.communication
        const initdata = this.state.momDataById.initiated
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
                                                value="CEO" defaultChecked={initdata && initdata.includes("CEO")} onChange={(e) => this.handleChange(e)}/>
                                                <label htmlFor="CEO">CEO</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Sumit" className="styled" name="initiated" type="radio" 
                                                value="Sumit" defaultChecked={initdata && initdata.includes("Sumit")} onChange={(e) => this.handleChange(e)}/>
                                                <label htmlFor="Sumit">Sumit</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Tarun" className="styled" name="initiated" type="radio" 
                                                value="Tarun" defaultChecked={initdata && initdata.includes("Tarun")} onChange={(e) => this.handleChange(e)}/>
                                                <label htmlFor="Tarun">Tarun</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Shubham" className="styled" name="initiated" type="radio" 
                                                value="Shubham" defaultChecked={initdata && initdata.includes("Shubham")} onChange={(e) => this.handleChange(e)}/>
                                                <label htmlFor="Shubham">Shubham</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Robin" className="styled" name="initiated" type="radio" 
                                                value="Robin" defaultChecked={initdata && initdata.includes("Robin")} onChange={(e) => this.handleChange(e)}/>
                                                <label htmlFor="Robin">Robin</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="HR" className="styled" name="initiated" type="radio" 
                                                value="HR" defaultChecked={initdata && initdata.includes("HR")} onChange={(e) => this.handleChange(e)}/>
                                                <label htmlFor="HR">HR</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Diksha" className="styled" name="initiated" type="radio" 
                                                value="Diksha" defaultChecked={initdata && initdata.includes("Diksha")} onChange={(e) => this.handleChange(e)}/>
                                                <label htmlFor="Diksha">Diksha</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Shelja" className="styled" name="initiated" type="radio" 
                                                value="Shelja" defaultChecked={initdata && initdata.includes("Shelja")} onChange={(e) => this.handleChange(e)}/>
                                                <label htmlFor="Shelja">Shelja</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Sarab" className="styled" name="initiated" type="radio" 
                                                value="Sarab" defaultChecked={initdata && initdata.includes("Sarab")} onChange={(e) => this.handleChange(e)}/>
                                                <label htmlFor="Sarab">Sarab</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Rohit" className="styled" name="initiated" type="radio" 
                                                value="Rohit" defaultChecked={initdata && initdata.includes("Rohit")} onChange={(e) => this.handleChange(e)}/>
                                                <label htmlFor="Rohit">Rohit</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Simran" className="styled" name="initiated" type="radio" 
                                                value="Simran" defaultChecked={initdata && initdata.includes("Simran")} onChange={(e) => this.handleChange(e)}/>
                                                <label htmlFor="Simran">Simran</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Other" className="styled" name="initiated" type="radio" 
                                                value="Other" defaultChecked={initdata && initdata.includes("Other")} onChange={(e) => this.handleChange(e)}/>
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
                                                    <input type="text" className="form-control" name="email"
                                                    value={this.state.momDataById.email ? this.state.momDataById.email : ""}
                                                    onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="heading-title">Participants</div>
                                                <div className="controls">
                                                    <input type="text" className="form-control" name="participants"
                                                    value={this.state.momDataById.participants ? this.state.momDataById.participants : ""}
                                                    onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="heading-title">Reason of Meeting</div>
                                                <div className="controls">
                                                    <div className="checkbox-theme">
                                                        <input id="Discussion" className="styled permissionsCheckboxes" type="checkbox" name="Project Discussion"
                                                        value="Project Discussion" defaultChecked={Momdata && Momdata.includes("Project Discussion")} />
                                                        <label htmlFor="Discussion" className="arrow-label">
                                                            <div className="radio-list-product">
                                                                <div className="product-name">Project Discussion</div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox-theme">
                                                        <input id="Call" className="styled permissionsCheckboxes" type="checkbox" name="Client Call regarding existed project"
                                                        value="Client Call regarding existed project" defaultChecked={Momdata && Momdata.includes("Client Call regarding existed project")} />
                                                        <label htmlFor="Call" className="arrow-label">
                                                            <div className="radio-list-product">
                                                                <div className="product-name">Client Call regarding existed project</div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox-theme">
                                                        <input id="newproject" className="styled permissionsCheckboxes" type="checkbox" name="Client call regarding new project"
                                                        value="Client call regarding new project" defaultChecked={Momdata && Momdata.includes("Client call regarding new project")} />
                                                        <label htmlFor="newproject" className="arrow-label">
                                                            <div className="radio-list-product">
                                                                <div className="product-name">Client call regarding new project</div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox-theme">
                                                        <input id="Internal" className="styled permissionsCheckboxes" type="checkbox" name="Internal Discussion (In-house discussion)"
                                                        value="Internal Discussion (In-house discussion)" defaultChecked={Momdata && Momdata.includes("Internal Discussion (In-house discussion)")} />
                                                        <label htmlFor="Internal" className="arrow-label">
                                                            <div className="radio-list-product">
                                                                <div className="product-name">Internal Discussion (In-house discussion)</div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox-theme">
                                                        <input id="Business" className="styled permissionsCheckboxes" type="checkbox" name="Business discussion with Management"
                                                        value="Business discussion with Management" defaultChecked={Momdata && Momdata.includes("Business discussion with Management")} />
                                                        <label htmlFor="Business" className="arrow-label">
                                                            <div className="radio-list-product">
                                                                <div className="product-name">Business discussion with Management</div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox-theme">
                                                        <input id="core" className="styled permissionsCheckboxes" type="checkbox" name="Business discussion with core team"
                                                        value="Business discussion with core team" defaultChecked={Momdata && Momdata.includes("Business discussion with core team")} />
                                                        <label htmlFor="core" className="arrow-label">
                                                            <div className="radio-list-product">
                                                                <div className="product-name">Business discussion with core team</div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox-theme">
                                                        <input id="cold" className="styled permissionsCheckboxes" type="checkbox" name="Cold calling"
                                                        value="Cold calling" defaultChecked={Momdata && Momdata.includes("Cold calling")} />
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
                                                    value={this.state.momDataById.dateOfMom ? this.state.momDataById.dateOfMom : ""}
                                                    onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="heading-title">Duration of meeting</div>
                                                <div className="controls">
                                                    <input type="time" id="timepicker" className="form-control" name="durationMeeting"
                                                    value={this.state.momDataById.durationMeeting ? this.state.momDataById.durationMeeting : ""}
                                                    onChange={this.handleChange} />
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
                                                value={this.state.momDataById.development ? this.state.momDataById.development : ""}
                                                onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="heading-title">Inputs from Core Development team</div>
                                            <div className="controls">
                                                <input type="text" className="form-control" name="core"
                                                value={this.state.momDataById.core ? this.state.momDataById.core : ""}
                                                onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="heading-title">Inputs from Core Designing team</div>
                                            <div className="controls">
                                                <input type="text" className="form-control" name="designing"
                                                value={this.state.momDataById.designing ? this.state.momDataById.designing : ""}
                                                onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="heading-title">Inputs from HR Team</div>
                                            <div className="controls">
                                                <input type="text" className="form-control" name="hr"
                                                value={this.state.momDataById.hr ? this.state.momDataById.hr : ""}
                                                onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="heading-title">Approved By</div>
                                            <div className="controls">
                                                <div className="checkbox-theme">
                                                    <input id="CEO1" className="styled approvedCheckboxes" type="checkbox" name="CEO"
                                                    defaultChecked={approveddata && approveddata.includes("CEO")} onChange={this.approvedBy} />
                                                    <label htmlFor="CEO1" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">CEO</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="Sumit1" className="styled approvedCheckboxes" type="checkbox" name="Sumit"
                                                    defaultChecked={approveddata && approveddata.includes("Sumit")} onChange={this.approvedBy} />
                                                    <label htmlFor="Sumit1" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">Sumit</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="Tarun1" className="styled approvedCheckboxes" type="checkbox" name="Tarun"
                                                    defaultChecked={approveddata && approveddata.includes("Tarun")} onChange={this.approvedBy} />
                                                    <label htmlFor="Tarun1" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">Tarun</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="Shubham1" className="styled approvedCheckboxes" type="checkbox" name="Shubham"
                                                    defaultChecked={approveddata && approveddata.includes("Shubham")} onChange={this.approvedBy} />
                                                    <label htmlFor="Shubham1" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">Shubham</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="TL" className="styled approvedCheckboxes" type="checkbox" name="Development Team(TL's)"
                                                    defaultChecked={approveddata && approveddata.includes("Development Team(TL's)")} onChange={this.approvedBy} />
                                                    <label htmlFor="TL" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">Development Team(TL's)</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="Designing" className="styled approvedCheckboxes" type="checkbox" name="Designing Team (Robin , Aashima)"
                                                    defaultChecked={approveddata && approveddata.includes("Designing Team (Robin , Aashima)")} onChange={this.approvedBy} />
                                                    <label htmlFor="Designing" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">Designing Team (Robin , Aashima)</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="Businesst" className="styled approvedCheckboxes" type="checkbox" name="Business Team ( Rahul , Sweta , Pratik)"
                                                    defaultChecked={approveddata && approveddata.includes("Business Team ( Rahul , Sweta , Pratik)")} onChange={this.approvedBy} />
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
                                                value={this.state.momDataById.clientName ? this.state.momDataById.clientName : ""}
                                                onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="heading-title">Medium</div>
                                            <div className="controls">
                                                <div className="checkbox-theme">
                                                    <input id="Upwork" className="styled mediumCheckboxes" type="checkbox" name="Upwork"
                                                    value="Upwork" defaultChecked={mediumdata && mediumdata.includes("Upwork")} />
                                                    <label htmlFor="Upwork" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">Upwork</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="Remote" className="styled mediumCheckboxes" type="checkbox" name="Remote"
                                                    defaultChecked={mediumdata && mediumdata.includes("Remote")} />
                                                    <label htmlFor="Remote" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">Remote</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="Freelancer" className="styled mediumCheckboxes" type="checkbox" name="Freelancer"
                                                    defaultChecked={mediumdata && mediumdata.includes("Freelancer")} />
                                                    <label htmlFor="Freelancer" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">Freelancer</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="PPH" className="styled mediumCheckboxes" type="checkbox" name="PPH"
                                                    defaultChecked={mediumdata && mediumdata.includes("PPH")} />
                                                    <label htmlFor="PPH" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">PPH</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="LinkedIn" className="styled mediumCheckboxes" type="checkbox" name="LinkedIn"
                                                    defaultChecked={mediumdata && mediumdata.includes("LinkedIn")} />
                                                    <label htmlFor="LinkedIn" className="arrow-label">
                                                        <div className="radio-list-product">
                                                            <div className="product-name">LinkedIn</div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-theme">
                                                    <input id="Other2" className="styled mediumCheckboxes" type="checkbox" name="Other"
                                                    defaultChecked={mediumdata && mediumdata.includes("Other")} />
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
                                                value="Skype" defaultChecked={Comm_mediumdata && Comm_mediumdata.includes("Skype")} onChange={(e) => this.handleChange(e)}/>
                                                <label htmlFor="Skype">Skype</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Direct" className="styled" type="radio" name="communication"
                                                value="Direct call" defaultChecked={Comm_mediumdata && Comm_mediumdata.includes("Direct call")} onChange={(e) => this.handleChange(e)}/>
                                                <label htmlFor="Direct">Direct Call</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Zoom" className="styled" type="radio" name="communication"
                                                value="Zoom Call" defaultChecked={Comm_mediumdata && Comm_mediumdata.includes("Zoom Call")} onChange={(e) => this.handleChange(e)}/>
                                                <label htmlFor="Zoom">Zoom Call</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Whats" className="styled" type="radio" name="communication"
                                                value="Whats app" defaultChecked={Comm_mediumdata && Comm_mediumdata.includes("Whats app")} onChange={(e) => this.handleChange(e)}/>
                                                <label htmlFor="Whats">WhatsApp</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="viewer" className="styled" type="radio" name="communication"
                                                value="Team viewer" defaultChecked={Comm_mediumdata && Comm_mediumdata.includes("Team viewer")} onChange={(e) => this.handleChange(e)}/>
                                                <label htmlFor="viewer">Team viewer</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Portal" className="styled" type="radio" name="communication"
                                                value="Portal (Upwork and others)" defaultChecked={Comm_mediumdata && Comm_mediumdata.includes("Portal (Upwork and others)")} onChange={(e) => this.handleChange(e)}/>
                                                <label htmlFor="Portal">Portal (Upwork and others)</label>
                                            </div>
                                            <div className="radio-theme">
                                                <input id="Other1" className="styled" type="radio" name="communication"
                                                value="Other" defaultChecked={Comm_mediumdata && Comm_mediumdata.includes("Other")} onChange={(e) => this.handleChange(e)}/>
                                                <label htmlFor="Other1">Other</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="heading-title">Client inputs at the time of discussion</div>
                                            <div className="controls">
                                                <input type="text" className="form-control" name="clientInput"
                                                value={this.state.momDataById.clientInput ? this.state.momDataById.clientInput : ""}
                                                onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        {/* eslint-disable-next-line */}
                                        {localStorage.getItem("roleId") == 3 ? null :
                                            <div className="col-xl-12 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label className="control-label">Status</label>
                                                    <div className="controls">
                                                        <select className="form-control" name="status" value={this.state.momDataById.status}
                                                        onChange={this.handleChange}>
                                                            <option value="Pending">Pending</option>
                                                            <option value="Approved">Approved</option>
                                                            <option value="Reject">Reject</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        }
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
    const data = state.CtrMom.getMomData
    return {
        momData: data
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        momgetData: (data) => dispatch(actionCreator.getMomData(data)),
        editMomData: (data) => dispatch(actionCreator.editMomDataAction(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMom);
