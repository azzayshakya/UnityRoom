import React, { memo, useEffect, useState } from 'react';
import SingleRestOrder from './SingleRestOrder';
import Header from '../Component/Header';
// import { Email } from '@mui/icons-material';

const RestOrder = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch("http://localhost:5000/api/getOrderOfMyresturant", {
                method: "GET"
            })

            response = await response.json();


            setData(response.data)

        }
        fetchData();

    }, []);


    return (

        <div>
        <Header />
            <div>
                <ul>
                    {
                        data.map((item, index) => (
                            <li key={index}>
                            <SingleRestOrder item={item} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default memo(RestOrder);