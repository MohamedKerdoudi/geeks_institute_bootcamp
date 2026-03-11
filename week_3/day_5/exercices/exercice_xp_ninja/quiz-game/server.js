const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));


const questions = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    answer: "Django"
  }
];

app.get("/api/questions", (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});