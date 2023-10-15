import * as freeSolidSvgIcons from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; //
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

import useFetch from "../../hooks/useFetch.js"
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/searchContext";
import { AuthContext } from "../../context/authContext";
import { Cities } from "../../assets/cities/cities.js";
import Search from "../search/search.jsx";
const NEW_SEARCH = "NEW_SEARCH";
//
function Header({ search ,cntrl }) {
  const [opendate, setOpenDate] = useState(false);
  const [openoptions, setOpenOptions] = useState(false);
 
    // auto compate section 
                              // get all morocan citys by git hub as ajson 

               const [cities , setcities ] = useState(Cities.map(item=>item.ville))          
                          
                         
                       

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
 
 
  const [destination, setDestination] = useState({});
 
  const [options, setOptions] = useState({ adults: 1, childrens: 0, rooms: 1 });
  const [danger, setDanger] = useState({
    adults: false,
    childrens: false,
    rooms: false,
  });
  const [nav, setnav] = useState("absolute -bottom-7"); // "fixed top-0"
  useEffect(() => {
    window.onscroll = function () {
     

      if (window.pageYOffset >= 604.25) {
        setnav("fixed top-0   ");
        // myNav.classList.add("nav-colored");
        //myNav.classList.remove("nav-transparent");
      } else {
        if (nav != "absolute -bottom-5") setnav("absolute -bottom-5");
        //myNav.classList.add("nav-transparent");
        // myNav.classList.remove("nav-colored");
      }
    };
  }, []);

  const handelOption = (name, operation) => {
    if ((options[name] === 0) & (operation === "d")) {
      setDanger((prev) => {
        return { ...prev, [name]: true };
      });
      setTimeout(() => {
        setDanger((prev) => {
          return { ...prev, [name]: false };
        });
      }, 500);
    }
    setOptions((pre) => {
      if ((options[name] === 0) & (operation === "d")) {
        return { ...pre };
      } else {
        return {
          ...pre,
          [name]:
            (operation === "d") & (options[name] >= 0)
              ? options[name] - 1
              : options[name] + 1,
        };
      }
    });
  };
  const { dispatch, ...others } = useContext(SearchContext);

  const navigate = useNavigate();
  const handelSearch = () => {
    if (destination.length > 0) {
      dispatch({
        type: NEW_SEARCH,
        payload: {
          city: destination,
          dates: date,
          options: options,
        },
      });
                  // best comment ever 
      // never run for a bus tran or girls when one leave anothter arrives !
      
      navigate("/hotels", { state: { destination, date, options } });
    }
  };
  const [isclikable,setIsClikable] = useState(false)
  const closeall=()=>{
    setOpenDate(false)
    setOpenOptions(false)
    setIsClikable(false)
  }
  return (<div className=" mb-6 ">
  { isclikable &&   <div className="w-full h-full absolute " onClick={closeall} >  </div>
     }
  
  <div className="handbackground  sm:pt-10 w-full text-gray-700 bg-darkBlue relative">
    
    <div className="  lg:m-0 pb-20   font-nunito ">
      <div className="  m-auto  ">
      <div
        className={!search ? "container m-auto listMode " : "headerContainer"}
      >
           <div className=" flex items-center container  rounded-3xl glass p-3 lg:p-20 lg:w-fit m-auto w-full flex-col">
      <h1 className=" lg:text-5xl text-2xl text-center uppercase w-full p-2 font-bold">
        Are you looking for a
      <span className="text-blue-500">  hotel,Apartement,
       Restorant</span>
      ...??
      </h1>
      <p className="text-lg mt-10  text-center  font-bold font-nunito ">
      Hotels with History in Morocco · La Mamounia, Marrakech · Palais Amani, Fes · Dar Ahlam, Ouazarzate · Kasbah du Toubkal, Imlit 
      </p>
      <p className="text-lg w-full p-3 text-center font-bold font-nunito ">
      don't waste your time searching  somewhere else ,
       <span className="font-bold text-lg"> they are all over here  </span>
      </p>
    </div>
        
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Header;