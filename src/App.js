
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import ThankYou from './components/ThankYou';
import CountDownTimer from './components/CountDownTimer';
import Audi from './components/Audi';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import { useEffect, useState } from 'react';
import Test from './components/Test';
import axios from 'axios';

function App() {

  const[routFlag,setRoutFlag]=useState(false)

  // useEffect(()=>{
  //   getEventTime();
  // //   setInterval(()=>{
  // //    console.log("Interval")
  // //   // setRoutFlag(true)
  // //  },10000)
  // },[])

  // const getEventTime=()=>{
  //   axios
  //   .post('https://api.jeep-adc2022.com/api/auth/refresh')
  //   .then(function (response) {
  //     console.log("Res ",response.data.setting.event_time)
  //     var dataBaseTime=response.data.setting.event_time
  //     var arrdt= dataBaseTime.split("/");
  //     console.log("Res ",arrdt) ; 
  //     var eventdt = new Date(arrdt[0], arrdt[1], arrdt[2],arrdt[3],arrdt[4],arrdt[5],arrdt[6],arrdt[7]);
  //     console.log("eventdt",eventdt);
  //     var currdt = new Date(); 
  //     if(eventdt>currdt){
  //       console.log("Waiting Event")
  //     } else{
  //       console.log("Event on")
  //     } 
  //    // console.log("Res ",arrdt) ;        

  //   })
  //   .catch(function (error) {
  //       console.log(error);
       
  //   });
  // }

  //  useEffect(()=>{
  //    getEventTime();
  //   //  setInterval(()=>{
  //   //   console.log("Interval")
  //   // //  setRoutFlag(true)
  //   // },10000)
  //  },[])

  return (<div>
             <div class="portrait">
             <div class="portrait-center text-center text-white">
             <img src="img/rotate.gif" class="img-fluid"/>
             <p>Please rotate your device to view the event</p>
             <p>Ensure screen rotation is enabled in your <br/> device settings</p>
        </div>
  </div>
    
       <Router> 
        <Routes>
          <Route path='/thank-you' element={<ThankYou/>}/>
          <Route path='/audi' element={<Audi/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/event' element={<CountDownTimer/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
