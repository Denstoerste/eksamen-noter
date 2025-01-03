let count = 0;

function logAndRender() {
    count++;
    console.log(count);

    const outputElement = document.getElementById('output');
    if (outputElement) {
        outputElement.innerText = `Tallet er: ${count}`;
    }
}

setTimeout(logAndRender, 1000);
