import {  Layout, theme } from "antd";

import Logo from "../../../src/asset/images/Airbnb-logo.jpg";

import Avatar from "../../asset/images/avatar.png";

import { NavLink } from 'react-router-dom';

const { Header } = Layout;

function TopAppHeader() {
    const { token: { colorBgContainer }} = theme.useToken();
  return (
    <>
    <Header
        className="header top-header-wrapper"
        style={{
          margin: 0,
          background: colorBgContainer,
        }}
      >
        <div className="header-logo">
          <img src={Logo} alt="img" />
        </div>
        <div>
          <ul className="header-menu">
            <li>
              <NavLink className="nav-link active" to="/stay">Stays</NavLink>
            </li>
            <li ><NavLink className="nav-link" to="/experience">Experience</NavLink></li>
            <li ><NavLink className="nav-link" to="/online-experiencee">Online Experience</NavLink></li>
          </ul>
        </div>
        <div>
          <img className="dashboard-admin" src={Avatar} alt="" />
        </div>
      </Header>
    </>
  )
}

export default TopAppHeader