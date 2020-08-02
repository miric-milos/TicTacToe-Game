const players = ["X", "O"];
let gameStarted = false;

let currentPlayer;
let prevPlayer;

// Tracks played cells
let gameState = ["", "", "", "", "", "", "", "", ""];

let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

$(document).ready(() => {
    $("#btnStart").click(() => {
        startGame();
    })

    $(".cell").click((ev) => {
        // console.log(ev.target.dataset.cellId);
        if (gameStarted) {
            handleClickedCell(ev.target);
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

function handleClickedCell(clickedCell) {

    if(gameState[clickedCell.id] !== "") {
        // If a cell is filled, nothing will happen
        return;
    }

    // Validate cell
    gameState[clickedCell.id] = currentPlayer;

    // Fill the cell
    clickedCell.innerHTML = currentPlayer;

    for (let winCon of winConditions) {
        let c1 = gameState[winCon[0]];
        let c2 = gameState[winCon[1]];
        let c3 = gameState[winCon[2]];

        if(c1 === "" || c2 === "" || c3 === "") {
            continue;
        }

        if(c1 === c2 && c2 === c3) {
            // Winner found
            gameStarted = false;
            alert(currentPlayer + " wins!");
            break;
        }
    }

    prevPlayer = currentPlayer;
    setPlayers();
}