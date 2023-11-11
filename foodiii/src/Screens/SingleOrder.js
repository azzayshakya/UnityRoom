import React from 'react'
import Css from '../Css/SingleOrder.css'


const SingleOrder = ({ items }) => {
    const date = items[0].Order_date
    console.log(date)
    return (<div>


        <div className='singleMainDate'>



            <ul className='maincontain'>

                <div class="nine">
                    <h1>Your Order Date<span>{date}</span></h1>
                </div>
                {/* <p className='date'>{date}-</p> */}
                {
                    items
                        .slice(1)
                        .map((item, index) => {
                            const date = items[0].Order_date




                            return <li className='mainonecard' key={index}>


                                <div className='innerpart'>
                                    {/* <p>  Date:{ date}</p> */}

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