// j query basically just shortens code
// isted of using querySelector("h1") we can write 




                                                         //       $("h1").css("color","red");




//to get the current css value of the element selected by thee jquery just esve the second argument empty  and to access this data you can save that value to a variable
// remember that youre using a csv like bootstra so somtimes it doesnt load until one or two tries 

var color  =    $("h1").css("color");
console.log(color);

//to change the class of the html element selected you can use the .addclass("className") meathod


//eg NB you can add more than one class as long as there is a space between them within the same brackets eg .addClass("dog cat wolf")

$("h1").addClass("biggerTitle");
