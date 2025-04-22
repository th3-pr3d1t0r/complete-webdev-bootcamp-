//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function validateInput(req,res,next){
    var response = req.body;
    if(response.password =="ILoveProgramming"){
        res.sendFile(__dirname+"/public/secret.html");

    }
    else{
        res.sendFile(__dirname+"/public/index.html");
//you can also use redirect()
    }
    next()
}


const app = express();
const port = 3000;



app.get("/" , (req,res) =>{
  res.sendFile(__dirname+"/public/index.html");
});



app.use(bodyParser.urlencoded({extends:true}));

app.post("/check",(req,res) => {
    var response = req.body;
    if(response.password =="ILoveProgramming"){
        res.sendFile(__dirname+"/public/secret.html");

    }
    else{
        res.sendFile(__dirname+"/public/index.html");

    }
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
