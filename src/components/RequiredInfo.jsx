import React from "react";
import "../styles/RequiredInfo.css";

const RequiredInfo = ({ onClick, className = "" }) => {
  return (
    <div className={`required-info ${className}`} onClick={onClick}>
      <div className="required-left">
        <img
          className="clipboard-icon"
          src={new URL("../assets/svg/clipboard.svg", import.meta.url).href}
          width={24}
          height={26}
          alt="Clipboard"
        />
        <span className="required-text">Required Information</span>
      </div>
      {/* Note icon removed from outside the box as requested */}
    </div>
  );
};

export default RequiredInfo;
