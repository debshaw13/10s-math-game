$(document).ready(function() {
  //Run random number generator
  pickRandomNumber();

  //Initiate 10 second countdown function on first input field keyup
  $("#answer-field").keyup(function() {
    if (gameLaunched === false) {
      startTimer(timeLimit);
    }
    gameLaunched = true;
  })

  //Check provided answer on input field keyup
  $("#answer-field").keyup(function() {
    if ($("#answer-field").val().length === rightAnswer.toString().length) {
      checkAnswer();
    }
  })

  //Show timeLimit in html
  $('span#timer').text(timeLimit);

  //Show score and high score in html
  $('span#score').text(score);
  $('span#highscore').text(highscore);
});

//Global variables
var gameLaunched = false;
var timer = null;
var timeLimit = 10;
var rightAnswer;
var score = 0;
var highscore = 0;

//Random number generator function
var pickRandomNumber = function() {
  var firstNumber = Math.floor((Math.random() * 10) + 1);
  var secondNumber = Math.floor((Math.random() * 10) + 1);
  rightAnswer = firstNumber + secondNumber;
  $('.question-field').append($('<p>' + firstNumber + '&nbsp;' + '+' + '&nbsp;' + secondNumber + ' = ' + '</p>'));;
}

//Start timer and stop timer functions
var startTimer = function(timeLimit) {
  var countDown;
  var startTime;

  if (timer === null) {
    $("#timer").text(timeLimit);
    startTime = Date.now();
    timer = setInterval(function() {
      if (timeLimit > 0) {
        countDown = timeLimit - Math.floor((Date.now() - startTime)/1000);
        timeLimit--;
        $("#timer").text(timeLimit);
      } else {
        stopTimer();
        var timer = null // Reset timer variable
        timeLimit = 10; //Reset time to 10 seconds
        $("#timer").text(timeLimit); //Update html
        if (score > highscore) { //Update high score variable
          highscore = score;
          $('span#highscore').text(highscore)
        }
        
        var gameComplete = confirm("You scored " + score + " points. Play again?");
        if (gameComplete === true) {
          score = 0; //Reset score
          $('.question-field').empty(); //Empty question field
          pickRandomNumber(); // Show new question
        }
      }
    }, 1000); // Executed every 1000 millisecond
  }
};

var stopTimer = function() {
  clearInterval(timer);
  timer = null;
};

//Read input field and determine right answer
var checkAnswer = function() {
  if ($("#answer-field").val() == rightAnswer) {
    //delete question and empty input row
    $('.question-field').empty();
    $('#answer-field').val('');

    //Read remaining time from HTML and update
    timeLimit = parseInt($('#timer').text())
    timeLimit++;
    stopTimer();
    startTimer(timeLimit);

    //Update score and high score
    score++;
    $('span#score').text(score);

    //Create new question
    pickRandomNumber();
  }
  else {
    $('#answer-field').val('');
  }
}
