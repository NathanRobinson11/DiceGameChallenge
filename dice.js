const buttonRoll = document.getElementById('roll');
const buttonReset = document.getElementById('reset');
let diceImage = document.getElementById('image');
let score = document.getElementById('score');
let gameScore = 0;


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

});

//reset button - makes score change to 0 on click
buttonReset.addEventListener('click', ()=>{

    score.textContent = 0;
});
