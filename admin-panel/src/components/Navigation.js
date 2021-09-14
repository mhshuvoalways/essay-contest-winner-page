import React, { Component, Fragment } from "react";
import { Navbar, NavLink, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Navigation extends Component {
  state = {
    sideNav: false,
    sideNavClass: "sidenavClose",
    mainDivOverlay: "main-overlay-close",
  };

  showHideSideNav = () => {
    if (this.state.sideNav === false) {
      this.setState({
        sideNav: true,
        sideNavClass: "sidenavOpen",
        mainDivOverlay: "main-overlay-open",
      });
    } else {
      this.setState({
        sideNav: false,
        sideNavClass: "sidenavClose",
        mainDivOverlay: "main-overlay-close",
      });
    }
  };

  render() {
    return (
      <Fragment>
        <title>{this.props.title}</title>
        <Navbar expand="lg" className="fixed-top" variant="light" bg="light">
          <Navbar.Brand
            style={{ cursor: "pointer" }}
            onClick={this.showHideSideNav}
          >
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Brand>
        </Navbar>
        <div className={this.state.sideNavClass}>
          <NavLink>
            <Link className="my-0 p-2 text-white" to="/">
              <FontAwesomeIcon icon={faHome} /> Dashboard
            </Link>
          </NavLink>
          <NavLink>
            <Link className="my-0 p-2 text-white" to="/importantdate">
              <FontAwesomeIcon icon={faHome} /> Important
            </Link>
          </NavLink>
          <NavLink>
            <Link className="my-0 p-2 text-white" to="/photogallery">
              <FontAwesomeIcon icon={faHome} /> Gallery
            </Link>
          </NavLink>
          <NavLink>
            <Link className="my-0 p-2 text-white" to="/magazines">
              <FontAwesomeIcon icon={faHome} /> Magazines
            </Link>
          </NavLink>
        </div>
        <div
          onClick={this.showHideSideNav}
          className={this.state.mainDivOverlay}
        ></div>
        <div className="customContainer">
          <Row>
            <Col>{this.props.children}</Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default Navigation;
