const express=require("express");
const app=express();
const path=require("path");
const port=process.env.PORT || 3000;

const static_path=path.join(__dirname,"../public");

app.use(express.static(static_path));

app.get("/",(req,res)=>{
    res.redirect("/");
    // res.send("welcome");
});

app.get("/about",(req,res)=>{
    res.send("About");
});

app.get("/weather",(req,res)=>{
    res.send("Weather");
});

app.get("*",(req,res)=>{
    res.send("<h1>404 Error, Page does not exist</h1>");
});

app.listen(port,()=>{
    console.log("Server is running");
});