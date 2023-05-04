// const tasks = JSON.parse(localStorage.getItem('tasks'));

// function completeStatus(index, completed) {
//   tasks[index].completed = completed;
//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// export default completeStatus;

const storedTasks = localStorage.getItem('task');
const tasks = storedTasks ? JSON.parse(storedTasks) : [];

function CompleteStatus(index) {
  tasks[index].completed = true;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default CompleteStatus;
