import React from 'react'
import axios from 'axios'

import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  
  email: yup.string().required(),
  
})
export default function Login() {

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate()
  const onSubmit = (data,e )=>{
    console.log("FormData",data);
   // navigate("/thank-you")
    e.preventDefault();

    axios
    .post('https://api.jeep-adc2022.com/api/auth/login', data)
    .then(function (response) {
     // console.log("Response",response.data);
      if(!response.data.status){
      // console.log("Errrrr",response.data.message)
        if(response.data.message==="unauthorized"){
          document.getElementById("allowLogin").innerHTML="Please contact <a href='mailto:gurdit.lugani@stellantis.com'>gurdit.lugani@stellantis.com</a>"
        }
        if(response.data.message==="unregistred"){
          document.getElementById("allowLogin").innerHTML="Kindly register yourself <a href='/register'>here</a>"
        }
      //  document.getElementById("allowLogin").innerHTML=response.data.message
        
      }else{
        localStorage.setItem("allowLogin","true")
        //navigate("/event")
        window.location.href="/event"
      }

    })
    .catch(function (error) {
        console.log(error);
       
    });
  } 

  

  return (
    <div>
  <div className="landscape">
  <div className="main-content1 text-center">
  <img src="img/jeep-logo.png" className="img-fluid mt-lg-5 mt-sm-2"/>
    <p className="datetimeinfo mt-2">16<sup>th</sup> February 2022,10 am onwards </p>
<div className="d-flex justify-content-center">
<img src="img/mountain.png" class="img-fluid mountain"/>
<div className="col-md-6 col-sm-6 col-lg-4 col-xl-3 ">
<p className="text-white registr">LOGIN</p>

<p  style={{color:'white'}} id="allowLogin"></p>
	<form onSubmit={handleSubmit(onSubmit)}>
  
    <div className="form-group row mt-lg-4 mt-sm-2  text-left">
    <label for="useremail" className="col-sm-2 col-form-label ">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="useremail" {...register("email", { required: true, maxLength: 20 })} autoComplete="off" />
    </div>
  </div>
    
  <div className="form-group mt-lg-4 mt-sm-2 text-left">
 
  </div>
  <div className="form-group mt-lg-4 mt-sm-2 text-right">
     <button type="submit" className="btn btn-jeep pl-3 pr-3">LOGIN</button>
  </div>
</form>

</div>
</div>
  
  </div>
  </div></div>
  )
}
