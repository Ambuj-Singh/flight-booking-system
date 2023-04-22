import React from "react";
import airindia from "../assets/airindia.svg";
import indigo from "../assets/indigo.svg";
import lufthansa from "../assets/lufthansa.svg";
import spicejet from "../assets/spicejet.svg";
import vistara from "../assets/vistara.svg";
import planeArrow from "../assets/planeArrow.svg";

const Card=({card,card1})=>{
    const {name,birthDate,bookingDate,totalPassenger} = card1;


    

    const {id,passengers,fname,source, destination,total,avaliable,price} = card
    console.log(card);
    const hashMap = new Map([
        ["Vistara",vistara],
        ["Indigo",indigo],
        ["Lufthansa",lufthansa],
        ["Spice Jet",spicejet],
        ["Air India",airindia]
    ]);

   

    return(
        <div className="flex flex-col w-full  ">
            
            <div className="flex flex-row bg-blue-800 h-14 w-full items-center rounded-t-md p-2 "> 
             
                    
                    <div className="flex flex-col m-4 p-2 w-24 mr-auto ml-0 ">
                    
                        <img className="w-20 " src={hashMap.get(fname)} alt={fname}/>
                    </div>
                <div className="flex flex-col  ">
                    <span className="h-3 text-xs text-left mt-8 mb-0  text-slate-300">FLIGHT</span>
                    <h6 className="text-white font-medium mb-5 pb-4 mr-5 w-24">{fname}#0{id}</h6>
                </div>
            </div>
           
            <div className="flex flex-row items-center h-14  w-full p-2">
                <div className="flex flex-col  ">
                    <span className="h-3 text-xs text-left pl-6 text-slate-400">FROM</span>
                    <h6 className="text-black font-medium pl-6 w-20">{source}</h6>
                </div>
                <div className="flex flex-row ml-4 pt-4 p-2 w-32">
                    <img className="w-50" src={planeArrow} alt={fname}/>
                </div>

                <div className="flex flex-col  ">
                    <span className="h-3 text-xs text-left pl-10 text-slate-400">TO</span>
                    <h6 className="text-black font-medium pl-10 mr-10 w-20">{destination}</h6>
                </div>
            </div>
            <div className="divider bg-slate-300 h-0.5"></div>
            <div className="flex flex-row rounded-md h-14   w-full space-x-5 items-center p-2">
                <div className="flex flex-col  ">
                    <span className="h-3 text-xs text-left pt-2 pl-6 text-slate-400">ARRIVAL</span>
                    <h6 className="text-black font-medium pt-2 pl-6 ">6:32AM</h6>
                </div>
                <div className="flex flex-col  ">
                    <span className="h-3 text-xs text-left pt-2 pl-3 text-slate-400">DEPARTURE</span>
                    <h6 className="text-black font-medium pt-2 pl-3 ">8:00AM</h6>
                </div>
                <div className="flex flex-col  ">
                    <span className="h-3 text-xs text-left pt-2 pl-6 text-slate-400">ETA</span>
                    <h6 className="text-black font-medium pt-2 pl-6 ">1hr 28m</h6>
                </div>
            </div>
            <div className="divider bg-slate-300 h-0.5"></div>
            <div className="flex flex-row rounded-md h-14   w-full space-x-5 items-center p-2">
                <div className="flex flex-col  ">
                    <span className="h-3 text-xs text-left pt-2 pl-6 text-slate-400">NAME</span>
                    <h6 className="text-black font-medium pt-2 pl-6 ">{name}</h6>
                </div>
                <div className="flex flex-col  ">
                    <span className="h-3 text-xs text-left pt-2 pl-6 text-slate-400">TOTAL SEATS</span>
                    <h6 className="text-black font-medium pt-2 pl-6 ">{totalPassenger}</h6>
                </div>
                <div className="flex flex-col  ">
                    <span className="h-3 text-xs text-left pt-2 pl-6 text-slate-400">CLASS</span>
                    <h6 className="text-black font-medium pt-2 pl-6 ">E</h6>
                </div>
            </div> 
            <div className="divider bg-slate-300 h-0.5"></div>
            <div className="flex flex-row rounded-md h-16   w-full space-x-5 p-2">
                <div className="flex flex-col  ">
                    <span className="h-3 text-xs text-left pt-2 pl-6 text-slate-400">PRICE</span>
                    <h6 className="text-black font-medium pt-2 pl-6 ">{"\u20B9 "+price}</h6>
                </div>
                <div className="flex flex-col  ">
                    <span className="h-3 text-xs text-left pt-2 pl-4 text-slate-400">DATE</span>
                    <h6 className="text-black font-medium pt-2 pl-4 ">{bookingDate}</h6>
                </div>
            </div>           
           
          
        </div>

    );
}

export default Card;