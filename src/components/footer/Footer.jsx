import { useLocation } from "react-router-dom";
import wave from "../../assets/images/wave.svg";
import MailList from "../maillist/MailList";

const Footer = () => {
  return (
    <div className=" "> 
            <img src={wave} className="w-full -mb-1" alt="wave" />
   <div className="bg-blue-500">
      <MailList />
      <div className="grid grid-cols-3 lg:flex justify-around text-white  font-mono py-6">
        <ul className="flex flex-col  gap-3 p-3  ">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="flex flex-col  gap-3 p-3 w-fit ">
          <li className="fListItem">Homes </li>
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem">Guest houses</li>
        </ul>
        <ul className="flex flex-col    gap-3 p-3 w-fit ">
          <li className="fListItem">Unique places to stay </li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Unpacked: Travel articles </li>
          <li className="fListItem">Travel communities </li>
          <li className="fListItem">Seasonal and holiday deals </li>
        </ul>
        
      
      </div>
      <div className="text-center text-white bg-blue-500 ">Copyright © 2022 hamza douaij <span className="text-yellow-400">MERN</span> stack web Developer.</div>
    </div>
    </div>

  );
};

export default Footer;
