
const quizQuestions = [
	{
	  question: "What is the capital of France?",
	  optionA: "Berlin",
	  optionB: "Madrid",
	  optionC: "Paris",
	  optionD: "Rome",
	  correctAnswer: "optionC"
	},
	{
	  question: "Which planet is known as the Red Planet?",
	  optionA: "Venus",
	  optionB: "Mars",
	  optionC: "Jupiter",
	  optionD: "Saturn",
	  correctAnswer: "optionB"
	},
	{
	  question: "What is the largest mammal on Earth?",
	  optionA: "Elephant",
	  optionB: "Blue Whale",
	  optionC: "Giraffe",
	  optionD: "Hippopotamus",
	  correctAnswer: "optionB"
	},
	{
	  question: "Which programming language is often used for web development?",
	  optionA: "Python",
	  optionB: "Java",
	  optionC: "JavaScript",
	  optionD: "C++",
	  correctAnswer: "optionC"
	},
	{
	  question: "Who wrote 'Romeo and Juliet'?",
	  optionA: "Charles Dickens",
	  optionB: "William Shakespeare",
	  optionC: "Jane Austen",
	  optionD: "Mark Twain",
	  correctAnswer: "optionB"
	},
	{
	  question: "What is the powerhouse of the cell?",
	  optionA: "Nucleus",
	  optionB: "Mitochondria",
	  optionC: "Endoplasmic Reticulum",
	  optionD: "Golgi Apparatus",
	  correctAnswer: "optionB"
	}
  ];

const quizContainer = document.querySelector(".card-content");
const quizOptions = document.querySelectorAll(".option");
const questionText = document.querySelector("h3");
const optionA = document.querySelector("#option-a");
const optionB = document.querySelector("#option-b");
const optionC = document.querySelector("#option-c");
const optionD = document.querySelector("#option-d");

const errorMessage = document.querySelector(".error-message");
const submitButton = document.querySelector("button");

let currentIndex = 0;
let currentScore = 0;

const deselectOption = () => {
	quizOptions.forEach((option)=>{
		option.checked = "false";
	});
};

const handleQuiz = () => {
	const activeIndex = quizQuestions[currentIndex];
	questionText.textContent = activeIndex.question;
	optionA.textContent = activeIndex.optionA;
	optionB.textContent = activeIndex.optionB;
	optionC.textContent = activeIndex.optionC;
	optionD.textContent = activeIndex.optionD;
} 


const getAnswer = ()=> {
	let answer;
	quizOptions.forEach((option)=> {
		if(option.checked){
			answer = option.id;
		};
	});
	return answer;
}
handleQuiz();

submitButton.addEventListener("click", ()=> {
	const selectedAnswer = getAnswer();
	if (!selectedAnswer) {
		errorMessage.style.display = "block";
		return;
	} 
	if(selectedAnswer === quizQuestions[currentIndex].correctAnswer) {
		currentScore++;
	}
	currentIndex++;

	if(currentIndex < quizQuestions.length) {
		handleQuiz();
	} else {
		quizContainer.textContent = "";
		const finaleScore = document.createElement("h3");
		finaleScore.textContent = `Final score is ${finaleScore} of ${quizQuestions.length}`;
		const reloadButton = document.createElement("button");
		reloadButton.textContent = "Try again!";
		reloadButton.addEventListener("click", ()=> {
			window.location.reload();
		})
	}
	deselectOption();
	
});
