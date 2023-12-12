import React, { useState, useEffect } from 'react';
import css from '../Css/Foodcards.css'
// import Card from '../Component/Card';
// import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer'
import Newcard from '../Component/Newcard';
import Header from '../Component/Header';
import background from "../Images/zomatoHead.webp";
import {Link} from 'react-router-dom'




const Foodcards = () => {

    const [search, setSearch] = useState("");


    const [foodCat, setfoodCat] = useState([]);
    const [foodItems, setfoodItems] = useState([]);
    // console.log(foodCat)
    // console.log(foodItems)
    // console.log("ajay is here")

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();


        // console.log(response[0],response[1])



        setfoodItems(response[0])
        setfoodCat(response[1])
    }
    useEffect(() => {
        loadData();
    }, [])


    return  <div>
        <div className="cardspage">

            <Header/>

        {/* <div className="Bheader"> */}
            

{/* <div className="head" style={{ backgroundImage: `url(${background})` }}>

<header className='headernav'>
  
    
        
    <h4 className="icon">
    Get the app
    </h4>
    <div>
    <ol>
        <li><Link className='link' to="/">Home</Link></li>
        <li>Add resturant <Link to=""></Link></li>
        <li><Link className='link' to="/login">Login</Link></li>
        <li><Link className='link' to="/Signup">Sign up</Link></li>

    </ol>
    </div>
   
</header>


<div className="mid">
    <h1>Foodiii</h1>
    <h3> Discover the best food & drinks in Delhi NCR </h3>
     <div className="search-place">
         
            <img className="location" src="../Images/location.png" alt=""/>
            <p>abca e akdjfak rls jaj</p>
            
            <img className="search" src="../Images/search.png" alt=""/>
            <input type="search"  placeholder="search for resturant,cuisine or a dish" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>     
\            
     </div>
</div>              
</div>
        
        </div> */}

<div className="search-place">
         
         {/* <img className="location" src="../Images/location.png" alt=""/>
         <p>abca e akdjfak rls jaj</p> */}
         
         <img className="HeaderSearchImg" src="../Images/search.png" alt=""/>
         <input type="search" className='HeaderSearchInput'  placeholder="search for resturant,cuisine or a dish" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>     
            
  </div>
       
        <div className="container cardmain"> 
            {
                foodCat !== []
                    ? foodCat.map((data) => {
                        return (
                            <div className='row mb-3 a1' >
                                <div key={data._id} className='fs-3 m-3 a2 ' >
                                    <div className="CategoryName">
                                    {data.CategoryName}

                                    </div>
                                    
                                  

                                </div>
                                {/* <hr /> */}

                               
                                {
                                    foodItems !== []
                                        ? foodItems.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                        .map(filterItem => {
                                            return (

                                            
                                                <div key={filterItem._id} className='col-12 col-md-6 col-lg-4 b1'>
                                                
                                                <Newcard foodItems={filterItem}
                                                options={filterItem.options[0]}
                                                >                                                
                                                </Newcard>         
                                                </div>

                                            )

                                        })
                                     : <div>no data is found</div>
                                        

                                    }

                            </div>

                        )
                    })
                    : <div>" nodata"</div>

            }
             </div>




        <div className="Bfooter">
            <Footer />       
        </div>

        </div>
    </div>;
}

export default Foodcards;
