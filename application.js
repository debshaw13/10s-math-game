$(document).ready(function() {
  //Run random number generator
  pickRandomNumber();

  //Initiate 10 second countdown function on input field keydown
  $("#answer-field").keydown(function() {
    startTimer(10);
  })

  //Check provided answer
  $("#answer-field").keyup(function() {
    if ($("#answer-field").val().length === rightAnswer.toString().length) {
      checkAnswer();
    }
  })
});

//Random number generator function
var rightAnswer;

var pickRandomNumber = function() {
  var firstNumber = Math.floor((Math.random() * 10) + 1);
  var secondNumber = Math.floor((Math.random() * 10) + 1);
  rightAnswer = firstNumber + secondNumber;
  $('.question-field').append($('<p>' + firstNumber + '&nbsp;' + '+' + '&nbsp;' + secondNumber + ' = ' + '</p>'));;
}

//Countdown function
var timer = null;
var timeLimit;

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
  if ($("#answer-field").val().toString() === rightAnswer.toString()) {
    console.log("hooray!");
    timeLimit++;
    $('.question-field').empty();
    $('#answer-field').val('');
    pickRandomNumber();
  }
  else {
    console.log($("#answer-field").val());
    console.log(rightAnswer);
    console.log("oops");
  }
}
