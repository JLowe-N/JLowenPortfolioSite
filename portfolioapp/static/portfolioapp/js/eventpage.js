/*===== Padded Square JS Event Listeners 
=====*/

let theSquare = document.getElementById("theSquare")

theSquare.addEventListener("mouseover", (event) => {
    event.target.style.background = "blue"
})
theSquare.addEventListener("mousedown", (event) => {
    event.target.style.background = "red"
})
theSquare.addEventListener("mouseup", (event) => {
    event.target.style.background = "yellow"
})
theSquare.addEventListener("dblclick", (event) => {
    event.target.style.background = "green"
})

document.body.addEventListener("wheel", () => {
    document.getElementById("theSquare").style.background = "orange"
})

document.addEventListener("keydown", (event) => {
    switch (event.which) {
        case 66: // b as in blue
            theSquare.style.background = "blue"
            break
        case 82: // r as in red
            theSquare.style.background = "red"
            break
        case 89: // y as in yellow
            theSquare.style.background = "yellow"
            break
        case 71: // g as in green
            theSquare.style.background = "green"
            break
        case 79: // o as in orange
            theSquare.style.background = "orange"
            break
    }
})

/*===== Input Text-Field Event Listeners
=====*/

let textFieldExample = document.getElementById("textFieldExample")
let postButton = document.getElementById("postButton")

function inputTextFocusHandler() {
    textFieldExample.style.background = "lightblue"
    if (textFieldExample.value === "Add a value to the list below") {
        textFieldExample.value = ""
    }
}

function inputTextBlurHandler() {
    textFieldExample.style.background = "white"
    if (textFieldExample.value === "") {
        textFieldExample.value = "Add a value to the list below"
    }
}

function postSubmitHandler() {
    if (textFieldExample.value.length < 5) {
        alert("List input must be at least 5 characters in length.")
    } else if (textFieldExample.value === "Add a value to the list below") {
        alert("Please enter your own list item text before submitting.")
    } else {
        let postList = document.getElementById("postList")
        let newLi = document.createElement("li")
        newLi.textContent = textFieldExample.value
        postList.append(newLi)
        textFieldExample.value = "Add a value to the list below"
    }
}

textFieldExample.addEventListener("focus", inputTextFocusHandler)
textFieldExample.addEventListener("blur", inputTextBlurHandler)
postButton.addEventListener("click", postSubmitHandler)