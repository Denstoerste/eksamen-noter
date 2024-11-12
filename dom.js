function handleButtonClick() {
    // Get values from the input fields
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);

    // Log the message to the console
    console.log("clicked on button");

    // Log the entered name and age
    console.log("Name: " + name);
    console.log("Age: " + age);

    // Check the age and render corresponding message
    const resultText = age > 40 ? "You are old" : "You are young";

    // Render the result on the page
    document.getElementById('result').textContent = resultText;
}