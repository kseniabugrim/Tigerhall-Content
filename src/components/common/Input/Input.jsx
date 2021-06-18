import React from "react";
import "./Input.css";

function Input({ placeholder, value, onChange }) {
  return (
    <input
      value={value}
      onChange={onChange}
      className="search-input"
      placeholder={placeholder}
    />
  );
}

export default Input;
