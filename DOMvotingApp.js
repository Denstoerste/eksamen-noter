let score = 0;

document.querySelector('#voteUp').addEventListener("click", () => {
    score++;
    document.querySelector('#score').textContent = `Score: ${score}`;
});

document.querySelector('#voteDown').addEventListener("click", () => {
    score--;
    document.querySelector('#score').textContent = `Score: ${score}`;
});