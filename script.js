//Blackjack
//By Yuliya Tasheva

//DOM Variables

let textArea = document.getElementById("text-area");
let newGameButton = document.getElementById("new-game-button");
let hitButton = document.getElementById("hit-button");
let stayButton = document.getElementById("stay-button");

// Card Variables

let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = ["As", "King", "Queen", "Jack",
    "Ten", "Nine", "Eight", "Seven", "Six",
    "Five", "Four", "Three", "Two"
];

// Game Variables

let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitButton.style.display = "none";
stayButton.style.display = "none";
showStatus();

newGameButton.addEventListener("click", function () {

    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];

    textArea.innerText = "Started..";
    newGameButton.style.display = "none";
    hitButton.style.display = "inline";
    stayButton.style.display = "inline";
    showStatus();
});

function createDeck() {
    let deck = [];
        for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
            for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
                let card = {
                    suit: suits[suitIdx],
                    value: values[valueIdx]
                };
                deck.push(card);
            }
        }
        this.deck = deck;
        return deck;
}

function shuffleDeck(deck) {
        for (let i = 0; i < deck.length; i++) {
            let swapIdx = Math.trunc(Math.random() * deck.length);
            let randomCard = deck[swapIdx];
            let currentCard = deck[i];
            deck[swapIdx] = currentCard;
            deck[i] = randomCard;
        }
    }

function getNextCard() {
    let nextCard = deck.shift();
    console.log("card given is:", nextCard);
    return nextCard;
}

function getCardString(card) {
    return card.value + " of " + card.suit;
}


function showStatus() {
    if (!gameStarted) {
        textArea.innerText = "Welcome to BlackJack!";
        return;
    }

    for (let i = 0; i < deck.length; i++) {
        textArea.innerText += "\n" + getCardString(deck[i]);
    }

}

