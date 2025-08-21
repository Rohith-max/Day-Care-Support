import React from "react";

const NotificationIcon = ({ width = 13, height = 15, className = "" }) => {
  return (
    <img
      src={new URL("../assets/svg/notification.svg", import.meta.url).href}
      width={width}
      height={height}
      className={className}
      alt="Notifications"
    />
  );
};

export default NotificationIcon;
