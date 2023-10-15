import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./single.scss";

function User() {
  return (
    <div className="container-fluid">
      <div className=" row ">
        <Sidebar />
        <div className=" col">
          <Navbar />

          <div className="container-fluid  row  p-3  ">
            <div className="col-12 col-xl-5 p-3  ">
              <div className="userdatacontainer box-shadowed p-lg-2 p-1">
                
                <div className="edit">Edit</div>
              </div>
            </div>
            <div className="col-12 col-xl-7 p-3  ">
              <div className="container box-shadowed">riht</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
