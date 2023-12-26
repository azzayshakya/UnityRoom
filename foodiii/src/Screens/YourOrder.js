import React, { useEffect, useState, memo } from 'react';
import SingleYourOrder from './SingleYourOrder';

const YourOrder = () => {
    const [data,setdata] = useState ([]);

    useEffect(()=>{

        let email = localStorage.getItem('userEmail');
        console.log(email);

        const fetchData =async()=>{
            let response= await fetch("http://localhost:5000/api/yourorders",{
                method:"GET"
            })
            response=await response.json();
            setdata(response.data)      
       };
       fetchData();
    },[])


    return <div>
      <div>
      <h1>Your Orders</h1>
      {data.length > 0 ? (
        <ul>
          {data.map((order) => (
            <li key={order.date}>
                <SingleYourOrder item={order} />
            </li>            
          ))}
        </ul>
      ) : (
        <p>No orders available.</p>
      )}
    </div>
        
    </div>;
}

export default YourOrder;