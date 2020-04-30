import React from "react";

const Seacrh = ({ value, handleChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        value={value}
        placeholder='search friend'
        onChange={handleChange}
      />
    </div>
  );
};

export default Seacrh;
