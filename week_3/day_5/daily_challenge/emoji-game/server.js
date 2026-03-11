const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let leaderboard = [];


const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚗', name: 'Car' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🐱', name: 'Cat' },
    { emoji: '🎮', name: 'Game' },
    { emoji: '🌈', name: 'Rainbow' },
    { emoji: '⚽', name: 'Soccer' },
];

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}


app.get("/api/question", (req, res) => {
    const correctEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    const options = shuffle([
        correctEmoji.name,
        ...shuffle(emojis.filter(e => e.name !== correctEmoji.name))
            .slice(0, 3)
            .map(e => e.name)
    ]);

    res.json({
        emoji: correctEmoji.emoji,
        correctAnswer: correctEmoji.name,
        options
    });
});


app.post("/api/guess", (req, res) => {
    const { guess, correctAnswer, username, score } = req.body;

    const isCorrect = guess === correctAnswer;
    const newScore = isCorrect ? score + 1 : score;

    res.json({
        correct: isCorrect,
        newScore
    });
});


app.post("/api/leaderboard", (req, res) => {
    const { username, score } = req.body;

    leaderboard.push({ username, score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 5);

    res.json(leaderboard);
});


app.get("/api/leaderboard", (req, res) => {
    res.json(leaderboard);
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});