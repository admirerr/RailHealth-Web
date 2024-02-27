import { format, parse } from "date-fns";
import HorizontalLinearStepper from "./Pop";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Popup = ({ onClose, trainNo, departureDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      {/* Full window blur background */}
      {/* <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50"></div> */}
      <div className="fixed inset-0 bg-black opacity-90 backdrop-filter backdrop-blur-md z-50"></div>

      {/* Popup */}

      <div className="fixed inset-0 px-8 flex items-center justify-center z-50">
        <div
          className="bg-gray-300 p-6 rounded shadow-lg z-10  rounded-[20px]"
           style={{boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)"}}  
        >
          <h2 className="text-2xl font-bold text-center mb-4">
            Train Booking Details
          </h2>
          {/* <HorizontalLinearStepper/> */}
          {/* Calendar */}
          <div className="mb-4 flex gap-[2rem]">
            <div>
              <h5 className="mt-2 text-2xl">Date</h5>
            </div>
            <div className="relative">
              <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  className="w-[90%] p-2 border border-gray-300 rounded-md text-lg focus:outline-none focus:border-blue-500" // Increased width to 90%
              />
            </div>

          </div>

          {/* Train Input */}
          <div className="mb-4 flex gap-[2rem]">
            <div>
              <h4 className="text-2xl mt-2">Train</h4>
            </div>
            <div>
              <input
                type="text"
                className="mt-0 p-2 border border-gray-300 rounded-md"
                placeholder="Enter your train"
                value={trainNo}
              />
            </div>
          </div>

          <h3 className=" text-2xl font-bold text-center mb-4">
            Select your Boarding Station
          </h3>

          {/* Select Option */}
          <div className="mb-4 flex gap-[2rem]">
            <div>
              <h5 className="text-xl font-semibold mt-2">Select Station</h5>
            </div>
            <div>
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="mt-0 p-2 border border-gray-300 rounded-md"
              >
                <option value="" className="text-gray-500 p-0">
                  Select an option
                </option>
                <option className="p-0" value="option1">
                  Option 1
                </option>
                <option className="p-0" value="option2">
                  Option 2
                </option>
                <option className="p-0" value="option3">
                  Option 3
                </option>
              </select>
            </div>
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

export default Popup;
