import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";
import "../../assets/css/Theme/Main.css";

class EditPerformance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            perfById: {}
        };
    }

    componentDidMount = () => {
        this.props.performanceById({id : this.props.match.params.id})
    };

    componentWillReceiveProps = (nextProps) => {
        const datas = nextProps.perfDataById.map(data => data)
        this.setState({
            perfById: datas.length > 0 ? datas[0] : {}
        })
    }

    handleChange = (e) => {
        this.setState ({
            perfById : {
                ...this.state.perfById,
            [e.target.name]: e.target.value
            }
        });    
    }
    
    handleSwitchChange = (e) => {
        this.setState ({
            perfById : {
                ...this.state.perfById,
                [e.target.name]: e.target.checked
            }
        });    
    }
    
    handlePerformanceSubmit = (e) => {
        e.preventDefault();
        const perfEdit = {
            id: this.state.perfById.id,
            name: this.state.perfById.name,
            percentage: this.state.perfById.percentage,
            isActive: this.state.perfById.isActive
        }
        this.props.performanceEdit(perfEdit);
    };

    render() {
        return (
            <div>
                <div className="page-content-inner">
                    <div className="page-header">
                        <div className="main-title"><strong>Edit Performance</strong></div>
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
                                                                        <input type="text" className="form-control" name="name"
                                                                        value={this.state.perfById.name ? this.state.perfById.name : ""} onChange = {(e) => this.handleChange(e)} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Percentage</label>
                                                                    <div className="controls">
                                                                        <input type="text" className="form-control" name="percentage"
                                                                        value={this.state.perfById.percentage ? this.state.perfById.percentage : ""} onChange = {(e) => this.handleChange(e)} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">isActive</label><br />
                                                                    <label className="switch">
                                                                        <input type="checkbox" name="isActive"
                                                                        checked={this.state.perfById.isActive ? this.state.perfById.isActive : ""} onChange = {(e) => this.handleSwitchChange(e)} />
                                                                        <span className="slider round"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="theme-footer">
                                                    <Link to="/performance" className="btn btn-gray btn-sm">Back</Link>
                                                    <button type="button" onClick={this.handlePerformanceSubmit} className="btn btn-theme btn-sm float-right">Save</button>
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
    const data = state.CtrPerformance.getPerforById
    return {
        perfDataById: data
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        performanceById: (data) => dispatch(actionCreator.getPerformanceById(data)),
        performanceEdit: (data) => dispatch(actionCreator.editPerformance(data))
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(EditPerformance);
