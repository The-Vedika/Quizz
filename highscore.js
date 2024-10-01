const highscorelist = document.getElementById('highscorelist');
const highscore = JSON.parse(localStorage.getItem('highscore')) || [];

highscorelist.innerHTML = highscore
  .map(score => {
    return `<li>${score.name} - ${score.score}</li>`;
  })
  .join('');
