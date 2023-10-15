import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./new.scss";
import axios from "axios";

function New({ inputs }) {
  const [file, setFile] = useState({});
  const [info, setInfo] = useState({});
  const [image, setimage] = useState(null);
  const [message, setMessage] = useState(null);
  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setInfo((old) => ({ ...old, [id]: value }));
    console.log(info);
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("file", file);

      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      const imageurl = await axios.post(
        "http://localhost:5001/api/upload/userimage",
        data,
        config
      );

      setimage(`http://localhost:5001/${imageurl.data.path}`);
      await axios.post("http://localhost:5000/api/users", {
        username: info.username,
        password: info.password,
        email: info.email,
        country: info.country,
        img: imageurl.data.path,
        city: info.city,
        phone: info.phone,
      });
      setMessage({ color: "text-success", msg: "updated Successffuly" });
    } catch (error) {
      setMessage({ color: "text-danger", msg: error.response.data.msg });
    }
  };
  return (
    <div className="container-fluid">
      <div className=" row ">
        <Sidebar />
        <div className=" col">
          <Navbar />

          <div className=" newcontainer container-fluid  p-2">
            <div className="top row p-2 justify-content-center">
              <h2 className="text-muted text-uppercase ">add new user</h2>
              <div className="col-12 col-xl-6 box-shadowed leftt row align-items-center">
                <div className="imagecontainer col-12 col-xl-4 d-flex flex-column align-items-center ">
                  <img
                    src={
                      image
                        ? image
                        : `https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg`
                    }
                    alt=""
                    className="userimage box-shadowed"
                  />
                  <p className="text-muted text-center pt-2">user image</p>
                </div>
                <div className="detailscontainer col-12 col-xl-8">
                  <form
                    action=""
                    encType="multipart/form-data"
                    className="p-2 border border-2 rounded ms-4"
                  >
                    {inputs.map((input) => (
                      <div
                        key={input.id}
                        className="formitem p-1 row gap-3 justify-content-between align-items-center "
                      >
                        <label className="col-12 col-lg-5">{input.label}</label>

                        <div className="col-12 col-lg-6">
                          {" "}
                          <input
                            className="form-control "
                            onChange={handleChange}
                            type={input.type}
                            placeholder={input.placeholder}
                            id={input.id}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="formitem p-1 d-flex gap-3 align-items-center ">
                      <label htmlFor="file">
                        Image:{" "}
                        <DriveFolderUploadOutlinedIcon className="icon" />
                      </label>
                      <input
                        type="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="form-control "
                      />
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        onClick={handleClick}
                        className="text-center w-50 mt-2 btn "
                      >
                        Send
                      </button>
                    </div>
                    {message && (
                      <div
                        className={message.color + " pt-2 fw-bold text-center"}
                      >
                        {message.msg}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
            <div className="bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default New;

/*

<div className="formitem p-1 d-flex gap-3 align-items-center ">
                      <label htmlFor="name">first name</label>
                      <input type="text" name="name" id="" />
                    </div>

                    <div className="formitem p-1 d-flex gap-3 align-items-center ">
                      <label htmlFor="name">first name</label>
                      <input type="text" name="name" id="" />
                    </div>
                    <div className="formitem p-1 d-flex gap-3 align-items-center ">
                      <label htmlFor="name">first name</label>
                      <input type="text" name="name" id="" />
                    </div>

*/
