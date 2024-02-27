import React,{useState} from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarComponent from "./Navbar";
import DoctorPagePopUp from "./DoctorPagePopUp";
const Consultancy = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
    console.log("hi ");
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <NavbarComponent />
      <div className="flex md:justify-center p-3 md:p-5  md:flex-row md:items-start flex-col-reverse items-center">
        <div className="text-black text-xl bold ">
          <div>
            {" "}
            <div className="md:mb-4">
              {" "}
              <span className="font-semibold block p-[3px] md:text-[25px] text-[18px]">
                Consult Specialist Doctors Online
              </span>
              <span className=" block p-[3px] md:text-[25px] text-[18px]">
                on Video/Audio Call & and Chat
              </span>
              <span className="font-semibold block p-[3px] text-[25px]"></span>
            </div>
            <div>
              <span className="font-medium block p-[5px] md:text-[18px] text-[15px]">
                Consult Doctors from Top Hospitals within 30 minutes
              </span>
            </div>
          </div>

          <button class="bg-blue-500 text-white px-4 py-2 rounded mt-10">
            Talk to a doctor <span></span>{" "}
          </button>
        </div>
        <div className="md:h-full h-[30vw] mb-4 md:mb-0">
          <img
            src="	https://www.medibuddy.in/assets/images/talk-to-doc.png"
            alt="Contact"
            className="md:-[30vw] md:h-[18vw] w-full h-full object-cover ml-20"
          ></img>
        </div>
      </div>

      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <img
                  className="w-full h-full shadow-lg rounded-full"
                  src="https://docsapp-doctor.s3.us-west-2.amazonaws.com/profile_images/27927.png"
                  alt="doctor-img1"
                />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <div className="lg:flex sm:block sm:w-auto">
                  <div className="w-3/4 sm:w-auto">
                    <h2 className="text-gray-900 text-lg title-font font-bold mb-2">
                      Dr. Sahil Dutta
                    </h2>
                    <ul>
                      <li>MBBS</li>
                      <li>7 year Experience</li>
                      <li>Physician</li>
                    </ul>
                  </div>
                  <div className="flex justify-center align-items-center lg:w-2/4 sm:w-auto">
                    <button className="flex m-0 p-2 justify-center align-content-center  text-white bg-indigo-500 border-0 w-57 focus:outline-none hover:bg-indigo-600 rounded text-md "
                     onClick={handleOpenPopup}
                    >
                      Consult Now
                    </button>
                    {isPopupOpen && (
                      <DoctorPagePopUp onClose={handleClosePopup} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <img
                  className="w-full h-full shadow-lg rounded-full"
                  src="https://docsapp-doctor.s3.us-west-2.amazonaws.com/profile_images/27927.png"
                  alt="doctor-img1"
                />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <div className="lg:flex sm:block sm:w-auto">
                  <div className="w-3/4 sm:w-auto">
                    <h2 className="text-gray-900 text-lg title-font font-bold mb-2">
                      Dr. Abhishek Kumar
                    </h2>
                    <ul>
                      <li>MBBS</li>
                      <li>4 year Experience</li>
                      <li>Physician</li>
                    </ul>
                  </div>
                  <div className="flex justify-center align-items-center lg:w-2/4 sm:w-auto">
                    <button className="flex m-0 p-2 justify-center align-content-center  text-white bg-indigo-500 border-0 w-57 focus:outline-none hover:bg-indigo-600 rounded text-md "
                    onClick={handleOpenPopup}>
                      Consult Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <img
                  className="w-full h-full shadow-lg rounded-full"
                  src="https://docsapp-doctor.s3.us-west-2.amazonaws.com/profile_images/27927.png"
                  alt="doctor-img1"
                />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <div className="lg:flex sm:block sm:w-auto">
                  <div className="w-3/4 sm:w-auto">
                    <h2 className="text-gray-900 text-lg title-font font-bold mb-2">
                      Dr. Ravi Sharma
                    </h2>
                    <ul>
                      <li>MBBS</li>
                      <li>2 year Experience</li>
                      <li>Physician</li>
                    </ul>
                  </div>
                  <div className="flex justify-center align-items-center lg:w-2/4 sm:w-auto">
                    <button className="flex m-0 p-2 justify-center align-content-center  text-white bg-indigo-500 border-0 w-57 focus:outline-none hover:bg-indigo-600 rounded text-md "
                    onClick={handleOpenPopup}>
                      Consult Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Consultancy;
