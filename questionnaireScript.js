var form = document.getElementById('questionnaire');
form.addEventListener('submit', function(e) {
	e.preventDefault();

  console.log('answer1 correct? ' + isRightAnswer(getGuess('answerType1')));
  console.log('answer2 correct? ' + isRightAnswer(getGuess('answerType2')));
  console.log('answer3 correct? ' + isRightAnswer(getGuess('answerType3')));
  console.log('answer4 correct? ' + isRightAnswer(getGuess('answerType4')));
  console.log('answer5 correct? ' + isRightAnswer(getGuess('answerType5')));

  showResults();
});

function getGuess(answerType) {
  var answerTypeElement = document.getElementsByName(answerType);

  for (var i = 0; i < answerTypeElement.length; i++) {
    if (answerTypeElement[i].checked) {
        return selectedAnswerValue = answerTypeElement[i].value;
    }
  }
}

function isRightAnswer(guess) {
  if (guess.charAt(0) == '*') {
    return true;
  }
  else {
    return false;
  }
}

function showResults() {
  if (isRightAnswer(getGuess('answerType1')) 
    && isRightAnswer(getGuess('answerType2')) 
    && isRightAnswer(getGuess('answerType3')) 
    && isRightAnswer(getGuess('answerType4')) 
    && isRightAnswer(getGuess('answerType5'))) {
    alert('All 5 questions correct');
  }
  else {
    alert('Not all questions were correct');
  }
}