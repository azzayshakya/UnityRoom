import React from 'react';

import { Delete } from '@mui/icons-material';

// import { useCart, useDispatchCart } from '../store/ContextReducer';
import {useSelector} from 'react-redux';

const Cart = () => {

    const data=useSelector(state=>state);
    console.log(data)
    
    if (data.length === 0) {
      return (
        <div>
          <div className='m-5 w-100 text-center fs-3 ajjuxn'>The Cart is Empty!</div>
        </div>
      )
    }
    // const handleRemove = (index)=>{
    //   // console.log(index)
    //   dispatch({type:"REMOVE",index:index})
    // }
  
    const handleCheckOut = async () => {
      let userEmail = localStorage.getItem("userEmail");
      // console.log(" azzay is here kdhafhidshfahshdfihsai")
      // console.log(data)
         
      
      let response = await fetch("http://localhost:5000/api/orderData", {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },


        body: JSON.stringify({

        
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString()
        })
      });
      // console.log("ajay")
      // console.log(data)
      // console.log("JSON RESPONSE:::::", response.status)

      // if (response.status === 200) {
      //   dispatch({ type: "DROP" })
      // }
    }
  
    let totalPrice = data.reduce((total, food) => total + food.price, 0)
    console.log(data);
    return <div>
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >img</th>
              <th scope='col' >Amount</th>
              <th scope='col' >Delete</th>
            </tr>
          </thead>
          <tbody className='ajjuxn'>
            {data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>
                <img src={food.img} alt={food.name} style={{ maxWidth: '50px', maxHeight: '50px' }} /></td>
                <td>{food.price}</td>

                
                 
                <td ><button type="button" className="btn p-0">
                    
                    <Delete />
                
                </button> 
                
                </td></tr>
            ))}
            
          </tbody>
        </table>
        <div className='windowtotalprice'><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
        </div>
      </div>




    </div>;
}

export default Cart;