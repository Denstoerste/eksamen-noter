console.log("bfr")

const button = document.querySelector(".showNumber");
const pTag = document.querySelector("p");

button.addEventListener("click", function() {
    let numbers =" "
    for (let i = 1; i <= 10; i++){
        console.log(i);
        numbers += i + (i < 10 ? ", " : "");
    }
    pTag.textContent = numbers;
});