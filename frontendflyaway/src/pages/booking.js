import React,{useState} from "react";
import Title from "../components/title";
import { useLocation } from "react-router-dom";
import Card from "../components/card";
import {  useNavigate } from "react-router-dom";


const Booking = () => {
    const [name,setName] = useState('');
    const [birthDate,setBirthDate] = useState('');
    const [bookingDate,setBookingDate] = useState('');
    const [totalPassenger,setTotalPassenger] = useState(0);
    const {state} = useLocation();
    const navigate = useNavigate();
    console.log(state);

    const {id,passengers,fname,source, destination,total,avaliable,price} = state.item;
    const flight = state.item;

    const card1 = {name,birthDate,bookingDate,totalPassenger};
    console.log(card1);

    function handleAddPassenger(e){
        const pname = name;
        const birth_date= birthDate;
        const booking_date= bookingDate;
        const total_passenger = totalPassenger;
        const amount = price;
       
        
        const passenger = {pname,birth_date, booking_date,total_passenger,amount,flight,card1}
        console.log(passenger)
        navigate('/payment',{state:{passenger}})
       
       
      }
    

   
    return(
   
            <div className="flex flex-col items-center ">
                <div className="mt-5 p-4">
                    <Title className="text-5xl" param="Booking"/>
                </div>
                <div className="flex flex-col items-center p-0.5 rounded-md  bg-blue-500">
                    <div className="flex flex-row">
                        <div className="flex flex-col rounded-md mt-20 m-20 p-4">
                            <div className="flex flex-col m-auto  ">
                                <span className="h-3 text-xs text-left ml-2 text-blue-900">NAME</span>
                                <input value={name} onChange={(e)=>setName(e.target.value)} className=" rounded-md m-2 p-2 w-56 shadow-lg placeholder-black" placeholder="Enter your name" type="text"/>
                            </div>
                            <div className="flex flex-col m-auto  ">
                                <span className="h-3 text-xs text-left ml-2  text-blue-900" >BIRTHDATE</span>
                                <input value={birthDate} onChange={(e)=>setBirthDate(e.target.value)} className=" rounded-md m-2 p-2 w-56 shadow-lg  " type="date"/>
                            </div>
                            <div className="flex flex-col m-auto  ">
                                <span className="h-3 text-xs text-left ml-2  text-blue-900" >BOOKING DATE</span>
                                <input value={bookingDate} onChange={(e)=>setBookingDate(e.target.value)} className=" rounded-md m-2 p-2 w-56 shadow-lg  " type="date"/>
                            </div>
                            <div className="flex flex-col m-auto  ">
                                <span className="h-3 text-xs text-left ml-2  text-blue-900" >SEATS</span>
                                <input value={totalPassenger} onChange={(e)=>setTotalPassenger(e.target.value)} className=" rounded-md m-2 p-2 w-56 shadow-lg  placeholder-black" placeholder="Total passengers" type="number"/>
                            </div>
                            

                        </div>
                        <div className="mr-10 mt-20 m-auto bg-white rounded-md shadow-lg">
                            <Card  card={state.item} card1={card1} />                 
                        </div>
                
                    </div>
                <button className="rounded-md bg-white w-60 p-2 text-black text-lg shadow-2xl mb-10" onClick={handleAddPassenger} >Submit</button>
                
                </div>
            </div>
               
    );
}

export default Booking;