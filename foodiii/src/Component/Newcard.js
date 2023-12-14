import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from '../Component/ContextReducer';
const propTypes = {};






const Newcard = (props) => {
  let data = useCart();
  // console.log("hey its me")
  // console.log(data)


  let foodItem = props.foodItems;
  let dispatch = useDispatchCart();

  let options = props.options;
  let priceOptions = Object.keys(options);
  const priceRef = useRef();
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")

  const handleAddToCart =async()=>{



    // let food =[];
    // for(const item of data){
    //   if (item.id===props.foodItem._id){
    //     food =item;
    //     break;
    //   }
    // }
    // if(food!==[]){
    //   if(food.size===size){
    //     await dispatch ({type:"UPDATE",id:foodItem._id,price:finalPrice,qty:qty})
    //     return
    //   }
    // }


  await dispatch({type:"ADD",id:props.foodItems._id,
  name:props.foodItems.name,
  img:props.foodItems.img,
  price:finalPrice,qty:qty,size:size})

  // console.log("hey its me")
  // console.log(data)
  // console.log("hey its me")

  }


  // const handleAddToCart = async () => {



  //   let food = [];
  //   for (const item of data) {
  //     if (item.id === props.foodItem._id) {
  //       food = item;
  //       break;
  //     }
  //   }
  //   if (food !== []) {
  //     if (food.size === size) {
  //       await dispatch({ type: "UPDATE", id:props.foodItem._id, price: finalPrice, qty: qty })
  //       return
  //     }
  //     else if (food.size !== size) {
  //       await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size})
  //       return
  //       // console.log("Size different so simply ADD one more to the list")
  //     }
  //     return
  //   }
  //       await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
  // }


  // await dispatch({type:"ADD",id:props.foodItems._id,
  // name:props.foodItems.name,
  // price:finalPrice,qty:qty,size:size})
  // console.log(data)


  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])


  // console.log(priceOptions)
  return <div>
    <div class="card mt-3 cardmainhover" style={{ "width": "18rem", "maxHeight": "500px" }}  >
      <div className="B-image " >
        <img src={props.foodItems.img} style={{
          height: "180px",
          width: "100%",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px"
        }} alt="" />
        {/*         
                <img style={{
                
                height:"180px",
                width:"100%",
                borderTopLeftRadius:"20px",
                borderTopRightRadius:"20px"
               }} src="../Images/service-1.jpg" alt="" />  */}
      </div>
      <div class="card-body ">
        <h5 class="card-title">{props.foodItems.name}</h5>
        <div className="container w-100">
          <select name="" className='m-2 h-100 bg-success rounded' id="" onChange={(e) => setQty(e.target.value)}>{
            Array.from(Array(6), (e, i) => {
              return (
                <option value={i + 1} key={i + 1}>{i + 1}</option>
              )
            })}
          </select>

          <select name="" className='m-2 h-100 bg-success rounded' id="seound" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
            {priceOptions.map((data) => {
              return <option key={data} value={data}>{data}</option>
            })}
          </select>
          <div className="d-inline h-100 fs-5">
            {finalPrice}/-
          </div>
          <hr className='hrtag'/>
          <button className='addtocartbutton' onClick={handleAddToCart} >Add To Cart</button>
        </div>

      </div>
    </div>


  </div>;
}
Newcard.propTypes = propTypes;
export default Newcard;
