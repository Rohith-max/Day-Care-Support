import React from "react";
import "../styles/UserInfo.css";
import RequiredInfo from "./RequiredInfo";

const UserInfo = ({
  name,
  genId,
  email,
  onNameClick,
  onEmailClick,
  className = "",
}) => {
  return (
    <div className={`personal-details ${className}`}>
      <div className="user-info-row">
        <div className="user-name" onClick={onNameClick}>
          {name}
        </div>
        <img 
          src={new URL("../assets/svg/profile-dot.svg", import.meta.url).href}
          alt="separator"
          className="profile-dot"
        />
        <div className="user-gen-id">Gen ID: {genId}</div>
      </div>
      <div className="user-email" onClick={onEmailClick}>
        {email}
      </div>
    </div>
  );
};

export default UserInfo;
