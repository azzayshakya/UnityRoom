const express = require('express');
const router = express.Router();

router.post('/createMeet', async (req, res) => {
    try {
        // Extract userId from the request body
        const { userId } = req.body;
        console.log(req.body);

        // Check if userId is provided
        if (!userId) {
            return res.status(400).json({ success: false, message: "userId is required" });
        }

        // Generate a 10-digit random number with userId in the starting digits
        const RoomId = generateRandomNumberWithUserId(userId);
        // console.log(RoomId)

        // Send the random number as response
        res.status(200).json({ success: true, RoomId: RoomId });
    } catch (error) {
        console.error("Error generating random number:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

// Function to generate a 10-digit random number with userId in starting digits
const generateRandomNumberWithUserId = (userId) => {
    // Generate a random number between 1000000000 and 9999999999 (10-digit range)
    const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;

    // Concatenate the userId with the random number (in starting digits)
    const randomNumberWithUserId = userId.substring(0, 10) + randomNumber.toString();

    return randomNumberWithUserId;
};

module.exports = router;
