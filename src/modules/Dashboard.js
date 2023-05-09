import { StarFilled, CloseCircleFilled } from "@ant-design/icons";

import { useState } from "react";

import { Row, Col, Drawer } from "antd";

import { data } from "../static-data";
import ProductDrawer from "../components/ProductDrawer/ProductDrawer";
import Spinner from "../components/Spiner";

function Dashboard() {
  const [size, setSize] = useState();
  const [open, setOpen] = useState(false);
  const [productdata, setProductdata] = useState();

  const showLargeDrawer = (id) => {
    const pData = data.find((element) => element.id === id);
    setProductdata(pData);
    setSize("large");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    {!data ? (
      <Spinner />
    ) : (
      <Row gutter={16}>
        {data.map((item, index) => (
          <Col className="gutter-row main-image" span={6} key={index}>
            <div
              onClick={() => showLargeDrawer(item.id)}
              className="content-wrapper"
              key={index}
            >
              <div className="content-image">
                <img src={item.image} alt="info" />
              </div>
              <div className="content">
                <h2 className="content-header">{item.name}</h2>
                <p className="content-location">{item.location}</p>
                <div className="content-details">
                  <span>
                    ${item.price} <span className="night">/ night</span>{" "}
                  </span>
                  <span className="content-icon">
                    <StarFilled className="content-icon-holder" />
                    {item.rating}
                  </span>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    )}
    <div>
        <Drawer
          rootClassName="large-drawer"
          placement="right"
          closable={false}
          size={size}
          open={open}
        >
          <CloseCircleFilled
            onClick={handleClose}
            className="close-large-drawer"
          />
          <ProductDrawer data={productdata} />
        </Drawer>
      </div>
    </>
  );
}

export default Dashboard;
