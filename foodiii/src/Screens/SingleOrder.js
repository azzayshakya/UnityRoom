import React from 'react'



const SingleOrder = ({ items }) => {
    // console.log("ajay is here and these are the items")
    // console.log(items)
    // console.log("ajay is here and these are the items")

    const date = items[0].Order_date
  
    return (<div>
        <div className='singleMainDate'>
            <ul className='maincontain'>
                <div class="nine">
                    <h1>Your Order Date<span>{date}</span></h1>
                </div>
                {
                    items
                        .slice(1)
                        .map((item, index) => {
                            
                            return <li className='mainonecard' key={index}>
                                <div className='innerpart'>                           
                                    <p> <img style={{ width: '100%', height: 'auto', borderRadius: '5px' }} src={item.img} alt="hey it's your image" /></p>
                                    <p>  Name:{item.name}</p>
                                    <p>  Price:{item.price}</p>
                                    <p>  Qty:{item.qty}</p>
                                    <p>  Size:{item.size}</p>
                                    <div className='Your-Order-State'>
                                        

                                    </div>
                                </div>
                            </li>
                        })
                }
            </ul>
        </div>
    </div>)
}


export default SingleOrder;




// import React from 'react';
// import { useOrderContext } from './OrderContext';

// const SingleOrder = ({ items }) => {
//   const { selectedOrderState } = useOrderContext();
//   const date = items[0].Order_date;

//   return (
//     <div>
//       <div className='singleMainDate'>
//         <ul className='maincontain'>
//           <div class="nine">
//             <h1>Your Order Date<span>{date}</span></h1>
//           </div>
//           {items.slice(1).map((item, index) => {
//             return (
//               <li className='mainonecard' key={index}>
//                 <div className='innerpart'>
//                   <p>
//                     {' '}
//                     <img
//                       style={{
//                         width: '100%',
//                         height: 'auto',
//                         borderRadius: '5px',
//                       }}
//                       src={item.img}
//                       alt="hey it's your image"
//                     />
//                   </p>
//                   <p> Name:{item.name}</p>
//                   <p> Price:{item.price}</p>
//                   <p> Qty:{item.qty}</p>
//                   <p> Size:{item.size}</p>
//                   <div className='Your-Order-State'>
//                     {selectedOrderState && (
//                       <div>
//                         <p>Selected Order ID: {selectedOrderState.orderId}</p>
//                         <p>New State: {selectedOrderState.newState}</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SingleOrder;
