 function arraymultiplier (Numbersarray,multiplier){
    const array = []

     for (let i = 0; i <Numbersarray.length; i++){
         array.push(Numbersarray[i] * multiplier);
     }
     return array
 }

 const result = arraymultiplier([2,3,4,5], 5);
console.log(result);