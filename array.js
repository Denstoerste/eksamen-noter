const favoriteFruits = ['apple','banana','orange', 'dragonfruit', 'melon'];

function addfruit(fruistArray, newFruits) {
    fruistArray.push(newFruits);
    return fruistArray;
}

const updatedFruitArray = addfruit(favoriteFruits, "Cherry");
console.log("Updated favorite Fruists,", updatedFruitArray);



const numbers = [10,20,30,40,50];

numbers.push(60);
numbers.shift(0);
numbers.unshift(5);

let sum = 0;
for (let number of numbers) {
    sum += number;
}
console.log("sum of all numbers", sum);

const greaterThenTwenty = numbers.filter((number) => number > 20);
console.log(greaterThenTwenty);


const sumArrayNumbers = [1, 2, 3, 4];
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; 1 < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}
