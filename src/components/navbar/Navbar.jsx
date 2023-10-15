
import { Link } from "react-router-dom";
import logo from "../../assets/images/cover.png";
import { useContext, useReducer, useState } from "react";
import { AuthContext } from "../../context/authContext";
 
import Search from "../search/search";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
function Navbar({ about, home, contact, services }) {
  const { user } = useContext(AuthContext);
  const [useDetailsdesplayed , desplayUserDetails ] = useState(false);
  return (

    <nav class=" px-2 sm:px-4  bg-grouna  w-full z-40 flow">
      <div class="container flex flex-wrap items-center justify-between mx-auto">

        <Link to={'/'} class="flex items-center">
          <img src={logo} alt="" className=" h-20" />
        </Link>
        <Search/>
       
     
          <div onClick={()=>{desplayUserDetails(old => !old); console.log(useDetailsdesplayed);}} className="px-3 py-2 relative cursor-pointer border-blue-500 border-2 flex items-center rounded-full text-blue-600     transition-all ">
          <FontAwesomeIcon className="text-blue-800 w-8 h-8 mr-2" icon={faUserCircle}  />
           register
           {useDetailsdesplayed ?? <div className="absolute top-0 right-0 h-20 left-0 z-50  bg-red-500 rounded-full">
           <div>hello</div>
              
            </div>}
          </div>
      
      </div>
     
    </nav>
  );
}

export default Navbar;
