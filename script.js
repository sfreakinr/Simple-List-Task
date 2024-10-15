let tasks = [];

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTask');
const removeTaskBtn = document.getElementById('removeTask');

addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        showTasks();
        taskInput.value = '';
    }
});

removeTaskBtn.addEventListener('click', () => {
    if (tasks.length > 0) {
        tasks.pop();
        showTasks();
    }
});

function showTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.className = 'list-group-item';
        taskElement.textContent = `${index + 1}. ${task}`;
        taskList.appendChild(taskElement);
    });
}
