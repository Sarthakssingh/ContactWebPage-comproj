const express = require('express');

const app = express();
app.use(express.json());

app.use('/',(req,res)=>{
    res.send("Working")
})

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on Port ${PORT}`)
})