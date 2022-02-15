import React from 'react'
import axios from 'axios'

import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
     name: yup.string().required(),
     email: yup.string().required(),
     city: yup.string().required(),
    mobile: yup.number().typeError( "That doesn't look like a phone number" ).required().positive().min(10)
  })

export default function Register() {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
    const navigate = useNavigate()

    const onSubmit = (data,e )=>{
        console.log("FormData",data);
       // navigate("/thank-you")
        e.preventDefault();
  
        axios
        .post('https://api.jeep-adc2022.com/api/auth/register', data)
        .then(function (response) {
          console.log("Response",response.data);
          if(!response.data.status){
            
            if(response.data.message==="unauthorized"){
              document.getElementById("allow").innerHTML="Please contact <a href='mailto:gurdit.lugani@stellantis.com'>gurdit.lugani@stellantis.com</a>"
            }
            
              if(response.data.errors.mobile===undefined || response.data.errors.mobile==='' ){
                document.getElementById("mobileCheck").innerHTML=""
              }else{
                document.getElementById("mobileCheck").innerHTML=response.data.errors.mobile
              }
          
          }else{
            navigate("/thank-you")
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
  <p className="text-white registr">REGISTER</p>
  <p  style={{color:'white'}} id="allow"></p>
  <p  style={{color:'red'}} id="mobileCheck"></p>
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group row mt-lg-4 mt-sm-2  text-left">
      <label for="username" className="col-sm-2 col-form-label">Name</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" id="username" {...register("name", { required: "Please enter your name", maxLength: 20 })} autoComplete="off" />
        {errors.name && <span style={{color:'red'}}>*Name is required</span>}
      </div>
    </div>
      <div className="form-group row mt-lg-4 mt-sm-2  text-left">
      <label for="useremail" className="col-sm-2 col-form-label">Email</label>
      <div className="col-sm-10">
        <input type="email" className="form-control" id="useremail" {...register("email", { required: true, maxLength: 20 })} autoComplete="off" />
        {errors.email && <span style={{color:'red'}}>*Email is required</span>}
      </div>
    </div>
      <div className="form-group row mt-lg-4 mt-sm-2  text-left">
      <label for="usermobile" className="col-sm-2 col-form-label">Mobile</label>
      <div className="col-sm-10">
        <input type="number"  className="form-control" id="usermobile" {...register("mobile")}   autoComplete="off" />
        {errors.mobile && <span style={{color:'red'}}>*Mobile no is required only 10 digits</span>} 
        
      </div>
    </div>
     <div className="form-group row mt-lg-4 mt-sm-2  text-left">
      <label for="usercity" className="col-sm-2 col-form-label">City</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" id="usercity" {...register("city", { required: true, maxLength: 20 })} autoComplete="off" /> 
        {errors.city && <span style={{color:'red'}}>*City is required</span>}
      </div>
    </div>
    <div className="form-group mt-lg-4 mt-sm-2">
       <button type="submit" className="btn btn-jeep pl-3 pr-3">SUBMIT</button>
    </div>
  </form>
  
  </div>
  </div>
    </div>
    
    
    </div></div>
  )
}
