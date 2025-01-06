// Funktion der tager to parametre: brugernavn og kodeord
function renderUser(username, password) {
    // Find output-div og render brugernavn og kodeord
    const outputDiv = document.querySelector('#output');
    outputDiv.innerHTML = `<p>Brugernavn: ${username}</p>
                         <p>Kodeord: ${password}</p>`;
}

// Kald funktionen med eksempler
renderUser("JohnDoe", "securePassword123");

// Event listener til knappen
const logButton = document.querySelector('#logButton');
logButton.addEventListener('click', () => {
    console.log("Knap blev klikket!");
});
