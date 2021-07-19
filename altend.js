var username = document.getElementById('username');
var saveScoreBtn = document.getElementById('saveScoreBtn');
var finalScore = document.getElementById('finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore');

var highScores = JSON.parse(localStorage.getItem('highscores')) || [];

var MAX_HIGH_SCORES = 10;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    console.log('clicked the save button');
    e.preventDefault();

var score = {
    score: Math.floor(Math.random() * 100),
    name: username.value
};
highScores.push(score)
highScores.sort( (a,b) => b.score - a.score);
highScores.splice(10);

localStorage.setItem('highScores', JSON.stringify(highScores));
window.location.assign('/altindex.html')
};