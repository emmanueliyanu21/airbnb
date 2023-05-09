import "./style.css";

import { Button, Input, Checkbox } from "antd";

import { filterType, roomData } from "./../../static-data";
import TypesDetails from "./TypesDetails";

function Filter() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="filter-wrapper">
      <div className="filter-header">
        <h2>Filters</h2>
        <Button>Clear All</Button>
      </div>
      <div className="filter-content-wrapper">
        <h2>Price range</h2>
        <p>The average nightly price is $133</p>
        <div className="filter-input">
          <div>
            <p>Min Price</p>
            <Input placeholder="0" />
          </div>
          <div>
            <p>Max Price</p>
            <Input placeholder="500+" />
          </div>
        </div>
      </div>
      <div className="filter-content-wrapper">
        <h2>Type of place</h2>
        {filterType.map((item, index) => (
          <div className="filter-room-type">
            <Checkbox onChange={onChange} />
            <div>
              <h2>{item.name}</h2>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="filter-content-wrapper">
        <h2>Rooms, beds, and baths</h2>
        <div className="filter-types">
          {roomData.map((item, index) => (
            <div className="filter-room-type">
              <div>
                <p>{item.name}</p>
                <TypesDetails data={item?.item} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="filter-bottom-content">
        <Button className="filter-button">Show 835 Homes</Button>
      </div>
    </div>
  );
}

export default Filter;
