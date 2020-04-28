import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";
import "../../assets/css/Theme/Main.css";

class AddSubPerformance extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            parentId: ""
        };
    }

    componentDidMount = () => {
        this.props.getPerformanceData();
    }

    handleChange = (e) => {
        this.setState ({[e.target.name]: e.target.value});
    }

    handlePerformanceSubmit = (e) => {
        e.preventDefault();
        const subPerfAdd = {
            name: this.state.name,
            parentId: this.state.parentId
        }
        this.props.subPerformanceAdd(subPerfAdd);
    };

    render() {
        const selectParent = this.props.perfData.map(perf => (
            <option key={perf.id} value={perf.id}>{perf.name}</option>
        ));
        return (
            <div>
                <div className="page-content-inner">
                    <div className="page-header">
                        <div className="main-title"><strong>Add SubPerformance Matrix</strong></div>
                        <ul className="page-top-actions">
                            <li><Link to="/subPerformance" className="green">Back</Link></li>
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
                                                    <div className="heading-title">Sub Performance Details</div>
                                                    <div className="form-vertical">
                                                        <div className="row">
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Name</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="name" placeholder="Sub Performance Name"
                                                                        value={this.state.name} onChange={(e) => this.handleChange(e)} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Performance Matrix</label>
                                                                    <div className="controls">
                                                                        <select className="form-control" name="parentId" placeholder="Percentage"
                                                                        value={this.state.percentage} onChange={this.handleChange}>
                                                                            <option>Please Select</option>{selectParent}
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="theme-footer">
                                                    <Link to="/subPerformance" className="btn btn-gray btn-sm">Back</Link>
                                                    <button type="button" onClick={this.handlePerformanceSubmit} className="btn btn-theme btn-sm float-right">Add</button>
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
        )
    }
}

const mapStateToProps = state => {
    const data = state.CtrPerformance.getPerforData
    return {
        perfData: data
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        getPerformanceData: () => dispatch(actionCreator.getPerformance()),
        subPerformanceAdd: (data) => dispatch(actionCreator.addSubPerformance(data))
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(AddSubPerformance);
