let theSquare = document.getElementById("theSquare")

/*===== Padded Square JS Event Listeners 
=====*/

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
