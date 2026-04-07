const express=require("express");

const app=express();
const PORT=3000;

//Route 1
app.get("/",(req,res)=>{
    res.send("This is Home Page");
});

app.get("/about",(req,res)=>{
    res.send("About Me")
});

app.get("/contact",(req,res)=>
{
    res.send("Contact Us");
});

app.get("/user/:name",(req,res)=>
{
    const name=req.params.name;
    res.send(`Hello ${name}`);
});

app.get("/add",(req,res)=>
{
    let a=parseInt(req.query.a);
    let b= parseInt(req.query.b);

    let sum =a+b;

    res.send(`Sum ${sum}`)
})

app.listen(PORT,()=>{
    console.log(`Server starting ${PORT}`)
})