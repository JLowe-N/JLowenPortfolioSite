async function getJoke() {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    const joke = await jokePromise.json()

    console.log(joke)
}

getJoke()