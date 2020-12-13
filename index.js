console.log('app is running');

let taskList = localStorage.getItem(JSON.parse('taskList')) || [];

const removeTask = (id) => {
  taskList = taskList.filter((task) => {
    return task.id !== id;
  })
  renderTasks();
}

const addTaskBtnsListners = () => {
  taskList.forEach((task) => {
    document.getElementById(`btn-${task.id}`).addEventListener('click', () => {
      toggleCompleted(task.id)
    });

    document.getElementById(`remove-${task.id}`).addEventListener('click', () => {
      removeTask(task.id)
    })
  })
}


const renderTasks = () => {
  const taskListElement = document.getElementById('taskList');
  let taskListsTemplate = null;

  if (taskList.length > 0) {
    taskListsTemplate = taskList.map((taskItem) => {
      return createTask(taskItem)
    });

    taskListElement.innerHTML = taskListsTemplate.join('');
    addTaskBtnsListners();
  } else {
    taskListElement.innerHTML = `
        <p class="no-task-header">Congrats! You hav no tasks!</p>
      `;
  }
}

const createTask = (task) => {
  const taskTemplate = `
    <li
      id="${task.id}"
      class="todo-list-item ${task.completed ? 'completed' : '' }"
    >
      <p class="todo-name">${task.taskName}</p>
      <div>
        <button
          id="remove-${task.id}"
        >
          <i class="fas fa-trash todo-remove-icon"></i>
        </button>
        <button
          id="btn-${task.id}"
        >
          <i class="far fa-check-circle todo-complete-icon"></i>
        </button>
      </div>
    </li>
  `

  return taskTemplate;
}

const toggleCompleted = (id) => {
  document.getElementById(id).classList.toggle('completed');
  console.log(taskList);
  
  taskList = taskList.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        completed: !task.completed
      }
    }
    
    return task;
  })

  console.log(taskList);
}


const setDate = () => {
  const dayOfMonth = new Date().getDate();
  const year = new Date().getFullYear();
  const month = new Date().toLocaleString('default', { month: 'short' });
  const dayName = new Date().toLocaleString('default', { weekday: 'long' });

  const dateDay = document.getElementById('dateDay');
  const dateBox = document.getElementById('dateBox');  
  const headerDay = document.getElementById('headerDay');

  dateDay.innerHTML = `<p>${dayOfMonth}</p>`;
  dateBox.innerHTML = `
      <p>${month}</p>
      <p>${year}</p>
    `
  headerDay.innerHTML = `<p>${dayName.toLocaleUpperCase()}</p>`
}

const addTask = () => {
  const taskInput = document.getElementById('taskInput');
  const task = {
    taskName: taskInput.value,
    completed: false,
    id: Date.now()
  }

  taskList.unshift(task);
  renderTasks();
  taskInput.value = '';

  localStorage.setItem('taskList', JSON.stringify(taskList));

  toggleModal();
}

const toggleModal = () => {
  const modal = document.getElementById('modal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const addTaskBtn = document.getElementById('addTaskBtn');

  console.log(modal.classList.toggle('hidden'));

  if (!modal.classList[1]) {
    modalCloseBtn.addEventListener('click', toggleModal);
    addTaskBtn.addEventListener('click', addTask);
  } else {
    modalCloseBtn.removeEventListener('click', toggleModal);
    addTaskBtn.removeEventListener('click', addTask);
  }
}

const todoAddBtn = document.getElementById('todoAddBtn');
todoAddBtn.addEventListener('click', toggleModal);

setDate();
renderTasks();