const displayColor = document.querySelector(".randomColor");
const title = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const btn = document.querySelector(".btn");
let colors = [];

generateRandomColor();
assignColors();
function generateRandomColor() {
  for (let i = 0; i < boxes.length; i++) {
    colors.push(
      `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )})`
    );
  }
}
function assignColors() {
  colors.forEach((color, index) => {
    boxes[index].style.background = color;
    boxes[index].setAttribute("data-color", color);
  });
}

function getRandomPickedColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  displayColor.textContent = randomColor;
  return randomColor;
}
function checkColor() {
  boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
      if (e.target.dataset.color === pickedColor) {
        // document.body.style.background = "#70d448";
        document.body.style.backgroundImage = "url('victory.jpg')";
        title.innerHTML = "Congratulations!";
        displayColor.innerHTML = "Click Refresh to play again";
        title.style.color = "white";
        displayColor.style.color = "white";
      }
    });
  });
}
let pickedColor = getRandomPickedColor();
checkColor();

btn.addEventListener("click", () => {
  window.location.reload();
});
