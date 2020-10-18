$(document).ready(function() {
  pickRandomNumber();
});

var pickRandomNumber = function() {
  var firstNumber = Math.floor((Math.random() * 10) + 1);
  var secondNumber = Math.floor((Math.random() * 10) + 1);
  var rightAnswer = firstNumber + secondNumber;
  $('.question-field').append($('<p>' + firstNumber + '&nbsp;' + '+' + '&nbsp;' + secondNumber + ' = ' + '</p>'));
}

var timer = null;
var countDown;
var startTime;

var startTimer = function(timeLimit) {
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
