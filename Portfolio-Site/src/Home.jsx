import './Home.css';

function Home() {
    const choices = ["rock", "paper", "scissors"];
    const playerDisplay = document.getElementById("player-display");
    const compDisplay = document.getElementById("comp-display");
    const resultDisplay = document.getElementById("result-display");
    const playerScoreDisplay = document.getElementById("player-score-display");
    const compScoreDisplay = document.getElementById("comp-score-display");
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

        resultDisplay.classList.remove("green-text", "red-text");

        switch(result) {
            case "You Win!":
                resultDisplay.classList.add("green-text");
                playerScore++;
                playerScoreDisplay.textContent = ` ${playerScore}`;
                break;
            case "You Lose!":
                resultDisplay.classList.add("red-text");
                compScore++;
                compScoreDisplay.textContent = ` ${compScore}`;
                break;
        }
    }   

    return(
        <div className="body">
            <h1>Hi There! ☺️</h1>
            <h1>🚧 My main site is still under construction! 🚧</h1>
            <a href="/under-construction"><h2>If you want to see it, click me!</h2></a>
            <h2 id="last-heading">Otherwise, enjoy a game of Rock Paper Scissors!:</h2>

            <div className="choices">
                <button onClick={() => playGame('rock')}>🪨</button>
                <button onClick={() => playGame('paper')}>📄</button>
                <button onClick={() => playGame('scissors')}>✂️</button>
            </div>

            <div id="player-display">Player:</div>
            <div id="comp-display">Computer:</div>
            <div id="result-display"></div>

            <div className="score-display">Player Score: 
                <span id="player-score-display"> 0</span>
            </div>

            <div className="score-display">Computer Score: 
                <span id="comp-score-display"> 0</span>
            </div>
        </div>
    );
}

export default Home;