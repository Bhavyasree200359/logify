import React from "react";

function InputField({ label, type, name, value, placeholder, onChange }) {
  return (
    <div className="input-label-div">
      <label style={{
        width:"25%"
      }}>{label}</label><br />
      <input
        type={type}
        name={name}
        value={value} 
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default InputField;
