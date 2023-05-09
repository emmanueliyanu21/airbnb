import { useState } from "react";

import { Menu, Layout } from "antd";

import { items } from '../../static-data'

import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

function SideMenu() {
const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <Sider
        className="side-bar"
        trigger={null}
        collapsible
        collapsed={collapsed}
        onClick={() => setCollapsed(!collapsed)}
      >
        <div className="logo">
          <Menu
          className="menu-item"
            mode="inline"
            defaultSelectedKeys={["/"]}
            onClick={(item) => {
              navigate(item.key);
            }}
            items={items}
          />
        </div>
      </Sider>
    </>
  );
}

export default SideMenu;
