let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const resultBoard_p = document.getElementById("resultBoard_p");
const rock_img = document.getElementById("r");
const paper_img = document.getElementById("p");
const scissor_img = document.getElementById("s");

function getCompChoice()
{
    const choices = ['r', 'p', 's'];
    const choice = Math.floor(Math.random()*3); 
    return choices[choice];
}

function game(userChoice)
{
    const compChoice = getCompChoice();
    switch(userChoice + compChoice)
    {
        case 'rs':
        case 'pr':
        case 'sp':
            userWon(userChoice, compChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            compWon(userChoice, compChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, compChoice);
            break;
        
    }
}
function userWon(userChoice, compChoice)
{
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const user = "user".fontsize(2).sub();
    const comp = "comp".fontsize(2).sub();
    resultBoard_p.innerHTML = `${convertToword(userChoice)}${user} beats ${convertToword(compChoice)}${comp}. You won :-)`;
    document.getElementById(userChoice).classList.add("greenGlow");
    setTimeout(()=>{document.getElementById(userChoice).classList.remove("greenGlow");}, 300);
}

function compWon(userChoice, compChoice)
{
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const user = "user".fontsize(2).sub();
    const comp = "comp".fontsize(2).sub();
    resultBoard_p.innerHTML = `${convertToword(compChoice)}${comp} beats ${convertToword(userChoice)}${user}. You Lost :-(`;
    document.getElementById(userChoice).classList.add("redGlow");
    setTimeout(()=>{document.getElementById(userChoice).classList.remove("redGlow");}, 300);
}

function draw(userChoice, compChoice)
{
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    resultBoard_p.innerHTML = `It's a Draw ._.`;
    document.getElementById(userChoice).classList.add("greyGlow");
    setTimeout(()=>{document.getElementById(userChoice).classList.remove("greyGlow");}, 300);
}
function convertToword(letter)
{
    if(letter=='r')
    {
        return "Rock";
    }
    else if(letter=='p')
    {
        return "Paper";
    }
    else
    {
        return "Scissors";
    }
}
function main()
{
    rock_img.addEventListener('click', ()=> {game("r");});
    paper_img.addEventListener('click', () => {game("p");});
    scissor_img.addEventListener('click', () => {game("s");});

}
main();