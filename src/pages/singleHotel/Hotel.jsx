import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import useFetch from "../../hooks/useFetch";
import "./single.scss";
import { server } from "../../Backedn";
import { Link, useLocation } from "react-router-dom";
import { hotelInputs } from "../../formSource";
import { useState } from "react";
import axios from "axios";
import {
  Cancel,
  DataArray,
  LockClock,
  LockClockOutlined,
  South,
} from "@mui/icons-material";
function Hotel() {
  const locate = useLocation();
  const id = locate.pathname.split("/")[2];
  const { data, loading, error, reFetch } = useFetch(
    server + `/api/hotel/select/${id}`
  );
  const room = useFetch(server + "/api/rooms/roomsbyhotel/" + id);
  const [openEdit, setopenedit] = useState(false);
  const [obj, setobj] = useState({
    name: data.name,
    title: undefined,
    type: undefined,
    address: undefined,
    city: undefined,
    desc: undefined,
  });
  const [roomobj, setroomobj] = useState({
    title: undefined,
    price: undefined,
    maxPeople: undefined,
    hotelId: undefined,
    desc: undefined,
    roomNumbers: undefined,
    //[ {number: undefined , unvailableDates : undefined} ]
  });
  const [hotelimages, setHotelimages] = useState([]);
  const [img, setImg] = useState("");
  const setvalues = () => {
    setHotelimages(data.photos);
    setobj({
      name: data.name,
      title: data.title,
      type: data.type,
      address: data.address,
      city: data.city,
      desc: data.desc,
    });
  };
  const onsubmitroom = async () => {
    await axios.post(server + "/api/rooms/" + id, rooms);

    console.log("added");
    reFetch(server + `/api/hotel/select/${id}`);
    room.reFetch(server + "/api/rooms/roomsbyhotel/" + id);
  };
  const handeldeleteroom = async (e) => {
    console.log(e.target.id);
    await axios.delete(server + "/api/rooms/" + e.target.id).then(() => {
      console.log("done");
      room.reFetch(server + "/api/rooms/roomsbyhotel/" + id);
    });
  };
  const [rooms, setrooms] = useState([]);
  const [roomopen, setromOpen] = useState(false);
  const handelChange = (e) => {
    setobj((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handelsubmithotel = async () => {
    console.log(hotelimages);
    await axios.put(server + "/api/hotel/select/" + id, obj);
    await axios.put(server + "/api/hotel/select/" + id, {
      photos: hotelimages,
    });
    console.log("updated");
    reFetch(server + `/api/hotel/select/${id}`);
  };
  const handelChangeroom = (e) => {
    setrooms((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const addnewimage = () => {
    if (img != "") {
      setHotelimages((old) => {
        return [img, ...old];
      });
    }
    setImg("")
  };
  const deletimg = (e)=>{
    const strid = e.target.id
    console.log(strid);
  
    const newimglist  = hotelimages.filter(item => item !== strid);
 setHotelimages(newimglist)
 e.preventDefault()
  }
  return (
    <div className="container-fluid">
      <div className=" row ">
        <Sidebar />
        <div className=" col">
          <Navbar />

          <div className="  p-2 c ">
            <div className="userdatacontainer box-shadowed p-lg-2 p-1 position-relative">
              <div
                className="edit z-index-2 p-2 px-3 me-2 "
                onClick={() => {
                  setopenedit((old) => !old);
                  setvalues();
                }}
              >
                Edit
              </div>
              <Link to={"/hotels/new"} className="btn btn-primary">newHotel</Link>

              <div className="">
                {!loading ? (
                  error.message ? (
                    "ERROR IN THE URL"
                  ) : (
                    <div className="p-3">
                      images :{" "}
                      {data.photos.map((itm) => (
                        <img
                          src={itm}
                          alt=""
                          width={"200px"}
                          style={{ marginInline: "1rem" }}
                        />
                      ))}
                      <div className="p-2 m-1 box-shadowed list-group ">
                        <div className="list-group-item ">
                          {" "}
                          <span className="me-3">hotelsname : </span>
                          <span>{data.name}</span>{" "}
                        </div>
                        <div className="list-group-item ">
                          {" "}
                          <span className="me-3">hotel title : </span>
                          <span>{data.title}</span>{" "}
                        </div>
                        <div className="list-group-item ">
                          {" "}
                          <span className="me-3">hoteltype : </span>
                          <span>{data.type}</span>{" "}
                        </div>
                        <div className="list-group-item ">
                          {" "}
                          <span className="me-3">address :</span>{" "}
                          <span>{data.address}</span>{" "}
                        </div>
                        <div className="list-group-item ">
                          {" "}
                          <span className="me-3">hotel city: </span>{" "}
                          <span>{data.city}</span>{" "}
                        </div>
                        <div className="list-group-item ">
                          {" "}
                          <span className="me-3"> hotel desc : </span>
                          <span>{data.desc}</span>{" "}
                        </div>
                        <div className="list-group-item ">
                          {" "}
                          <span className="me-3"> hotel rating :</span>{" "}
                          <span>{data.rating}</span>{" "}
                        </div>

                        <div className="m-1">
                          {" "}
                          <label htmlFor="" class="p-2">
                            {" "}
                            rooms
                          </label>{" "}
                          <ul class="list-group ">
                            {" "}
                            {data.rooms.length > 0
                              ? room.data.map((itm) => (
                                  <li className="list-group-item ">
                                    {itm.title}dd {itm.price}
                                  </li>
                                ))
                              : "no rooms yet"}
                          </ul>{" "}
                        </div>
                      </div>
                      {openEdit && (
                        <div className=" openEdit position-absolute  top-0 bg-white p-5 rounded box-shadowed">
                          <div>
                            <div className="form-group ">
                              {" "}
                              <label> hotelsname :</label>{" "}
                              <input
                                className="form-control"
                                id="name"
                                type={"text"}
                                placeholder={obj.name}
                                value={obj.name}
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
                                placeholder={data.title}
                                value={obj.title}
                                onChange={(e) => {
                                  handelChange(e);
                                }}
                              />{" "}
                            </div>
                            <div className="form-group ">
                              <label for="exampleFormControlSelect1">
                                hotel type
                              </label>
                              <select
                                class="form-control"
                                id="type"
                                onChange={(e) => {
                                  handelChange(e);
                                }}
                                defaultValue={obj.type}
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
                                placeholder={data.address}
                                value={obj.address}
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
                                placeholder={data.city}
                                value={obj.city}
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
                                placeholder={data.desc}
                                value={obj.desc}
                                onChange={(e) => {
                                  handelChange(e);
                                }}
                              />{" "}
                            </div>
                            <div className="form-group ">
                              {" "}
                              <label> hotel rating : </label>
                              <span>{data.rating}</span>
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
                                      <div>
                                          <Cancel  onClick={deletimg} className="bg-danger" id={itm}  />
                                        </div>
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
                            <div
                              className="btn btn-outline-primary"
                              onClick={addnewimage}
                            >
                              {" "}
                              add image
                            </div>
                            <div className="m-1">
                              {" "}
                              <ul class="list-group">
                                <li className="list-group-item active">
                                  rooms{" "}
                                </li>{" "}
                                {data.rooms.length > 0
                                  ? room.data.map((itm) => (
                                      <li
                                        className="list-group-item d-flex justify-content-between"
                                        key={itm._id}
                                      >
                                        {" "}
                                        <span> {itm.title} </span>{" "}
                                        <div className="">
                                          <button className="btn btn-outline-success me-1">
                                            Edit
                                          </button>
                                          <button
                                            className="btn btn-outline-danger"
                                            onClick={handeldeleteroom}
                                            id={itm._id}
                                          >
                                            Delet
                                          </button>
                                        </div>{" "}
                                      </li>
                                    ))
                                  : "no rooms yet"}
                              </ul>{" "}
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              setromOpen((old) => !old);
                            }}
                            className="btn btn-secondary "
                          >
                            addrooms
                          </button>
                          {roomopen && (
                            <div>
                              <div className="p-3">
                                <div className="form-group ">
                                  {" "}
                                  <span>roomtitle : </span>{" "}
                                  <input
                                    className="form-control"
                                    id="title"
                                    type={"text"}
                                    placeholder="title"
                                    onChange={(e) => {
                                      handelChangeroom(e);
                                    }}
                                  />{" "}
                                </div>
                                <div className="form-group ">
                                  {" "}
                                  <span>roomprice : </span>{" "}
                                  <input
                                    className="form-control"
                                    id="price"
                                    type={"number"}
                                    placeholder="price (dh)"
                                    onChange={(e) => {
                                      handelChangeroom(e);
                                    }}
                                  />{" "}
                                </div>
                                <div className="form-group ">
                                  {" "}
                                  <span>maxPeople : </span>{" "}
                                  <input
                                    className="form-control"
                                    id="maxPeople"
                                    type={"number"}
                                    placeholder="maxpeople"
                                    onChange={(e) => {
                                      handelChangeroom(e);
                                    }}
                                  />{" "}
                                </div>
                                <div className="form-group ">
                                  {" "}
                                  <span>roomdesc : </span>
                                  <input
                                    className="form-control"
                                    id="desc"
                                    type={"text"}
                                    placeholder="description"
                                    onChange={(e) => {
                                      handelChangeroom(e);
                                    }}
                                  />{" "}
                                </div>
                              </div>

                              <button
                                onClick={onsubmitroom}
                                className="btn btn-primary m-1"
                              >
                                {" "}
                                sub room
                              </button>
                            </div>
                          )}
                          <button
                            onClick={handelsubmithotel}
                            className="btn btn-success m-1"
                          >
                            submit
                          </button>
                        </div>
                      )}
                    </div>
                  )
                ) : (
                  "loading ...."
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
