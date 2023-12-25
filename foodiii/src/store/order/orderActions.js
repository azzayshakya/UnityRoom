import orderActionTypes from "./orderActionTypes";

// const orderActionTypes={
//     SET_ORDER_STATUS:'order/setOrderStatus',
//     SET_ALL_ORDERS:'order/setAllOrders',
//     SET_RESTURENT_ORDERS:'order/setResturentOrders',

// }

const orderActions={
    setOrderStatus:(value)=>{
        return{
            type:orderActionTypes.SET_ORDER_STATUS,
            payload:value
        }
    },
    setAllOrders:(value)=>{
        return{
            type:orderActionTypes.SET_ALL_ORDERS,
            payload:value
        }
    },
    setResturentOrders:(value)=>{
        return{
            type:orderActionTypes.SET_RESTURENT_ORDERS,
            payload:value
        }
    }
}

export default orderActions;