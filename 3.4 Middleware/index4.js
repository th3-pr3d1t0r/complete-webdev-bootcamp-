import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));



const app = express();
const port = 3000;
var bandName ="";

function writeText(req,res,next){
  var request =req.body;
  var pet =request.pet;
  var street = request.street;
  bandName = pet+street;
  next();
}

app.get("/" , (req,res) =>{
  res.sendFile(__dirname+"/public/index.html");
});



app.use(bodyParser.urlencoded({extends:true}));
app.use(writeText);

app.post("/submit",(req,res) => {
  // console.log(req.body);
  res.send(`<h1> Your Band Name is </h1><h2>${bandName}</h2>`);
  
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
