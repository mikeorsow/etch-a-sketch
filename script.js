const squares = document.querySelectorAll('div.square');
console.log(squares)

squares.forEach(square => {
    square.addEventListener("mouseover", (e) => {
        console.log('MOUSEY MOUSEY')
        e.target.classList.add('filled');
    })
    
});