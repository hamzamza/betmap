import "./sidebar.scss";
import GridViewIcon from "@mui/icons-material/GridView";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import logo from "./../../logo.png";
import { useEffect, useState } from "react";
import { HotelOutlined } from "@mui/icons-material";

// #f7ed85 #f7858f #f7b485
function Sidebar() {
  const [showen, setshowen] = useState(true);

  const noLink = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <div className={` ${showen && "sidbare"} col-xl-2 col-12 col-md-0`}>
      <div
        className="togglebutton btn btn-danger"
        onClick={() => setshowen((last) => !last)}
      >
        ...
      </div>

      {showen && (
        <div className={`notactive ${showen && "showen"}`}>
          <div className="top">
            <img src={logo} alt="" className="logo-img " />
            <Link to={"/"} style={noLink}>
              <div className="logo">Co_Admin</div>
            </Link>
          </div>
          <div className="center mt-1">
            <div className="side">
              <div className="side-items-header">MAIN</div>
              <div className="side-item">
                <GridViewIcon className="co-color" />
                <div>dash board</div>
              </div>
            </div>

            <div className="side">
              <div className="side-items-header">lists</div>

              <Link to="/users" style={noLink}>
                <div className="side-item">
                  <PersonOutlineIcon className="co-color" />
                  <div>visiters</div>
                </div>
              </Link>
              <Link to="/hotels" style={noLink}>
                <div className="side-item">
                  <HotelOutlined className="co-color" />
                  <div>Hotels</div>
                </div>
              </Link>
              

            </div>

            <div className="side">
              <div className="side-items-header">useful</div>
              <div className="side-item">
                <InsertChartIcon className="co-color" />
                <div>Status</div>
              </div>
              <div className="side-item">
                <NotificationsNoneIcon className="co-color" />
                <div>Status</div>
              </div>
            </div>

            <div className="side">
              <div className="side-items-header">services</div>
              <div className="side-item">
                <SettingsApplicationsIcon className="co-color" />
                <div>sysem health</div>
              </div>
              <div className="side-item">
                <SettingsApplicationsIcon className="co-color" />
                <div>logs</div>
              </div>
              <div className="side-item">
                <SettingsApplicationsIcon className="co-color" />
                <div>settings</div>
              </div>
            </div>
            <div className="side">
              <div className="side-items-header">user</div>
              <div className="side-item">
                <ExitToAppIcon className="co-color" />
                <div>profile</div>
              </div>
              <div className="side-item">
                <ExitToAppIcon className="co-color" />
                <div>logout</div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="side-items-header">modes</div>
            <div className="bottom-item">
              <div className=" carre dark"></div>
              <div className=" carre light"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
