const express=require('express');
const connectDb = require('./db');
const port=8000;
const app= express();

const cors = require('cors');
app.use(cors({
    origin: '*',
    credentials: true, 
}));


app.get("/",(req,res)=>{
    res.send("hey ajju how are you , this is your website")
})
app.use(express.json());
app.use(require("./Routes/SignUpRoute"))
app.use(require("./Routes/LoginUserRoute"))
app.use(require("./Routes/CreateMeetRoute"))


app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});



