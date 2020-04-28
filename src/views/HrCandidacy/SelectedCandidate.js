import React from "react";
import { connect } from 'react-redux';
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment-timezone';

class SelectedCandidate extends React.Component {
    constructor() {
        super()
        this.state = {
            timePeriod: {}
        }
    }

    componentDidMount = () => {
        this.props.getCandidateData({outcome: "selected"});
    };

    allCandidate = () => {
        let path = `/hrCandidacy`;
        this.props.history.push(path);
    }

    pendingCandidate = () => {
        let path = `/hrCandidacy/pending`;
        this.props.history.push(path);
    }

    addEmployee = (data) => {
        this.props.candidateById({id: data, emp: "true"})
    }

    filterTimePeriod = (e) => {
        const { timePeriod } = this.state
        timePeriod[e.target.name] = e.target.value ? e.target.value : ""
        this.setState({
            timePeriod
        }, () => {
            this.props.getCandidateData({outcome: "selected", ...timePeriod})
        })
    }

    render () {
        const columns = [
            { Header: "Sr No.", id: "row",
                Cell: (row) => {
                    return <div>{row.index+1}</div>
                },
                style: {
                    textAlign: "center"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },
            { Header: () => (<div style={{textAlign: "left", marginLeft:"20px"}}>Candidate Name</div>), accessor: "candidateName",
            Cell : props =>
                <div className="client"  data-toggle="modal" data-target="#clientdetails" title="" data-original-title="View" style={{ marginLeft: "20px" }}>
                    <span className='clientName'>{props.original.candidateName}</span>
                </div>
            },
            { Header: "Email", accessor: "email",
            Cell : props =>
                <div className="client"  data-toggle="modal" data-target="#clientdetails" title="" data-original-title="View">
                    <span className='email'>{props.original.email}</span>
                </div>
            },
            { Header: "InterView Date", accessor: "interviewDate",
            Cell : props =>
                <div className="client"  data-toggle="modal" data-target="#projectdetails" title="" data-original-title="View" style={{ textAlign: "center" }}>
                    <span className='submissionTitle'>{moment(props.original.interviewDate).format("DD MMMM YYYY")}</span>
                </div>
            },
            { Header: "InterView Mode", accessor: "interviewMode",
            Cell : props =>
                <div className="client"  data-toggle="modal" data-target="#projectdetails" title="" data-original-title="View" style={{ textAlign: "center" }}>
                    <span className='submissionTitle'>{props.original.interviewMode}</span>
                </div>
            },
            { Header: "Actions",
            Cell: props =>
                <div>
                    <ul className="table-actions">
                        <span><Link to="#" className="fa fa-plus" data-toggle="modal" data-target="#viewprofile" title="Add Employee" data-original-title="View"
                        style={{ marginLeft: "20px" }} onClick={() => this.addEmployee(props.original.id)}></Link></span>
                    </ul>
                </div>,
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            }
        ]
        return (
            <div>
                <div className="page-content-inner">
                    <div className="page-header">
                        <div className="main-title"><strong>Candidate List</strong></div>
                        <ul className="page-top-actions">
                            <li><Link to="/hrCandidacy/add" className="green">Add Candidate</Link></li>
                        </ul>
                    </div>
                    <div className="theme-panel">
                        <div className="prosess-tab">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <button className="nav-link" onClick={this.allCandidate}>All</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={this.pendingCandidate}>Pending</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link active">Selected</button>
                                </li>
                            </ul>
                            <ul>
                                <div className="action-btn" style={{width: "15%", float: "right"}}>
                                    <div className="input-form">
                                        <select className="form-control" name="timePeriod" onChange={this.filterTimePeriod}>
                                            <option value="">All</option>
                                            <option value="today">Today</option>
                                            <option value="weekly">Weekly</option>
                                            <option value="monthly">Monthly</option>
                                        </select>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div className="user-bid-list">
                            <ul>
                                <li>
                                    <Link to="#" className="bidder" data-toggle="modal" data-target="#source-view" style={{display: "none"}}>
                                        <span></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="table-overflow">
                            <ReactTable 
                                columns={columns}
                                data={this.props.hrData}
                                defaultPageSize={10}>
                            </ReactTable>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const data = state.CtrlHrCandidacy.getCandidate
    const datas = state.CtrlHrCandidacy.getCandidateById
    return {
      hrData: data,
      candidateData: datas
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
      getCandidateData: (data) => dispatch(actionCreator.getHrCandidacyAction(data)),
      candidateById: data => dispatch(actionCreator.getCandidateById(data))
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(SelectedCandidate);
