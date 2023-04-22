import React,{useRef} from 'react';
import './App.css';
import Home from './pages/home'
import Booking from './pages/booking';
import Payment from './pages/payment2';
import Confirmation from './pages/confirmation';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App=()=> {
  return(
    <>
   
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/booking" element={<Booking/>}/>
          <Route exact path="/payment" element={<Payment/>}/>
          <Route exact path="/confirmation" element={<Confirmation/>}/>
        </Routes>
      </BrowserRouter>
      
     
        
      

    </>
  );
};

export default App;