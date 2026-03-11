const form = document.getElementById("gif-form");
const input = document.getElementById("search-input");
const gifContainer = document.getElementById("gif-container");
const deleteAllBtn = document.getElementById("delete-all");

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";


form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const searchTerm = input.value.trim();
  if (!searchTerm) return;

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchTerm}`
    );

    const data = await response.json();


    const gifUrl = data.data.images.original.url;

    const gifDiv = document.createElement("div");

    const img = document.createElement("img");
    img.src = gifUrl;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";


    deleteBtn.addEventListener("click", function () {
      gifDiv.remove();
    });

    gifDiv.appendChild(img);
    gifDiv.appendChild(deleteBtn);

    gifContainer.appendChild(gifDiv);

    input.value = "";

  } catch (error) {
    console.error("Error fetching GIF:", error);
  }
});

deleteAllBtn.addEventListener("click", function () {
  gifContainer.innerHTML = "";
});
