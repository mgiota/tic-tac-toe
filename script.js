let currentPlayer = 'X'; //X || O
let statusDisplay = document.querySelector('.game-status');
let gameState = ["", "", "", "", "", "", "", "", ""];
let roundWon = false;

const currentPlayerTurn = () => `Current player: ${currentPlayer}`; //string literal ES6
statusDisplay.innerHTML = currentPlayerTurn();

// var arr = [1,2,3];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// arr.forEach(el => console.log(el))

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = clickedCell.getAttribute('data-cell-index');
    gameState[clickedCellIndex] = currentPlayer;
    console.log(gameState)
    clickedCell.innerHTML = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.innerHTML = currentPlayerTurn();

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    if (!roundWon) {
        for (let i = 0; i < winConditions.length; i++) {
            // const a = winConditions[0];
            // const b = winConditions[1];
            // const c = winConditions[2];
            const [a, b, c] = winConditions[i]; //array destructuring
            if (gameState[a] === '' || gameState[b] === '' || gameState[c] === '') {
                continue;
            }

            if (gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
                console.log('!!Win')
            }
        }
    }
};

document.querySelectorAll('.cell').forEach((cell) =>
    cell.addEventListener('click', handleCellClick)
);