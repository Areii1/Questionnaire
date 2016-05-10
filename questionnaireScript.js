var form = document.getElementById('questionnaire');
form.addEventListener('submit', function(e) {
	e.preventDefault();
	
	var answerType1 = document.getElementsByName("answerType1");

	for(var i = 0; i < answerType1.length; i++) {
   		if(answerType1[i].checked == true) {
       		var selectedAnswer1Value = answerType1[i].value;
   		}
 	}

 	var answerType2 = document.getElementsByName("answerType2");

	for(var i = 0; i < answerType2.length; i++) {
   		if(answerType2[i].checked == true) {
       		var selectedAnswer2Value = answerType2[i].value;
   		}
 	}

 	var answerType3 = document.getElementsByName("answerType3");

	for(var i = 0; i < answerType3.length; i++) {
   		if(answerType3[i].checked == true) {
       		var selectedAnswer3Value = answerType3[i].value;
   		}
 	}

 	var answerType4 = document.getElementsByName("answerType4");

	for(var i = 0; i < answerType4.length; i++) {
   		if(answerType4[i].checked == true) {
       		var selectedAnswer4Value = answerType4[i].value;
   		}
 	}

 	var answerType5 = document.getElementsByName("answerType5");

	for(var i = 0; i < answerType5.length; i++) {
   		if(answerType5[i].checked == true) {
       		var selectedAnswer5Value = answerType5[i].value;
   		}
 	}

	console.log("answer 1: " + selectedAnswer1Value);
	console.log("answer 2: " + selectedAnswer2Value);
	console.log("answer 3: " + selectedAnswer3Value);
	console.log("answer 4: " + selectedAnswer4Value);
	console.log("answer 5: " + selectedAnswer5Value);
});

