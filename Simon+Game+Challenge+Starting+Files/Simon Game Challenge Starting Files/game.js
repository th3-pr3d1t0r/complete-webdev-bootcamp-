var buttonColors =["red","blue","green","yellow"];
var userClickedPattern = [];
var correctSequence =[];
var level = 0;

function playSound(name){
  var audio = new Audio("sounds/" + name + '.mp3');
  audio.play();
}

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4); // Fix the range to include all colors
    var randomChosenColor = buttonColors[randomNumber];
    correctSequence.push(randomChosenColor);
    playSound(randomChosenColor); // Play the audio here
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); // Creates the animation for the button with the id of the number chosen
    level++;
    $("h1").text("level "+level);

    
    
}

//var randomNumber = nextSequence();
//var randomChosenColor = buttonColors[randomNumber];


$("div.btn").click(function(event){
  var userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  console.log(userClickedPattern);
  animatePressed(userChosenColor);
  check(level);
  
});


function animatePressed(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  }, 100);

}

$(document).keypress(function(){
  $("h1").text("level"+level);
  nextSequence()
  var active = true;

})

function check(level){
  if  (userClickedPattern[level] == correctSequence[level]){
    console.log("correct");
  }
  else{
    console.log("you loose");

  }
}