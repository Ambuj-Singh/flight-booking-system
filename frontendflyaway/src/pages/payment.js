import React from "react";
import Visaicon from "../assets/visaicon.png";
import Title from "../components/title";

const Payment=()=>{
    return(
       
            <div className="flex flex-col items-center ">
            <Title param='Pay Here'/>
            <div className="flex flex-col  p-4 mt-20 bg-white">
                <div className="flex flex-row items-center">
                    <img className="w-10 h-10 mb-4 mr-60" src={Visaicon}/>
                    <h6>Paynow</h6>
                </div>
                <div className="divider bg-slate-300 h-0.5"></div>
                <h1 className="text-black  w-24 mr-2 m-2 p-2">{"\u20B9"} 2000</h1>
                <div className="divider bg-slate-300 h-0.5"></div>
                <div className="flex flex-col items-center">
                    <button className="rounded-md bg-slate-500 w-40 p-2 mt-5 text-black text-lg shadow-2xl mb-5">Book</button>
                </div>
            </div>
        </div>
   
    );
}

export default Payment;