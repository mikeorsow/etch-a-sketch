let gridSize = parseInt(prompt("Enter a grid width", 16));
const squareSize = Math.round(960/gridSize);
const container = document.querySelector("div.container");  

for (let i = 0; i < gridSize * gridSize; i++) {
  console.log(`square ${i} created!`)
  const square = document.createElement("div");
  square.classList.add('square')
  square.style.width = `${squareSize}px`
  square.style.height = `${squareSize}px`
  square.addEventListener("mouseover", (e) => {
    console.log("MOUSEY MOUSEY");
    e.target.classList.add("filled");
  });

  container.appendChild(square);
}
