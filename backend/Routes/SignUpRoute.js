const express = require("express");
const router = express.Router();
const users = require("../Models/SignUpUserModel");
const bcrypt = require('bcrypt');


router.post("/SignUp", async (req, res) => {
    try {
        const { name, email, mobileNumber, password } = req.body;
        if (!name || !email || !mobileNumber || !password) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }
        const alreadyuser=await users.find({email:email.toLowerCase()});

        if(alreadyuser.length>0){
            return res.status(400).json({success: false, message: "User already have account"})
        }
        // const existingUser = await users.findOne({ email });
        // if (existingUser) {
        //     return res.status(400).json({ success: false, message: "User already has an account" });
        // }
        
        const salt = await bcrypt.genSalt(10);
        let HashedPassword = await bcrypt.hash(req.body.password, salt);
        const Lowercaseemail = email.toLowerCase();
        const userId = Lowercaseemail.split('@')[0];

        await users.create({
            name,
            userId,
            email: Lowercaseemail,
            mobileNumber,
            password,
        });

        res.status(201).json({ success: true, message: "Signed up successfully" });
    } catch (error) {
        console.log("SignUp route error", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

module.exports = router;
