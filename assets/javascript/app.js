// variables
$(document).ready(function(){
var questionsObj = [
	{
		question:"Which Emperor tried to elect his horse consul?",
		choices: ["Caligula", "Nero", "Commodus", "Constantine"],
		answer: "Caligula",
		funFact: "Caligula means 'little boots' in Latin. Unsurprisingly, he didn't refer to himself that way.",
	},
	{
		question:"What substance did the Romans use on injuries that we now know is an antibacterial?",
		choices:["Olive Oil","Lemon", "Honey", "Fish Oil"],
		answer:"Honey",
		funFact: "Romans saved the olive oil they used for bathing because they believed it had healing properties.",
	},
	{
		question:"Which Roman Emperor celebrated buying the office by eating his predecessor's last meal?",
		choices:["Didius Julianus", "Septimius Severus", "Antoninus Pius", "Agrippa"],
		answer:"Didius Julianus",
		funFact:"He paid 25,000 sesterces to every soldier to be declared Emperor. They took his money, then killed him 66 days later."
	},
	{
		question:"Which of Nero's wives was actually a man whom Nero made dress as a woman?",
		choices:["Poppaea Sabina", "Sporus", "Claudia Octavia", "Statila Messalina"],
		answer:"Sporus",
		funFact: "Poor Sporus looked so like the late Poppaea Sabina that even after Nero died, he was forced to be mistress to Poppaea's ex-husband.",
	},
	{
		question:"Which emperor opted to retire and become a cabbage farmer?",
		choices:["Constantine", "Diocletian", "Domitian", "Augustus"],
		answer:"Diocletian",
		funFact: "When civil war threatened and his supporters asked him to come back, he treated them to a long lecture on cabbages.",
	},
	{
		question:"Which Roman Emperor was known to have parties to look at ruptured hernias?",
		choices:["Nero", "Claudius", "Justinian", "Elagabalus"],
		answer:"Elagabalus",
		funFact:"Some people speculate that Elagabalus was transgender because he occasionally referred to himself as a 'lady' and is rumored to have asked for reassignment surgery.",
	},
	{
		question:"Which emperor had his soldiers collect seashells and declared that he had conquered the sea?",
		choices:["Titus", "Vespasian", "Caligula", "Tiberius"],
		answer:"Caligula",
		funFact: "He then proceeded to hold a triumph in Rome, where the soldiers displayed their 'treasure' of seashells.",
	},
	{
		question:"As a boy, which future emperor ordered his servant thrown in a fire because his bath was too hot?",
		choices:["Commodus", "Severus Alexander", "Galba", "Domitian"],
		answer:"Commodus",
		funFact: "The other servants had to throw a sheep skin into the fire and tell him it was the servant to appease him.",
	},
	{
		question:"question",
		choices:["a", "b", "c", "d"],
		answer:"b",
		funFact: "fact",
	},
	{
		question:"question",
		choices:["a", "b", "c", "d"],
		answer:"c",
		funFact:"fact",
	}
];
var correct = 0;
var currentQ = 0;
var timer = 20;
var answerScreen;

// cache variables
var $main = $("#main");

// functions

// Timers
function decrease(){
	timer -= 1;
	if (timer <= 0){
		clockStop();
		$main.empty();
		$main.append("<p>Oops! You ran out of time. It was " + questionsObj[currentQ].answer + "! </p>");
		$main.append("<p><strong>Fun Fact: </strong>" + questionsObj[currentQ].funFact + "</p>");
		currentQ ++;
		gameOver();
	}
	$("#time").html(timer + " sec");	
};
function clock(){
	answerScreen = setInterval(decrease, 1000)
};
function clockStop(){
	clearInterval(answerScreen);

};
//Render Questions
function questionAppear(){
	timer = 20;
	$main.empty();
	clock();
	$main.append("<p id = 'time'>" + timer + " sec</p>");
	$main.append("<div class='stateQ'>");
	$(".stateQ").append("<p>" + questionsObj[currentQ].question + "</p>");
	$main.append("<div class = 'choices'>");
	for(var i = 0; i <questionsObj[currentQ].choices.length; i++){
		$(".choices").append("<button class='btn' id = 'choice-button' value= '" + questionsObj[currentQ].choices[i] + "'>" + questionsObj[currentQ].choices[i] + "</button>" + "<br>");
		
	};
}
function start(){
	event.preventDefault();
        $main.empty();
        correct = 0;
        currentQ = 0;
        timer = 20;
        questionAppear();
        
};
// Check to see if the guess clicked matches the answer
function checkGuess (){
	if ($(this).val() === questionsObj[currentQ].answer && timer > 0){
		clockStop();
		$main.empty();
		$main.append("<p>Correct! It was " + questionsObj[currentQ].answer + "! </p>");
		// $main.append("<p> Fun Fact: </p>");
		$main.append("<p><strong>Fun Fact: </strong>" + questionsObj[currentQ].funFact + "</p>");
		currentQ ++;
		correct ++;
		gameOver();

	} 
	else{
		clockStop();
		$main.empty();
		$main.append("<p>Sorry! It was " + questionsObj[currentQ].answer + "! </p>");
		// $main.append("<p> Fun Fact: </p>");
		$main.append("<p><strong>Fun Fact: </strong>" + questionsObj[currentQ].funFact + "</p>");
		currentQ ++;
		gameOver();
	}
};

// End the Game and restart
function gameOver(){
	
	if(currentQ <= 9){
		setTimeout(questionAppear, 4000);;
	} else {
		$main.empty();
		$main.append("<h1> Game Over! </h1>");
		$main.append("<p> You got " + correct + "/10 correct </p>");
		$main.append("<button class='btn btn-primary' id='start-button'>Restart</button>");
	}
}
// Event Listeners for button clicks
$(document).on("click", "#choice-button", checkGuess);
$(document).on("click", "#start-button", start);

});
