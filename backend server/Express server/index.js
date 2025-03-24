import express from "express"
// you can use this commant to get the ports that are currently occupied netstat -ano | findstr "LISTENING"
const app = express();
const port = 3000;
app.listen(port, () =>{
    console.log(`server is online on port ${port}`);
})