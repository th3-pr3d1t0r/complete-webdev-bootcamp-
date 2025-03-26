import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");// this is used inste of res.send() and it sends back a complete file 
});

app.use(bodyParser.urlencoded({extends:true}));

app.post("/submit",(req,res) =>{
  console.log(req.body);
  res.end("end");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
