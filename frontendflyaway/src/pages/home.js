import React from "react";
import Title from "../components/title";
import '../App.css';
import MaterialIcon from "material-icons-react"
import Flight from "../components/flight";
import { useEffect, useRef,useState } from "react";
import {  useNavigate } from "react-router-dom";

import { list } from "postcss";
import { data } from "autoprefixer";
import Booking from "./booking";

const Home = () => {
    const sourceRef = useRef();
    const destinationRef =useRef();
    const [list,setList] = useState([])
    const navigate = useNavigate();


    useEffect(() =>{
        {getAll()}
    },[]);

  function Search(e){
    const source = sourceRef.current.value
    const destination = destinationRef.current.value
    const flight = {source,destination}
    
    

    fetch("http://localhost:9090/api/flight/get",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(flight)
      

    }).then((response)=>response.json()).then((data)=>{
      setList(data)
    })

  }
    function getAll(){
        fetch("http://localhost:9090/api/flight/getAll",{
          method:"GET",
          headers:{"Content-Type":"application/json"}

        }).then((response)=>response.json()
         
        ).then((data)=>{
          setList(data)
        })
    
        }

        const handleClick = (item) => {
          console.log(item);
          navigate('/booking',{state:{item}})
        };


    return(
        <div className="flex flex-col items-center ">
        <Title
        param='Flyaway'/>
        <div className="flex flex-col  bg-blue-500 mt-10 rounded-md">
        <div className="flex flex-row rounded-md m-4 items-center p-4">
       
            <input ref={sourceRef} className="rounded-md m-4 p-2 shadow-lg" type="text" placeholder="From" ></input>
            <input ref={destinationRef} className="rounded-md m-4 p-2 shadow-lg" type="text" placeholder="To"></input>
      
        <button className="bg-blue-300 rounded-full w-15 h-10 p-3 mt-5 mb-2 border shadow-lg ml-auto mr-10" onClick={Search} >
            <MaterialIcon icon="search"/>
          
        </button>
        </div>
       
        <div className="rounded-md bg-white p-2 m-10 ">
          {list.map((item)=>(
            <Flight key={item.id} item={item} handleClick={handleClick}/>
          ))}
          </div>
        </div>

        
            	

        
    
 </div>  
        
    );
};

export default Home;