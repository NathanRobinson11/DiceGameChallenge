const buttonRoll = document.getElementById('roll');
const buttonReset = document.getElementById('reset');
let diceImage = document.getElementById('image');
let score = document.getElementById('score');
let gameScore = 0;
let gameResult = document.getElementById('game-result');

//roll button - num between 1-6 & stores score - matches num with dice image
buttonRoll.addEventListener('click', ()=>{
    let diceRoll = Math.ceil(Math.random()*6);
    if(diceRoll === 1){
        diceImage.src='dice1.png';
    }else if(diceRoll === 2){
        diceImage.src='dice2.png';
    }else if(diceRoll === 3){
        diceImage.src='dice3.png';
    }else if(diceRoll === 4){
        diceImage.src='dice4.png';
    }else if (diceRoll === 5){
        diceImage.src='dice5.png';
    }else if (diceRoll === 6){
        diceImage.src='dice6.png'
    }

    gameScore = gameScore + diceRoll;
    score.textContent = gameScore;
    gameResult.style.visibility = 'hidden';

    if (diceRoll == 1){
        gameResult.textContent = ("Bust!");
        gameResult.style.visibility = 'visible';
        gameScore = 0;
    }else if(gameScore >= 20){
        gameResult.textContent = ("Winner");
        gameResult.style.visibility = 'visible';
        gameScore = 0;
    }

});

//reset button - makes score change to 0 on click
buttonReset.addEventListener('click', ()=>{
    gameScore = 0;
    score.textContent = 0;
    gameResult.style.visibility = 'hidden';
});