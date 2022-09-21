
//document.getElementsByClassName targets the object 
//array.from creates an array of the 'box' class
const boxes = Array.from(document.getElementsByClassName('box'));

const playText = document.getElementById('playText');

// the below array represents the empty spaces on the board
const emptyBox = [null, null, null, null, null, null, null, null, null];
const player1 = 'O';
const player2 = 'X';
// This tells the game to start with player2
let currentPlayer = player2;

// console.log(boxes);


const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        if (index < 3) {
            styleString += `border-bottom: 3px solid var(--purple);`;
        }
        if (index % 3 === 0) {
            styleString += `border-right: 3px solid var(--purple);`;
        }
        if (index % 3 === 2) {
            styleString += `border-left: 3px solid var(--purple);`;
        }
        if (index > 5) {
            styleString += `border-top: 3px solid var(--purple);`;
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked)
    })
}

// This is the click event that tells us which box in the ID has been clicked
const boxClicked = (e) => {
     const id = e.target.id;
    //  console.log(id);
     if(!emptyBox[id]){
        emptyBox[id] = currentPlayer;
        e.target.innerText = currentPlayer; 

        // The logic behind if a player has won
        if(playerWins())
        playText.innerText = `${currentPlayer} has won!`
        // if the player wins, return out of the function
        return;

        // the below ternary allows the players to switch between X and O
        currentPlayer = currentPlayer === player1 ? player2 : player1;

     }
}

// here we are checking to see if a player has won
const playerWins = () => {

}

drawBoard();

