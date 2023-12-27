import React, { useState, useEffect } from 'react';
import css from '../Css/Foodcards.css'
import Footer from '../Component/Footer'
import Newcard from '../Component/Newcard';
import Header from '../Component/Header';
import background from "../Images/zomatoHead.webp";
import {Link} from 'react-router-dom'
import background2 from "../Images/collections-1.jpg";
import { responsiveFontSizes } from '@mui/material';





const Foodcards = () => {

    const [search, setSearch] = useState("");
    const [foodCat, setfoodCat] = useState([]);
    const [foodItems, setfoodItems] = useState([]);


    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();

        setfoodItems(response[0])
        setfoodCat(response[1])
    }
    useEffect(() => {
        loadData();
    }, [])


    return  <div>
        <div className="cardspage" style={{ 
            // backgroundImage: `url(${background2})`
             }}>
            <Header/>

<div className="search-place">
                  
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
