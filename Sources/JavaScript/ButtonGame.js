let buttonClick = document.getElementById("Game");
let buttonCounter = document.getElementById("Counter");

let count = 0

buttonClick.addEventListener('click', () => {
    count ++;
    buttonCounter.textContent = `Clicked ${count} times`;
})