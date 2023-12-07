import React,{memo,useEffect} from 'react';

const SingleRestOrder=({item})=>{
   

    return(
        
        <li className='mainonecard' >
     
        <div className='innerpart'>
            <p>{item.email}</p>
            <p>{item.MobileNo}</p>
            <p>{item.order.name}</p>
            <p>{item.order.qty}</p>
            <p>{item.order.size}</p>
            <p>{item.order.price}</p>
            {/* <p>{item.email}</p> */}

           

            
        </div>
        <hr />
        </li>
    );
}
export default memo(SingleRestOrder);
