import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Popup from "./Popup";
const LocationCard = () => {
  const [label, setLabel] = useState("pnr");

  const [color, setColor] = useState({ a: 1, b: 0, c: 0 });
  const [btnColor, setbtnColor] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = (e) => {
    setIsPopupOpen(true);
    handleFetchData(e);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const [pnr, setPnr] = useState("");
  const [TrainNo, setTrainNo] = useState("");
  const [passengers, setPassengers] = useState([]);
  const [description, setDescription] = useState();
  const [selectedPerson, setSelectedPerson] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  // console.log("pnr" + pnr);

  const handlePassengers = async (e) => {
    e.preventDefault();
    console.log(passengers[selectedPerson - 1].Berth);
    console.log(selectedPerson);
    const selectedBerth = passengers[selectedPerson - 1].Berth;
    const selectedCoach = passengers[selectedPerson - 1].Coach;
    const selectedBookingBerthCode =
      passengers[selectedPerson - 1].BookingBerthCode;
    const selectedCoachPosition = passengers[selectedPerson - 1].CoachPosition;
    console.log(selectedBerth);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:5000/api/passenger",
        {
          Berth: selectedBerth,
          Coach: selectedCoach,
          BookingBerthCode: selectedBookingBerthCode,
          CoachPosition: selectedCoachPosition,
        },
        config
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const options1 = {
    method: "GET",
    url: "https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus",
    params: {
      startDay: "1",
      trainNo: "#####",
    },
    headers: {
      "X-RapidAPI-Key": "2b98b608e9mshf3adbd38a1acf05p112931jsn837c933da93e",
      "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
    },
  };

  async function start1() {
    try {
      const response = await axios.request(options1);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const handleFetchData = (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      url: "https://irctc1.p.rapidapi.com/api/v3/getPNRStatus",
      params: {
        pnrNumber: pnr,
      },
      headers: {
        "X-RapidAPI-Key": "2b98b608e9mshf3adbd38a1acf05p112931jsn837c933da93e",
        "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
      },
    };

    async function start() {
      try {
        const response = await axios.request(options);
        console.log(response);
        console.log(response.data);
        console.log(response.data.data.TrainNo);
        console.log(response.data.data.Doj);
        setTrainNo(response.data.data.TrainNo);
        setDepartureDate(response.data.data.Doj);
        start1();
      } catch (error) {
        console.error(error);
      }
    }

    start();
  };

  return (
    <div
      className="p-2 flex flex-col rounded-[20px]"
      style={{
        boxShadow: "-3px 3px 4px 0px #17A589",
        border: "0.5px solid #17A589",
      }}
    >
      <div className="flex flex-col md:flex-row flex-start ">
        <div
          className={`hover:bg-[#17A589] bg-${
            color.a ? "[#17A589]" : "[#ffffff]"
          } justify-center cursor-pointer flex items-center  hover:text-gray-100 transition-all duration-300 ease-in-out hover:scale-110 rounded-[20px] pl-5 pr-5  m-2`}
          style={{ border: "1px solid gray" }}
          onClick={() => {
            setColor({ a: !color.a, b: 0, c: 0 });
            setLabel("pnr");
          }}
        >
          PNR
        </div>
        <div
          className={`hover:bg-[#17A589] bg-${
            color.b ? "[#17A589]" : "[#ffffff]"
          } justify-center cursor-pointer flex items-center  hover:text-gray-100 transition-all duration-300 ease-in-out hover:scale-110 rounded-[20px] pl-5 pr-5  m-2`}
          style={{ border: "1px solid gray" }}
          onClick={() => {
            setColor({ a: 0, b: !color.b, c: 0 });
            setLabel("train");
          }}
        >
          TRAIN NO./NAME
        </div>
        <div
          className={`hover:bg-[#17A589] bg-${
            color.c ? "[#17A589]" : "[#ffffff]"
          } justify-center cursor-pointer flex items-center  hover:text-gray-100 transition-all duration-300 ease-in-out hover:scale-110 rounded-[20px] pl-5 pr-5  m-2`}
          style={{ border: "1px solid gray" }}
          onClick={() => {
            setColor({ a: 0, b: 0, c: !color.c });
            setLabel("station");
          }}
        >
          STATION
        </div>
      </div>
      <div>
        <div className="flex flex-row mt-2">
          {label === "pnr" && (
            <input
              type="text"
              className="pl-2 w-[90%] h-[50px] bg-gray-200 rounded-[15px] ml-2"
              placeholder="ENTER 10 DIGIT PNR NO."
              onChange={(e) => setPnr(e.target.value)}
            ></input>
          )}
          {label === "station" && (
            <input
              type="text"
              className="pl-2 w-[90%] h-[50px] bg-gray-200 rounded-[15px] ml-2"
              placeholder="ENTER STATION"
            ></input>
          )}
          {label === "train" && (
            <input
              type="text"
              className="pl-2 w-[90%] h-[50px] bg-gray-200 rounded-[15px] ml-2"
              placeholder="ENTER TRAIN NO."
            ></input>
          )}
        </div>

        <div className="flex justify-between sm:flex-row  flex-col pl-5 pr-5 p-3 mt-4">
          <div>
            <div class="flex items-center sm:mb-4 mb-2">
              <input
                defaultChecked
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="hidden"
              />
              <label
                for="default-radio-1"
                className="min-width: 8rem text-align: center line-height: 1.5 inline-block text-md font-medium text-gray-900 dark:text-gray-900 cursor-pointer rounded-full py-[0.5rem] px-4 bg-blue border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
                style={
                  btnColor == 1
                    ? { backgroundColor: "blue", color: "white" }
                    : { fontSize: "15px" }
                }
                onClick={() => {
                  setbtnColor(1);
                  //  console.log(btnColor.d);
                }}
              >
                Get Medicine in Train
              </label>
            </div>

            <div class="flex items-center sm:mb-4 mb-2">
              <input
                defaultChecked
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="hidden"
              />
              <label
                for="default-radio-1"
                class="min-width: 8rem text-align: center line-height: 1.5 inline-block text-md font-medium text-gray-900 dark:text-gray-900 cursor-pointer rounded-full py-[0.5rem] px-[1.9rem] bg-blue border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
                style={
                  btnColor == 2
                    ? { backgroundColor: "blue", color: "white" }
                    : { fontSize: "15px" }
                }
                onClick={() => {
                  setbtnColor(2);
                  //  console.log(btnColor.d);
                }}
              >
                Get Doctor in Train
              </label>
            </div>
          </div>
          <div>
            <div class="flex items-center sm:mb-4 mb-2">
              <input
                defaultChecked
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="hidden"
              />
              <label
                for="default-radio-1"
                class="min-width: 8rem text-align: center line-height: 1.5 inline-block text-md font-medium text-gray-900 dark:text-gray-900 cursor-pointer rounded-full py-[0.5rem] px-[2.8rem] bg-blue border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
                style={
                  btnColor == 3
                    ? { backgroundColor: "blue", color: "white" }
                    : { fontSize: "15px" }
                }
                onClick={() => {
                  setbtnColor(3);
                  //  console.log(btnColor.d);
                }}
              >
                Order Medicine
              </label>
            </div>

            <div class="flex items-center sm:mb-4 mb-2">
              <input
                defaultChecked
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="hidden"
              />
              <label
                for="default-radio-1"
                class="min-width: 8rem text-align: center line-height: 1.5 inline-block text-md font-medium text-gray-900 dark:text-gray-900 cursor-pointer rounded-full py-[0.5rem] px-4 bg-blue border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
                style={
                  btnColor == 4
                    ? { backgroundColor: "blue", color: "white" }
                    : { fontSize: "15px" }
                }
                onClick={() => {
                  setbtnColor(4);
                  //  console.log(btnColor.d);
                }}
              >
                Doctor Consultancy
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-4 justify-between mb-3">
        <div
          className="w-[10%] rounded-2 flex justify-center items-center p-2"
          style={{
            border: "0.5px solid #f0f0f0",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <FontAwesomeIcon
            icon="fa-regular fa-clock"
            style={{ color: "gray" }}
            className="w-[100%] h-[100%]"
          />
        </div>

        <div
          className="w-[75%] md:text-[3.5vw] lg:text-[1.8vw] flex justify-center text-white text-center items-center p-[0.1rem] bg-blue-500 cursor-pointer rounded-2 mr-6"
          style={{ fontWeight: "bold"}}
          // onClick={handleFetchData}
          onClick={handleOpenPopup}
        >
          Submit
        </div>
        {isPopupOpen && (
          <Popup
            onClose={handleClosePopup}
            trainNo={TrainNo}
            departureDate={departureDate}
          />
        )}
      </div>
    </div>
  );
};
export default LocationCard;
