import axios from 'axios'
import React, { useEffect, useState } from 'react'
import $ from 'jquery'

import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"


export default function Users() {

    const[users,setUsers]=useState([])
    const[userCat,setUserCat]=useState('login')
    
    useEffect(()=>{
        
			$('#example').DataTable(); 
		
    },[users])


    useEffect(()=>{
      const obj={
          "type":localStorage.getItem("UserCategory")
      }  
    // console.log("obj ",obj)
      axios
    .post('https://api.jeep-adc2022.com/api/auth/users', obj)
    .then(function (response) {
       // $("#tableBody").empty();
      console.log("Response",response.data);
      if(!response.data.status){
        setUsers([])
      }else{
       
        setUsers([])
        setUsers(response.data.users)
        
      }

    })
    .catch(function (error) {
        console.log(error);
       
    });

    },[userCat])

    const handleSelect= (e) =>{

        localStorage.setItem("UserCategory",e);
      
        window.location.reload()
        
    }
  return (
    <div>
        <div className="main-container" style={{backgroundColor:"white",color:"black"}}>



		<div className="pd-ltr-20 xs-pd-20-10">
			<div className="min-height-200px">
			
                    <div className="card-box mb-30">
					<div className="pd-20">

                    <div className="clearfix mb-20">
					  <div className="pull-left">
							<h4 className="text-blue h4">User List</h4>
						</div>
						 
                           
					</div>
                    <div className="clearfix mb-20">

                    <div className="col-sm-3">
                    <div className="form-group">
                    
                        <label htmlFor="category"><strong>Select User category</strong></label>
                    <select className="form-control" id="category" onChange={e=>handleSelect(e.target.value)}>

                           <option className="dropdown-item" value="" >All</option>
                           <option className="dropdown-item" value="register" >Register</option>
                           <option className="dropdown-item" value="login" >Login</option>
                          
                    </select>
                    
                    </div>
                    </div>
                   
                        </div>
                    <div id="errorMsg" style={{"color":"red"}}></div>
                    <h4 className="text-blue h4"></h4>
                   
                        <hr/>
						<div className="pb-20 table-responsive">
                            
                            {users && users.length>0?(
                                <table id="example" className="display" style={{"width":"100%"}}>
        <thead>
            <tr>
                <th>S.No.</th>                
                <th>Name</th>
                <th>Email</th>
                <th>mobile</th>
                <th>City</th>
                <th>Join</th>
               
               
            </tr>
            
        </thead>
        <tbody id="tableBody">
            {
                
                users && users.map(
                    (reg,index)=>
                   <> <tr key={index}>
                    <td>{index+1}</td>
                    <td>{reg.name}</td>
                    <td>{reg.email}</td>
                    <td>{reg.mobile}</td>
                    <td>{reg.city}</td>
                    <td>{reg.join}</td>
                    
                    </tr></>
                )
            }
            
			
			 
			</tbody>
			</table>
                            ):"No Users found!"}
						

					</div>
					</div>					
				</div>
                    
                
			</div>
			
			
		</div>
	</div>
    </div>
  )
}
