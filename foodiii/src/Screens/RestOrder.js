import React, { useEffect, useState, memo } from 'react';
import SingleRestOrder from './SingleRestOrder';
import Header from '../Component/Header';
import background from "../Images/collections-1.jpg";


const RestOrder = () => {
  const [data, setData] = useState([]);
  const [ordersByDate, setOrdersByDate] = useState(new Map());

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };
  
  const handleOrderStateChange = (orderId, newState) => {
    console.log(`Order ${orderId} state changed to ${newState}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("http://localhost:5000/api/getOrderOfMyresturant", {
        method: "GET"
      });

      response = await response.json();
      setData(response.data);

      // Move ordersByDate inside useEffect
      const newOrdersByDate = new Map();
      response.data.forEach((order) => {
        const date = formatDate(order.date); // Extract and format only the date part
        if (!newOrdersByDate.has(date)) {
          newOrdersByDate.set(date, []);
        }
        newOrdersByDate.get(date).push(order);
      });


      setOrdersByDate(newOrdersByDate);
    };

    fetchData();
  }, [data]);

  return (
    <div>
      <Header />
      <div style={{ /* backgroundImage: `url(${background})` */ }}>
        <div className='yourrestorderheading'>Your restaurant orders :</div>
        <div>
         
          {[...ordersByDate.keys()].map((date) => (
            <div key={date}>

              <div class="nine">
                <h1><span>{date}</span></h1>
              </div>

              <ul>
                {ordersByDate.get(date).map((item, index) => (
                  <SingleRestOrder  key={index} item={item}  onStateChange={(newState) => handleOrderStateChange(item.order.id, newState)}/>                  
                ))}
              </ul> 

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(RestOrder);
