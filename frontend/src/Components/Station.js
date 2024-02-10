import React from 'react'
import varanasiRailway from "../images/varanasiRailway2.jpg"
import prayag from "../images/prayag1.png"
import kanpur from "../images/kanpurS.png"
import fatehpur from "../images/fatehpurR.png"
import DDU from "../images/DDU.jpeg"
import Agra from "../images/Agra.jpeg"
export default function Station() {
  return (
    <>
    <div className="container " >
      <div
        style={{
          textAlign: "center",
          color: "black",
          background: "",
          padding: "20px 0",
          
        }}
      >
        <h3 className='font-semibold'>Some of the Important Stations We Deliver At!!</h3>
      </div>
      <div className="container">
  <div class="card-group">
    <div class="card mx-2" style={{ border: "none" }}>
      <img
        class="card-img-top  rounded-circle"
        src={varanasiRailway}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 className="card-title " style={{ textAlign: "center",fontWeight:'bold' }}>
          Varanasi
        </h5>
       
      </div>
    </div>
    <div class="card mx-2" style={{ border: "none" }}>
      <img
        class="card-img-top rounded-circle"
        src={DDU}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title" style={{ textAlign: "center",fontWeight:'bold' }}>
            Pt. Deen Dayal Upadhyaya
        </h5>
       
      </div>
    </div>
    {/* <div></div> */}
    <div class="card  mx-2" >
      <img
        class="card-img-top rounded-circle"
        src={prayag}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title" style={{ textAlign: "center" ,fontWeight:'bold'}}>
          Prayagraj
        </h5>
        
      </div>
    </div>
  </div>
</div>
    </div>

<div className="container">
<div
  style={{
    textAlign: "center",
    color: "black",
    background: "",
    padding: "20px 0",
  }}
>
  
</div>
<div className="container" >
  <div className="card-group " >
    <div class="card mx-2" style={{ border: "none" }}>
      <img
        class="card-img-top  rounded-circle"
        src={Agra}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title" style={{ textAlign: "center",fontWeight:'bold' }}>
          Agra Cantt
        </h5>
       
      </div>
    </div>
    <div class="card mx-2" style={{ border: "none" }}>
      <img
        class="card-img-top rounded-circle"
        src={kanpur}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title" style={{ textAlign: "center" ,fontWeight:'bold'}}>
            Kanpur
        </h5>
       
      </div>
    </div>
    {/* <div></div> */}
    <div class="card  mx-2" >
      <img
        class="card-img-top rounded-circle"
        src={fatehpur}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title" style={{ textAlign: "center",fontWeight:'bold' }}>
          Fatehpur
        </h5>
        
      </div>
    </div>
  </div>
</div>
</div>
</>
  );
}
