let quotes = [
  {
    id: 0,
    quote: "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.",
    author: "Charles Lindbergh",
    likes: 0
  },
  {
    id: 1,
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    likes: 0
  },
  {
    id: 2,
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    likes: 0
  }
];

let lastQuoteId = null;
let currentQuote = null;


const section = document.getElementById("quoteSection");
const generateBtn = document.getElementById("generateBtn");
const info = document.getElementById("info");


generateBtn.addEventListener("click", () => {
  let random;
  do {
    random = Math.floor(Math.random() * quotes.length);
  } while (random === lastQuoteId);

  lastQuoteId = random;
  currentQuote = quotes[random];
  displayQuote(currentQuote);
});

function displayQuote(q) {
  section.innerHTML = `
    <p>"${q.quote}"</p>
    <p class="author">— ${q.author}</p>
    <p>Likes: ${q.likes}</p>
  `;
}


document.getElementById("charWithSpace").onclick = () => {
  info.textContent = currentQuote.quote.length;
};

document.getElementById("charNoSpace").onclick = () => {
  info.textContent = currentQuote.quote.replace(/\s/g, "").length;
};

document.getElementById("wordCount").onclick = () => {
  info.textContent = currentQuote.quote.split(" ").length;
};

document.getElementById("likeBtn").onclick = () => {
  currentQuote.likes++;
  displayQuote(currentQuote);
};


document.getElementById("addQuoteForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const quoteText = document.getElementById("newQuote").value;
  const authorText = document.getElementById("newAuthor").value;

  quotes.push({
    id: quotes.length,
    quote: quoteText,
    author: authorText,
    likes: 0
  });

  e.target.reset();
});


let filteredQuotes = [];
let filterIndex = 0;

document.getElementById("filterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const author = document.getElementById("filterAuthor").value;

  filteredQuotes = quotes.filter(q => q.author === author);
  filterIndex = 0;

  if (filteredQuotes.length > 0) {
    displayQuote(filteredQuotes[filterIndex]);
    currentQuote = filteredQuotes[filterIndex];
  } else {
    section.textContent = "No quotes found.";
  }
});


document.getElementById("nextBtn").onclick = () => {
  if (filteredQuotes.length === 0) return;
  filterIndex = (filterIndex + 1) % filteredQuotes.length;
  currentQuote = filteredQuotes[filterIndex];
  displayQuote(currentQuote);
};

document.getElementById("prevBtn").onclick = () => {
  if (filteredQuotes.length === 0) return;
  filterIndex =
    (filterIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
  currentQuote = filteredQuotes[filterIndex];
  displayQuote(currentQuote);
};
