const newTask = document.getElementById('create-task-form')
const taskList = document.getElementById('tasks')


document.addEventListener("DOMContentLoaded", () => {
  // your code here
  newTask.addEventListener('submit', addTask);
  
});

const addTask = event => {
  event.preventDefault();

const newDesc = document.getElementById('new-task-description')
const task = document.createElement('li')
task.innerText = newDesc.value;
taskList.appendChild(task);
}