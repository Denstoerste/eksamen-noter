// get data from API
const button = document.querySelector('#button');
const div = document.querySelector('#div');

function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            div.textContent ='';

            const imgElement = document.querySelector('#dogImage');
            imgElement.src = data.message;

            })
}
document.querySelector('button').addEventListener('click', (fetchDogImage));

window.onload = fetchDogImage;


// plus function
function addTwoNumbers (number1, number2){
    return number1 + number2
}

console.log(addTwoNumbers(5,5))


// ToDo liste
const taskInput = document.querySelector('#taskInput');
const addTaskButton = document.querySelector('#addTaskButton')
const taskList = document.querySelector('#taskList')

function addTask() {
    const taskText = taskInput.value.trim();
    const listItem = document.createElement('li');

    listItem.textContent = taskText;

    listItem.addEventListener('click', ()=> {
        listItem.classList.toggle('completed');
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove task';
    removeButton.className = 'removeButton';
    removeButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(removeButton);

    taskList.appendChild(listItem)

    taskInput.value = '';
}

addTaskButton.addEventListener('click', addTask);