let tasks = JSON.parse(localStorage.getItem('tasks') || []);
if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
}
function CompleteStatus(index) {
  if (tasks[index]) {
    tasks[index].completed = true;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

export default CompleteStatus;
