import Link from "antd/es/typography/Link";
import "./style.css";

import {
  DingtalkOutlined,
  UploadOutlined,
  HeartOutlined,
  StarFilled,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

import {
  icons,
  details,
  aboutSpace,
  testimonials,
  progress,
  location,
  host,
} from "../../static-data";

import { Row, Col, Progress, Button } from "antd";
import SideBar from "../SideBar/SideBar";
import ImageHeader from "./ImageHeader";

function ProductDrawer({ data }) {
  const productDetails = data.roomDetails;
  const productImageData = data;

  return (
    <div>
      <ImageHeader data={productImageData} />
      <Row>
        <Col className="drawer-content" span={16}>
          <div className="product-details">
            <Button className="button">
              <DingtalkOutlined className="icon" />
              Superhost
            </Button>
            <div className="product-details-header">
              <div className="product-image-caption">
                <h2>{data.name}</h2>
                <div className="product-image-icon">
                  <span>
                    <UploadOutlined />
                  </span>
                  <span>
                    <HeartOutlined />
                  </span>
                </div>
              </div>
              <p>{data.location}</p>
            </div>
            <div>
              {productDetails?.map((item, index) => (
                <div className="room-details" key={index}>
                  <div>
                    <img src={item?.guests?.icon} alt="guests" />
                    <span>{item?.guests?.name}</span>
                  </div>
                  <div>
                    <img src={item?.bedrooms?.icon} alt="guests" />
                    <span>{item?.bedrooms?.name}</span>
                  </div>
                  <div>
                    <img src={item?.beds?.icon} alt="guests" />
                    <span>{item?.beds?.name}</span>
                  </div>
                  <div>
                    <img src={item?.baths?.icon} alt="guests" />
                    <span>{item?.baths?.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="details-content">
            <Row gutter={16}>
              {details.map((detail, index) => (
                <Col key={index} className="gutter-row detail-content" span={8}>
                  <img src={detail.icon} alt="details" />
                  <h2>{detail.text}</h2>
                  <p>{detail.name}</p>
                </Col>
              ))}
            </Row>
          </div>
          <div className="about-space">
            <div className="first-about-space">
              <h2>About this space</h2>
              <p>{aboutSpace.firstText}</p>
            </div>
            <div className="second-about-space">
              <h2>The space</h2>
              <p>{aboutSpace.secondText}</p>
              <Link className="link">Read more</Link>
            </div>
          </div>
          <div className="about-space">
            <div className="first-about-space">
              <h2>What this place offers</h2>
              <Row gutter={16} className="row">
                {icons.map((icon, index) => (
                  <Col key={index} className="gutter-row airbnb-offers" span={8}>
                    <img src={icon?.icon} alt="bedroom" />
                    <span>{icon.name}</span>
                  </Col>
                ))}
              </Row>
              <Link className="link">View more</Link>
            </div>
          </div>
          <div className="progress-wrapper">
            <div className="progress-header">
              <h2>Reviews</h2>
              <p>
                <StarFilled className="icon" />
                5.0 — 124 reviews{" "}
              </p>
            </div>
            <div>
              {progress.map((item, index) => (
                <div key={index} className="progress-content">
                  <span>{item.name}</span>
                  <Progress percent={item.status} />
                </div>
              ))}
            </div>
          </div>
          <div className="testimonial-content">
            <div className="first-about-space">
              <Row gutter={16} className="row">
                {testimonials.map((testimonial, index) => (
                  <Col key={index} className="gutter-row" span={12}>
                    <div className="testimonial-wrapper">
                      <div className="testimonial-header">
                        <img src={testimonial.image} alt="testimonial" />
                        <span>
                          <p>{testimonial.name}</p>
                          <p>{testimonial.duration}</p>
                        </span>
                      </div>
                      {testimonial.text}
                    </div>
                  </Col>
                ))}
              </Row>
              <Link className="link">View more</Link>
            </div>
          </div>
          <div className="location-wrapper">
            <div className="about-space">
              <div className="first-about-space">
                <h2>{location["test-header"]}</h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.479884748594!2d3.515710598286983!3d6.587115231965936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bee135578ca87%3A0x283d5e70be7e1f59!2s2%20Yewa%20Rd%2C%20Ikorodu%20104102%2C%20Ikorodu!5e0!3m2!1sen!2sng!4v1637329478170!5m2!1sen!2sng"
                  width="100%"
                  height="450"
                  style={{ border: "0px" }}
                  // style="border:0;"
                  // allowfullscreen=""
                  loading="lazy"
                  title="myFrame"
                ></iframe>
              </div>
              <div className="first-about-space">
                <h2>{location.header}</h2>
                <p>{location.text}</p>
              </div>
              <Link className="link">View more</Link>
            </div>
          </div>
          <div className="host-wrapper">
            <div>
              <div className="first-about-space">
                <h2>{host["test-header"]}</h2>
              </div>
              <div className="first-about-space">
                <div className="host-content-header">
                  <div className="testimonial-header">
                    <img src={host.image} alt="testimonial" />
                    <span>
                      <p>{host.name}</p>
                      <p>{host.duration}</p>
                    </span>
                  </div>
                  <div className="host-button">
                    <Button className="button">{host.button}</Button>
                  </div>
                </div>
                <div className="host-detail">
                  <p>
                    <StarFilled className="host-detail-icon" />
                    {host.reviews} reviews
                  </p>
                  <p>
                    <SafetyCertificateOutlined className="host-detail-icon" />
                    {host.identity}
                  </p>
                  <p>
                    <DingtalkOutlined className="host-detail-icon" />
                    {host.detail}
                  </p>
                </div>
                <p>{host.text}</p>
              </div>
              <Link className="link">View more</Link>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <SideBar data={data} />
        </Col>
      </Row>
    </div>
  );
}

export default ProductDrawer;
