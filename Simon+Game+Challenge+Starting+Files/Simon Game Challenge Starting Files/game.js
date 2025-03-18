var buttonColors =["red","blue","green","yellow"]
var userClickedPattern = [];
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*3);
    var audio = new Audio("/sounds/"+randomChosenColor+'.mp3');
    console.log(audio);
    audio.play();
    return randomNumber;
    
}
randomNumber = nextSequence();
var randomChosenColor = buttonColors[randomNumber];


$("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); //cretaes the animation for the button with the id of the numberchosen



$("div.btn").click(function(event){
  var userChosenColor = event.target.id
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
});
