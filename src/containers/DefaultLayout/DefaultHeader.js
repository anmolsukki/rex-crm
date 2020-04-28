import React from 'react';
import { Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import "../../assets/css/containerStyle/defaultLayoutStyle/CompStyle.css";
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'

class DefaultHeader extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }} />

        <AppSidebarToggler className="d-md-down-none" display="lg" />
                
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <Link to="/" className="nav-link" >Dashboard</Link>
          </NavItem>
        </Nav>

        <Link to="/logout"><Button className="btn-logout" color="primary" style={{cursor: "pointer"}}>Log Out</Button></Link>

      </React.Fragment>
    );
  }
}

export default DefaultHeader;
