const button = document.querySelector('#button');
const message = document.querySelector('#message');

button.addEventListener('click', () => {
    message.textContent = 'Processing...';

    setTimeout(() => {
        message.textContent = 'Task processed for 2 sec';
        }, 2000);
})