import React, { useEffect, useState } from 'react'

import SingleOrder from './SingleOrder';
import Header from '../Component/Header';
import Css from '../Css/SingleOrder.css'



const MyOrder = () => {

    
    const [orderData, setOrderData] = useState([]);
      

    useEffect(() => {
        const fetchMyOrder = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/myOrderData", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: localStorage.getItem('userEmail')
                    })
                });
        
                if (response.ok) {
                    const data = await response.json();
                    let array=data.orderdata.order_data
                    array=array.reverse()
                    setOrderData(array);
                } else {
                    // Handle non-successful response, e.g., show an error message
                    console.error("Request failed with status:", response.status);
                }
            } catch (error) {
                // Handle network or other errors
                console.error("Error:", error);
            }
        };

        fetchMyOrder();
    }, []);

   return(<div >

    <Header/>
    <div className="midpartoffoodpage myOrderDataPage" style={{
        //  backgroundImage: `url(${background})`
          }}>
          <h3 className='yourorderheading'>YOUR ORDER HISTORY..</h3>
    
    <div className='qwer'>{
        
        // orderData &&
        (
            <div>


    
        <ul>{
            orderData
            
            .map((items,index)=>{
                
                return <li  key={index}>                                                          
                        <SingleOrder items={items}/>
                                         
                </li>
            })
        }
        </ul>
    </div>)
}
    
    </div>
    </div>
    </div>)

}



export default MyOrder;