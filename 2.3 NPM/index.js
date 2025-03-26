//npm i is used to install new packages in node.js it is shorthand for npm install

 //var generateNAme = require('sillyname'); you can do it like this if youre using comon js
 
 import generateName from "sillyname"
 var silyname  = generateName();

 console.log("my name is "+ silyname); // you can also use console.log(`my name is ${silyname}`); to achieve the same result

 import { randomSuperhero } from "superheroes"

 var superHeroName = randomSuperhero();// this is an inbuilt meatod in the  superheros package that returns a random superhero name from the list 
 // you could have alternatively done it like this  
//  import superheroes from "superheroes" // this would return the array of superhero names 

// var superHeroName  =  superheroes.random() // here the random meathod returns a random element in the superheroes list 




 console.log(`i am ${superHeroName} !`);

 // using esm is bestpractice 



