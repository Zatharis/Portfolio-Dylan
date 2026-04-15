let buttonClick = document.getElementById("Game");
let buttonCounter = document.getElementById("Counter");

let count = 0

buttonClick.addEventListener('click', () => {
    count ++;
    buttonCounter.textContent = `Clicked ${count} times`;
    console.log(count);
    if (count == 5) {
        alert("Woah, found something?");
        buttonClick.textContent = "Does it do something..?"
    }
    else if (count == 25) {
        alert("Hey, aren't you supposed to be working?")
    }
    else if (count == 100) {
        alert("You really want that clicker game huh..")
        buttonClick.textContent = "Clicky clicky!"
    }
    else if (count == 150){
        alert("Achievement: clicker pro!")
    }
})