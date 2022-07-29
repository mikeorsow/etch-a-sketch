// const squares = document.querySelectorAll('div.square');
// console.log(squares)

// squares.forEach(square => {
//     square.addEventListener("mouseover", (e) => {
//         console.log('MOUSEY MOUSEY')
//         e.target.classList.add('filled');
//     })

// });

const container = document.querySelector("div.container");
const gridSize = 10;
const squareSize = Math.round(960/gridSize);

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
