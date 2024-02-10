import React from "react";
import NavbarComponent from "./Navbar";
import CardsCarts from "./CardsCarts";
import Prescription from "./Prescription";

function Carts() {
    return (
        <>
            <NavbarComponent />
            <div className="flex ">
                <div  style={{ overflowY: 'scroll', maxHeight: '550px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <CardsCarts />
                    <CardsCarts />
                    <CardsCarts />
                    <CardsCarts />
                </div>
                <div className="w-[50%] ">
                    <Prescription  />
                </div>
            </div>
        </>
    );
}

export default Carts;