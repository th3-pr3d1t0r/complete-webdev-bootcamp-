const fs = require("fs");// this is a node module used for creating a text file in the same directory as the index.js file

fs.writeFile("message.txt", "hello fromn node.js     my name is ugo ",(err) => {
    if (err) throw err;
    console.log("the file has been saved");
}); 

const  { open }  = require('node:fs/promises'); // this code reads out the lines in ia text file using async and await
(async() => {
        const file = await open('c:\\Users\\DELL\\Desktop\\The Complete Webdev Bootcamp\\backend_development\\2.1 Using Node\\message.txt', 'r');

        for await (const line of file.readLines()) {
        console.log(line);
        }
})();