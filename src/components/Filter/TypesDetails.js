import React from "react";

function TypesDetails({ data }) {
  return (
    <div className="filter-type-details">
      {data.map((item, index) => (
        <span>{item}</span>
      ))}
    </div>
  );
}

export default TypesDetails;
