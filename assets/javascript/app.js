$(document).ready(function() {
	var questions {
		MiMo:"Who did contact juggling in the movie Labrynth?",
		Falc:"What is the name of the luck dragon in Neverending Story?",
	}

	var answers {
		MiMo: function () {
			$("#answers").empty();
			var ans = ["David Bowie","Jennifer Conelly","Michael Moschen","Jim Henson"]
			dropAnswers(ans);
			correctAnswer(2);
		},
		Falc: function () {
			$("#answers").empty();
			var ans = ["Falcor","Smaug","George","Attreu"]
			dropAnswers(ans);
			correctAnswer(0);
		},
	}

	var qna = ["MiMo","Falc"]

	var time = 10;
	var intervalId;
	var correct = 0;
	var wrong = 0;



	function dropAnswers(arr) {
		for (i = 0; i < arr.length; i++) {
			var ansOptions = $("<div>");
			ansOptions.addClass("answers");
			ansOptions.attr("ansInd",i);
	*		ansOptions.text(arr[i]);   //is this the most elegant way to add the answers to the page?
			$("#answers").append(ansOptions);
		}		
	}

	function correctAnswer(j) {
		$(document).on("click",".answers",function() {
	****	if (this has a ansInd == j ****) {
				correct++;
				correctSplash();
				$("#correct").html(correct);
			}
			else {
				wrong++;
				wrongSplash();
				$("#wrong").html(wrong);
			}
		})
	}


  *	function go() {
		intervalId = setInterval(decrement, 1000);
		$("#questions").html("<h2>" + randomquestion + "</h2>");
		getQuestion();
	}   //this is the first go function, probably triggered at the beggining

	function decrement() {
		time--;
		$("#timer").html("<h2>" + time + "</h2>");
		if (time === 0) {
			stopTime();
		}
	}

  	function stopTime() {
		clearInterval(intervalId);
	}

  *	function correctSplash() {

	}

  *	function wrongSplash() {

	}
})