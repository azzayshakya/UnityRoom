import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import Css from '../Css/Header.css'
import background from "../Images/collection-3.jpg";
import Imageslogo from '../Images/logo.png'

import { Badge } from 'react-bootstrap-v5';
import Cart from '../Screens/Cart';
// import Modal from '../Modal';
import Modal from '../Modal';
import { useCart } from './ContextReducer';
// import Cart from "..Screens/Cart";
// import location from "../Images/location.png";
// import search from "../Images/search.png";
// import {Link} from 'react-router-dom'

const Header = () => {

    const [cartView,setCartView] = useState(false);
    let data = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("authtoken1")
        console.log(localStorage.getItem("authToken"))
        console.log("authtoken2")

        console.log(localStorage.getItem("authToken2"))


        localStorage.removeItem("authToken")
        localStorage.removeItem("authToken2")


        // console.log("random value")
        // console.log(localStorage.getItem("resturentId"))
        // localStorage.removeItem("randomNumber")
        

        navigate("/login")
        
    };
    return <div>

        <div className="head" style={{ backgroundImage: `url(${background})` }}>

            <header className='headernav'>
                <h4 className="icon" >
                  
                </h4>
                <div>
                    <ol>
                        <li><Link className='link myOrder' to="/">Home</Link></li>
                        {(!localStorage.getItem("authToken2")) ?
                            <li><Link className='link myOrder' to="/RagisterResturent">Your_Resturent</Link></li>


                            : " "}


                        {(localStorage.getItem("authToken2")) ?
                            <li><Link className='link myOrder' to="/RestOrder">Resturent_Orders</Link></li>

                            : " "}


                        

                        {(localStorage.getItem("authToken")) ?
                            <li><Link className='link myOrder' to="/myOrder">My Orders</Link></li>

                            : " "}

                        {(!localStorage.getItem("authToken")) ?

                            <div className='abc'>
                                <li><Link className='link' to="/login">Login</Link></li>
                                <li><Link className='link' to="/Signup">Sign up</Link></li>
                            </div>

                            : <div className='cde'>
                                <div onClick={handleLogout}>
                                <li> <Link to="" className='link myOrder'>Log Out</Link></li>
                            </div>

                                <div className="efg asdf"  onClick={()=>{setCartView(true)}}>
                                    <li>Cart <Link to=""></Link></li>                            
                                    <Badge pill bg="danger cartBadge">{data.length}</Badge>
                                </div>

                                {cartView? <Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
                            </div>
                        }
                    </ol>
                </div>
            </header>
            <div className="mid">
                <h1>Foodiii</h1>
                <h3 className='headertag'>Anything, anytime, anywhere. We deliver it all.</h3>
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