import React from 'react';
import Css from '../Css/Login.css'
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';

const Singup = () => {
    return <div>
         <div className="navbar"><Navbar/></div>

<div className="main">
 
        
    <div className="login_form_container">
      <div className="login_form">
        <h2>Login</h2>
        <div className="input_group">
          <i className="fa fa-user"></i>
          <input
            type="text"
            placeholder="Username"
            className="input_text"
            autocomplete="off"
          />
        </div>
        <div className="input_group">
          <i className="fa fa-user"></i>
          <input
            type="email"
            placeholder="Type Your E-mail Here"
            className="input_text"
            autocomplete="off"
          />
        </div>
        <div className="input_group">
          <i className="fa fa-user"></i>
          <input
            type="text"
            placeholder="Type Your Address Here"
            className="input_text"
            autocomplete="off"
          />
          <div className="CurrentLocation">
            
          </div>
        </div>
        <div className="input_group">
          <i className="fa fa-unlock-alt"></i>
          <input
            type="password"
            placeholder="Password"
            className="input_text"
            autocomplete="off"
          />
        </div>
        <div className="button_group" id="login_button">
          <a>Submit</a>
        </div>
        <div className="fotter">
          <a>Forgot Password ?</a>
          <a>SingUp</a>
        </div>
      </div>
    </div>
    </div>

  
    {/* <script src="login.js"></script>  */}
    

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <div className="footer">
    <Footer/>
    </div>



    </div>;
}
export default Singup;