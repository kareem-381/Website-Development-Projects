let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-button");
let newButton = document.querySelector(".new-btn");
let messageContainer = document.querySelector(".msg-container");
let para = document.querySelector("#msg");

let turn0 = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turn0) {
            box.innerText = "O";
            box.style.color="blue";
            turn0 = false;
           
            console.log(count);
        }
        else {
            box.innerText = "X";
            box.style.color="yellow";
            turn0 = true;
            
            console.log(count);
        }
        box.disabled = true;
        count++;

        let isWinner=checkWinner();

        if(count === 9 && !isWinner)
        {
            checkDraw();
        }
    })
})
const enabledButton = () =>
{
    
    for (box of boxes)
    {
        box.disabled= false;
        box.innerText="";
    }
}

const disabledButton = ()=>
{
    for (box of boxes)
    {
        box.disabled=true;
    }
}

const checkDraw=()=>
{
    para.innerText = "Shit! Match is Drawn";
    messageContainer.classList.remove("hide");
    disabledButton();
}
const showWinner = (winner) => {
    para.innerText = 'Congratulations winner is '+ winner;
    messageContainer.classList.remove("hide");
    disabledButton();
}

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return true;
            }
        }
    }
}

const resetGame=()=>
{
    turn0=true;
    count=0;
    enabledButton();
    messageContainer.classList.add("hide");
}

newButton.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);