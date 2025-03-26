import express from "express"

const app = express();
const port = 3000;


app.get("/",(req,res) => {
    // console.log(req.rawHeaders); this will send back the headers of the request that is being sent to the server 
    res.send("<h1>hello world</h1>");//this will respond to the request with whatever is specified
});
app.get("/about",(req,res) =>{
    res.send("<h1>About</h1>");
})

app.get("/contact",(req,res) => {
    res.send("<h1>Contact me here</h1> <p>0811460994</p>");//these are how you target different endpoints 

})


app.listen(port,()=>{
    console.log(`server is running on port ${port} `)
});
