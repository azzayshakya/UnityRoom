import React from 'react'



const SingleOrder = ({ items }) => {
    // console.log("ajay is here and these are the items")
    // console.log(items)
    // console.log("ajay is here and these are the items")

    const date = items[0].Order_date
    // console.log(date)
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
                                    <p>  Name:{item.name}</p>
                                    <p>  Price:{item.price}</p>
                                    <p>  Qty:{item.qty}</p>
                                    <p>  Size:{item.size}</p>
                                </div>
                            </li>
                        })
                }
            </ul>
        </div>
    </div>)
}


export default SingleOrder;