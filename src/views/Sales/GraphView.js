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
        const salesData = nextProps.salesData.data && nextProps.salesData.data.map(val => val)
        if (salesData) {
            this.setState({
                salesData: salesData.length > 0 ? salesData[0] : {}
            })
        }
    }
    
    componentDidMount = () => {
        this.props.salesTargetDataByID({ userId: this.props.match.params.id });
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
        const targetData = this.props.salesData.data
        return (
            <div>
                <div className="theme-panel">
                    <div className="performance-box">
                        <div className="page-header">
                            <div className="main-title"><strong>{this.state.salesData.EmployeeName} Performance</strong></div>
                            <ul className="page-top-actions">
                                <li><Link to="/proposal/target" className="green">Back</Link></li>
                            </ul>
                        </div>
                        <div className="title">
                            Performance Chart
                            <span><select className="form-control" name="timePeriod" onChange={this.filterTimePeriod}>
                                <option value="">All</option>
                                <option value="today" style={{display: "none"}}>Today</option>
                                <option value="weekly" style={{display: "none"}}>Weekly</option>
                                <option value="monthly">Monthly</option>
                                <option value="last3months">Last 3 Months</option>
                                <option value="last6months">Last 6 Months</option>
                                <option value="1year">Yearly</option>
                            </select></span>
                        </div>
                        {targetData && targetData.map(target => {
                            return (
                                <div className="performance-details" key={target.userId}>
                                    <Chart style={{marginLeft: "20%"}} width={'500px'}
                                        height={'300px'} chartType="PieChart"
                                        loader={<div>Loading Chart</div>}
                                        data={[
                                            ['Performance', 'Employee Performance'],
                                            ['Achieve Target', target.targetAch],
                                            ['Pending Target', target.pending],
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
                                    <div className="progress-bar" role="progressbar" style={{width: `${(this.state.salesData.targetAch * 100)/this.state.salesData.target}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{(this.state.salesData.targetAch * 100)/this.state.salesData.target}%</div>
                                </div>
                            </div>
                            <div className="work-senario">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                        <div className="work-target-box green">
                                            <img src="themes/images/progress-icon1.png" alt="icon1" />
                                            <div className="title">Completed</div>
                                            <div className="count green">{this.state.salesData.targetAch}</div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                        <div className="work-target-box darkblue">
                                            <img src="themes/images/progress-icon2.png" alt="icon2" />
                                            <div className="title">Remaining</div>
                                            <div className="count darkblue">{this.state.salesData.pending}</div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                        <div className="work-target-box purple">
                                            <img src="themes/images/progress-icon3.png" alt="icon3" />
                                            <div className="title">Total Target</div>
                                            <div className="count purple">{this.state.salesData.target}</div>
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
