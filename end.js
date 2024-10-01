// Get the username input and save button elements
const username = document.getElementById('username');
const savescorebtn = document.getElementById('savescorebtn');
const finalscore =document.getElementById('finalscore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highscore = JSON.parse(localStorage.getItem("highscore")) || [];
const MAX_HIGH_SCORE = 5;
console.log(highscore);

finalscore.innerText = mostRecentScore;

// Enable or disable the button based on the input value
username.addEventListener('keyup', () => {
    savescorebtn.disabled = !username.value.trim(); // Disable if input is empty or just spaces
});

// Handle the save score button click
const saveHighScore = (e) => {
    console.log("clicked the button");
    e.preventDefault(); // Prevent the form from submitting

    const score = {
        score : Math.floor(Math.random() *100),
        name: username.value
    };
    highscore.push(score);
    highscore.sort( (a,b) => b.score-a.score) 
    highscore.splice(5);

    localStorage.setItem("highscore", JSON.stringify(highscore));
    window.location.assign('/');
    console.log(highscore);
};
