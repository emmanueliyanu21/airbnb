import "./style.css";

import { DatePicker } from "antd";

function DateItem({dateType}) {

  const onChange = () => {};

  return (
    <>
      <DatePicker
        className="date-range [dateType]" 
        onChange={onChange}
        placeholder={"June 12 - 21"}
      />
    </>
  );
}

export default DateItem;
