import React,{useState} from "react";
import DoctorPagePopUp from "./DoctorPagePopUp";
function Card1(props) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };
const [lm,setLm]=useState(200)
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className="flex w-[600px] m-3 sm:flex-row flex-col">
      <div className="p-2 flex justify-center sm:w-[30%]">
        <img
          src="https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=996&t=st=1706204647~exp=1706205247~hmac=c13f9e69074f75c0b0ad0cade936ff9ea369a74e9fb86f22a7cd0a7758234884"
          alt="doctor image"
          className="object-cover object-cover"
        ></img>
      </div>
      <div className="p-2 flex flex-col p-2 sm:w-[70%]">
        <div className="mb-2">
          <p class="text-sm text-gray-600 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
        </div>
        <div className="mb-2 font-semibold text-[20px]">
          {" "}
          {props.specialisation}
        </div>
        <div>
           {props.description.substring(0,lm)}
        </div >
        {lm===200&&<div className="text-blue-800 hover:underline cursor-pointer" onClick={()=>{
          setLm(1000)
        }}>Read More...</div>}
        {lm===1000&&<div className="text-blue-800 hover:underline cursor-pointer" onClick={()=>{
          setLm(200)
        }}>...Read Less</div>}
        <div className="cursor-pointer rounded-lg p-2 bg-blue-200 font-bold text-xl mt-3 flex justify-center"
          onClick={handleOpenPopup}
        >
          Talk to doctor
        </div>
        {isPopupOpen && <DoctorPagePopUp onClose={handleClosePopup} />}
      </div>
    </div>
  );
}

export default Card1;
