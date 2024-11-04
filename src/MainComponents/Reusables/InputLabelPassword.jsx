import React, { useState } from "react";
import { ReactComponent as Close } from "../../assets/close-eye.svg";

const InputLabelPassword = ({ placeholder, label, onChange, name, value }) => {
  const [reset, setReset] = useState(true);
  return (
    <div className="relative flex flex-col items-center lg:w-[50%] pt-3">
      <span className="absolute bottom-11 left-5 bg-white text-[12px]">
        {label}
      </span>
      <input
        type={reset ? "password" : "text"}
        className="w-[400px] h-[52px] border border-custom-bg gap-[3px] rounded-custom text-[12px] font-inter leading-[24px] text-customer-info px-[12px] focus:outline-none"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
      <Close
        onClick={() => setReset(!reset)}
        style={{ position: "absolute", top: 30, right: 20 }}
        className="close"
      />
    </div>
  );
};

export default InputLabelPassword;
