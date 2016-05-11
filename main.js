createQuestions();

function createQuestions() {
  for (var i = 0; i < questionsAndAnswers.length; i++) {
    var question = questionsAndAnswers[i].question;
    var options = questionsAndAnswers[i].options;
    
    renderHeader(question);
    renderOptions(options, i);
  }
}

function renderHeader(question) {
    var questionHeader = document.createElement('h3');
    var questionHeaderText = document.createTextNode(question);
    questionHeader.appendChild(questionHeaderText);
    document.getElementById('questions').appendChild(questionHeader);
}

function renderOptions(options, questionIndex) {
    for (var i = 0; i < options.length; i++) {
      var optionDiv = document.createElement('div');
      var optionInput = document.createElement('input');
      optionInput.type = 'radio';
      optionInput.name = questionIndex;

      if (options[i].rightAnswer) {
        optionInput.value = '*' + questionIndex;
      }
      else {
        optionInput.value = questionIndex;
      }

      var optionLabel = document.createTextNode(options[i].label);
      optionDiv.appendChild(optionInput);
      optionDiv.appendChild(optionLabel);

      document.getElementById('questions').appendChild(optionDiv);
    }
}

var form = document.getElementById('questionnaire');
form.addEventListener('submit', function(e) {
	e.preventDefault();

  if (isEveryQuestionAnswered()) {
   showResults();
  }
  else {
    alert('Answer every question!');
  }
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
  var counter = 0;
  for (var i = 0; i < questionsAndAnswers.length; i++) {
    if (isRightAnswer(getGuess(i))) {
      counter++;
    }
  }
  if (counter == 0) {
    alert('Oh no, you got em all wrong >:(');
  }
  else if (counter < questionsAndAnswers.length/2) {
    alert('Damn, less than half were right (' + counter + ')');
  }
  else if (counter == questionsAndAnswers.length) {
    alert('FANTASTIC, you got everything correct');
  }
  else if(counter => questionsAndAnswers.length/2) {
    alert('Nice, atleast half were right (' + counter + ')');
  }
}

function isValidGuess(guess) {
  if (guess == undefined) {
    return false;
  }
  else {
    return true;
  }
}

function isEveryQuestionAnswered() {
  for (var i = 0; i < questionsAndAnswers.length; i++) {
    if (!isValidGuess(getGuess(i))) {
      return false;
    }
  }
  return true;
}