var questionsAndAnswers = [
  {
    question: 'What is the color of the sky?',
    options: [
      {
        label: 'blue',
        rightAnswer: true
      },
      {
        label: 'red',
        rightAnswer: false
      },
      {
        label: 'black',
        rightAnswer: false
      },
      {
        label: 'purple',
        rightAnswer: false
      }
    ]
  },
  {
    question: 'Am I going out tonight?',
    options: [
      {
        label: 'NO',
        rightAnswer: false
      },
      {
        label: 'yes',
        rightAnswer: true
      },
      {
        label: 'maybe',
        rightAnswer: false
      },
      {
        label: 'HELL FUCKING NO',
        rightAnswer: false
      }
    ]
  }
];

createQuestions();

function createQuestions() {
  for (var i = 0; i < questionsAndAnswers.length; i++) {
    var question = questionsAndAnswers[i].question;

    renderHeader(question);
    renderOptions(questionsAndAnswers[i].options, i);
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
   // showResults();
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