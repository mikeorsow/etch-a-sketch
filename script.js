const container = document.querySelector("div.container");

const buildGrid = (gridSize) => {
  const squareSize = Math.round(960 / gridSize);
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.addEventListener("mouseover", (e) => {
      console.log("MOUSEY MOUSEY");
      e.target.classList.add("filled");
    });

    container.appendChild(square);
  }
};

const setGridSize = () => {
  console.log("you did it");
  const promptGridSize = parseInt(prompt("How mamy squares per side? Max 100", 16)) 
  if (promptGridSize > 100) return alert(`Sorry, that's tooooo big!`)
  container.innerHTML = "";
  buildGrid(promptGridSize);
};

// default grid size 16x16
buildGrid(16);
