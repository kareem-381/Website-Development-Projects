let userScore = 0;
let computerScore =0;

let allChoices= document.querySelectorAll(".choice");
const usermsg = document.querySelector("#msg");
const usrScore = document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");

const showWinner = (userWin) =>
{
    if(userWin)
    {
        usermsg.style.backgroundColor="green";
        usermsg.innerText="You Won!";
        userScore++;
        usrScore.innerText=userScore;
        
    }
    else
    {
        usermsg.style.backgroundColor="red";
        usermsg.innerText="You Lose!";
        computerScore++;
        compScore.innerText=computerScore;
    }

}

const computerChoice = () =>
{
    const choices = ["rock","paper","scissor"];
    const ranIdx = Math.floor(Math.random()*3);
    return choices[ranIdx];    
}


const drawGame=()=>
{
    usermsg.innerText="Draw! Play again";
    usermsg.style.backgroundColor="yellow";
    userScore=0;
    computerScore=0;
    usrScore.innerText=0;
    compScore.innerText=0;
}

const playGame= (userChoice)=>
{
    console.log("user choice "+ userChoice)
    const compChoice = computerChoice();
    console.log("Computer Choice "+ compChoice);

    if(userChoice===compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin= true;
        if(userChoice==="rock")
        {
            userWin = compChoice === "paper" ? false : true; 
        }
        else if(userChoice==="paper")
        {
            userWin = compChoice === "scissor"?false:true;
        }
        else
        {
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin);
    }
}

allChoices.forEach((choice)=>
{
    choice.addEventListener("click",()=>
    {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    })
})
