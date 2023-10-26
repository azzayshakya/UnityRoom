import React from 'react';
const propTypes = {};




const Newcard = (props) => {

  let options =props.options;
  let priceOptions =Object.keys(options);
  // console.log(priceOptions)
    return <div>
        <div class="card mt-3" style={{"width":"18rem", "maxHeight":"500px"}}  >
        <div className="B-image" >
          <img  src={props.imgSrc} style={{height:"180px",
                width:"100%",
                borderTopLeftRadius:"5px",
                borderTopRightRadius:"5px"}} alt="" />
{/*         
                <img style={{
                
                height:"180px",
                width:"100%",
                borderTopLeftRadius:"20px",
                borderTopRightRadius:"20px"
               }} src="../Images/service-1.jpg" alt="" />  */}
            </div>
  <div class="card-body">
    <h5 class="card-title">{props.foodName}</h5>
    <div className="container w-100">
    <select name="" className='m-2 h-100 bg-success rounded' id="">{
                        Array.from(Array(6), (e, i) => {
                            return (
                                <option value={i + 1} key={i + 1}>{i + 1}</option>                            
                                   )})}
                    </select>

                    <select name="" className='m-2 h-100 bg-success rounded' id="seound">
                       {priceOptions.map((data)=>{
                        return <option key={data} value={data}>{data}</option>
                       })}
                    </select>
                    <div className="d-inline h-100 fs-5"> 
                        total price
                    </div>
    </div>
     
  </div>
</div>


    </div>;
}
Newcard.propTypes = propTypes;
export default Newcard;
