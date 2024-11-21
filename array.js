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


const fruitbasket = ["apple","banana","cherry"];

function addfruit1(fruit){
    fruitbasket.push(fruit);
    console.log(`${fruit} has been added`);
}

function removefruit(fruit){
    const index = fruitbasket.indexOf(fruit);
    if (index !== -1) {
        fruitbasket.splice(index, 1);
        console.log(`${fruit} has been removed`);
    } else {
        console.log(`fruit not found`);
    }
}

function countfruit(){
    return fruitbasket.length;
}

function listfruits(){
    console.log("Fruits in the basket:" + fruitbasket.join(", "));
}

addfruit1("grape");
addfruit("orange");
removefruit("banana");
listfruits();
console.log("Total fruits in the basket: " + countfruit());



const sumArrayNumbers = [1, 2, 3, 4];
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; 1 < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}
