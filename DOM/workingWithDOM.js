function DOM(userName, password){

    let displayDiv = document.querySelector('#output');
    displayDiv.innerHTML = '<p>Brugernavn: ' + userName + '</p><p>Kodeord: ' + password + '</p>';
}

let button = document.querySelector('#button');
button.addEventListener('click', function() {
    console.log('Knap blev clicket');
});

DOM('Esben', 'Johan');