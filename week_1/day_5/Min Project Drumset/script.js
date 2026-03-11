
function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const button = document.querySelector(`.drum[data-key="${keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0; 
  audio.play();

  button.classList.add("active");
  setTimeout(() => button.classList.remove("active"), 100);
}

document.addEventListener("keydown", function (event) {
  playSound(event.keyCode);
});

const drums = document.querySelectorAll(".drum");

drums.forEach(drum => {
  drum.addEventListener("click", function () {
    const keyCode = this.getAttribute("data-key");
    playSound(keyCode);
  });
});
