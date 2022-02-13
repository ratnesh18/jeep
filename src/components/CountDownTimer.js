
import React,{useState,useEffect} from 'react'
import $ from 'jquery'

export default function CountDownTimer() {

    useEffect(()=>{
       
    })


  return (
    <div><div className="portrait">
    <div className="portrait-center text-center text-white">
  <img src="img/rotate.gif" className="img-fluid"/>
  <h3>Please Check Auto Rotate Before Rotate Your Device</h3>
  </div>
    </div>
    <div className="landscape">
    <div className="main-content1 text-center">
    <img src="img/jeep-logo.png" className="img-fluid mt-lg-5 mt-sm-2"/>
      <p className="datetimeinfo mt-2">16<sup>th</sup> February 2022,10 am onwards </p>
  <div className="d-flex justify-content-center">
  <div className="col-md-7 col-sm-12">
  <h1 className="thankyoutxt">EXTREME ADVENTURE
  <br/>
  WILL BEGIN SOON</h1>
  
  <div className="forqueries p-2">
  <div className="countdown countdown-container">
      <div className="clock row">
      <div className="col-3">
            <div className="clock-item clock-days countdown-time-value">
              <div className="wrap">
                  <div className="inner">
                      <div id="canvas-days" className="clock-canvas"></div>
  
                      <div className="text">
                          <p className="val mb-0">0</p>                  
                      </div>
                            <p className="type-days type-time  mb-0">DAYS</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="col-3">	
          <div className="clock-item clock-hours countdown-time-value">
              <div className="wrap">
                  <div className="inner">
                      <div id="canvas-hours" className="clock-canvas"></div>
  
                      <div className="text">
                          <p className="val mb-0">0</p>
                      </div>
                         <p className="type-hours type-time mb-0">HOURS</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="col-3">
      <div className="clock-item clock-minutes countdown-time-value">
              <div className="wrap">
                  <div className="inner">
                      <div id="canvas-minutes" className="clock-canvas"></div>
  
                      <div className="text">
                          <p className="val mb-0">0</p>                       
                      </div>
                       <p className="type-minutes type-time mb-0">MINUTES</p>
                  </div>
              </div>
          </div>
  
      </div>
      <div className="col-3">
      <div className="clock-item clock-seconds countdown-time-value">
              <div className="wrap">
                  <div className="inner">
                      <div id="canvas-seconds" className="clock-canvas"></div>
  
                      <div className="text">
                          <p className="val mb-0">0</p>                        
                      </div>
                      <p className="type-seconds type-time mb-0">SECONDS</p>
                  </div>
              </div>
          </div></div>
      
    
  
  
          
          
      </div>
  </div>
  </div>
  </div>
  </div>
     
    </div>
    </div></div>
  )
}
