
import './App.css';
import Home from './pages/home/Home';
import { Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import HotelData from './components/dataTable/hotels/HotelsData'
import List from './pages/list/List';
import New from './pages/new/New';
import User from './pages/singleUser/User';
import UsersData from "./components/dataTable/users/UsersData"
import Protectedroute from './Protectedroute';
import { hotelInputs, userInputs } from './formSource';
import Hotel from "./pages/singleHotel/Hotel"
import NewHotel from './pages/newHotel/NewHotel';
const Error = () => {
  return <h1 style={{ fontSize: "200px" }}> Error assahbi</h1>
}


function App() {
  return (

    <Routes>
      <Route path='/' element={
        <Protectedroute>
          <Home />

        </Protectedroute>
      } />
      <Route path='/login'
        element={<Login />}
      />



      <Route path='/users'  >
        <Route index element={
          <Protectedroute>
            <List Data={UsersData}/>
          </Protectedroute>
        } />
        <Route index path=':userId'
          element={
            <Protectedroute>
              < User />
            </Protectedroute>
          } />
        <Route index path='new'
          element={
            <Protectedroute>
              < New inputs={userInputs} />
            </Protectedroute>
          }
        />
      </Route>


      <Route path='/hotels'  >
        <Route index element={<Protectedroute>
          <List Data={HotelData}/>
        </Protectedroute>} />
        <Route index path=':hotelId' element={<Protectedroute>
          < Hotel />
        </Protectedroute>} />
        <Route index path='new' element={<Protectedroute>
          < NewHotel />
        </Protectedroute>} />
      </Route>

      <Route path='/rooms'  >
        <Route index element={<Protectedroute>
          <List />
        </Protectedroute>} />
        <Route index path=':roomId' element={<Protectedroute>
          < User />
        </Protectedroute>} />
        <Route index path='new' element={<Protectedroute>
          < New inputs={userInputs} />
        </Protectedroute>} />
      </Route>

      <Route path='*' element={<Error />} />
    </Routes>

  );
}

export default App;
