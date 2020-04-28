import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Redux/Actions/ActionTypes/index";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class Timelog extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            userId: localStorage.getItem('userRole')
        }
    }

    handleCheckInSubmit = () => {
        this.props.checkInData();
    };

    handleCheckOutSubmit = () => {
        const data = {
            userId: this.state.userId
        }
        this.props.checkOutData(data)
    };

    render () {
        return (
            <div>
                <ToastContainer autoClose={3000 } />
                <div className="page-content-inner timelog-bg">
                    <div className="breadcrumb-wrapper">
                        <ol className="breadcrumb">
                            <li className="active">Time Log</li>
                        </ol>
                    </div>
                    <div className="page-header"></div>
                    <div className="time-log-box">
                        <ul className="punch-btnss nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <Link to="#" className="punch nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true" onClick={this.handleCheckInSubmit}>
                                    <img src="themes/images/finger-print-in.png" alt="check-in" />
                                    <span>Check In</span>
                                </Link>
                            </li> 
                            <li className="nav-item">
                                <Link to="#" className="punch nav-link " id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false" onClick={this.handleCheckOutSubmit}>
                                    <img src="themes/images/logout.png" alt="check-out" />
                                    <span>Check Out</span>
                                </Link>
                            </li>    
                        </ul>
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
      checkInData: data => dispatch(actionCreator.addCheckIn(data)),
      checkOutData: data => dispatch(actionCreator.updateCheckout(data))
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Timelog);
