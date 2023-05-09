import "./style.css";

import { Row, Col, Button } from "antd";

function ImageHeader({ data }) {
  return (
    <div>
      <div>
        <Row className="image-content-header">
          <Col className="gutter-row" span={15}>
            <img
              className="drawer-main-image first-image"
              src={data?.image}
              alt="montana"
            />
            <div className="capture-image-button">
              <Button className="button">View All Photos</Button>
            </div>
          </Col>
          <Col className="gutter-row side" span={9}>
            <img
              className="drawer-main-image"
              src={data?.image2}
              alt="montana"
            />
            <img
              className="drawer-main-image"
              src={data?.image3}
              alt="montana"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ImageHeader;
