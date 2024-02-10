import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useToast } from "@chakra-ui/toast";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const DoctorPagePopUp = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState("");
  const [name,setName]=useState("");
  const [number,setNumber]=useState("");
  const [gender,setGender]=useState("");
  const navigate=useNavigate();
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
 const toast=useToast();
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
 
    console.log(name);
    console.log(number);
    console.log(gender);
  
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:5000/appointment",
        {
          name,
          gender,
          number,
         
        },
        config
      );
      setTimeout(() => {
        // Show success toast
        toast({
          title: "YOUR RESPONSE HAS BEEN SAVED",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        
        // After 3 seconds, navigate to '/'
        setTimeout(() => {
          navigate('/')
        }, 3000);
      }, 1000); // Simulated delay for saving response
    
  
  
    } catch (error) {
      console.log(error);
      // toast({
      //   title: "Error Occured!",
      //   description: error.response?.data?.message || "An error occurred",
      //   status: "error",
      //   duration: 5000,
      //   isClosable: true,
      //   position: "bottom",
      // });
     
      
      
    }
  }

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-90 backdrop-filter backdrop-blur-md z-50"></div>

      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="bg-white p-6 rounded shadow-lg z-10 w-[30%] rounded-[20px]"
          style={{
            boxShadow: "-3px 3px 4px 0px #17A589",
            border: "2.5px solid #17A589",
          }}
        >
          <h2 className="text-lg font-semibold mb-3">Who is the Patient?</h2>
          <div className="flex gap-3 flex-row overflow-x-scroll mb-4">
            <button className="bg-blue-500 w-full text-white rounded px-3 py-1">
              Me
            </button>
            <button className="bg-blue-500 w-full text-white rounded px-3 py-1">
              Wife
            </button>
            <button className="bg-blue-500 w-full text-white rounded px-3 py-1">
              Husband
            </button>
            <button className="bg-blue-500 w-full text-white rounded px-3 py-1">
              Father
            </button>
            <button className="bg-blue-500 w-full text-white rounded px-3 py-1">
              Mother
            </button>
            <button className="bg-blue-500 w-full text-white rounded px-3 py-1">
              Son
            </button>
            <button className="bg-blue-500 w-full text-white rounded px-3 py-1">
              Daughter
            </button>
          </div>
          <div className="mb-4 flex gap-[2rem]">
            <div className="relative flex">
              <p className="text-black">Select Patient's gender</p>
              <select className="mb-4 ml-3"
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <p className="text-black">DOB</p>
            </div>
            <div className="relative">
              <DatePicker
                placeholderText="Select Date"
                selected={selectedDate}
                onChange={handleDateChange}
                className="w-[80%] p-2 border border-gray-300 rounded-md text-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Train Input */}
          <div className="mb-4 flex gap-[2rem]">
            <div>
              <p className="text-black">Doctor will call you on this number</p>
            </div>
            <div>
              <input
                type="text"
                className="mt-0 p-2 border border-gray-300 rounded-md"
                placeholder="Enter your Number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4 flex gap-[2rem]">
            <div>
              <p className="text-black">Patient's name</p>
            </div>
            <div>
              <input
                type="text"
                className="mt-0 p-2 border border-gray-300 rounded-md"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Name"
              />
            </div>
          </div>
          {/* <div className="mb-4 flex gap-[2rem]">
            <div>
              <p className="text-black">Patient's age</p>
            </div>
            <div>
              <input
                type="number"
                className="mt-0 p-2 border border-gray-300 rounded-md"
                placeholder="Enter your age"
              />
            </div>
          </div> */}
          <div className="flex">
            <button className="bg-blue-500 w-full text-white rounded py-2 hover:bg-blue-800" 
               onClick={submitHandler}
            >
              Submit
            </button>
          </div>
          {/* Close Button */}
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default DoctorPagePopUp;