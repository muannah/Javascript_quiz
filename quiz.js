

var quizQuestions = [
    [1, "What solar system do we live in?", "Earth"],
    [2, "How many ounces are in a cup?",  "8"],
    [3, "What type of cellphone is currently the most popular in the world?", "apple"],
    [4, "What is the tallest building in Chicago?", " Willis tower "],
    [5, "What is the name of Chicago white sox new stadium?", "Guaranteed Rate Field"]
];

var answer;
var response;
tryQuiz();
function tryQuiz(){
	  var counterCorect=0
    var rightAnswer = '';
		var wrongAnswer = '';
    for (var i = 0; i < quizQuestions.length; i += 1) {
    	answer = prompt(quizQuestions[i][1]);
			response = answer.toLowerCase();
			if (response === quizQuestions[i][2].toLowerCase()) {
				counterCorect++
				rightAnswer += `<li>${quizQuestions[i][1]}</li>`
			}else{
				wrongAnswer += `<li>${quizQuestions[i][1]}</li>`
			}
		}
  document.write(`
		<h2 style="text-align: center"> JavaScript Quiz</h2>
		<h2>You got ${counterCorect} question(s) right</h2>
		<p>You got these questions correct:</p>
		<ol>${rightAnswer}</ol>
		<p>You got these questions wrong:</p>
		<ol>${wrongAnswer}</ol>
	`);
}


