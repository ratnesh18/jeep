
import React,{useState,useEffect} from 'react'
import $ from 'jquery'
import {useNavigate} from 'react-router-dom';

export default function CountDownTimer() {
    const navigate = useNavigate()
    useEffect(()=>{
        
        if(localStorage.getItem("allowLogin")){
            farwordToAudi();

            setInterval(()=>{
                farwordToAudi();
            },1000)
       
        }else{
          navigate("/login")
        }


    })

    const farwordToAudi=()=>{
        var h=  document.getElementById("hrCounter").innerHTML;
        var m=  document.getElementById("minCounter").innerHTML;
        var s=  document.getElementById("secCounter").innerHTML;
        console.log("mmm h m s ",h+" "+m+" "+s);
       if(h == 0 && m == 0 && s == 0 ){
           
        console.log(" h m s ",h+" "+m+" "+s);
        navigate("/audi")
       }
    }

    window.addEventListener('orientationchange', function(event) {
        console.log("orintation changed")
        window.location.reload();
   });


  return (
    <div>
    <div className="landscape">
    <div className="main-content1 text-center">
    <img src="img/jeep-logo.png" className="img-fluid mt-lg-5 mt-sm-2"/>
      <p className="datetimeinfo mt-2">16<sup>th</sup> February 2022,10 am onwards </p>
  <div className="d-flex justify-content-center">
  <img src="img/mountain.png" class="img-fluid mountain"/>
  <div className="col-md-9 col-xl-7 col-sm-12">
  <h1 className="thankyoutxt">ADVENTURE
  <br/>
  WILL BEGIN SOON</h1>
  
  <div class="forqueries p-2 col-md-12 col-xl-6 col-sm-12 m-auto">
  <div className="countdown countdown-container">
      <div className="clock row d-flex justify-content-center">
      {/* <div className="col-sm-3 col-xl-4 mt-3 mb-5">
            <div className="clock-item clock-days countdown-time-value">
              <div className="wrap">
                  <div className="inner">
                      <div id="canvas-days" className="clock-canvas"></div>
  
                      <div className="text">
                          <p className="val mb-0">0</p>                  
                      </div>
                            <p className="type-days type-time  mb-0 mt-2">DAYS</p>
                  </div>
              </div>
          </div> 
            
      </div> */}
      <div className="col-sm-3 col-xl-4 mt-3 mb-5">	 
          <div className="clock-item clock-hours countdown-time-value"> 
              <div className="wrap">
                  <div className="inner">
                      <div id="canvas-hours" className="clock-canvas"></div>
  
                      <div className="text">
                          <p className="val mb-0" id="hrCounter">0</p>
                      </div>
                         <p className="type-hours type-time mb-0 mt-2">HOURS</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="col-sm-3 col-xl-4 mt-3 mb-5">
      <div className="clock-item clock-minutes countdown-time-value">
              <div className="wrap">
                  <div className="inner">
                      <div id="canvas-minutes" className="clock-canvas"></div>
  
                      <div className="text">
                          <p className="val mb-0" id="minCounter">0</p>                       
                      </div>
                       <p className="type-minutes type-time mb-0 mt-2">MINUTES</p>
                  </div>
              </div>
          </div>
          </div>
          <div className="col-sm-3 col-xl-4 mt-3 mb-5">
          <div class="clock-item clock-seconds countdown-time-value">
            <div class="wrap">
                <div class="inner">
                    <div id="canvas-seconds" class="clock-canvas"></div>

                    <div class="text">
                        <p class="val mb-0" id="secCounter">0</p>                        
                    </div>
					<p class="type-seconds type-time mb-0 mt-2">SECONDS</p>
                </div>
            </div>
        </div>
        </div>
  
      
           
      </div>
  </div>
  </div>
  </div>
  </div>
     
    </div>
    </div></div>
  )
}
