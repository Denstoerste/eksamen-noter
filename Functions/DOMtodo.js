const taskInput = document.querySelector("#taskInput");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return; // Do nothing if input is empty

    const li = document.createElement("li");
    li.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => li.remove());

    li.appendChild(removeButton);
    taskList.appendChild(li);

    taskInput.value = ""; // Clear the input field
});
