const winningThrees = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let playerOneArray = []
let playerTwoArray = []
let playersArray = ["playerOne", "playerTwo"]

document.addEventListener("DOMContentLoaded", () => {
    let rootElement = document.getElementById("root")

    const divElem = document.createElement("div")
    divElem.id = "divElement"
    divElem.classList.add("flex")

    const pElem = document.createElement("p")
    pElem.textContent = "Select your player"

    const btnOne = document.createElement("button")
    btnOne.type = "button"
    btnOne.textContent = "O"
    btnOne.id = "O"

    const btnTwo = document.createElement("button")
    btnTwo.type = "button"
    btnTwo.textContent = "X"
    btnTwo.id = "X"

    divElem.append(pElem, btnOne, btnTwo)
    document.body.insertBefore(divElem, rootElement)

    for(let i = 0; i < 9; i++){
        let btnElement = document.createElement("button")
        btnElement.classList.add("btn")
        btnElement.id = i
        rootElement.appendChild(btnElement)
    }
    rootElement.classList.add("grid")
    selectPlayer()
    btnListeners()
})


function btnListeners() {
    let buttons = document.getElementsByClassName("btn")
    console.log(buttons)
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            whoPlaysFirst()
            if(message === 1) {
                //create element 
            } else {
                console.log("2")
            }
        })
    }
}

function selectPlayer() {
    document.getElementById("O").addEventListener("click", () => {

        console.log("player 1 has the O")
        console.log("player 2 has the X")
        
        let element = document.getElementById("divElement")
        element.remove(element)
        whoPlaysFirst()
    })
    document.getElementById("X").addEventListener("click", () => {

        console.log("player 1 has the X")
        console.log("player 2 has the O")

        let element = document.getElementById("divElement")
        element.remove(element)
        whoPlaysFirst()
    })
}

function whoPlaysFirst() {
    let message = Math.floor(Math.random() * playersArray.length)
    console.log(message)
    if(message === 1) {
        console.log("player 2 plays first")
    } else {
        console.log("player 1 plays first")
    }
}