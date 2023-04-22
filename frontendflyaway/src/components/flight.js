import React from "react";
import airindia from "../assets/airindia.svg";
import indigo from "../assets/indigo.svg";
import lufthansa from "../assets/lufthansa.svg";
import spicejet from "../assets/spicejet.svg";
import vistara from "../assets/vistara.svg";
import planeArrow from "../assets/planeArrow.svg";

const Flight=({item, handleClick})=>{

    const {id,passengers,fname,source, destination,total,avaliable,price} = item
    const hashMap = new Map([
        ["Vistara",vistara],
        ["Indigo",indigo],
        ["Lufthansa",lufthansa],
        ["Spice Jet",spicejet],
        ["Air India",airindia]
    ]);
    return(
        <div className="flex flex-col w-full">
            <div onClick={()=>handleClick(item)} className="flex flex-row hover:bg-blue-500 rounded-md items-center cursor-pointer">
        
                <div className="m-4 p-2 w-24">
                <img className="w-20 " src={hashMap.get(fname)} alt={fname}/>
                </div>
                
                <h6 className="text-black font-medium m-4 p-2 w-24">{fname}</h6>
                <h6 className="text-black font-medium m-4 p-2 w-20">{source}</h6>

                <div className="flex flex-row m-4 p-2 w-30">
                    <img className="w-50" src={planeArrow} alt={fname}/>
                </div>

                <h6 className="text-black font-medium w-24 m-4 p-2">{destination}</h6>
                <h6 className="text-black font-medium w-24 m-4 p-2">{"\u20B9 "+price}</h6>           
            </div>
            <div className="divider bg-blue-100 h-0.5"></div>
        </div>

    );
}

export default Flight;