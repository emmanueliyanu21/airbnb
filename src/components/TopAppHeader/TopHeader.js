import {  Layout, theme } from "antd";

import Logo from "../../../src/asset/images/Airbnb-logo.jpg";

import Avatar from "../../asset/images/avatar.png";

const { Header } = Layout;

function TopAppHeader() {
    const { token: { colorBgContainer }} = theme.useToken();
  return (
    <>
    <Header
        className="header"
        style={{
          margin: 0,
          background: colorBgContainer,
        }}
      >
        <div className="header-logo">
          <img src={Logo} alt="img" />
        </div>
        <div>
          <ul  className="header-menu">
            <li nz-menu-item nzSelected>
              Stays
            </li>
            <li >Experience</li>
            <li >Online Experience</li>
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