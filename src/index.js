import './index.css';

const tasks = [
  { description: 'Work on a project', completed: true, index: 0 },
  { description: 'Read a novel', completed: true, index: 1 },
  { description: 'Learn Webpack', completed: false, index: 2 },
  { description: 'Do House chores', completed: false, index: 3 },
];

function displayTasks() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';
  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''} />
      <span class="taskdesc">${task.description}</span>
      <i class="bi bi-three-dots-vertical"></i>
    `;
    todoList.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayTasks();
});
