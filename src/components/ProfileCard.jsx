import React from "react";
import "../styles/ProfileCard.css";

const ProfileCard = ({
  designation,
  division,
  manager,
  onDesignationClick,
  onDivisionClick,
  onManagerClick,
  className = "",
}) => {
  return (
    <div className={`professional-details ${className}`}>
      <div className="profile-section designation" onClick={onDesignationClick}>
        <div className="section-label">Designation</div>
        <div className="section-value">{designation}</div>
      </div>

      <div className="profile-section division" onClick={onDivisionClick}>
        <div className="section-label">Division</div>
        <div className="section-value">{division}</div>
      </div>

      <div className="profile-section manager" onClick={onManagerClick}>
        <div className="section-label">Manager</div>
        <div className="section-value">{manager}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
