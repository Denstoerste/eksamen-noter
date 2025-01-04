// Funktion der tager to parametre: brugernavn og kodeord
function renderUser(username, password) {
    // Find output-div og render brugernavn og kodeord
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>Brugernavn: ${username}</p>
                         <p>Kodeord: ${password}</p>`;
}

// Kald funktionen med eksempler
renderUser("JohnDoe", "securePassword123");

// Event listener til knappen
const logButton = document.getElementById('logButton');
logButton.addEventListener('click', () => {
    console.log("Knap blev klikket!");
});
