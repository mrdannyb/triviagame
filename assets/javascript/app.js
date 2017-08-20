$(document).ready(function () {

	var unaskedQuestions = [
	{	question: "In Star Trek 2, Captain Kirk fights a worthy adversary",
		answers: ["David Bowie","Khan","Spock","Dirty Hairy"],
		key: 1
	},
	{	question: "Who did contact juggling in the movie Labrynth?",
		answers: ["David Bowie","Jennifer Conelly","Michael Moschen","Jim Henson"],
		key: 2
	},
	{	question: "What is the name of the luck dragon in Neverending Story?",
		answers: ["Falcor","Smaug","George","Attreu"],
		key: 0
	},
	{	question: "What is Indiana Jones most afraid of?",
		answers: ["Fire","Snakes","Defenistration","Your mom"],
		key: 1
	},
	{	question: "In Tolkien lore, what color is Radagast associated with?",
		answers: ["White","Grey","Blue","Brown"],
		key: 3
	},
	{	question: "In what star system does Luke reside at the beggining of Star Wars 4?",
		answers: ["Alderan","Tatuine","Endor","Degoba"],
		key: 1
	},
	{	question: "In the Little Mermaid, what's a dinglehopper?",
		answers: ["A kind of fish","An aquatic robot","A fork","The prince's little general"],
		key: 2
	},
	{	question: "In Lion King, what kind of animal is Pumba?",
		answers: ["Lion","Jackal","Monkey","Warthog"],
		key: 3
	},
	{	question: "Masters of the Universe, the live action movie, features this beefcake",
		answers: ["Arnold Schwarzenegger","Dolf Lundren","Lionel Richie","David Hasselhof"],
		key: 1
	},
	{	question: "In The Princess Bride, Indigo Montoya's life goal revolves around...",
		answers: ["Revenge for a dead father","Revenge for a dead wife","To be the best swordsman in the world","Pizza"],
		key: 0
	}];

	var time = 15;
	var intervalId;
	var wrong = 0;
	var correct = 0;
	var quest, key, rand, ans, missed;


	$("#Welcome").on("click", function(){
		clearQA();
		getQuestion();
	})


	function getQuestion() {
		if (unaskedQuestions.length > 0) {
			intervalId = setInterval(decrement, 1000);
			rand = Math.floor(Math.random() * unaskedQuestions.length);
			quest = unaskedQuestions[rand].question;
			$("#questions").html(quest);
			ans = unaskedQuestions[rand].answers;
			key = unaskedQuestions[rand].key;	
			console.log(unaskedQuestions[rand].answers[key]);
			$("#missed").text(unaskedQuestions[rand].answers[key]);

			for (i = 0; i < ans.length; i++) {
				var choice = $("<div>");
				choice.addClass("choice");
				choice.attr("value",i);
				choice.html(ans[i]);
				$("#answers").append(choice);
			}
			missed = unaskedQuestions.splice(rand,1);				
		}
		else {
			clearQA();
			$("#answers").text("Thanks for playing. I hope you feel more trivi-ish after playing!");
			$("#questions").text("You finished this quiz!")
		}
	}



    $("#answers").on("click",".choice",function() {
        var element = $(this);
        if (element.attr("value") == key) {
            correct++;
            $("#correct").html(correct);
            correctSplash();
        }
        else {
            wrong++;
            $("#wrong").html(wrong);
            wrongSplash();
        }
       })


	function correctSplash() {
		setTimeout(leaveSplash,2000);
		$("#correct-splash").css("display","block");
		stopTime();
	}

	function wrongSplash() {
		setTimeout(leaveSplash,2000);
		$("#wrong-splash").css("display","block");
		stopTime();
	}

	function leaveSplash() {
		clearQA();
		$("#correct-splash").css("display","none");
		$("#wrong-splash").css("display","none");
		getQuestion();
		time = 15;
		$("#timer").html("<h2>" + time + "</h2>")
	}

	function decrement() {
		time--;
		$("#timer").html("<h2>" + time + "</h2>");
		if (time === 0) {
			stopTime();
			incWrong();
			wrongSplash();
		}
	};

	function stopTime() {
		clearInterval(intervalId);
	};

	function clearQA() {
		$("#questions").empty();
		$("#answers").empty();
	}

	function incWrong() {
		wrong++;
		$("#wrong").html(wrong);
	}

	function incCorrect() {
		correct++;
		$("#correct").html(correct);
	}
})