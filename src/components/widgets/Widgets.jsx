import "./widgets.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { KeyboardArrowDown } from "@mui/icons-material";
function Widgets({ type }) {
  let data;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "View all orders",
        icon: <PersonOutlinedIcon />,

        qtete: 720,
        color: {
          color: " rgb(206, 17, 17)",
          backgroundColor: "rgba(226, 80, 80, 0.623)",
        },
        progress: 5,
      };

      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartOutlinedIcon />,
        qtete: 720,
        color: {
          color: " rgb(155, 156, 50)",
          backgroundColor: "rgba(191, 209, 30, 0.623)",
        },
        progress: 5,
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlinedIcon />,
        qtete: 720,
        color: {
          color: "  rgb(59, 150, 16)",
          backgroundColor: "rgba(101, 211, 50, 0.623)",
        },
        progress: 5,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceWalletOutlinedIcon />,
        qtete: 720,
        color: {
          color: " rgb(153, 24, 147)",
          backgroundColor: "rgba(184, 50, 211, 0.623)",
        },
        progress: -10,
      };
      break;

    default:
      break;
  }

  return (
    <div className=" widget col-lg-4 col-md-6 col-xl-3   m-0 ps-3 pt-3">
      <div className="p-3  widget-container d-flex justify-content-between">
        <div className="left">
          <div className="type mb-2">{data.title}</div>
          <div className="number mb-2 ">
            {data.isMoney ? "$ " : ""} {data.qtete}
          </div>
          <div className="order mb-2">{data.link}</div>
        </div>
        <div className="right">
          <div
            className={`poursontage  ${
              data.progress > 0 ? "positive" : "negative"
            }`}
          >
            {" "}
            {data.progress > 0 ? (
              <span>
                {" "}
                <KeyboardArrowUpIcon /> +{" "}
              </span>
            ) : (
              <span>
                {" "}
                <KeyboardArrowDown />{" "}
              </span>
            )}{" "}
            {data.progress}%
          </div>
          <div className="widget-logo" style={data.color}>
            {data.icon}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
