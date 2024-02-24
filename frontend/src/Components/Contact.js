import React from 'react';
import 'tailwindcss/tailwind.css';
import appstore from "../images/appstore.png";
import playstore from "../images/playstore.png";
import phone from "../images/phone.png";
import mobielPic4 from "../images/newPic.png";
const Contact = () => {
    return (
        <div className="bg-gray-200 flex flex-col p-4 flex flex-col sm:flex-row items-center justify-between" id="aboutus">
          
            <div className="max-w-lg mb-4 sm:mb-0">
                <h1 className="text-3xl font-bold mb-4 ">Download the RailHealth app!</h1>
                <p className="text-xl mb-4 ">For booking status updates & more</p>
                <p className="text-xl mb-4 ">With handy features like timely medicine services, lesser data usage, online Doctor consultancy in just one tap, faster load times & fluid animations, the app is crafted to delight you with a great and healthy travelling experience.</p>

                <div className="flex justify-center">
                <a href=""> 
                    <img
                        src={appstore}
                        width="150"
                        height="150"
                        className="align-top "
                        alt="App Store"
                    />
                    </a>
                    <a href="">
                    <img
                        src={playstore}
                        width="150"
                        height="150"
                        className="align-top mt-1  sm:flex-col"
                        alt="Play Store"
                    />
                    </a>
                </div>
            </div>

            <img
                src={mobielPic4}
                width="300"
                height="300"
                className="inline-block align-top mt-1 ml-2 sm:ml-0"  
                alt="Phone"
            />
        </div>
    );
};

export default Contact;
