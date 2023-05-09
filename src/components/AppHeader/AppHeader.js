import { Layout, theme, Drawer } from "antd";

import { useState } from "react";

import {
  AppstoreOutlined,
  FilterOutlined,
  SwitcherOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";

import { Form } from "antd";
import DateItem from "../DateItem";
import Filter from "../Filter/Filter";

const { Header } = Layout;
function AppHeader() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [openFilter, setOpenFilter] = useState(false);
  const [size, setSize] = useState();

  const showDrawer = () => {
    setSize("small");
    setOpenFilter(true);
  };

  const close = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Header
        className="header"
        style={{
          margin: 0,
          background: colorBgContainer,
        }}
      >
        <div className="header-icon">
          <AppstoreOutlined className="app-store bk1" />
          <SwitcherOutlined className="app-store bk2" />
        </div>
        <div className="">
          <Form className="fn">
            <input
              type="text"
              className="anywhere"
              nz-input
              placeholder="Anywhere"
            />
            <DateItem />
            <span className="header-guest">
              <MinusOutlined className="guest-icon" />
              <span className="text">4 guests</span>
              <PlusOutlined className="guest-icon" />
            </span>
          </Form>
        </div>
        <div className="header-icon" onClick={() => showDrawer(!openFilter)}>
          <FilterOutlined className="app-store bk2" />
        </div>
      </Header>
      <Drawer
        rootClassName="small-drawer"
        placement="right"
        size={size}
        onClose={close}
        open={openFilter}
      >
        <Filter />
      </Drawer>
    </>
  );
}

export default AppHeader;
