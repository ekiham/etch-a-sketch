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
  if (size > 0 && size <= 100) {
    return size * size;
  } else if (size <= 0 || size > 100 || Number.isInteger(size) == false) {
    while (size <= 0 || size > 100 || Number.isInteger(size) == false) {
      alert("Grid size must be an integer between 1-100!!!");
      size = prompt("Enter grid size:", 16);
      if (size <= 0 || size > 100 || Number.isInteger(size) == false) {
        break;
      }
    }
    return size * size;
  }
}

function resetGrid() {
  container.textContent = "";
  gridSize = sizeSelector();

  const squaresPerRow = Math.sqrt(gridSize);
  const containerSize = 640;
  const squareSize = containerSize / squaresPerRow;
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.style.background = "white";
    div.classList.add("square");
    div.style.flexBasis = `${squareSize}px`;
    div.addEventListener("mouseover", changer);
    container.appendChild(div);
  }
}

function changer() {
  const square = event.target;
  square.style.backgroundColor = "black";
}
