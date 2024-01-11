


var buttonColors = ['red', 'blue', 'green', 'yellow']


var gamePattern = []


var userClickedPattern = []


var started = false;

var level = 0;


//the keyboard function
$(document).keypress(function(){
  if(!started){

    $('#level-title').text("Level " + level)
    nextSequence();
    level++
    started = true;
  }
});

//the start over function
function startOver(){
  level = 0;
  gamePattern = [];
  started = false;

}

//the click function
$('.btn').click(function(userChosenColor){
  userChosenColor = $(this).attr('id')

  userClickedPattern.push(userChosenColor)
  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1);
})

function gameover(){
  
  }

// the audio function
function playSound(name){
  var audio = new Audio("sounds/"+name+'.mp3');
  audio.play();
    
}

// the animate function
function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");

  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  },100); 

}




function nextSequence(randomChosenColor){
  userClickedPattern = [];
  randomNumber = Math.round(Math.random() * 3)
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  var randomChosenColor = buttonColors[randomNumber]

  $('#'+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  level +=1
  $("#level-title").text("Level " + level);
  
  
}

//the answer checker
function checkAnswer(currentLevel){
   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){

    console.log("success");

    if(userClickedPattern.length === gamePattern.length){

      setTimeout(function () {
        nextSequence();
      }, 1000);

    }


   }else {
    playSound('wrong');
    console.log('wrong');

    $('h1').text('Game Over, Press Any Key to Restart')

  $("body").addClass("game-over");
  
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200); 


  startOver();
   
   }


}









