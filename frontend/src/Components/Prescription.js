import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Prescription(){
return (
    <>

<div class="mt-10  w-[full] ml-[10%] ">
<div class="my-1 px-1 w-full ">        
<p className="text-2xl black">Please add item(s) to proceed</p>
</div>
<div>
<button className="bg-blue-500 text-white px-4 py-2 p-[3rem] rounded mr-2 w-[51%]">View Cart<span></span> </button>
</div>
<div className="max-w-sm rounded overflow-hidden shadow-lg mt-[3%] p-[1rem]" 
    style={{border:'2px solid gray',borderRadius:'10px'}}
>
 <p className="font-bold">What is a valid Prescription?</p>
<hr></hr>

<p><span></span >A valid prescription contains:</p>
            <p> <span> <FontAwesomeIcon icon="fas fa-user-md"  style={{ width: '30px', height: '30px' }} /></span>Doctor Details</p>
            <p> <span> <FontAwesomeIcon icon="fa-solid fa-calendar"  style={{ width: '25px', height: '25px'}} /></span>Date of Prescription</p>
            <p> <span> <FontAwesomeIcon icon="fa-solid fa-person" style={{ width: '30px', height: '30px' }} /> </span>Patient Details</p>
            <p> <span><FontAwesomeIcon icon="fa-solid fa-pills" style={{ width: '30px', height: '30px' }}  />  </span>Dosage Details</p>

            
</div>
</div>
</>
)
}
export default Prescription;