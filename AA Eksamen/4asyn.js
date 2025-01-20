function delayedMessage(message, delay){
    setTimeout(() => {
        console.log(message)
    }, delay)
}


delayedMessage('Hello world!', 5000)