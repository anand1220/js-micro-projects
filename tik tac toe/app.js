let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('.reset-btn')
let msg = document.querySelector('.msg');
let msgContainer = document.querySelector('.msg-container')
let newGameButton = document.querySelector('.new-btn')

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);

        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if (pos1val !== '' && pos2val !== '' && pos3val !== '') {
            if (pos1val === pos2val && pos2val === pos3val) {
                // console.log('Winner', pos1val);
                showWinner(pos1val);
                disableBtn();
            }
        }
    }
}
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerHTML = 'O'
            turnO = false
        } else {
            box.innerHTML = 'X';
            turnO = true
        }
        box.disabled = true

        checkWinner();
    })
})

let resetGame = () => {
    turnO = true;
    enableBtn();
    msgContainer.classList.add('hide');

}

const showWinner = (winner) => {
    msg.innerHTML = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
}

const disableBtn = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

const enableBtn = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerHTML = '';
    }
}


newGameButton.addEventListener('click', resetGame);
resetButton.addEventListener('click', resetGame)