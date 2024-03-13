import React from "react";
import Navbar from "../component/Navbar";
import css from '../Css/Home.css'
import HomeMid from "../component/HomeMid";

const Home =()=>{
    return (<>
    <div className="Home">
    <Navbar/>
    <HomeMid/>
    </div>
    </>)
}
export default Home;