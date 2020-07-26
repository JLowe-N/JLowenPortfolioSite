const deckArray = [
    { name: 'George Jetson', power: 25 },
    { name: 'Spiderman', power: 80 },
    { name: 'Iron Man', power: 80 },
    { name: 'Captain America', power: 80 },
    { name: 'Thor', power: 80 },
    { name: 'Star Lord', power: 75 },
    { name: 'Groot', power: 70 },
    { name: 'Rocket', power: 70 },
    { name: 'Gamorra', power: 75 },
    { name: 'Deadpool', power: 80 },
    { name: 'Wolverine', power: 80 },
    { name: 'Harry Potter', power: 50 },
    { name: 'Hermione', power: 50 },
    { name: 'Ron Weasley', power: 50 },
    { name: 'Dumbledore', power: 75 },
    { name: 'Garfield', power: 5 },
    { name: 'Pink Panther', power: 5 },
    { name: 'Dexter, the Scientist', power: 45 },
    { name: 'Dexter, the Killer', power: 70 },
    { name: 'Sonic The Hedgehog', power: 70 },
    { name: 'Dr. Robotnik', power: 55 },
    { name: 'Tails', power: 40 },
    { name: 'Mario', power: 70 },
    { name: 'Luigi', power: 65 },
    { name: 'Pacman', power: 30 },
    { name: 'Dr. Evil', power: 1 },
    { name: 'Austin Powers', power: 70 },
    { name: 'MiniMe', power: 1 },
    { name: 'Shrek', power: 55 },
    { name: 'Donkey', power: 1 },
]

// Fisher-Yates Shuffle

let deckSize = deckArray.length
function shuffleFisherYates(array) {
    for (let i = deckSize - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = deckArray[i]
        deckArray[i] = deckArray[j]
        deckArray[j] = temp
    }
}

// DOM Objects

let gameMessage = document.getElementById("gameMessage")
let battleBtn = document.getElementById("battleBtn")
let resetBtn = document.getElementById("resetBtn")

// Game control flow

function dealCards(deck) {
    // Randomize the game
    let mid = Math.floor(deck.length / 2)
    shuffleFisherYates(deck)

    // Initialize the decks
    player1Deck = deck.slice(0, mid)
    player2Deck = deck.slice(mid, deck.length)
    limboDeck = []
}

function cardBattle(deck) {
    // Initialize the cards left related to the win condition
    dealCards(deck)
    let player1CardsLeft = player1Deck.length
    let player2CardsLeft = player2Deck.length
    let player1Card
    let player2Card
    // Ensure game window is reset
    gameMessage.textContent = "Game Start - Get Your Opponent to Less Than 5 Cards"
    document.getElementById("p1CardName").textContent = "P1 Card Name"
    document.getElementById("p1CardPower").textContent = "P1 Card Power"
    document.getElementById("p2CardName").textContent = "P2 Card Name"
    document.getElementById("p2CardPower").textContent = "P2 Card Power"
    player1CardsLeft = player1Deck.length
    player2CardsLeft = player2Deck.length
    document.getElementById("p1CardsLeft").textContent = `P1 Cards Left: ${player1CardsLeft}`
    document.getElementById("p2CardsLeft").textContent = `P2 Cards Left: ${player2CardsLeft}`
    resetBtn.style.display = "none"
    battleBtn.style.display = "inline-block"

}

function takeATurn() {
    // Begin the game
    console.log("taking a turn")




    // Peak at the top cards
    player1CardName = player1Deck[player1Deck.length - 1].name
    player1CardPower = player1Deck[player1Deck.length - 1].power
    player2CardName = player2Deck[player2Deck.length - 1].name
    player2CardPower = player2Deck[player2Deck.length - 1].power

    document.getElementById("p1CardName").textContent = player1CardName
    document.getElementById("p1CardPower").textContent = player1CardPower
    document.getElementById("p2CardName").textContent = player2CardName
    document.getElementById("p2CardPower").textContent = player2CardPower


    // Resolve the battle. If cards in limbo, then start popping those cards to the winner, or send additional cards to limbo if a tie. 
    if (player1CardPower === player2CardPower) {
        gameMessage.textContent = "It's a Tie, sending cards to Limbo."
        limboDeck.push(player1Deck.pop(), player2Deck.pop())
    } else if (player1CardPower > player2CardPower) {
        gameMessage.textContent = "Player 1 wins this round and takes the cards."
        player1Deck.unshift(player1Deck.pop(), player2Deck.pop())
        for (let i = limboDeck.length; i > 0; i--) {
            player1Deck.unshift(limboDeck.pop())
        }
    } else {
        gameMessage.textContent = "Player 2 wins this round and takes the cards."
        player2Deck.unshift(player2Deck.pop(), player1Deck.pop())
        for (let i = limboDeck.length; i > 0; i--) {
            player1Deck.unshift(limboDeck.pop())
        }
    }

    player1CardsLeft = player1Deck.length
    player2CardsLeft = player2Deck.length

    document.getElementById("p1CardsLeft").textContent = `P1 Cards Left: ${player1CardsLeft}`
    document.getElementById("p2CardsLeft").textContent = `P2 Cards Left: ${player2CardsLeft}`
    document.getElementById("limboCardsLeft").textContent = `Limbo Cards Left: ${limboDeck.length}`

    if (player1CardsLeft < 5) {
        gameMessage.textContent = "Player 2 Wins The Game."
        battleBtn.style.display = "none"
        resetBtn.style.display = "inline-block"
        console.log("Game Complete")
    } else if (player2CardsLeft < 5) {
        gameMessage.textContent = "Player 1 Wins The Game"
        battleBtn.style.display = "none"
        resetBtn.style.display = "inline-block"
        console.log("Game Complete")
    }
}

battleBtn.addEventListener("click", takeATurn)
resetBtn.addEventListener("click", () => {
    cardBattle(deckArray)
})

cardBattle(deckArray)