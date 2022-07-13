import './style.scss';

const tasks = [
  {
    description: 'Do my laundry',
    completed: false,
    index: 0,
  },
  {
    description: 'Restart Capstone project',
    completed: false,
    index: 1,
  },
  {
    description: 'Start JavaScript Refresher',
    completed: false,
    index: 2,
  },
];

const tasksList = document.getElementById('tasks-list');
tasks.forEach((task) => {
  tasksList.innerHTML += `
    <li><hr></li>
    <li class="task">
        <div>
            <input type="checkbox" name="checkbox-${task.index}" ${task.completed ? 'checked' : 'unchecked'}>
            <h2>${task.description}</h2>
        </div>
        <button><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
    </li>
  `;
});
