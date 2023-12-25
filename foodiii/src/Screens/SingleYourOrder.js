import React from 'react';

const SingleYourOrder = ({item}) => {
    console.log(item)
    return (
    <div>
        <h2>{item.order.name}</h2>
        <img src={item.order.img} />
        <p>{item.order.price}</p>
        <p>{item.order.size}</p>

    </div>)
}


export default SingleYourOrder;