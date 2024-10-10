const container = document.querySelector(".container");
const button = document.createElement("button");
const header = document.createElement("div");
document.body.prepend(header);
header.classList.add("header");
header.prepend(button);
button.classList.add("button");
button.textContent = "Click here to enter grid height and width (MAX 100)";
button.addEventListener("click", resetGrid);

function sizeSelector() {
  size = 0;
  size = prompt("Enter grid size:", 16);
  return size * size;
}

function resetGrid() {
  container.textContent = "";
  gridSize = sizeSelector();

  const squaresPerRow = Math.sqrt(gridSize);
  const containerSize = 640;
  const squareSize = containerSize / squaresPerRow - 1;
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.style.background = "red";
    //div.textContent = "helloooooooooooo";
    div.classList.add("square");
    div.style.flexBasis = `${squareSize}px`;
    container.appendChild(div);
  }
}
