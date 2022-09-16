function addPoint() {
    this.score += 1;
    p1Score.innerText = `${p1PointBtn.score}`;
    p2Score.innerText = `${p2PointBtn.score}`;
    if (p1PointBtn.score >= maxScore || p2PointBtn.score >= maxScore) {
        p1PointBtn.disabled = true;
        p2PointBtn.disabled = true;

        if (p1PointBtn.score > p2PointBtn.score) {
            p1Score.style.color = 'green';
            p2Score.style.color = 'red';
        } else {
            p1Score.style.color = 'red';
            p2Score.style.color = 'green';
        }
    }
}

const select = document.querySelector('select');
let maxScore = parseInt(select.value);

select.addEventListener('change', (e) => {
    maxScore = parseInt(select.value);
});

const p1Score = document.querySelector('.p1Score');
const p2Score = document.querySelector('.p2Score');

const p1PointBtn = document.querySelector('.player1');
p1PointBtn.score = 0;
p1PointBtn.addEventListener('click', addPoint);

const p2PointBtn = document.querySelector('.player2');
p2PointBtn.score = 0;
p2PointBtn.addEventListener('click', addPoint);

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', function (e) {
    p1PointBtn.score = 0;
    p2PointBtn.score = 0;
    p1Score.innerText = `${p1PointBtn.score}`;
    p2Score.innerText = `${p2PointBtn.score}`;
    p1PointBtn.disabled = false;
    p2PointBtn.disabled = false;
});
