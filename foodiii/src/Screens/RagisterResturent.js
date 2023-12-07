import React, { useState} from 'react';

import background from "../Images/collections-4.jpg";
import Navbar from '../Component/Navbar';
import {Link,useNavigate } from 'react-router-dom'



const RagisterResturent = () => {
    const[credentials , setcredentials] =useState({
      "MobileNo":"",
      "password":"",
      "resturentId":""
    })
    let navigate=useNavigate();
    const handleSubmit=async(e) =>{
    e.preventDefault();
    console.log(JSON.stringify({resturentId:credentials.resturentId,MobileNo:credentials.MobileNo,password:credentials.password}))
    const response = await fetch("http://localhost:5000/api/authenticateResturent",{
      method :"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(credentials)
    });
    const json =await response.json();
    console.log(json); 
    if(!json.success){
      alert("enter valid credentials")
    }
    if(json.success){
      localStorage.setItem("resturentId",credentials.resturentId)

      localStorage.setItem("authToken2",json.authToken2)

      
      console.log("auth2 is here")
      console.log(localStorage.getItem("authToken2"))



      
      // console.log("here your auth token 2")
      // localStorage.setItem("authToken2",json.authToken)
      // console.log(localStorage.getItem("authToken2"))

      // console.log("here your auth token 1")
      // console.log(localStorage.getItem("authToken"))
      


      // console.log("resturentId:",localStorage.getItem("resturentId"))
    

       navigate("/");
    }
  }
  const handleNameChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }
    return (
    <div style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height:"790px"
  
    }}>
        <div className="navbar">
        {/* <Navbar/> */}
        </div>
  
        <div className="main">    
          
        <div className="login_form_container">
        <div className="login_form">
          <h2 className='animate_animated animate_bounce animate_infineite'>Your Resturent</h2>
          <div className="input_group">
              <i class="fa-solid fa-square-envelope"></i>
              <input
                type="text"
                placeholder="Resturent I'd"
                className="input_text"
                autocomplete="off"
                name="resturentId"
                value={credentials.resturentId}
                onChange={handleNameChange}
              />
            </div>
            <div className="input_group">
              <i className="fa fa-unlock-alt"></i>
              <input
                type="number"
                placeholder="Mobile No"
                className="input_text"
                autocomplete="off"
                name="MobileNo"
                value={credentials.MobileNo}
                onChange={handleNameChange}
              />
            </div>

            <div className="input_group">
              <i className="fa fa-unlock-alt"></i>
              <input
                type="password"
                placeholder="Password"
                className="input_text"
                autocomplete="off"
                name="password"
                value={credentials.password}
                onChange={handleNameChange}
              />
            </div>
            <div className="button_group" onClick={handleSubmit} id="login_button">
          <a>Submit</a>
        </div>
        </div>
        </div> 
    </div>
  
    
     
      
  
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </div>);
}

export default RagisterResturent;