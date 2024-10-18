window.onload = function() {
    loadTasks();
};

document.getElementById('add-button').addEventListener('click', function() {
    let inputBox = document.getElementById('input-box');
    let task = inputBox.value.trim();

    if (task !== "") {
        addTaskToList(task);
        saveTaskToLocalStorage(task);
        inputBox.value = "";
    } else {
        alert('Please enter a task!');
    }
});

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTaskToList(task);
    });
}

function addTaskToList(task) {
    let listContainer = document.getElementById('list-container');

    let newTask = document.createElement('li');
    newTask.textContent = task;

    let crossIcon = document.createElement('span');
    crossIcon.textContent = "✖";
    crossIcon.className = 'cross-icon';

    newTask.appendChild(crossIcon);
    listContainer.appendChild(newTask);

    crossIcon.addEventListener('click', function() {
        listContainer.removeChild(newTask);
        removeTaskFromLocalStorage(task);
    });
}

function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let updatedTasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}
