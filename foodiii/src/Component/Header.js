import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import Css from '../Css/Header.css'
import background from "../Images/zomatoHead.webp";
import { Badge } from 'react-bootstrap-v5';
import Cart from '../Screens/Cart';
// import Modal from '../Modal';
import Modal from '../Modal';
// import Cart from "..Screens/Cart";
// import location from "../Images/location.png";
// import search from "../Images/search.png";
// import {Link} from 'react-router-dom'

const Header = () => {

    const [cartView,setCartView] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken")
        navigate("/login")

    };
    return <div>

        <div className="head" style={{ backgroundImage: `url(${background})` }}>

            <header className='headernav'>
                <h4 className="icon">
                    Get the app
                </h4>
                <div>
                    <ol>
                        <li><Link className='link' to="/">Home</Link></li>

                        {(localStorage.getItem("authToken")) ?
                            <li><Link className='' to="">My Orders</Link></li>

                            : " "}

                        {(!localStorage.getItem("authToken")) ?

                            <div className='abc'>
                                <li><Link className='link' to="/login">Login</Link></li>
                                <li><Link className='link' to="/Signup">Sign up</Link></li>
                            </div>

                            : <div className='cde'>
                                <div onClick={handleLogout}>
                                <li>Log Out <Link to=""></Link></li>


                                </div>

                                <div className="efg"  onClick={()=>{setCartView(true)}}>
                                    <li>Cart <Link to=""></Link></li>
                                    
                                    <Badge pill bg="danger">2</Badge>
                                </div>

                                {cartView? <Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
                            </div>
                        }
                    </ol>
                </div>
            </header>
            <div className="mid">
                <h1>Foodiii</h1>
                {/* <h3> Discover the best food & drinks in Delhi NCR </h3>
                <div className="search-place">

                    <img className="location" src="../Images/location.png" alt="" />
                    <p>abca e akdjfak rls jaj</p>

                    <img className="search" src="../Images/search.png" alt="" />
                    <input type="search" placeholder="search for resturant,cuisine or a dish" /> */}
                    
                {/* </div> */}
            </div>
        </div>
    </div>;
}



export default Header;