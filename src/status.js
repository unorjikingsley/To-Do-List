// eslint-disable-next-line prefer-const
let tasks = JSON.parse(localStorage.getItem('tasks') || []);

function CompleteStatus(index) {
  tasks[index].completed = true;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default CompleteStatus;
