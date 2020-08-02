const players = ["X", "O"];
let gameStarted = false;

let currentPlayer;
let prevPlayer;

let winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

$(document).ready(() => {
    $("#btnStart").click(() => {
        startGame();
    })

    $(".cell").click((ev) => {
        // console.log(ev.target.dataset.cellId);
        if (gameStarted) {
            checkForWinners(ev.target);
            return;
        }
        alert("Game not started!");
    })
})

function startGame() {
    setPlayers();
    gameStarted = true;
}

function setPlayers() {
    if (prevPlayer == null || prevPlayer === players[1]) {
        currentPlayer = players[0];
    } else {
        currentPlayer = players[1];
    }
}

function checkForWinners(clickedCell) {
    // Fill the cell
    clickedCell.innerHTML = currentPlayer;
    
    for(let winCon of winConditions) {
        // let a = winCon[0];
        // let b = winCon[1];
        // let c = winCon[2];

        let cell1 = getCell(winCon[0]).innerHTML;
        let cell2 = getCell(winCon[1]).innerHTML;
        let cell3 = getCell(winCon[2]).innerHTML;

        if(cell1 === cell2 && cell2 === cell3) {
            // Winner found
        }

        console.log(cell1);
        break;
    }

    prevPlayer = currentPlayer;
    setPlayers();
}

function getCell(cellId) {
    return document.getElementById(cellId);
}