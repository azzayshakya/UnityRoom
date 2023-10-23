import React from 'react';
import Css from '../Css/Navbar.css'
import { Link } from 'react-router-dom'
import background from "../Images/zomatoHead.webp";


const Navbar = () => {
    return <div>
        <header style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center"
        }}>


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


    </div>;
}
export default Navbar;