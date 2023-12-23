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

{/* <li className='mainonecard' key={index}>
<div className='innerpart'>                                                           
<p><img style={{ width: '100%', height: 'auto', borderRadius: '5px' }} src={item.img} alt="hey it's your image" /></p>
<div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Name </div>:<div className='orderpagemaincontainer_rightside'>{item.name}</div></div>
<div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Qty </div>:<div className='orderpagemaincontainer_rightside'>{item.qty}</div></div>      
<div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Size </div>:<div className='orderpagemaincontainer_rightside'>{item.size}</div></div>
<div className='orderpagemaincontainer'><div className='orderpagemaincontainer_leftside'>Price </div>:<div className='orderpagemaincontainer_rightside'>{item.price}</div></div>     
</div>
</li> */}
                        })
                }
            </ul>
        </div>
    </div>)
}


export default SingleOrder;