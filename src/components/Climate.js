import React from "react";

function Climate({ result }) {
  const { name, main } = result;
  if (!name) return null;
  const kelvin = 273.15;
  return (
    <div className="card-body   col-md-6">
      <div>
        <h2>{name} climate:</h2>
        <p  className="temperatura">
          {parseInt(main.temp_min - kelvin, 10)} <span>&#x2103;</span>
        </p>
        <p>Temperature min: {parseInt(main.temp_min - kelvin, 10)} &#x2103;</p>
        <p>Temperature max: {parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
      </div>
    </div>
  );
}

export default Climate;
