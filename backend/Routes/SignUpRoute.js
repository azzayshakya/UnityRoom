const express = require("express");
const router = express.Router();
const users = require("../Models/SignUpUserModel");
const bcrypt = require('bcrypt');


router.post("/SignUp", async (req, res) => {
    try {
        const { name, email, mobileNumber, password, image, audio } = req.body;
        // console.log(req.body)
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
            image,
            
        });

        res.status(201).json({ success: true, message: "Signed up successfully" });
    } catch (error) {
        console.log("SignUp route error", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

router.post("/UploadAudio", async (req, res) => {
    try {
        const { audio, email } = req.body;
        console.log("audio at backend", audio);

        // Check if user with provided email exists
        const user = await users.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Update user document to add audio field
        await users.findOneAndUpdate(
            { email: email.toLowerCase() },
            { $set: { audio: audio } },
            { new: true }
        );

        res.status(200).json({ success: true, message: "Audio uploaded successfully" });
    } catch (error) {
        console.log("UploadAudio route error", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});


module.exports = router;
