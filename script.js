let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); // Selecting by correct class name
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomInd = Math.floor(Math.random() * 3);
    return options[randomInd];
}

const drawGame = () => {
    msg.innerText = "Game Draw, Play again!";
    msg.style.backgroundColor = 'grey';
}

const showWinner = (userWin) => {
    if (userWin) {
        msg.innerText = "You win!";
        msg.style.backgroundColor = 'green';
    } else {
        msg.innerText = "You lose!";
        msg.style.backgroundColor = 'red';
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = false;

        if ((userChoice === "rock" && compChoice === "scissor") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissor" && compChoice === "paper")) {
            userWin = true;
        }

        if (userWin) {
            userScore++;
        } else {
            compScore++;
        }

        document.getElementById("userScore").innerText = userScore;
        document.getElementById("compScore").innerText = compScore;

        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
