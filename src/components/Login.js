import React from 'react'

export default function Login() {

  return (
    <div>
  <div className="">
  <div className="main-content1 text-center">
  <img src="img/jeep-logo.png" className="img-fluid mt-lg-5 mt-sm-2"/>
    <p className="datetimeinfo mt-2">16<sup>th</sup> February 2022,10 am onwards </p>
<div className="d-flex justify-content-center">
<div className="col-md-6 col-sm-6 col-lg-4 col-xl-3 ">
<p className="text-white registr">LOGIN</p>
	<form>
  
    <div className="form-group row mt-lg-4 mt-sm-2">
    <label for="useremail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="useremail" autocomplete="off" />
    </div>
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
