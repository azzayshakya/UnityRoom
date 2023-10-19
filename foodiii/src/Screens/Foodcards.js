import React from 'react';
import css from '../Css/Foodcards.css'
import Card from '../Component/Card';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer'
const Foodcards = () => {
    return <div>
        <div className="navbar"> 
        <Navbar/>
        
        </div>
        <div className="cardmain">
            <Card/>
            <Card/>
            <Card/>
           

           
        </div>
        <div className="cardmain">
            <Card/>
            <Card/>
            <Card/>
           

           
        </div>
        <div className="cardmain">
        
           

           
        </div>
        <div className="footer">
            <Footer/>
        </div>

    </div>;
}
export default Foodcards;