//selecting required Elements

const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTask() {
    const taskText = todoInput.value.trim();


if (taskText === '') {
    alert('Please enter a task');
    return;
}

//Create a new list of item element
const listItem = document.createElement('li');

//Create a textNode and delete button for the text 

const taskNode = document.createTextNode(taskText);


const deleteBtn = document.createElement('button');
deleteBtn.textContent ='Delete';

listItem.appendChild(taskNode);
listItem.appendChild(deleteBtn);

//Add list item to the todo-list (ul)

todoList.appendChild(listItem);
todoInput.value = '';

//Add an event listener to the Delete Button 
deleteBtn.addEventListener('click', function () {
    todoList.removeChild(listItem);
});
}

//Add a click event listener to the Add button 
addBtn.addEventListener('click', addTask);



//Allow the Enter key to add a task
todoInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

