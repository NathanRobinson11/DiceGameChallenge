const buttonRoll = document.getElementById('roll');
const buttonReset = document.getElementById('reset');
let score = document.getElementById('score');
let gameScore = 10;

score.textContent = gameScore;

//roll button - generates random number between 1 and 6 and stores score in score text




//reset button - makes score change to 0 on click
buttonReset.addEventListener('click', ()=>{

    score.textContent = 0;

});
