function addPoint() {
    this.score += 1;
    console.log(this);
    scoreboard.innerText = `${p1PointBtn.score} to ${p2PointBtn.score}`;
    if (p1PointBtn.score >= parseInt(maxScore) || p2PointBtn.score >= parseInt(maxScore)) {
        p1PointBtn.disabled = true;
        p2PointBtn.disabled = true;
    }
}

const select = document.querySelector('select');
let maxScore = select.value;

select.addEventListener('change', (e) => {
    maxScore = select.value;
});

const scoreboard = document.querySelector('h1');

const p1PointBtn = document.querySelector('.player1');
p1PointBtn.score = 0;
p1PointBtn.addEventListener('click', function (e) {
    p1Score += 1;
    scoreboard.innerText = `${p1Score} to ${p2Score}`;
    if (p1Score >= parseInt(maxScore) || p2Score >= parseInt(maxScore)) {
        p1PointBtn.disabled = true;
        p2PointBtn.disabled = true;
    }
});

const p2PointBtn = document.querySelector('.player2');
p2PointBtn.score = 0;
p2PointBtn.addEventListener('click', function (e) {
    addPoint();
});

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', function (e) {
    p1Score = 0;
    p2Score = 0;
    scoreboard.innerText = `${p1Score} to ${p2Score}`;
    p1PointBtn.disabled = false;
    p2PointBtn.disabled = false;
});
