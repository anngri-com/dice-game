
let player1Score = 0
let player2Score = 0
let player1Turn = true
let playBtn = document.getElementById("rollBtn");
let resetBtn = document.getElementById("resetBtn");


document.getElementById("rollBtn").addEventListener("click", rollDice);
document.getElementById("resetBtn").addEventListener("click", resetAll);


function rollDice(){
    let counter = Math.ceil(Math.random() * 6);
    
    if(player1Turn === true) {
        document.getElementById("message").textContent = "Player 1 Turn";
        document.getElementById("player1Dice").textContent = counter;
        player1Score += counter;
        document.getElementById("player1Scoreboard").textContent = player1Score;
        if(player1Score >= 20) {
            document.getElementById("message").textContent = "Player 1 WON";
            playBtn.style.display = "none";
            resetBtn.style.display = "inline-block";
        }
        player1Turn = false;
    }
    
    else {
        document.getElementById("message").textContent = "Player 2 Turn";
        document.getElementById("player2Dice").textContent = counter;
        player2Score += counter;
        document.getElementById("player2Scoreboard").textContent = player2Score;
        if(player2Score >= 20) {
            document.getElementById("message").textContent = "Player 2 WON";
            playBtn.style.display = "none";
            resetBtn.style.display = "inline-block";
        }
        player1Turn = true;
    }
    
}



function resetAll(){
    player1Score = 0;
    document.getElementById("player1Scoreboard").textContent = player1Score;
    document.getElementById("player1Dice").textContent = player1Score;
    player2Score = 0; 
    document.getElementById("player2Scoreboard").textContent = player2Score;
    document.getElementById("player2Dice").textContent = player2Score;
    playBtn.style.display = "inline-block";
    resetBtn.style.display = "none";
}