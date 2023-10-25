import React, { useState ,useEffect} from 'react';
import css from '../Css/Foodcards.css'
import Card from '../Component/Card';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer'
const Foodcards = () => {

    const [foodCat, setfoodCat] = useState([]);
    const [foodItems, setfoodItems] = useState([]);
    console.log(foodCat)
    // console.log(foodItems)
    // console.log("ajay is here")

    const loadData = async()=>{
        let response=await fetch("http://localhost:5000/api/foodData",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            }
        });
        response = await response.json();
        // console.log(response[0],response[1])
        setfoodItems(response[0])
        setfoodCat(response[1])
    }
    useEffect(()=>{
        loadData();
    },[])

    
    return <div>
        <div className="navbar">
            <Navbar />
        </div>

        <div className="cardmain">
            {
                foodItems  !== []
                ? foodCat.map((data)=>{
                    return(
                        <div>{data.CategoryName}</div>
                    )
                })
                 : <div>" nodata"</div>
                 
            }
            {
                foodItems  !== []
                ? foodItems.map((data)=>{
                    return(
                        <div>{data.name}</div>
                    )
                })
                 : <div>" """"""""""""""""</div>
                 
            }


            <Card />
        </div>

        <div className="footer">
            <Footer />
        </div>

    </div>;
}
export default Foodcards;