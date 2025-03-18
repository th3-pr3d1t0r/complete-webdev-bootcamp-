/*
challenge 1 change text content 
crate a html file with a paragraph element and write javascript code that selects the paragraph element and changes the text content into somthing else

*/
document.querySelector(".btn").addEventListener("click",changeText);

function randomName(){
    var names =["jeff","maria","danny","keisha"]
    var random = Math.floor(Math.random() * names.length );
    return names[random];
};


function changeText(){
    
    document.querySelector("p").innerHTML = "my name is "+randomName();

        
};


//challane two make  div visible 
//make the div in the html file visible when a button is  pushed

document.querySelector(".visible").addEventListener("click",visibleDiv);

function visibleDiv(){
    document.querySelector(".list").style.backgroundColor = "red";
}


document.querySelector("ul")
 