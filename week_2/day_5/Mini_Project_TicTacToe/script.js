let board;
let player;
let computer;
let gameOver = false;

const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");

const winCombos = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[6,4,2]
];


function chooseSymbol(symbol) {
  player = symbol;
  computer = symbol === "X" ? "O" : "X";
  startGame();
}

function startGame() {
  board = Array(9).fill(null);
  gameOver = false;
  message.textContent = "";
  document.getElementById("restart").style.display = "none";

  cells.forEach(cell => {
    cell.textContent = "";
    cell.onclick = handleClick;
  });
}


function handleClick(e) {
  const id = e.target.id;

  if (board[id] || gameOver) return;

  makeMove(id, player);

  if (!gameOver) {
    setTimeout(computerMove, 500);
  }
}


function makeMove(index, symbol) {
  board[index] = symbol;
  document.getElementById(index).textContent = symbol;

  if (checkWin(symbol)) {
    endGame(`${symbol} wins!`);
  } else if (board.every(cell => cell)) {
    endGame("Tie game!");
  }
}

function computerMove() {
  const level = document.getElementById("level").value;
  let move;

  if (level === "easy") {
    move = randomMove();
  } else {
    move = smartMove();
  }

  makeMove(move, computer);
}

function randomMove() {
  const empty = board
    .map((v, i) => v === null ? i : null)
    .filter(v => v !== null);

  return empty[Math.floor(Math.random() * empty.length)];
}

function smartMove() {
  for (let combo of winCombos) {
    const values = combo.map(i => board[i]);
    if (values.filter(v => v === player).length === 2 &&
        values.includes(null)) {
      return combo[values.indexOf(null)];
    }
  }
  return randomMove();
}

function checkWin(symbol) {
  return winCombos.some(combo =>
    combo.reduce((acc, index) =>
      acc + (board[index] === symbol ? 1 : 0), 0) === 3
  );
}


function endGame(text) {
  message.textContent = text;
  gameOver = true;
  document.getElementById("restart").style.display = "inline-block";
}

function restartGame() {
  startGame();
}
