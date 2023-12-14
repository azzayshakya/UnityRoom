import React,{memo} from 'react';


const SingleRestOrder=({item})=>{
   

    return(
        
        <li className='mainonecard' >           
     
        <div className='innerpart'>

            {/* <p style={{color:"red" }} >Email : {item.email}</p>
            <p>MobileN. :{item.MobileNo}</p>
            <>{item.order.name}</>
            <p>{item.order.qty}</p>
            <p>{item.order.size}</p>
            <p>{item.order.price}</p> */}
            {/* <p>{item.email}</p> */} 
            <p><img style={{ width: '100%', height: 'auto', borderRadius: '5px' }} src={item.order.img} alt="hey it's your image" /></p>
            <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Name </div>:<div className='orderpagemaincontainer_rightside'>{item.order.name}</div></div>
            <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Qty </div>:<div className='orderpagemaincontainer_rightside'>{item.order.qty}</div></div>      
            <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Size </div>:<div className='orderpagemaincontainer_rightside'>{item.order.size}</div></div>
            <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Price </div>:<div className='orderpagemaincontainer_rightside'>{item.order.price}</div></div> 
            <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>MobileNo </div>:<div className='orderpagemaincontainer_rightside'>{item.MobileNo}</div></div> 
            <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Email </div>:<div className='orderpagemaincontainer_rightside'>{item.email}</div></div>


            {/* <button>Done ?</button>     */}
 

        </div>
        </li>
    );
}
export default memo(SingleRestOrder);
