import React, { useEffect, useState } from 'react'

import SingleOrder from './SingleOrder';
import Header from '../Component/Header';
import Css from '../Css/SingleOrder.css'

const MyOrder = () => {

    
    const [orderData, setOrderData] = useState([]); // Initialize with an empty object
    
    console.log(orderData)    

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
    


    // return <div>


    //     <div className='container'>
    //         <div className='row'>
    //             {orderData.length > 0 ? (
    //                 orderData.map((data, index) => (
    //                     <div key={index}>
                            
    //                         {data.Order_data ? (
    //                             data.orderData.order_data
    //                                 .slice(0)
    //                                 .reverse()
    //                                 .map((item, i) => (
    //                                     <div key={i}>
    //                                         {item.Order_date ? (
    //                                             <div className='m-auto mt-5'>
    //                                                 {/* Render Order Date */}
    //                                             </div>
    //                                         ) : (
    //                                             <div className='col-12 col-md-6 col-lg-3'>
    //                                                 <div className='card mt-3' style={{ width: '16rem', maxHeight: '360px' }}>
    //                                                     <img src={item.img} className='card-img-top' alt='...' style={{ height: '120px', objectFit: 'fill' }} />
    //                                                     <div className='card-body'>
    //                                                         <h5 className='card-title'>{item.name}</h5>
    //                                                         <div className='container w-100 p-0' style={{ height: '38px' }}>
    //                                                             <span className='m-1'>{item.qty}</span>
    //                                                             <span className='m-1'>{item.size}</span>
    //                                                             <span className='m-1'>{item.Order_date}</span>
    //                                                             <div className='d-inline ms-2 h-100 w-20 fs-5'>
    //                                                                 ₹{item.price}/-
    //                                                             </div>
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                         )}
    //                                     </div>
    //                                 ))
    //                         ) : (
    //                             ''
    //                         )}
    //                     </div>
    //                 ))
    //             ) : (
    //                 // Handle the case when orderData is empty
    //                 <div>No order data available.</div>
    //             )}
    //         </div>
    //     </div>
        

    //         </div>;


   return(<div>

    <Header/>
          <h1 className='yourorderheading'>YOUR ORDERS..</h1>
    
    <div>{
        
        orderData &&(
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
    </div>)

}



export default MyOrder;