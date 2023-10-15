import Widgets from "../../components/widgets/Widgets";
import "./home.scss";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/charts/Chart";
import TAble from "../../components/table/table";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
function Home() {
  return (
    <div className="container-fluid">
      <div className=" row ">
        <Sidebar />
        <div className=" col">
          <Navbar />
          <div className="home">
            <div className="container-fluid row p-1">
              <Widgets type={"user"} />
              <Widgets type={"order"} />
              <Widgets type={"earning"} />
              <Widgets type={"balance"} />
            </div>
            <div className="row m-3">
              <Featured />
              <Chart />
            </div>
            <TAble />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
