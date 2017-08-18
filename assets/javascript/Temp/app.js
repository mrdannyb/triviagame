$(document).ready(function() {
	var questions = {
		MiMo:"Who did contact juggling in the movie Labrynth?",
		Falc:"What is the name of the luck dragon in Neverending Story?",
		Indi:"What is Indiana Jones most afraid of?",
		Hobo:"In Tolkien lore, what color is Radagast associated with?",
		StWr:"In what star system does Luke reside at the beggining of Star Wars 4?"
	}

	var answers = {
		MiMo: function () {			
			var ans = ["David Bowie","Jennifer Conelly","Michael Moschen","Jim Henson"]
			dropAnswers(ans);
			correctAnswer(2);
		},
		Falc: function () {			
			var ans = ["Falcor","Smaug","George","Attreu"]
			dropAnswers(ans);
			correctAnswer(0);
		},
		Indi: function () {			
			var ans = ["Fire","Snakes","Defenistration","Your mom"]
			dropAnswers(ans);
			correctAnswer(1);
		},
		Hobo: function () {			
			var ans = ["White","Grey","Blue","Brown"]
			dropAnswers(ans);
			correctAnswer(3);
		},
		StWr: function () {			
			var ans = ["Alderan","Tatuine","Endor","Degoba"]
			dropAnswers(ans);
			correctAnswer(1);
		},
	}

	var qna = ["MiMo","Falc","Indi","Hobo","StWr"]

	var time = 15;
	var intervalId;
	var correct = 0;
	var wrong = 0;
	
	$("#welcome").on("click", go());

	function dropAnswers(arr) {
		for (i = 0; i < arr.length; i++) {
			var ansOptions = $("<div>");
			ansOptions.addClass("answers");
			ansOptions.attr("ansInd",i);
			ansOptions.text(arr[i]);   //is this the most elegant way to add the answers to the page?
			$("#answers").append(ansOptions);
		}		
	};

	function correctAnswer(j) {
	/*	$(document).on("click",".answers",function() {
			if (this has a ansInd == j ) {
				correct++;
				correctSplash();
				$("#correct").html(correct);
				stopTime();
			}
			else {
				wrong++;
				wrongSplash();
				$("#wrong").html(wrong);
				stopTime();
			}
		}) */
	};

	function getQuestion() {
		var ran = Math.floor(Math.random() * qna.length);
		var token = qna[ran]
		$("#questions").html(questions.token); //can I use this token to call properties?
		answers.token();
	};

  	function go() {
		intervalId = setInterval(decrement, 1000);
		getQuestion();
		$("#time").html(time);
	};   //this is the first go function, probably triggered at the beggining

	function decrement() {
		time--;
		$("#timer").html("<h2>" + time + "</h2>");
		if (time === 0) {
			stopTime();
			wrong++;
		}
	};

  	function stopTime() {
		clearInterval(intervalId);
	};

  	function correctSplash() {
  		$("#answers").empty();
  		$("#questions").empty();

	}; //want to make the yes page pop up, then go away

  	function wrongSplash() {
  		$("#answers").empty();
  		$("#questions").empty();
	};//want to make the no page pop up, then go away
});