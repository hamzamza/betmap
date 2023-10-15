import axios from "axios";
import { useState } from "react";
import { server } from "../../Backedn";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Cancel } from "@mui/icons-material";
function NewHotel() {


  const [obj, setobj] = useState({
    name: undefined,
    title: undefined,
    type: undefined,
    address: undefined,
    city: undefined,
    desc: undefined,
  });

  const [hotelimages, setHotelimages] = useState([]);
  const [img, setImg] = useState("");

 
  const handelChange = (e) => {
    setobj((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handelsubmithotel = async () => {
    console.log({photos:hotelimages , ...obj})
     await axios.post(server + "/api/hotel/", { photos:hotelimages,...obj});
 console.log("axios wa3er");
  };
 
  const addnewimage = () => {
    if (img != "") {
      setHotelimages((old) => {
        return [img, ...old];
      });
    }
    setImg("");
  };
  const deletimg = (e) => {
    const strid = e.target.id;
    e.preventDefault();
    const newimglist = hotelimages.filter((item) => item !== strid);
    setHotelimages(newimglist);
  };
  return (
    <div className="container-fluid">
      <div className=" row ">
        <Sidebar />
        <div className=" col">
          <Navbar />

          <div className="  p-2 c ">
            <div className="userdatacontainer box-shadowed p-lg-2 p-1 position-relative">
              <div>
                <div className="form-group ">
                  {" "}
                  <label> hotelsname :</label>{" "}
                  <input
                    className="form-control"
                    id="name"
                    type={"text"}
                  
                    
                    onChange={(e) => {
                      handelChange(e);
                    }}
                  />{" "}
                </div>
                <div className="form-group ">
                  {" "}
                  <label> hotel title :</label>
                  <input
                    className="form-control"
                    id="title"
                    type={"text"}
                  
                    
                    onChange={(e) => {
                      handelChange(e);
                    }}
                  />{" "}
                </div>
                <div className="form-group ">
                  <label for="exampleFormControlSelect1">hotel type</label>
                  <select
                    class="form-control"
                    id="type"
                    onChange={(e) => {
                      handelChange(e);
                    }}
                 
                  >
                    <option value="hotel">hotel</option>
                    <option value="villa" id="villa">
                      villa
                    </option>
                    <option value="apartement" id="apartement">
                      {" "}
                      apartement
                    </option>
                    <option value="resort" id="resort">
                      resorts
                    </option>
                    <option value="cabin" id="cabin">
                      cabin
                    </option>
                  </select>
                </div>
                <div className="form-group ">
                  {" "}
                  <label> address : </label>
                  <input
                    className="form-control"
                    id="address"
                    type={"text"}
               
                    onChange={(e) => {
                      handelChange(e);
                    }}
                  />{" "}
                </div>
                <div className="form-group ">
                  {" "}
                  <label> hotel city: </label>
                  <input
                    className="form-control"
                    id="city"
                    type={"text"}
               
                    onChange={(e) => {
                      handelChange(e);
                    }}
                  />{" "}
                </div>
                <div className="form-group ">
                  {" "}
                  <label> hotel desc :</label>
                  <input
                    className="form-control"
                    id="desc"
                    type={"text"}
                 
                    onChange={(e) => {
                      handelChange(e);
                    }}
                  />{" "}
                </div>
               
                <div>
                  {hotelimages &&
                    hotelimages.map((itm) => (
                      <div>
                        {" "}
                        <a
                          class="btn btn-primary m-1 w-100"
                          href={itm}
                          target={"_blank"}
                        >
                          <div className="badge badge-light d-flex justify-content-between align-items-center gap-2">
                            {" "}
                            <div>{itm}</div>{" "}
                            <Cancel onClick={deletimg} id={itm} />{" "}
                          </div>{" "}
                        </a>{" "}
                      </div>
                    ))}
                </div>
                <div>
                  {" "}
                  <input
                    type="text"
                    placeholder="img Url"
                    className="form-control"
                    value={img}
                    onChange={(e) => {
                      setImg(e.target.value);
                    }}
                  />
                </div>
                <div className="btn btn-outline-primary" onClick={addnewimage}>
                  {" "}
                  add image
                </div>
                <button
                            onClick={handelsubmithotel}
                            className="btn btn-success m-1"
                          >
                            submit
                          </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewHotel;
