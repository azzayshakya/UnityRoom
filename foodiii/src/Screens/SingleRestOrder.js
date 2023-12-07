import React,{memo} from 'react';

const SingleRestOrder=({item})=>{
   

    return(
        
        <li className='mainonecard' >
            
     
        <div className='innerpart'>
           
            <p>Email : {item.email}</p>
            <p>MobileN. :{item.MobileNo}</p>
            <p>{item.order.name}</p>
            <p>{item.order.qty}</p>
            <p>{item.order.size}</p>
            <p>{item.order.price}</p>
            {/* <p>{item.email}</p> */}       
        </div>
        </li>
    );
}
export default memo(SingleRestOrder);
