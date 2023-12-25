import React, { memo, useState } from 'react';


const SingleRestOrder = ({ item, onStateChange }) => {
    const [selectedState, setSelectedState] = useState('State');


    const handleStateChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedState(selectedValue);
        onStateChange(selectedValue); // Send the selected value to the parent component or other component
    };
   

    return(
        
        <li className='mainonecard' >           
     
        <div className='innerpart'>

            <p><img style={{ width: '100%', height: 'auto', borderRadius: '5px' }} src={item.order.img} alt="hey it's your image" /></p>
            <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Name </div>:<div className='orderpagemaincontainer_rightside'>{item.order.name}</div></div>
            <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Qty </div>:<div className='orderpagemaincontainer_rightside'>{item.order.qty}</div></div>      
            <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Size </div>:<div className='orderpagemaincontainer_rightside'>{item.order.size}</div></div>
            <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Price </div>:<div className='orderpagemaincontainer_rightside'>{item.order.price}</div></div> 
            <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>MobileNo </div>:<div className='orderpagemaincontainer_rightside'>{item.MobileNo}</div></div> 
            <div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Email </div>:<div className='orderpagemaincontainer_rightside'>{item.email}</div></div>
            



            {/* <button>Done ?</button>     */}
        <div class="state-control">
            {/* <label for="name">
                which option best describe you ?
            </label> */}
             <select name="" id="" onChange={handleStateChange} value={selectedState}>
                        <option value="State" disabled hidden>State</option>
                        <option value="Pending">Pending</option>
                        <option value="Cooking">Cooking</option>
                        <option value="Cancel">Cancel</option>dr
            </select>
        </div>
 

        </div>
        </li>
    );
}
export default memo(SingleRestOrder);
