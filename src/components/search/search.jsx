import { useEffect, useState, useContext } from "react";
import { DateRange } from "react-date-range";
import { SearchContext } from "../../context/searchContext";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as freeSolidSvgIcons from "@fortawesome/free-solid-svg-icons";
import { Autocomplete, TextField } from '@mui/material';
import { Cities } from "../../assets/cities/cities";
import { NEW_SEARCH } from "../../context/searchContext";
import { useNavigate } from "react-router-dom";

function Search() {
    const [opendate, setOpenDate] = useState(false);
    const [openoptions, setOpenOptions] = useState(false);

    // auto compate section 
    // get all morocan citys by git hub as ajson 

    const [cities, setcities] = useState(Cities.map(item => item.ville))




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
    const [isclikable, setIsClikable] = useState(false)
    const closeall = () => {
        setOpenDate(false)
        setOpenOptions(false)
        setIsClikable(false)
    }

    return (<div className=" s-100 ">


        <div className={"w-full   top-2   "}>
            <div className=" grid text-blue-500 grid-cols-7  lg:w-fit m-auto  bg-gray-100 shadow-md rounded-xl ">
                <div className=" flex col-span-6 lg:col-span-2 p-1   hover:bg-gray-200 rounded-xl">
                    <FontAwesomeIcon
                        className="w-8 h-8 m-3"
                        icon={freeSolidSvgIcons.faBed}
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={cities}
                        className="w-full"
                        renderInput={(params) => <TextField {...params} label="where do you want ??" />}
                        value={this}
                        onChange={(e, v) => {
                            setDestination(v)
                        }}
                    />
                    {/* :
          <input
            onChange={(e) => {
              setDestination(e.target.value);
            }}
            type="text"
            className="bg-gray-50 border  border-blue-400  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 font-bold dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Where are you going ? ...."
          />}*/}
                </div>
                <div className="  col-span-2  hidden lg:block relative hover:bg-gray-200 hover:rounded-md">
                    <div
                        className="w-full h-full p-3 gap-1   flex justify-center items-center cursor-pointer"
                        onClick={() => {
                            setOpenDate((old) => !old);
                            setOpenOptions(false)

                            setIsClikable(true)
                        }}
                    >
                        {" "}
                        <FontAwesomeIcon icon={freeSolidSvgIcons.faCalendarDays} />
                        <span className="">
                            {format(date[0].startDate, "MM/dd/yyyy")} to{" "}
                            {format(date[0].endDate, "MM/dd/yyyy")}
                        </span>
                    </div>
                    {opendate && (
                        <div className=" absolute top-30 w-full ">
                            <div className="relative m-auto w-fit ">
                                <div>
                                    <DateRange
                                        className=""
                                        editableDateInputs={true}
                                        onChange={(item) => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="  col-span-2 hover:bg-gray-200 hidden lg:block hover:rounded-md relative">
                    <div
                        className="w-full h-full p-3 gap-1   lg:flex justify-center items-center cursor-pointer"
                        onClick={() => {
                            setOpenOptions((old) => !old);
                            setOpenDate(false)
                            setIsClikable(true)
                        }}
                    >
                        <FontAwesomeIcon
                            className=""
                            icon={freeSolidSvgIcons.faPerson}
                        />
                        <span className="">
                            {`${options.adults} adults ${options.childrens} childrens ${options.rooms} rooms`}
                        </span>
                    </div>
                    {openoptions && (
                        <div className="absolute w-full">
                            <div className="  m-auto bg-white shadow-lg w-5/6 rounded-md ">
                                <div className="p-4   flex justify-between">

                                    <span className="">Adults</span>
                                    <div className="grid grid-cols-3 items-center">
                                        <button
                                            className=" optionCounterbutton"
                                            onClick={() => {
                                                handelOption("adults", "d");
                                            }}
                                        >
                                            -
                                        </button>
                                        <span
                                            className={`optionCounterNumber ${danger.adults ? "active" : " "
                                                }`}
                                        >
                                            {options.adults}
                                        </span>
                                        <button
                                            className="optionCounterbutton"
                                            onClick={() => {
                                                handelOption("adults", "i");
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4  flex justify-between">

                                    <span className="optiontext">Children</span>
                                    <div className="grid  grid-cols-3 items-center">
                                        <button
                                            className="optionCounterbutton"
                                            onClick={() => {
                                                handelOption("childrens", "d");
                                            }}
                                        >
                                            -
                                        </button>
                                        <span
                                            className={`optionCounterNumber ${danger.childrens ? "active" : " "
                                                }`}
                                        >
                                            {options.childrens}
                                        </span>
                                        <button
                                            className="optionCounterbutton"
                                            onClick={() => {
                                                handelOption("childrens", "i");
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4  flex justify-between">

                                    <span className="optiontext">rooms</span>
                                    <div className="grid  grid-cols-3 items-center">
                                        <button
                                            className="optionCounterbutton"
                                            onClick={() => {
                                                handelOption("rooms", "d");
                                            }}
                                        >
                                            -
                                        </button>
                                        <span
                                            className={`optionCounterNumber ${danger.rooms ? "active" : " "
                                                }`}
                                        >
                                            {options.rooms}
                                        </span>
                                        <button
                                            className="optionCounterbutton"
                                            onClick={() => {
                                                handelOption("rooms", "i");
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className=" col-span-1 hover:bg-gray-400 hover:text-white  rounded-ms rounded-r-xl p-2">
                    <div
                        className="  p-3 gap-1  flex justify-center items-center cursor-pointer "
                        onClick={handelSearch}
                    >
                        <FontAwesomeIcon
                            className=" w-10 h-6"
                            icon={freeSolidSvgIcons.faSearch}
                        />
                        <span className="searchBtnSpan hidden lg:inline-block">Search</span>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Search;