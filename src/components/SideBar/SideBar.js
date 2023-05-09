import "./style.css";

import { StarFilled, ExclamationCircleOutlined } from "@ant-design/icons";
import DateItem from "../DateItem";

import { Button, Select } from "antd";

import KathyrnLogo from "./../../asset/images/Kathryn-Airbnb-Logo.png";

function SideBar({ data }) {
  return (
    <div className="sidebar-wrapper">
      <div className="upper-sidebar-wrapper">
        <div className="sidebar-header">
          <h2>
            ${data?.price} <span>/ night</span>
          </h2>
          <p>
            <StarFilled className="icon" />
            {data?.rating}
          </p>
        </div>
        <div className="sidebar-date whiteBk">
          <div>
            <p>Check in</p>
            <DateItem  />
          </div>
          <div >
            <p>Check out</p>
            <DateItem  />
          </div>
        </div>
        <div className="sidebar-select">
          <div>
            <p>Guests</p>
            <Select
              defaultValue="1 Guests"
              size="large"
              style={{
                width: 300,
                display: "block",
              }}
              placeholder="1 Guests"
              options={[
                {
                  value: "1",
                  label: "1 guests",
                },
                {
                  value: "2",
                  label: "2 guests",
                },
              ]}
            />
          </div>
        </div>
        <div className="sidebar-details-wrapper">
          <div className="sidebar-details">
            <p>
              6 nights
              <ExclamationCircleOutlined className="icon" />
            </p>
            <span>$2,199</span>
          </div>
          <div className="sidebar-details">
            <p>
              Cleaning fee
              <ExclamationCircleOutlined className="icon" />
            </p>
            <span>$85</span>
          </div>
          <div className="sidebar-details">
            <p>
              Airbnb service fee
              <ExclamationCircleOutlined className="icon" />
            </p>
            <span>$322</span>
          </div>
        </div>
        <div>
          <div className="sidebar-total">
            <h2>Total</h2>
            <p>$2,606</p>
          </div>
          <p className="before-taxes">Before taxes</p>
          <Button className="sidebar-button">Reserve</Button>
        </div>
      </div>
      <div className="lower-sidebar-wrapper">
        <div>
          <img src={KathyrnLogo} alt="Kathyrn" />
        </div>
        <div>
          <h2>This is a rare find</h2>
          <p>Kathryn's place on Airbnb is usually fully booked.</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
