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

