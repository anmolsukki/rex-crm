import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";

class ShowCalculations extends React.Component {
    constructor () {
        super()
        this.state = {
            form: []
        }
    }

    componentDidMount = () => {
        this.props.getCalculationData();
    };

    handleChange = async e => {
        const valueAttr = e.target.value;
        const dataAttr = e.target.getAttribute("data-traitid")
        const temp = `${dataAttr},${valueAttr}|`;
        const formArr = [...this.state.form];
        formArr.push(temp);
        await this.setState({
            form: formArr
        });
    };

    handleSubmit = () => {
        const data = {
            UserResponseId: this.state.form.join(""),
            userId: localStorage.getItem('userRole'),
            isActive: 1
        };
        this.props.saveCalculationData(data);
    };

    render () {
        const evaluations = this.props.calculationData.matrixEvaluation && this.props.calculationData.matrixEvaluation.map(evals => (
            <option key={evals.id} value={evals.id}>{evals.name}</option>
        ))

        const groupingArr = [];
        const  groupsData = this.props.calculationData.grouping;
        if (groupsData) {
            for (var key in groupsData) {
                let first = (
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
                        <div className="acc-box">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="accordion-btn collapsed"  data-toggle="collapse" data-target={`#${key}`} aria-expanded="true" aria-controls={key}>
                                        <span><i className="fa fa-magic"></i></span>
                                        {key} Permissions
                                    </div>
                                    <div id={key} className="collapse" aria-labelledby={key} data-parent="#accordionExample">
                                        <div className="card-body form-vertical">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-12">
                                                    {groupsData[key].map(wethics => {
                                                        return (
                                                            <div className="form-group" key={wethics.id}>
                                                                <label className="control-label">{wethics.name}</label>
                                                                <div className="controls">
                                                                    <select type="text" className="form-control"
                                                                    data-trait={wethics.name} data-traitid={wethics.id} onChange={e => this.handleChange(e)}>
                                                                        <option>Please Select</option>{evaluations}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                groupingArr.push(first);
            }
        }

        return (
            <div>
                <div className="page-content-inner">
                    <div className="page-header">
                        <div className="main-title"><strong>List of All Calculations</strong></div>
                        <ul className="page-top-actions">
                            <li><Link to="/evaluation" className="green">Back</Link></li>
                        </ul>
                    </div>
                    <div className="theme-panel">
                        {groupingArr.map((el, i) => {
                            return (
                                <div className="row" key={i}>{el}</div>
                            )
                        })}
                        <div className="theme-footer">
                            <Link to="/evaluation" className="btn btn-gray btn-sm">Back</Link>
                            <button type="button" onClick={e => this.handleSubmit(e)} className="btn btn-theme btn-sm float-right">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const data = state.CtrCalReducer.calculationData
    return {
        calculationData: data
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        getCalculationData: data => dispatch(actionCreator.getAddCalculation(data)),
        saveCalculationData: data => dispatch(actionCreator.saveCalculation(data))
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ShowCalculations);
