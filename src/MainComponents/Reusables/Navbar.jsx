import React from "react";
import { ReactComponent as Notice } from "./../../assets/Notice.svg";
import { ReactComponent as Prof } from "./../../assets/Prof.svg";
import { ReactComponent as Carat } from "./../../assets/Carat.svg";

const Navbar = ({ title, remove }) => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  return (
    <div className="flex flex-row justify-between w-[100%] h-[12vh] bg-gradient-to-r from-gradient-blue to-gradient-to pt-5 px-6">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <span className="text-white text-[18px]">{title}</span>
          <div className="flex flex-row items-center text-white text-[10px] gap-2">
            <span> >> </span>
            <span>{formattedDate}</span>
          </div>
        </div>
        <div className="text-white text-[12px]">
          Hi, Welcome to your {title} Overview
        </div>
      </div>
      <div className="flex flex-row gap-9">
        <span>{/* <Notice /> */}</span>
        {/* {!remove && (
          <div className="flex flex-row gap-4 pt-2">
            <Prof />
            <span className=" text-white text-[12px] text-medium pt-1">
              Paymeter Admin
            </span>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
