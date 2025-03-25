import express from "express"

const app = express();
const port = 3000;


app.get("/",(req,res) => {
    // console.log(req.rawHeaders); this will send back the headers of the request that is being sent to the server 
    res.send("<h1>hello world</h1>");//this will respond to the request with whatever is specified
});

app.listen(port,()=>{
    console.log(`server is running on port ${port} `)
});