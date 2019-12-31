import express from 'express';

const app = new express();

app.use("/", (req,res)=>{
    res.send("Hello world!");
})

app.listen(7777);