/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
// my attempt 

import  qr  from "qr-image";
import inquirer  from "inquirer";
import fs from "fs";

inquirer
  .prompt([{
        message :"what website do you want to make a QR code ",// this handles the input and returns an object that will later store the users input 
        name:"URL" //technicall it creates a new javascript object that has the name property of url that will later be referenced in order to get the contenst of the message
}])
  .then((answers) => {
    const url = answers.URL; // now it receives the object from the first portion and stores it in the variable using the name of the object which is url
    var qr_svg = qr.image(url); // caries out the inbuilt image() meathod on the object from earlier and stores the result in a variable note the .image() meathod can accept objects as input
    qr_svg.pipe(fs.createWriteStream('qr_image.png')); //this is to save the qr code generated in a png file caled qr_image.png
    fs.writeFile("userInput.txt", `user input was this website ${url}`,(err) => { // used to save the user input from the previous step as a text file 
        if(err) throw err;
        console.log("file saved succesfully");
    });
 
    
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log(error,"somthing else is wrong");
    }
  });

  

