import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";
import "../../assets/css/Theme/Main.css";

class AddPerformance extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            percentage: ""
        };
    }

    handleChange = (e) => {
        this.setState ({[e.target.name]: e.target.value});
    }

    handlePerformanceSubmit = (e) => {
        e.preventDefault();
        const perfAdd = {
            name: this.state.name,
            percentage: this.state.percentage
      }
      this.props.performanceAdd(perfAdd);
    };

    render() {
        return (
            <div className="page-content-inner">
                <div className="page-header">
                    <div className="main-title"><strong>Add Performance</strong></div>
                    <ul className="page-top-actions">
                        <li><Link to="/performance" className="green">Back</Link></li>
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
                                                <div className="heading-title">
                                                    Performance Details
                                                </div>
                                                <div className="form-vertical">
                                                    <div className="row">
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="form-group">
                                                                <label className="control-label">Performance Name</label>
                                                                <div className="controls">
                                                                    <input type="text" className="form-control" name="name" placeholder="Performance Name"
                                                                    value={this.state.name} onChange={(e) => this.handleChange(e)} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="form-group">
                                                                <label className="control-label">Percentage</label>
                                                                <div className="controls">
                                                                    <input type="number" className="form-control" name="percentage" placeholder="Percentage"
                                                                    value={this.state.percentage} onChange={(e) => this.handleChange(e)} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="theme-footer">
                                                <Link to="/performance" className="btn btn-gray btn-sm">Back</Link>
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
        )
    }
}

const mapStateToProps = () => {
    return {
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        performanceAdd: (data) => dispatch(actionCreator.addPerformance(data))
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(AddPerformance);
