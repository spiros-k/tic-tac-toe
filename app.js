
let playerOneArray = []
let playerTwoArray = []

document.addEventListener("DOMContentLoaded", () => {
    let rootElement = document.getElementById("root")
    for(let i = 0; i < 9; i++){
        let btnElement = document.createElement("button")
        btnElement.classList.add("btn")
        rootElement.appendChild(btnElement)
    }
    rootElement.classList.add("grid")
})