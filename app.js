// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', getTasks)
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', deleteTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
}

function getTasks() {
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));

        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>'

        li.appendChild(link);

        taskList.appendChild(li);
    })
}

function addTask(e) {
    if(taskInput.value === '') {
        alert('Enter a value.');
        return;
    }

    const task = taskInput.value;

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>'

    li.appendChild(link);

    taskList.appendChild(li);

    addToLS(taskInput.value); 

    taskInput.value = '';

    e.preventDefault();
}

function addToLS(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

function deleteTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
        removeFromLS(e.target.parentElement.parentElement.innerText);
    }
}

function removeFromLS(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.splice(tasks.indexOf(task), 1);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}



function clearTasks() {
    taskList.innerHTML = '';
    clearLS();
}

function clearLS() {
    localStorage.clear();
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}


































// loadEventListeners();

// function loadEventListeners() {
//     document.addEventListener('DOMContentLoaded', getTasks)
//     form.addEventListener('submit', addTask);
//     taskList.addEventListener('click', removeTask);
//     filter.addEventListener('keyup', filterTasks);
//     clearBtn.addEventListener('click', deleteTasks);
// }

// function getTasks() {
//    let tasks;
//    if(localStorage.getItem('tasks') === null) {
//        tasks = [];
//    } else {
//        tasks = JSON.parse(localStorage.getItem('tasks'));
//    }

//    tasks.forEach(function(task) {
//        // const the li
//         const li = document.createElement('li');
//         // add classes
//         li.className = 'collection-item';
//         // Create and append text node
//         li.appendChild(document.createTextNode(task));
//         // const the link
//         const link = document.createElement('a');
//         // add classes to link
//         link.className = 'delete-item secondary-content';
//         // set innerHTML
//         link.innerHTML = '<i class="fa fa-remove"></i>';
//         // append link to li
//         li.appendChild(link);
//         // append li to taskList
//         taskList.appendChild(li);
//    }) 
// }


// function addTask(e) {
//     // Check to see if anything is in the input.value
//     if(taskInput.value === '') {
//         alert('Add something');
//         return;
//     }
//     // const the li
//     const li = document.createElement('li');
//     // add classes
//     li.className = 'collection-item';
//     // Create and append text node
//     li.appendChild(document.createTextNode(taskInput.value));
//     // const the link
//     const link = document.createElement('a');
//     // add classes to link
//     link.className = 'delete-item secondary-content';
//     // set innerHTML
//     link.innerHTML = '<i class="fa fa-remove"></i>';
//     // append link to li
//     li.appendChild(link);
//     // append li to taskList
//     taskList.appendChild(li);
//     // Clear the input value

//     // Add task to local storage
//     addToLocalStorage(taskInput.value);

//     taskInput.value = '';
//     // Prevent default because it is a form submit.
//     e.preventDefault();
// }

// function addToLocalStorage(task) {
//     let tasks;
//     if(localStorage.getItem('tasks') === null) {
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }
//     // push task onto tasks array.
//     tasks.push(task);
//     // set to local storage
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }



// function removeTask(e) {
//     if(e.target.parentElement.classList.contains('delete-item')) {
//         if(confirm("You sure dude? Ain't no coming back from this..."))
//         e.target.parentElement.parentElement.remove();
//     }

//     removeFromLS(e.target.parentElement.parentElement.innerText);

// }

// function removeFromLS(task) {
//     const tasks = JSON.parse(localStorage.getItem('tasks'));

//     tasks.splice(tasks.indexOf(task), 1);

//     localStorage.setItem('tasks', JSON.stringify(tasks));


// }




// function filterTasks(e) {
//     const text = e.target.value.toLowerCase();

//     document.querySelectorAll('.collection-item').forEach(function(task) {
//         const item = task.firstChild.textContent;
//         if(item.toLowerCase().indexOf(text) != -1) {
//             task.style.display = 'block';
//         } else {
//             task.style.display = 'none';
//         }
//     })
// }

// function deleteTasks() {
//     taskList.innerHTML = '';
//     removeTasksFromLS();
// }

// function removeTasksFromLS() {
//     localStorage.clear();
// }

