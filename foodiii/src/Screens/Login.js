import React, { useState} from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import Css from '../Css/Login.css'

import {Link,useNavigate } from 'react-router-dom'
const Login = () => {
  const[credentials , setcredentials] =useState({email:"", password:""})
  let navigate=useNavigate();

  const handleSubmit=async(e) =>{
    e.preventDefault();
    console.log(JSON.stringify({email:credentials.email,password:credentials.password}))
    const response = await fetch("http://localhost:5000/api/loginuser",{
      method :"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:credentials.email,password:credentials.password})
    });
    const json =await response.json();
    console.log(json); 
    if(!json.success){
      alert("enter valid credentials")
    }
    if(json.success){
      localStorage.setItem("userEmail",credentials.email)

      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
       navigate("/");
    }

  }
  const handleNameChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})

  }


    return (<div>
      <div className="navbar"><Navbar/></div>

      <div className="main">    
        
      <div className="login_form_container">
      <div className="login_form">
        <h2 className='animate_animated animate_bounce animate_infineite'>Login</h2>
        <div className="input_group">
            <i class="fa-solid fa-square-envelope"></i>
            <input
              type="email"
              placeholder="Type Your E-mail Here"
              className="input_text"
              autocomplete="off"
              name="email"
              value={credentials.email}
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
        <div className="fotter">
          {/* <a>Forgot Password ?</a> */}
          <a><Link className="signuplink" to="/Signup">Signup</Link></a>
        </div>
      </div>
    </div>

    
    </div>

  
    {/* <script src="login.js"></script>  */}
    

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    

    <div className="footer">
    <Footer/>
    </div>




    </div>);
}



export default Login;