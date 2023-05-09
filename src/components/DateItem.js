import "./style.css";

import { DatePicker } from "antd";

function DateItem({dateType = 'whiteBk'}) {
  const onChange = () => {};

  return (
    <>
      <DatePicker
        className="date-range "
        onChange={onChange}
        placeholder={"June 12 - 21"}
      />
    </>
  );
}

export default DateItem;
