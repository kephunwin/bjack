
let array = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let name = "Player" 
let cash = 0

let play = document.getElementById("play");
let add = document.getElementById("sum");
let cards = document.getElementById("cards");
let guests = document.getElementById("player");

guests.textContent = name + ": $" + cash //showing current stats

function five() {
    cash += 5
    guests.textContent = name + ": $" + cash // add 5 dollars
}

function ten() {
    cash += 10
    guests.textContent = name + ": $" + cash // 10 dollars
}

function twenty() {
    cash += 20
    guests.textContent = name + ": $" + cash // 20 dollars
}

function fifty() {
    cash += 50
    guests.textContent = name + ": $" + cash // 50 dollars
}

function delay() { //used for set time out. making the current cash value 0 again so function start will execute cash === 0
    cash = 0
    guests.textContent = name + ": $" + cash
    alert("Lets go again!")
}

function winning() {
    cash *= 2
    guests.textContent = name + ": $" + cash
    alert("You've doubled your cash!")
}

function getRandomCard() {
    let number = Math.floor(Math.random() * 13 ) + 1 // rounds down number then randomizes from array of items/number
    if (number > 10) {
        return 10
    }
    else if (number === 1) {
        return 11
    }
    else {
    return number
    }
}

function start() {
    if (cash === 0) {
        alert("Add money to start")
    }
    else {isAlive = true
    let firstCard = getRandomCard() // once initialized, grabs first card
    let secondCard = getRandomCard() // once initialized, grabs second card
    array = [firstCard, secondCard] // once started, inserts this into the global array variable
    sum = firstCard + secondCard // once started, inserts this into the global sum variable
    initialize()} // will perform initialize function
}


function initialize() {
    cards.textContent = "Cards: "
    for(let i = 0; i < array.length; i++) {
        cards.textContent += array[i] + " " // += is adding onto it
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
        winning(); //winning function that doubled the current cash
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    if (message === "You're out of the game! 😭") {
        setTimeout(delay, 500)
    }

    play.textContent = message //prints out the id from play in html
    add.textContent = "Sum: " + sum
}

function newGame() {
    if(isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card //adding to the sum variable
    array.push(card) //push card into array
    initialize() //going to start initalize
    }
}


