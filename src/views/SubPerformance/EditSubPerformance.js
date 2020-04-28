import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";
import "../../assets/css/Theme/Main.css";
import "../../assets/css/Theme/Main.css";

class EditSubPerformance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subPrefById: {}
        };
    }

    componentDidMount = () => {
        this.props.subPerformanceById({id: this.props.match.params.id})
        this.props.getPerformanceData()
    }

    componentWillReceiveProps = (nextProps) => {
        const datas = nextProps.subPerformanceData
        this.setState({
            subPrefById: datas.length > 0 ? datas[0] : {}
        })
    }

    handleChange = (e) => {
        this.setState ({
            subPrefById: {
                ...this.state.subPrefById,
                [e.target.name]: e.target.value
            }
        });    
    }
    
    handleSwitchChange = (e) => {
        this.setState ({
            subPrefById: {
                ...this.state.subPrefById,
                [e.target.name]: e.target.checked
            }
        });    
    }
    
    handleSubPrefSubmit = (e) => {
        e.preventDefault();
        const subPerfEdit = {
            id: this.state.subPrefById.id,
            name: this.state.subPrefById.name,
            parentId: this.state.subPrefById.parentId,
            isActive: this.state.subPrefById.isActive
        }
        this.props.subPerformanceEdit(subPerfEdit);
    };

    render() {
        const selectPerformance = this.props.perfDatas.map(perf => (
            <option key={perf.id} value={perf.id}>{perf.name}</option>
        ));
        return (
            <div>
                <div className="page-content-inner">
                    <div className="page-header">
                        <div className="main-title"><strong>Edit Sub Performance</strong></div>
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
                                                                        <input type="text" className="form-control" name="name"
                                                                        value={this.state.subPrefById.name ? this.state.subPrefById.name : ""} onChange = {(e) => this.handleChange(e)} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Performance Matrix</label>
                                                                    <div className="controls">
                                                                        <select className="form-control" name="parentId"
                                                                        value={this.state.subPrefById.parentId ? this.state.subPrefById.parentId : ""}
                                                                        onChange={this.handleChange}>
                                                                            {selectPerformance}
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                <div className="form-group">
                                                                    <label className="control-label">Status</label><br />
                                                                    <label className="switch">
                                                                        <input type="checkbox" name="isActive"
                                                                        checked={this.state.subPrefById.isActive ? this.state.subPrefById.isActive : ""} onChange = {(e) => this.handleSwitchChange(e)} />
                                                                        <span className="slider round"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="theme-footer">
                                                    <Link to="/subPerformance" className="btn btn-gray btn-sm">Back</Link>
                                                    <button type="button" onClick={this.handleSubPrefSubmit} className="btn btn-theme btn-sm float-right">Save</button>
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
    const data = state.CtrSubPerformance.getSubPrefById
    const perf = state.CtrPerformance.getPerforData
    return {
        subPerformanceData: data,
        perfDatas: perf
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        subPerformanceById: (data) => dispatch(actionCreator.getSubPerformanceById(data)),
        getPerformanceData: () => dispatch(actionCreator.getPerformance()),
        subPerformanceEdit: (data) => dispatch(actionCreator.editSubPerformance(data))
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(EditSubPerformance);
