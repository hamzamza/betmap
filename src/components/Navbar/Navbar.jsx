import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
function Navbar() {
  /*
   */
  return (
    <div className=" col  ">
      <nav className="bg-light navbar">
        <div className="container-fluid toright">
          <form className=" notshowenonmobile" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-warning" type="submit">
              <SearchOutlinedIcon />
            </button>
          </form>

          <ul className="navitemss ">
            <li className="navitem">
              <LanguageOutlinedIcon /> english
            </li>
            <li className="navitem">
              <DarkModeOutlinedIcon />
            </li>

            <li className="navitem">
              <FullscreenExitOutlinedIcon />
            </li>
            <li className="navitem">
              <NotificationsNoneOutlinedIcon />
              <div className="msg">0</div>
            </li>
            <li className="navitem">
              <ChatBubbleOutlineOutlinedIcon />
              <div className="msg">0</div>
            </li>
            <li className="navitem">
              <ListOutlinedIcon />
            </li>
            <li className="naitem">
              <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="avatar"
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
