
import React,{useState,useEffect} from 'react'
import $ from 'jquery'
import {useNavigate} from 'react-router-dom';

export default function CountDownTimer() {
    const navigate = useNavigate()
    var audiMover;
    useEffect(()=>{
        
        if(localStorage.getItem("allowLogin")){
            
             audiMover= setInterval(()=>{
                      farwordToAudi();
             },1000)
             farwordToAudi();
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
        clearInterval(audiMover)
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
    <img src="img/afterlogin.png" className="img-fluid afterlogin"/>
    <div className="d-flex justify-content-center">
    <div className="col-xl-2 col-sm-4 col-md-3 ">
  <div className="logintimer container">

  <div className="countdown countdown-container">
    <div className="clock row">

	<div className="col-sm-3 col-xl-4 col-md-4 mt-3 mb-5 pl-sm-0 pr-sm-0  pl-xl-0 pr-xl-3  pr-md-2">	
        <div className="clock-item clock-hours countdown-time-value">
            <div className="wrap">
                <div className="inner">
                    <div id="canvas-hours" className="clock-canvas"></div>

                    <div className="text">
                        <p className="val mb-0" id="hrCounter">0</p>
                    </div>
					   <p className="type-hours type-time mt-xl-1 mt-sm- mb-0">HOURS</p>
                </div>
            </div>
        </div>
	</div>
	<div className="col-sm-3 col-xl-4 col-md-4 mt-3 mb-5 pl-sm-0 pr-sm-0  pl-xl-0 pr-xl-3  pr-md-2">
	<div className="clock-item clock-minutes countdown-time-value">
            <div className="wrap">
                <div className="inner">
                    <div id="canvas-minutes" className="clock-canvas"></div>

                    <div className="text">
                        <p className="val mb-0" id="minCounter">0</p>                       
                    </div>
					 <p className="type-minutes type-time mt-xl-1 mt-sm- mb-2">MINUTES</p>
                </div>
            </div>
        </div>

	</div>
	<div className="col-sm-3 col-xl-4 col-md-4 mt-3 mb-5 pl-sm-0 pr-sm-0 pl-xl-0 pr-xl-3 pl-md-0 pr-md-2">
          <div className="clock-item clock-seconds countdown-time-value">
            <div className="wrap">
                <div className="inner">
                    <div id="canvas-seconds" className="clock-canvas"></div>

                    <div className="text">
                        <p className="val mb-0" id="secCounter">0</p>                        
                    </div>
					<p className="type-seconds type-time mb-0 mt-xl-1 mt-sm-0">SECONDS</p>
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
