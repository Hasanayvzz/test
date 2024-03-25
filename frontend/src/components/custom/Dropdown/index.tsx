// DropdownItem.js
import React from "react";
import Image from "next/image";

const DropdownItem = ({ icon, text, onClick }: any) => {
  return (
    <div
      onClick={onClick}
      className="pb-3 d-flex align-items-center gap-2 cursor-pointer background-hover"
    >
      <Image src={icon} alt="" />
      <span className="userlist-info">{text}</span>
    </div>
  );
};

export default DropdownItem;
