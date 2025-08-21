import React from "react";
import "../styles/Navbar.css";
import CalendarIcon from "../assets/svg/calender.svg";
import MarkerIcon from "../assets/svg/marker.svg";
import KeyIcon from "../assets/svg/key.svg";
import BookmarkIcon from "../assets/svg/bookmark.svg";
import AppsLogoIcon from "../assets/svg/appslogo.svg";
import LogoIcon from "../assets/svg/logo.svg";
import BellIcon from "../assets/svg/notificationbell.svg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-icon custom-menu-icon">
          <img src={LogoIcon} alt="Logo" width="32" height="32" />
        </span>
        <span className="navbar-title">Nest</span>
        <div className="navbar-tabs-group">
          <button className="navbar-tab active">My Workspace</button>
          <button className="navbar-tab">Manager Hub</button>
        </div>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-right">
        <div className="navbar-search-wrapper">
          <SearchOutlinedIcon className="navbar-search-icon" />
          <input type="text" placeholder="search" className="navbar-search" />
        </div>
        <span className="navbar-icon">
          <img src={CalendarIcon} alt="Calendar" width="22" height="20" />
        </span>
        <span className="navbar-icon">
          <img src={MarkerIcon} alt="Marker" width="24" height="24" />
        </span>
        <span className="navbar-icon">
          <img src={KeyIcon} alt="Key" width="24" height="24" />
        </span>
        <span className="navbar-icon">
          <img src={BookmarkIcon} alt="Bookmark" width="24" height="24" />
        </span>
        <span className="navbar-icon">
          <img src={AppsLogoIcon} alt="Apps" width="24" height="24" />
        </span>
        <span className="navbar-icon">
          <img src={BellIcon} alt="Notifications" width="24" height="24" />
        </span>
        <div className="navbar-user">
          <img className="navbar-avatar" src="/avatar.png" alt="avatar" />
          <div className="navbar-user-info">
            <div className="navbar-user-name">Isha Kumar</div>
            <div className="navbar-user-title">Sr. Developer</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
