const express = require("express")
const router = express.Router();
const User = require('../models/User');
const Resturent = require('../models/Resturent')
const Order=require('../models/Orders')
const Order4r=require('../models/Order4rest');

const { body, validationResult } = require('express-validator');

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const jwtSecret = "mynameisajayshakyaIamFrommyownw"
const jwtSecret2 = "mynameisajayshakyaIam"



router.post("/creatuser", [
  body('email').isEmail(),
  body('name').isLength({ min: 5 }),
  body('password', 'Incorrect passoword').isLength({ min: 5 })] ,

  
  async (req, res) => {
    // console.log({   
    //     name:req.body.name,
    //     email:req.body.email,
    //     location:req.body.location,
    //     password:req.body.password        
    // }) 



    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt)
    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        location: req.body.location,
        password: secPassword,
        MobileNo:req.body.MobileNo

      }).then(res.json({ success: true }))

    }
    catch (error) {
      console.log(error)
      res.json({ success: false })

    }

  })


router.post("/loginuser", [
  body('email').isEmail(),
  body('password', 'Incorrect passoword').isLength({ min: 5 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }



    let email = req.body.email;
    try {     
      let userData = await User.findOne({ email });
      if (!userData) {
        return res.status(400).json({
          errors: "try logginng with  fucking wrong creditenls"
        })
      }
      const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
      if (!pwdCompare) {
        return res.status(400).json({
          errors: "try logginng with fucking wrong creditenls"
        })
      }
      const data = {
        user: {
          id: userData.id
        }
      }
      console.log("login user data is here bay")
      console.log(data)
      const authToken = jwt.sign(data, jwtSecret)
      


      return res.json({ success: true, authToken: authToken })
      // return res.json({ success: true, authToken2: authToken2 })

      //  console.log({userData})

    }
    catch (error) {
      console.log(error)
      res.json({ success: false });
    }
  })




  // router.post("/RagisterResturent", [
  //   body('resturentId').notEmpty(),
  //   body('MobileNo').notEmpty(),
  //   body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
  // ],
  
  // async (req, res) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({ errors: errors.array() });
  //   }
  
  //   console.log("I'm here");
  
  //   let resturentId = req.body.resturentId;
  
  //   try {
  //     let userData = await Resturent.findOne({ resturentId });
  //     console.log(userData)
  
  //     if (!userData) {
  //       return res.status(400).json({
  //         errors: "Try logging in with incorrect credentials because your data is not here"
  //       });
  //     }
  
      
  //     if (req.body.MobileNo !== userData.MobileNo || req.body.password !== userData.password) {
  //       return res.status(400).json({
  //         errors: "Try logging in with incorrect credentials no or password does not match"
  //       });
  //     }
  
      
  //     // const authToken = generateAuthToken(); // Implement your own token generation logic
  
  //     // return res.json({ success: true, authToken: authToken });
  
  //   } catch (error) {
  //     console.log(error);
  //     res.json({ success: false });
  //   }
  // });

router.get('/getOrderOfMyresturant',async (req,res,next)=>{
  try{
    const data=await Order4r.find({order:{ $exists: true }}).sort({ date: -1 });
     
    
    res.status(200).json({data:data});
    

    
  }
  catch(err){
    console.log(err)
    res.status(500).json({data:null,error:"internal server errror /getOrderOfMyresturant"});
  }
})

router.post('/authenticateResturent',async(req,res,next)=>{

  try{
    console.log(typeof req.body)
   

    const data=await Resturent.findOne(
      {
        resturentId:req.body.resturentId
      })
      // console.log(data);

      const ragisterduserid = {
        user: {
          id: data.id
        }
      }
      const authToken2 = jwt.sign(ragisterduserid, jwtSecret2)
      return res.json({ success: true, authToken2: authToken2  })

     


      if(data.password===req.body.password){
        return res.json({ success: true})
      }
      else{
        return res.json({ success: false})
      }



  }
  catch(err){
    console.log(err)
    return res.json({ success: false})
  }
})

module.exports = router;