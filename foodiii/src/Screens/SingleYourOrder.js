import React from 'react';

const SingleYourOrder = ({item}) => {
    console.log(item)
    return (
    <div>
        <h2>{item.order.name}</h2>
        <p>{item.order.id}</p>
        <img src={item.order.img} />
        <p>{item.order.price}</p>
        <p>{item.order.size}</p>
        <div className="order_state">
            
        </div>
        

    </div>)
}


export default SingleYourOrder;