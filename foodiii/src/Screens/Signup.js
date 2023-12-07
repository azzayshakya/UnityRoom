import React, { useState } from 'react';
import Css from '../Css/Signup.css'
import background from "../Images/collections-4.jpg";

import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import { Link } from 'react-router-dom';

const Signup = () => {

  const [credentials, setcredentials] = useState({ name: "", email: "", geolocation: "", password: "" ,MobileNo:""})

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ name: credentials.name, email: credentials.email, location: credentials.geolocation, password: credentials.password,MobileNo: credentials.MobileNo}))
    const response = await fetch("http://localhost:5000/api/creatuser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, location: credentials.geolocation, password: credentials.password,MobileNo: credentials.MobileNo })
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("enter valid credentials")
    }
  }
  const handleNameChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })

  }
  return <div style={{
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height:"873px"

}}>
    <div className="navbar"><Navbar /></div>

    <div className="main">

      <div className=" sign_up_form_main_container login_form_container">
        <div className="login_form">
          <h2>Sign up</h2>
          <div className="input_group">
            <i className="fa fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              className="input_text"
              // autocomplete="off"
              name="name"
              value={credentials.name}
              onChange={handleNameChange}
            />
          </div>
          
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
            <i class="fa-solid fa-location-dot"></i>
            <input
              type="text"
              placeholder="Type Your Address Here"
              className="input_text"
              autocomplete="off"
              name="geolocation"
              value={credentials.geolocation}
              onChange={handleNameChange}

            />
          </div>
          <div className="CurrentLocationBtn">
            <button>Get Your Locatoin</button>
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
          <div className="input_group">
            <i className="fa fa-unlock-alt"></i>
            <input
              placeholder="Mobile No."
              className="input_text"
              autocomplete="off"
              name="MobileNo"
              value={credentials.MobileNo}
              onChange={handleNameChange}

            />
          </div>
          <div className="button_group" onClick={handleSubmit} id="login_button">
            <a>Submit</a>
          </div>
          <div className="button_group2" id="login_button2">
            <a><Link to="/login">Already a user</Link></a>
          </div>
          {/* <div className="fotter">
          <a>Forgot Password ?</a>
          <a>SingUp</a>
        </div> */}
        </div>
      </div>
    </div>


    {/* <script src="login.js"></script>  */}


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    {/* <div className="footer">
      <Footer />
    </div> */}
  </div>;
}
export default Signup;