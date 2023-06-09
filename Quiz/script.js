const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
let shuffledQuestions, currentQuestionIndex;
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

startButton.addEventListener("click", startGame);

function startGame() {
  //   console.log("started");
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuiestion();
}

function setNextQuiestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
        button.addEventListener('click' selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetStat() {
	nextButton.classList.add('hide');
	while(answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild
		(answerButtonsElement.firstChild)
	}
}

function selectAnswer(e) {}

const questions = [
  {
    question: "What is 2 + 2",
    answers: [
      {
        text: "4",
        correct: true,
      },
      {
        text: "22",
        correct: false,
      },
    ],
  },
];
