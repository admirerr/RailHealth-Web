import React from "react";
import LocationCard from "./LocationCard";
import NavbarComponent from "./Navbar";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from "@fortawesome/free-regular-svg-icons"; // Use the appropriate icon from Font Awesome
import { call } from "./icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Stations from "./Station";
import main_train from "../images/demo_train.png";
const MainPage = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="flex flex-col-reverse lg:flex-row mt-[0%] mx-[5%] ">
        <div className="mt-[5%] w-full lg:w-[35%] flex flex-col">
          <LocationCard />
          {/* Emergeny call button */}
          <div
            className="rounded-[30px] flex flex-row p-2 mt-5"
            style={{
              boxShadow: "-3px 3px 4px 0px #17A589",
              border: "0.5px solid #17A589",
            }}
          >
            <div className="w-[40px] h-[40px] rounded-full bg-[#17A589] flex justify-center items-center p-2">
              <FontAwesomeIcon
                icon="fa-solid fa-circle-plus "
                style={{ color: "#17A589" }}
                className="w-[40px] h-[40px] bg-white"
              />
            </div>
            <div
              className="w-[80%] flex justify-center items-center text-center text-[#17A589] text-[3vh]"
              style={{ fontWeight: 600 }}
            >
              Call Emergency 19018908242
            </div>
          </div>
          {/* hospital call button */}
          <div
            className="rounded-[30px] flex flex-row p-2 mt-4 mb-3"
            style={{
              boxShadow: "-3px 3px 4px 0px #17A589",
              border: "0.5px solid #17A589",
            }}
          >
            <div className="w-[38px] h-[38px] rounded-full bg-[#17A589] flex justify-center items-center p-2">
              <FontAwesomeIcon
                icon="phone"
                style={{ color: "#17A589" }}
                className="w-[38px] h-[38px] bg-white"
              />
            </div>
            <div
              className="w-[80%] flex justify-center items-center text-center text-[#17A589] text-[3vh]"
              style={{ fontWeight: 600 }}
            >
              Check Doctors Availability
            </div>
          </div>
          <div></div>
        </div>
        <div className="lg:w-[65%] w-full ml-5">
        <div className="header-image">
          <img
            src={main_train}
            className="img-fluid rounded-lg" // Added rounded-lg class for rounded corners
            alt="banner"
            style={{ width: "90%" }} // Set width to 100% for increased width
          />
        </div>
      </div>


      </div>
    </div>
  );
};
export default MainPage;
