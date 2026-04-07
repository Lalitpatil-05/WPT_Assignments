// 8. Rebuild any previous Node assignment using Express and a template engine 


const express = require('express');
const app = express();
// Use Node and Express to write a simple web application that consists of at least 5 route 
// implementations


app.set("view engine", "ejs");



app.get("/",(req,resp)=>{
resp.render('home');
})

app.get("/aboutUs",(req,resp)=>{
    resp.render('aboutus');
})

app.get("/contactUS",(req,resp)=>{
    resp.render('contactus');
})

app.get("/login",(req,resp)=>{
    resp.render('login');
})

app.get("/signup",(req,resp)=>{
    resp.render('signup');
})


app.listen(3000,()=>{
    console.log("Server is running on Port 3000");
})