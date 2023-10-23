import React from 'react';

import Css from '../Css/Header.css'
import background from "../Images/zomatoHead.webp";
import location from "../Images/location.png";
import search from "../Images/search.png";

import {Link} from 'react-router-dom'

const Header = () => {
    return <div>

<div className="head" style={{ backgroundImage: `url(${background})` }}>

           <header>
             
               
               <h4 className="icon">
                   Get the app
               </h4>
               <ol>
                   <li><Link className='link' to="/">Home</Link></li>
                   <li>Add resturant <Link to=""></Link></li>
                   <li><Link className='link' to="/login">Login</Link></li>
                   <li><Link className='link' to="/Signup">Sign up</Link></li>

               </ol>
              
           </header>
       
       
           <div className="mid">
               <h1>Foodiii</h1>
               <h3> Discover the best food & drinks in Delhi NCR </h3>
                   <div className="search-place">
                    
                       <img className="location" src="../Images/location.png" alt=""/>
                       <p>abca e akdjfak rls jaj</p>
                       
                       <img className="search" src="../Images/search.png" alt=""/>
                       <input type="text" placeholder="search for resturant,cuisine or a dish"/>
                       
                   </div>
           </div>
       
       
       </div>



    </div>;
}



export default Header;