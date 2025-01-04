// 1. Definer en variabel til at holde vores counter
let counter = 0;

// 2. Definer en funktion som bliver kaldt hvert sekund
function incrementCounter() {
    // Læg 1 til counter
    counter++;

    // Log counter til konsol
    console.log(counter);

    // Render counter til siden
    renderToPage(counter);

    // Kald funktionen igen efter 1 sekund
    setTimeout(incrementCounter, 1000);
}

// 3. Funktion til at rende data til siden
function renderToPage(value) {
    // Find eller skab en container på siden
    let container = document.querySelector('#counter-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'counter-container';
        document.body.appendChild(container);
    }

    // Opdater containerens tekst med den aktuelle counter
    container.textContent = `Counter: ${value}`;
}

// Start funktionen
incrementCounter();
