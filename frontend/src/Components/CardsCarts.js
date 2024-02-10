import React from "react";
function CardsCarts(){
    return (
        <>
        
  <div className=" w-[60%]  lg:flex ml-[20.5vw] mt-[5vh] " style={{width:"50%"}}>
  <div class="h-48 lg:h-30 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{"background-image": "url('https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=996&t=st=1706204647~exp=1706205247~hmac=c13f9e69074f75c0b0ad0cade936ff9ea369a74e9fb86f22a7cd0a7758234884')",border:'2px solid black'}} title="Woman holding a mug">
  </div>
  <div className="border-r border-b border-l border-black lg:border-l-0 lg:border-t lg:border-black bg-white rounded-b lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-between leading-normal " style={{height:'28vh'}}>
    <div className="mb-1 ">
    
      <div className="text-gray-900 font-bold text-xl mb-1">Saridon strip of 10 tablets</div>
      <p class="text-gray-700 text-base">By Saridon</p>
      <p class="text-black text-base text-xl">$20</p>


    </div>
    <div class="text-right">
  <button class="bg-blue-500 text-white px-3 py-1 ml-2 rounded mr-2 p-2">Add to cart <span></span> </button>
</div>

  </div>
</div>

</>
    )
}
export default CardsCarts;