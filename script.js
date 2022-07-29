const container = document.querySelector("div.container");
const resolution = document.querySelector("#resolution");

// Default resolution to display in Change Resolution Prompt
let currentResolution = 16;

const buildGrid = (numGridRows) => {
  // Grid width is fixed at 960px, so this fits the squares into the grid nicely
  const squareSize = 960 / numGridRows;

  resolution.textContent = `Resolution set to ${numGridRows} x ${numGridRows}`;

  for (let i = 0; i < numGridRows * numGridRows; i++) {
    const square = document.createElement("div");

    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", (e) => {
      // Increment opacity by 0.1 on each mouseover
      e.target.style.opacity = Number(e.target.style.opacity) + 0.2;
    });

    container.appendChild(square);
  }
};

const setGridResolution = () => {
  // Capture new resolution size
  const promptInput = prompt(
    "Please enter a new resolution between 1-100.",
    currentResolution
  );

  // Handle invalid resolution inputs
  if (promptInput == null) {
    return;
  } else if (promptInput > 100 || promptInput < 1 || isNaN(promptInput)) {
    return alert(`Please enter a number between 1-100.`);
  }

  // Set the new grid resolution
  const newGridResolution = parseInt(promptInput);
  currentResolution = newGridResolution;

  // Clear the old grid
  container.innerHTML = "";

  // Build out the new grid
  buildGrid(newGridResolution);
};

// Build default grid size 16x16 on load
buildGrid(16);
