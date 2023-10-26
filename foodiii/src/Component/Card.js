import React from 'react';


import { Link } from 'react-router-dom';


const Card = () => {
    return <div>
     <div className='card'>
            <div className="image" >
               <img style={{
                
                height:"220px",
                width:"100%",
                borderTopLeftRadius:"20px",
                borderTopRightRadius:"20px"
               
                
                
               }} src="../Images/service-1.jpg" alt="" />
            </div>
            <div className="about">

                <span>Order Online</span> <br />
                <p>
                stay home and order to your...
                </p>
                <div className="addtocard">
                <Link className='link' to="/">Add To Cart</Link>


                </div>

                <div className="selectsection">
                    <select name="" className='selectitem' id="first">{
                        Array.from(Array(6), (e, i) => {
                            return (
                                <option value={i + 1} key={i + 1}>{i + 1}</option>
                            
                                   )})}

                    </select>

                    <select name="" className='selectitem' id="secound">
                        <option value="half">half</option>
                        <option value="full">full</option>
                    </select>
                    <dev className="price">
                        total price
                    </dev>
                </div>
            </div>
        </div> 
        {/* <div className="card" >
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5> */}
  
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  {/* </div>
</div> */}

    </div>;
}

export default Card;