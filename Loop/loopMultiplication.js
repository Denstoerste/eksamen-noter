for (let i = 1; i <= 10; i++) { // outer loop for rows
    console.log(`Multiplication Table for ${i}:`); // Header for each multiplication table
    for (let j = 1; j <= 10; j++) { // inner loop for columns
        console.log(`${i} x ${j} = ${i * j}`); // calculate and display multiplication
    }
    console.log('___') // add a seperator between rows so it's easier to read
}