import express from "express";
import morgan from "morgan"; // morgan is a package that is used to console log the 

const app = express();
const port = 3000;


app.use(morgan("tiny"))//this is the code used to consolelog  the details of the request 

app.get("/", (req, res) => {
  res.send("Hello");
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
