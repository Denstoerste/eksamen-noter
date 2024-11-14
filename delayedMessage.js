function delayedMessage(message, delay) {
    setTimeout(function() {
        console.log(message);
    }, delay);
}

// Example usage:
delayedMessage("Hello, world!", 2000);
