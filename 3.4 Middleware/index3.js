// this script was used to learn about custom middle-wares  

import express from "express";

const app = express();
const port = 3000;

function logger(req,res,next){
  console.log(req.method,req.url);
  next();
  //its important hthat you keep that code to call the next request 
}


app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
