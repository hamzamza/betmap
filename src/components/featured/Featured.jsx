import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { KeyboardArrowDown } from "@mui/icons-material";
function Featured() {
  const value = 0.66;
  const data = [23, 23, 23];

  return (
    <div className="col-12 col-lg-4  p-2 ">
      <div className="box-shadowed  rounded">
        <div className="top d-flex  box-shadowed  justify-content-between p-3 align-items-center">
          <h2 className="left ">Total Revenue</h2>
          <div className="right">
            <MoreVertIcon />
          </div>
        </div>
        <div className="bottom p-3  ">
          <div className="rounder p-4 mt-3  ">
            <CircularProgressbar
              value={value}
              maxValue={1}
              text={`${value * 100}%`}
            />
          </div>
          <div className="  text-uppercase fs-5 mb-3 ">
            Total sales made today
          </div>
          <p className="text-muted">
            previous transactions processing last payments may noot be included
          </p>
          <ul className="statics d-flex gap-4 justify-content-center ">
            <li className="static-item">
              <div className="title">Target</div>
              <div
                className={`pentage ${data[0] > 0 ? "positive" : "negative"}`}
              >
                {data[0] > 0 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDown />}$
                {data[0]}
              </div>
            </li>
            <li className="static-item">
              <div className="title">Last Week</div>
              <div
                className={`pentage ${data[1] > 0 ? "positive" : "negative"}`}
              >
                {data[1] > 0 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDown />}$
                {data[1]}
              </div>
            </li>
            <li className="static-item">
              <div className="title">Last Month</div>
              <div
                className={`pentage ${data[2] > 0 ? "positive" : "negative"}`}
              >
                {data[2] > 0 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDown />}$
                {data[2]}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
/// moumentec.com

export default Featured;
