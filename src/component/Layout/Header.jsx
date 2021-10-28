import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import logo from "../../images/logo.png";
export default function Header() {
  return (
    <Row>
      <Col xs={12}>
        <div style={{ paddingTop: "30px", paddingLeft: "70px" }}>
          <Link to="/">
            <img src={logo} alt="" class="logo" />
          </Link>
        </div>
      </Col>
      <Col xs={12}>
        <header style={{ paddingRight: "100px" }} class="site-header">
          <div>
            <div class="main-navigation">
              <button type="button" class="menu-toggle">
                <i class="fa fa-bars"></i>
              </button>
              <ul class="menu">
                <li class="menu-item current-menu-item">
                  <Link to="/">Home</Link>
                </li>
                <li class="menu-item">
                  <Link to="/movie/tvshow">Tv Show</Link>
                </li>
                <li class="menu-item">
                  <Link to="/movie/login">Login</Link>
                </li>
              </ul>

              {/* <form action="#" class="search-form">
                <input type="text" placeholder="Search..." />
                <button>
                  <i class="fa fa-search"></i>
                </button>
              </form> */}
            </div>

            <div class="mobile-navigation"></div>
          </div>
        </header>
      </Col>
    </Row>
  );
}
