// Fetch API for the name "cecilie" and log the age
fetch("https://api.agify.io/?name=cecilie")
    .then((response) => response.json()) // Konverterer responsen til JSON
    .then((data) => {
        console.log("Navn:", data.name);
        console.log("Alder:", data.age);
    })
    .catch((error) => console.error("Fejl ved API-fetch:", error));


// Funktion, der henter alderen for et navn
function fetchAlder(navn) {
    fetch(`https://api.agify.io/?name=${navn}`)
        .then((response) => response.json())
        .then((data) => {
            // Viser alderen i browseren
            document.body.innerHTML = `<h1>Navn: ${data.name}</h1>
                                 <h2>Alder: ${data.age}</h2>`;
        })
        .catch((error) => console.error("Fejl ved API-fetch:", error));
}

// Kald funktionen med et navneparameter
fetchAlder("cecilie");
