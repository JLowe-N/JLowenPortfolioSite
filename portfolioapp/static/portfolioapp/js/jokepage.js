const setupDiv = document.getElementById("setup")
const punchlineDiv = document.getElementById("punchline")
const punchlineBtn = document.getElementById("punchlineBtn")
const newJokesBtn = document.getElementById("newJokesBtn")

async function getJoke() {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    const joke = await jokePromise.json()

    setupDiv.innerHTML = joke[0].setup
    punchlineDiv.innerHTML = joke[0].punchline
    console.log(joke)

}

getJoke()