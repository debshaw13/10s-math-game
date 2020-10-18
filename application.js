$(document).ready(function() {
  pickRandomNumber();
});

var pickRandomNumber = function() {
  var firstNumber = Math.floor((Math.random() * 10) + 1);
  var secondNumber = Math.floor((Math.random() * 10) + 1);
  var rightAnswer = firstNumber + secondNumber;
  $('.question-field').append($('<p>' + firstNumber + '&nbsp;' + '+' + '&nbsp;' + secondNumber + ' = ' + '</p>'));
}

var count
