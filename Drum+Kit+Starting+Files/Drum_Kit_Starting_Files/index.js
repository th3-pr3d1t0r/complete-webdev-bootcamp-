var numberOfDrumButtons = document.querySelectorAll(".drum").length;
  

for(var i = 0; i < numberOfDrumButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml = this.innerHTML;
        switch(buttonInnerHtml){
            case "w":
                var audio = new Audio("/Drum+Kit+Starting+Files/Drum_Kit_Starting_Files/sounds/crash.mp3");
                audio.play(); 
                break;
            case "a":
                var audio = new Audio("/Drum+Kit+Starting+Files/Drum_Kit_Starting_Files/sounds/kick-bass.mp3");
                audio.play(); 
                break;
            case "s":
                var audio = new Audio("/Drum+Kit+Starting+Files/Drum_Kit_Starting_Files/sounds/snare.mp3");
                audio.play(); 
                break;
            case "d":
                var audio = new Audio("/Drum+Kit+Starting+Files/Drum_Kit_Starting_Files/sounds/tom-1.mp3");
                audio.play(); 
                break;
            case "j":
                var audio = new Audio("/Drum+Kit+Starting+Files/Drum_Kit_Starting_Files/sounds/tom-2.mp3");
                audio.play(); 
                break;
            case "k":
                var audio = new Audio("/Drum+Kit+Starting+Files/Drum_Kit_Starting_Files/sounds/tom-3.mp3");
                audio.play(); 
                break;
            case "l":
                var audio = new Audio("/Drum+Kit+Starting+Files/Drum_Kit_Starting_Files/sounds/tom-4.mp3");
                audio.play(); 
                break;
           




        }
    })
}

document.addEventListener("keydown",function(e){
    var keypressed =  e.key;
    switch(keypressed){
        case "w":
            var audio = new Audio("/Drum+Kit+Starting+Files/Drum_Kit_Starting_Files/sounds/crash.mp3");
            audio.play(); 
            break;
        case "a":
            var audio = new Audio("/Drum+Kit+Starting+Files/Drum_Kit_Starting_Files/sounds/kick-bass.mp3");
            audio.play(); 
            break;
        case "s":
            var audio = new Audio("/Drum+Kit+Starting+Files/Drum_Kit_Starting_Files/sounds/snare.mp3");
            audio.play(); 
            break;
        case "d":
            var audio = new Audio("/Drum+Kit+Starting+Files/Drum_Kit_Starting_Files/sounds/tom-1.mp3");
            audio.play(); 
            break;
        case "j":
            var audio = new Audio("/Drum+Kit+Starting+Files/Drum_Kit_Starting_Files/sounds/tom-2.mp3");
            audio.play(); 
            break;
        case "k":
            var audio = new Audio("/Drum+Kit+Starting+Files/Drum_Kit_Starting_Files/sounds/tom-3.mp3");
            audio.play(); 
            break;
        case "l":
            var audio = new Audio("/Drum+Kit+Starting+Files/Drum_Kit_Starting_Files/sounds/tom-4.mp3");
            audio.play(); 
            break;
        
    }
})

//document.querySelector("button").addEventListener("click",handleClicks)
/*
function handleClicks(){
    var audio = new Audio("/Drum+Kit+Starting+Files/Drum_Kit_Starting_Files/sounds/crash.mp3");
    audio.play(); 


}
    */
// in ordert to change the class of ahtml element you are to select the element using the id or query selector and you are to use the ".classlist" function
// to display the currrent class it belongs to and once you do that you can change the class with the ".classlist.add("class to be added")" fuction

