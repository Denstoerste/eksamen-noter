// JavaScript for button click event
const button = document.getElementById('submitButton');
button.addEventListener('click', () => {
    console.log("Button clicked!");
});



document.querySelector("#voteup").addEventListener('click', () => {
    score++;
    document.querySelector("#score").textContent = `score: ${score}`;
});

document.querySelector("#votedown").addEventListener('click', () => {
    score--;
    document.querySelector("#score").textContent = `score: ${score}`;
});