import React from "react";
import "../style.css";
import mobilePic1 from '../images/mobilePic1.png'
import mobilePic2 from '../images/mobilePic2.png'
import mobilePic3 from '../images/mobilePic3.png'
const GetAmbulance = () => {
  return (
    <>
      <section class="app-preview get-ambulance">
        <div class="app-previewTop  flex  justify-center text-[120%]  py-4 px-2 cards">
        <div class="bg-white flex flex-col justify-center  h-[20vh] rounded-md w-[30vh]  m-2 shadow-lg text-center">
            {/* <!-- <h1 class="counter-count">1333+</h1> --> */}
            <h1 class="counter-count bg-gradient-to-r text-4xl  from-green-400 to-blue-500 text-transparent bg-clip-text">100000+</h1>
            <p className="">Medicines</p>
          </div>
          <div class="bg-white m-2 flex flex-col justify-center rounded-md h-[20vh]  w-[30vh]  shadow-lg text-center">
            <h1 class=" bg-gradient-to-r text-4xl from-green-400 to-blue-500 text-transparent bg-clip-text  counter-count ">10+</h1>
            <p className=" ">Cities</p>
          </div>
          <div class="bg-white flex flex-col   justify-center h-[20vh] rounded-md w-[30vh] m-2  shadow-lg text-center">
            <h1 class="counter-count bg-gradient-to-r text-4xl from-green-400 to-blue-500 text-transparent bg-clip-text">5+</h1>
            <p className="">Doctors</p>
          </div>
    
        </div>
        <div class="app-previewBottom w-[100vw]">
          <div class="heading text-center">
            <h1 class="text-white">Book &amp; Get Medicines and Doctor's Assitance </h1>
            <a
              href=""
              target="_blank"
              className="text-decoration-none bg-white shadow-lg my-2 primary-cta"
            >
              Download RailHealth App
            </a>
          </div>
          <div class="image-wrapper flex flex-col md:flex-row owl-theme">
            <div class="preview-image item">
              <img
                src={mobilePic1}
                alt="icon "
                style={{height:'500px'}}
              />
            </div>
            <div class="preview-image item">
              <img
               src={mobilePic3}
               alt="icon "
               style={{height:'500px'}}
              />
            </div>
            <div class="preview-image item">
              <img
               src={mobilePic2}
               alt="icon "
               style={{height:'500px'}}
              />
            </div>
          </div>
        </div>
        {/* <!-- White curve background --> */}
        <div class="white-curve">
          <img
            src="https://medcab.in/assets/website-images/white-curve.png"
            alt="icon "
          />
        </div>
      </section>
    </>
  );
};
export default GetAmbulance;
