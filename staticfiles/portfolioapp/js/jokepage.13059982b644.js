const setupDiv = document.getElementById("setup");
const punchlineDiv = document.getElementById("punchline");
const punchlineBtn = document.getElementById("punchlineBtn");
const newJokeBtn = document.getElementById("newJokeBtn");
let punchline;

function getPunchline() {
    punchlineDiv.classList.add("bubble");
    punchlineDiv.innerHTML = punchline;
    punchlineBtn.classList.toggle("hidden");
    newJokeBtn.classList.toggle("hidden");

}

punchlineBtn.addEventListener("click", getPunchline)

async function getJoke() {
    // Fetch the joke from the API, ensure JS waits for fetch to complete
    const jokePromise = await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
    const joke = await jokePromise.json();

    // Display the setup immediately
    setupDiv.innerHTML = joke[0].setup;

    // Store the punchline for later
    punchline = joke[0].punchline;

    // Reset the punchline to initial state
    punchlineDiv.innerHTML = '';
    punchlineDiv.classList.remove("bubble")

    // Toggle the button visibility
    punchlineBtn.classList.toggle("hidden")
    newJokeBtn.classList.toggle("hidden")
}

getJoke();
newJokeBtn.addEventListener('click', getJoke);
