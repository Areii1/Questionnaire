var form = document.getElementById('questionnaire');
form.addEventListener('submit', function(e) {
	e.preventDefault();

	console.log("answer 1: " + getSelectedAnswerValue("answerType1"));
	console.log("answer 2: " + getSelectedAnswerValue("answerType2"));
	console.log("answer 3: " + getSelectedAnswerValue("answerType3"));
	console.log("answer 4: " + getSelectedAnswerValue("answerType4"));
	console.log("answer 5: " + getSelectedAnswerValue("answerType5"));
});

function getSelectedAnswerValue(answerType) {
  var answerTypeElement = document.getElementsByName(answerType);
  
  for (var i = 0; i < answerTypeElement.length; i++) {
    if (answerTypeElement[i].checked) {
        return selectedAnswerValue = answerTypeElement[i].value;
    }
  }
}
