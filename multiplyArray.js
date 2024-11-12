function multiplyArray(numbersArray, multiplier) {
    const multipliedarray = [];

    for (let i = 0; i <numbersArray.length; i++){
        multipliedarray.push(numbersArray[i] * multiplier);
    }

    return multipliedarray

}


const result = multiplyArray([2,3,5],6);
console.log(result);