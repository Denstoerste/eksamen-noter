/*
function multiplyArray(numbers, multiplier) {
    return numbers.map(num => num * multiplier);
}

const numbers = [1,2,3,4];
const multiplier = 2;
const result = multiplyArray(numbers, multiplier);
console.log(result);

console.log(result[0]);

*/
/*
function delayedMessage(message) {
    setTimeout(() => {
        console.log(message);
    }, 5000);
}

delayedMessage("Hello world", 1);

*/
/*
function getRandomDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            console.log(data.message); // Logs the URL of the dog image
        })

}

// Example usage:
getRandomDogImage();
 */
const colorInput = document.querySelector('#colorInput');
const changeColorButton = document.querySelector('#changeColorButton');
const colorText = document.querySelector('#colorText');

changeColorButton.addEventListener('click', () => {
    const newColor = colorInput.value;

    document.body.style.backgroundColor = newColor;

    colorText.textContent = 'the background color is: ' + newColor;
});



/*
function filterLongWords(words, lengthLimit) {
    return words.filter(word => word.length > lengthLimit);
}

// Example usage:
const words = ["apple", "banana", "kiwi", "strawberry"];
const lengthLimit = 5;

const longWords = filterLongWords(words, lengthLimit);
console.log(longWords);
*/














































