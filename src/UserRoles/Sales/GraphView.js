import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";
import Chart from "react-google-charts";

class GraphView extends React.Component {
    constructor () {
        super ()
        this.state = {
            salesData: {},
            timePeriod: {}
        }
    }

    componentWillReceiveProps = (nextProps) => {
        const salesData = nextProps.salesData.data.totalTargetAchieved.map(val => ( val[Object.keys(val)[0]]))
        if (salesData) {
            this.setState({
                salesData: salesData.length > 0 ? salesData[0] : {}
            })
        }
    }
    
    componentDidMount = () => {
        this.props.salesTargetDataByID({ userId: localStorage.getItem("userRole") });
    };

    filterTimePeriod = (e) => {
        const { timePeriod } = this.state
        timePeriod[e.target.name] = e.target.value ? e.target.value : ""
        this.setState({
            timePeriod
        }, () => {
            this.props.salesTargetDataByID({userId: this.props.match.params.id, timePeriod})
        })
    }

    render () {
        const targetData = this.props.salesData.data && this.props.salesData.data.totalTargetAchieved
        return (
            <div>
                <div className="theme-panel">
                    <div className="performance-box">
                        <div className="page-header">
                            <div className="main-title"><strong>{this.state.salesData.EmployeeName} Performance</strong></div>
                            <ul className="page-top-actions">
                                <li><Link to="/user/proposal" className="green">Back</Link></li>
                            </ul>
                        </div>
                        <div className="title">
                            Performance Chart
                            <span><select className="form-control" name="timePeriod" onChange={this.filterTimePeriod}>
                                <option value="">All</option>
                                <option value="today">Today</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                                <option value="last3months">Last 3 Months</option>
                                <option value="last6months">Last 6 Months</option>
                                <option value="1year">Yearly</option>
                            </select></span>
                        </div>
                        {targetData && targetData.map(val => {
                            let target =  val[Object.keys(val)[0]];
                            return (
                                <div className="performance-details" key={target.EmployeeName}>
                                    <Chart style={{marginLeft: "20%"}} width={'500px'}
                                        height={'300px'} chartType="PieChart"
                                        loader={<div>Loading Chart</div>}
                                        data={[
                                            ['Performance', 'Employee Performance'],
                                            ['Achieve Target', target.TargetAchieved],
                                            ['Pending Target', target.PendingTarget],
                                        ]}
                                        options={{ title: 'Employee Target Performance', is3D: true, }}
                                        rootProps={{ 'data-testid': '2' }}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="theme-panel">
                    <div className="performance-box">
                        <div className="title">Sales Targets</div>
                        <div className="performance-details">
                            <div className="employee-progress">
                                <div className="title">Employee Progress</div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: `${this.state.salesData.Percentage}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{this.state.salesData.Percentage}</div>
                                </div>
                            </div>
                            <div className="work-senario">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                        <div className="work-target-box green">
                                            <img src="themes/images/progress-icon1.png" alt="icon1" />
                                            <div className="title">Completed</div>
                                            <div className="count green">{this.state.salesData.TargetAchieved}</div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                        <div className="work-target-box darkblue">
                                            <img src="themes/images/progress-icon2.png" alt="icon2" />
                                            <div className="title">Remaining</div>
                                            <div className="count darkblue">{this.state.salesData.PendingTarget}</div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                        <div className="work-target-box purple">
                                            <img src="themes/images/progress-icon3.png" alt="icon3" />
                                            <div className="title">Total Target</div>
                                            <div className="count purple">{this.state.salesData.EmployeeTarget}</div>
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
    return {
        salesData: state.CtrSales.salesTargetDataById,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        salesTargetDataByID: (data) => dispatch(actionCreator.getSalesTargetByIdAction(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GraphView);
