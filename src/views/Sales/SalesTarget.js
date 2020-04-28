import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";

class SalesTarget extends React.Component {
    constructor () {
        super()
        this.state = {
            timePeriod: {}
        }
    }

    componentDidMount = () => {
        this.props.salesTargetData()
    }

    filterTimePeriod = (e) => {
        const { timePeriod } = this.state
        timePeriod[e.target.name] = e.target.value ? e.target.value : ""
        this.setState({
            timePeriod
        }, () => {
            this.props.salesTargetData(timePeriod)
        })
    }

    render () {
        const targetData = this.props.salesData
        
        const employeeTarget = targetData && targetData.map(val => val.target)
        const sumEmployeeTarget = employeeTarget && employeeTarget.reduce((partial_sum, a) => partial_sum + a,0)

        const pendingTarget = targetData && targetData.map(val => val.pending)
        const sumPendingTarget = pendingTarget && pendingTarget.reduce((partial_sum, a) => partial_sum + a,0)

        const targetAchieved = targetData && targetData.map(val => val.targetAch)
        const sumTargetAchieved = targetAchieved && targetAchieved.reduce((partial_sum, a) => partial_sum + a,0)

        return (
            <div>
                <div className="page-content-inner">
                    <div className="page-header">
                        <div className="main-title"><strong>Sales target of all employees</strong></div>
                        <ul className="page-top-actions">
                            <li><Link to="/proposal" className="green">Back</Link></li>
                        </ul>
                    </div>
                    <div className="theme-panel">
                        <div className="performance-box">
                            <div className="title">
                                Sales Targets
                                <div className="action-btn">
                                    <div className="input-form">
                                        <select className="form-control" name="timePeriod" onChange={this.filterTimePeriod}>
                                            <option value="">All</option>
                                            <option value="today" style={{display: "none"}}>Today</option>
                                            <option value="weekly" style={{display: "none"}}>Weekly</option>
                                            <option value="monthly">Monthly</option>
                                            <option value="last3months">Last 3 Months</option>
                                            <option value="last6months">Last 6 Months</option>
                                            <option value="1year">Yearly</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {targetData && targetData.map(target => {
                                return (
                                    <div className="performance-details" key={target.userId}>
                                        <div className="business-user">
                                            <div className="user-collaps collapsed" data-toggle="collapse" data-target={`#${target.fullName}`} aria-expanded="false" aria-controls="collapseExample" key={target.fullName}>
                                                <div className="user-name">
                                                    <div className="user-im"></div>
                                                    <div className="name-t">{target.fullName}</div>
                                                </div>
                                                <div className="employee-progress">
                                                    <div className="title">Employee Progress</div>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{width: `${(target.targetAch * 100)/target.target}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{((target.targetAch * 100)/target.target).toFixed(0)}%</div>
                                                    </div>
                                                </div>
                                                <span>{target.EmployeeTarget}</span>
                                            </div>
                                            <div id={target.fullName} className="collapse">
                                                <div className="work-senario">
                                                    <div className="row">
                                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                                            <div className="work-target-box green">
                                                                <img src="themes/images/progress-icon1.png" alt="icon1" />
                                                                <div className="title">
                                                                    Completed
                                                                </div>
                                                                <div className="count green">
                                                                    {target.targetAch}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                                            <div className="work-target-box darkblue">
                                                                <img src="themes/images/progress-icon2.png" alt="icon2" />
                                                                <div className="title">
                                                                    Remaining
                                                                </div>
                                                                <div className="count darkblue">
                                                                    {target.pending}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                                            <div className="work-target-box purple">
                                                                <img src="themes/images/progress-icon3.png" alt="icon3" />
                                                                <div className="title">
                                                                    Total Target
                                                                </div>
                                                                <div className="count purple">
                                                                    {target.target}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to={{ pathname: `/proposal/target/${target.userId}`}} className="btn btn-theme">Graphical View</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="title">Total Sales Targets of Employee's</div>
                            <div className="work-senario">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                        <div className="work-target-box green">
                                            <img src="themes/images/progress-icon1.png" alt="icon13" />
                                            <div className="title">
                                                Total Target
                                            </div>
                                            <div className="count green">
                                                {`$${sumEmployeeTarget}`}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                        <div className="work-target-box darkblue">
                                            <img src="themes/images/progress-icon2.png" alt="icon14" />
                                            <div className="title">
                                                Remaining Target
                                            </div>
                                            <div className="count darkblue">
                                                {`$${sumPendingTarget}`}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                        <div className="work-target-box purple">
                                            <img src="themes/images/progress-icon3.png" alt="icon15" />
                                            <div className="title">
                                                Achieved Target
                                            </div>
                                            <div className="count purple">
                                                {`$${sumTargetAchieved}`}
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
    const data = state.CtrSales.getTargetData.data
    return {
        salesData: data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        salesTargetData: (data) => dispatch(actionCreator.getSalesTargetAction(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SalesTarget);
