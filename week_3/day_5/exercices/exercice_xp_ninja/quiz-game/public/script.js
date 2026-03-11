let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");
const submitBtn = document.getElementById("submit-btn");


fetch("/api/questions")
  .then(res => res.json())
  .then(data => {
    questions = data;
    loadQuestion();
  });

function loadQuestion() {
  feedback.textContent = "";
  selectedAnswer = null;

  if (currentQuestionIndex >= questions.length) {
    showFinalScore();
    return;
  }

  const questionObj = questions[currentQuestionIndex];
  questionContainer.textContent = questionObj.question;
  optionsContainer.innerHTML = "";

  questionObj.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      selectedAnswer = option;
    };
    optionsContainer.appendChild(btn);
  });
}

submitBtn.addEventListener("click", () => {
  if (!selectedAnswer) {
    feedback.textContent = "Please select an answer!";
    return;
  }

  const correctAnswer = questions[currentQuestionIndex].answer;

  if (selectedAnswer === correctAnswer) {
    feedback.textContent = "Correct!";
    score++;
  } else {
    feedback.textContent = `Wrong! Correct answer: ${correctAnswer}`;
  }

  currentQuestionIndex++;
  scoreDisplay.textContent = `Score: ${score}`;

  setTimeout(loadQuestion, 1000);
});

function showFinalScore() {
  questionContainer.textContent = "Quiz Finished!";
  optionsContainer.innerHTML = "";
  feedback.textContent = `Final Score: ${score}/${questions.length}`;
  submitBtn.style.display = "none";
}