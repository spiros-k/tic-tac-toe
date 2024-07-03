const winningThrees = [["0", "1", "2"], ["3", "4", "5"], ["6", "7", "8"], ["0", "3", "6"], ["1", "4", "7"], ["2", "5", "8"], ["0", "4", "8"], ["2", "4", "6"]]
let playerOneArray = []
let playerTwoArray = []
let playersArray = ["playerOne", "playerTwo"]

document.addEventListener("DOMContentLoaded", () => {
    selectPlayer()
})

function selectPlayer() {
    document.getElementById("O").addEventListener("click", () => {
        console.log("player 1 has the O")
        console.log("player 2 has the X")
        let element = document.getElementById("divElement")
        element.remove(element)
    })
    document.getElementById("X").addEventListener("click", () => {
        console.log("player 1 has the X")
        console.log("player 2 has the O")
        let element = document.getElementById("divElement")
        element.remove(element)
    })   
}


document.getElementById("root").classList.add("hidden")
document.getElementById("O").addEventListener("click", () => {
    document.getElementById("root").classList.remove("hidden")
}) 
document.getElementById("X").addEventListener("click", () => {
    document.getElementById("root").classList.remove("hidden")
}) 
    


let whosTurn = Math.floor(Math.random() * playersArray.length) + 1
buttons = document.getElementsByClassName("btn")
if(whosTurn === 1) {
    console.log("player 1 plays")
} else if (whosTurn === 2) {
    console.log("player 2 plays")
}
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", whoPlaysFirst)
}


function whoPlaysFirst(e) {       
    if(whosTurn === 1) {
        console.log("player 1 played")
    } else if (whosTurn === 2) {
        console.log("player 2 played")
    }
    if(e.target.textContent == "") {
        if(whosTurn === 1) {
            e.target.textContent = "X"
            playerOneArray.push(e.target.id)
            console.log(playerOneArray)
            console.log(playerTwoArray)
            checkWinner()
            whosTurn = 2
        } else {
            e.target.textContent = "O"
            playerTwoArray.push(e.target.id)
            console.log(playerOneArray)
            console.log(playerTwoArray)
            checkWinner()
            whosTurn = 1
        }
    } else {
        console.log("Choose another square")
    }     
}        
        
        
function checkWinner() {
    for(let i = 0; i < winningThrees.length; i++){
        if(playerOneArray.length > 2 && playerTwoArray.length > 2){
            if(playerOneArray.includes(winningThrees[i])) {
                console.log("Player 1 is the winner")
            } else if(playerTwoArray.includes(winningThrees[1])) {
                console.log("Player 2 is the winner")
            } 
        }
    } 
}