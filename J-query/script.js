// j query basically just shortens code
// isted of using querySelector("h1") we can write 


                    

                                                         //       $("h1").css("color","red");



//to get the current css value of the element selected by thee jquery just esve the second argument empty  and to access this data you can save that value to a variable
// remember that youre using a csv like bootstra so somtimes it doesnt load until one or two tries 

var color  =    $("h1").css("color");
console.log(color);

//to change the class of the html element selected you can use the .addclass("className") meathod


//eg NB you can add more than one class as long as there is a space between them within the same brackets eg .addClass("dog cat wolf")
// you can also check if an element has a certain class applied to it wit the .hasClass("") meathod in jquery this meathod returns a bolean


$("h1").text("my name is mandy");//this code changes the text inside of an element just like in plain javascript
$("button").html("<em>click two</em>");//changes the innerhtml of the element selected.
$("h1").addClass("biggerTitle");//add a class to somthing


$("button").click( function(){
    $("h1").css("color","purple");// this code allows you to select all buttons at once so that when a click event is triggered it causes them to carry out a function that is specified just lick the eventlisteners in normal javascript
});

$("input").keypress(function(event){
    //her this makes use of a callback where when a key is pressed before the function is carried out it request the event which trigered the funtion in this case it is a key press and it records  the key that was presed 

    console.log(event);//here it return that same keypress event as a console log
    //if you wanted to display the spesific key that wa pressed youare to use the .key to get the spesific key eg
    console.log(event.key);
    
})

$(document).keypress(function(event){
    var newText = event.key;
     $("h1").text(newText);

});//what was wrong with your code wa sthat the jquery wasnt selecting anything so now it selects tthe entire document
//you can use the .before meathod to place more html before a spesific tag eg

$("h1").before("<button>New</button>");//now this creates a new button before the h1
$("h1").after("<button>after</button>");//adds a new button element to after your h1

