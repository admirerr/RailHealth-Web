import React from "react";
import img from '../images/1024.png';
const Footer=()=>{
    return(
      <footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-6 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          Our services
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400 hover:text-white"> E-Booking </a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Register as a Doctor</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">  Register as a Customer</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white"> Policy for B2C Agents</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
        Resources
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400 hover:text-white">Frequently Asked Questions</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Terms and Conditions</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Sitemap</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Landing Pages</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          Booking
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400 hover:text-white">Order Medicines in train</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Consult Doctor </a>
          </li>
          {/* <li>
            <a className="text-gray-400 hover:text-white">Third Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Fourth Link</a>
          </li> */}
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          Book our services
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          {/* <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-gray-400"
            >
              Placeholder
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-green-900 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div> */}
          {/* <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
            Button
          </button> */}
        </div>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400 hover:text-white">Get medical services</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">while travelling </a>
          </li>
          {/* <li>
            <a className="text-gray-400 hover:text-white">Third Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Fourth Link</a>
          </li> */}
        </nav>
      </div>
      
    </div>
    <div class="centered-text">
        <h1>!! Website is under development !!</h1>
      </div>
  </div>
  <div className="bg-gray-800 bg-opacity-75">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        
        <span className="ml-3 text-xl">RailHealth</span>
      </a>
      <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
        © 2024 RailHealth —
        <a
          href="https://www.linkedin.com/company/railhealth/"
          className="text-gray-500 ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          @railhealth
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-gray-400" href="https://www.facebook.com/profile.php?id=61556408187204&mibextid=9R9pXO"  target="_blank">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        
        <a className="ml-3 text-gray-400" href="https://www.instagram.com/railhealth?igsh=NzN3eWYyZHoydGJw" target="_blank">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-gray-400" href="https://www.linkedin.com/company/railhealth/" target="_blank">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

    )
}
export default Footer;