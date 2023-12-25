import React from 'react';
import Midpart from '../Component/Midpart';
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import Newcard from '../Component/Newcard'
import { useSelector,useDispatch } from 'react-redux';
import orderActions from '../store/order/orderActions';


const Home = () => {
    const chaman=useSelector(state=>state.order.orderStatus);
    const dispatch=useDispatch();

    


    console.log(chaman )

    return( <div>
        <Header/>
        <Midpart/>
    
        <Footer/>


    </div>);
}


export default Home;