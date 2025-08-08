import './Home.css';

function Home() {
    const choices = ["rock", "paper", "scissors"];
    const playerDisplay = document.getElementById("playerDisplay");
    const compDisplay = document.getElementById("compDisplay");
    const resultDisplay = document.getElementById("resultDisplay");
    const playerScoreDisplay = document.getElementById("playerScoreDisplay");
    const compScoreDisplay = document.getElementById("compScoreDisplay");
    let playerScore = 0;
    let compScore = 0;

    function playGame(playerChoice) {
        const compChoice = choices[Math.floor(Math.random() * 3)];
        let result = "";

        if(playerChoice === compChoice) {
            result = "It's a Tie!"
        }
        else {
            switch(playerChoice) {
                case "rock":
                    result = (compChoice === "scissors") ? "You Win!" : "You Lose!";
                    break;
                case "paper":
                    result = (compChoice === "rock") ? "You Win!" : "You Lose!";
                    break;
                case "scissors":
                    result = (compChoice === "paper") ? "You Win!" : "You Lose!";
                    break;
            }
        }

        playerDisplay.textContent = `Player: ${playerChoice}`;
        compDisplay.textContent = `Computer: ${compChoice}`;
        resultDisplay.textContent = result;

        resultDisplay.classList.remove("greenText", "redText");

        switch(result) {
            case "You Win!":
                resultDisplay.classList.add("greenText");
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
                break;
            case "You Lose!":
                resultDisplay.classList.add("redText");
                compScore++;
                compScoreDisplay.textContent = compScore;
                break;
        }
    }   

    return(
        <>
            <h1>Hi There! ☺️</h1>
            <h1>🚧 My main site is still under construction! 🚧</h1>
            <a href="/under-construction"><h2>If you want to see it, click me!</h2></a>
            <h2 id="lastHeading">Otherwise, enjoy a game of Rock Paper Scissors!:</h2>

            <div class="choices">
                <button onclick="playGame('rock')">🪨</button>
                <button onclick="playGame('paper')">📄</button>
                <button onclick="playGame('scissors')">✂️</button>
            </div>

            <div id="playerDisplay">Player:</div>
            <div id="compDisplay">Computer:</div>
            <div id="resultDisplay"></div>

            <div class="scoreDisplay">Player Score: 
                <span id="playerScoreDisplay">0</span>
            </div>

            <div class="scoreDisplay">Computer Score: 
                <span id="compScoreDisplay">0</span>
            </div>
        </>
    );
}

export default Home;