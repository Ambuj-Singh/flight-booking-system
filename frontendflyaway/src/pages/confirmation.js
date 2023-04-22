import React from "react";
import Card from "../components/card";
import Ticket from "../components/ticket";
import { useNavigate,useLocation } from "react-router-dom";
import { data } from "autoprefixer";

const Confirmation=()=>{

    const {state} = useLocation();
    const  {pname,birth_date, booking_date,total_passenger,amount,flight} = state.data;
    console.log(state);
    

    const ticketdata = state.data;
    return (
        <div>
            <Ticket card={ticketdata}/>
             
        </div>
    );
}

export default Confirmation;