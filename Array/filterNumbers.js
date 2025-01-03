function filterNumbers(numbers, threshold) {
    return numbers.filter(function(number) {
    return number > threshold;
    });
}

const numbers = [10, 25, 3, 50];
const threshold = 9;
const result = filterNumbers(numbers,threshold);

console.log(result);
console.log(result.length);