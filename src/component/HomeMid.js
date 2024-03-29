import React from "react";
import '../Css/HomeMid.css'
import { Link } from "react-router-dom";
const HomeMid=()=>{
    return(<>
   <div className="HomeMid">

    <div className="about">
        <h1>Bringing People <span className="aboutTogether">Together </span> ,Anywhere.</h1>
        <p>Experience seamless communication with ironclad security. Connect, share screens, and innovate together, <br />hassle-free.</p>
        
    </div>

    {(localStorage.getItem("authToken")) ?
    <div className="midHomeButton">

    <Link to={"/CreateMeet"}><button>Make-Room</button></Link>       
    <Link  to={"/JoinMeet"}><button className="midHomeButton2nd">Join-Room</button></Link>
    </div>
    :
    <div  className="LoginRequestOnHomeMid">
        <p>*Please  <span>Login</span> OR create a <span>new Account .</span> </p>
    </div>

    }
    

   </div>
    </>)
}
export default HomeMid;