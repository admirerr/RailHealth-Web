export default function Slider(){
    return (<>
<>
 
  <div
    className="offcanvas offcanvas-end"
    tabIndex={-1}
    data-bs-scroll="true"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasRightLabel">
        Login
      </h5>
     
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
        
            <div className="font-semibold">
                Quick Login/Register
            </div>
            <div>
        <input
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        placeholder="Enter your phone number"
        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
      />
        
        </div>
        <button
        type="button"
        className="mt-4 bg-[#17A589] text-white p-2 rounded-md hover:bg-[#17A589] focus:outline-none focus:ring focus:border-blue-300 w-[100%]"
      >
        Send OTP
      </button>
    </div>
  </div>
</>

</>)
}