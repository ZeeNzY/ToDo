
const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');
const todoList = document.getElementById('todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//document.addEventListener('DOMContentLoaded', getTodos);


function addTodo(event) {

    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create li
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);
    // Add todo to local storage
    saveLocalTodos(todoInput.value);

    const completed = document.createElement('button');
    completed.innerHTML = "<i class='fas fa-check'></i>";
    completed.classList.add('complete-btn');
    todoDiv.appendChild(completed)

    const del = document.createElement('button');
    del.innerHTML = "<i class='fas fa-trash'></i>";
    del.classList.add('del-btn');
    todoDiv.appendChild(del);
    
    todoList.appendChild(todoDiv);

    todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;

    if (item.classList[0] === 'del-btn') {
        const todo = item.parentElement;

        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
      
    }
  
     if (item.classList[0] === 'complete-btn') {
         const todo = item.parentElement;
         todo.classList.toggle('completed');
     }
}

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}



function removeLocalTodos(todo){
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoindex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoindex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
} 

// function getTodos() {
//     let todos;
//     if (localStorage.getItem('todos') === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.forEach(function (todo) {
//         // create todo div
//         const todoDiv = document.createElement('div');
//         todoDiv.classList.add('todo');
//         // create li
//         const newToDo = document.createElement('li');
//         newToDo.innerText = todo;  
//         newToDo.classList.add('todo-item');
//         todoDiv.appendChild(newToDo);
//         // Add todo to local storage
//         // saveLocalTodos(todoInput.value);
//         // Checked/ Done button
//         const completed = document.createElement('button');
//         completed.innerHTML = "<i class='fas fa-check'></i>";
//         completed.classList.add('complete-btn');
//         todoDiv.appendChild(completed)
//         // Trash / Delete button
//         const del = document.createElement('button');
//         del.innerHTML = "<i class='fas fa-trash'></i>";
//         del.classList.add('del-btn');
//         todoDiv.appendChild(del);
//         // Append to List
//         todoList.appendChild(todoDiv);
//     });
// }