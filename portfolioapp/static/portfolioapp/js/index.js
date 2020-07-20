function getRandomColor() {
    return Math.floor(Math.random() * 16777215).toString(16)
}

function updateBGColor() {
    let colorHex = getRandomColor()
    document.getElementsByTagName("main")[0].style.backgroundColor = `#${colorHex}`
}

function updateBgColor() {
    let colorHex = getRandomColor()
    document.getElementsByTagName("main")[0].style.backgroundColor = `#${colorHex}`
}

function updateTextColor() {
    let colorHex = getRandomColor()
    document.getElementsByTagName("main")[0].style.color = `#${colorHex}`
}

function loopColors() {
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            updateBGColor()
            updateTextColor()
        }, 1000 * i            // i factor is needed, because all loops start their time together.
        )
    }
}

let bodyColorButton = document.getElementById("bgColorChange")
bodyColorButton.addEventListener("click", updateBgColor)

let textColorButton = document.getElementById("textColorChange")
textColorButton.addEventListener("click", updateTextColor)

let surpriseMeButton = document.getElementById("surpriseMe")
surpriseMeButton.addEventListener("click", loopColors)

