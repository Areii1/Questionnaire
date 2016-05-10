var questionsAndAnswers = [
  {
    question: 'Who created javascript?',
    options: [
      {
        label: 'Brendan Eich',
        rightAnswer: true
      },
      {
        label: 'Henrik Raitasola',
        rightAnswer: false
      },
      {
        label: 'Linus Torvalds',
        rightAnswer: false
      },
      {
        label: 'Steve Ballmer',
        rightAnswer: false
      }
    ]
  },
  {
    question: 'Which year was javascript released?',
    options: [
      {
        label: '1999',
        rightAnswer: false
      },
      {
        label: '1995',
        rightAnswer: true
      },
      {
        label: '2007',
        rightAnswer: false
      },
      {
        label: '1976',
        rightAnswer: false
      }
    ]
  },
  {
    question: 'Which language is javascript mostly based on?',
    options: [
      {
        label: 'Python',
        rightAnswer: false
      },
      {
        label: 'C',
        rightAnswer: true
      },
      {
        label: 'Clojure',
        rightAnswer: false
      },
      {
        label: 'Shabba',
        rightAnswer: false
      }
    ]
  },
  {
    question: 'What is another name for Ecmascript 2015?',
    options: [
      {
        label: 'AS782',
        rightAnswer: false
      },
      {
        label: 'Clojure',
        rightAnswer: false
      },
      {
        label: 'ES6',
        rightAnswer: true
      },
      {
        label: '1976',
        rightAnswer: false
      }
    ]
  },
  {
    question: 'What is a popular javascript framework called?',
    options: [
      {
        label: 'Nude.js',
        rightAnswer: false
      },
      {
        label: 'IngularJS',
        rightAnswer: false
      },
      {
        label: 'Clojure',
        rightAnswer: false
      },
      {
        label: 'ReactJS',
        rightAnswer: true
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
  for (var i = 0; i < questionsAndAnswers.length; i++) {
    if (!isRightAnswer(getGuess(i))) {
      alert('Not all questions were correct');
      return;
    }
  }
  alert('All questions were correct');
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