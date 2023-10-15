
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";

function List({Data}) {
  return (
    <div className="container-fluid">
      <div className=" row ">
        <Sidebar />
        <div className=" col">
          <Navbar />

          <div className="list">
            <Data />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
