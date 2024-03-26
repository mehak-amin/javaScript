const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event){
    event.preventDefault();
    const newTask = todoInput.value;
    if(newTask === ''){
        alert("Please enter a valid task !")
        return;
    }
    todoInput.value = '';

    addTask(newTask);
});

function addTask(task) {
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task;
    listItem.appendChild(taskText);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    listItem.appendChild(editButton);
    
    editButton.addEventListener('click' , function(){
        const newText = this.previousSibling;
        if(!newText.isContentEditable){
            newText.contentEditable = true 
            newText.focus()
            editButton.textContent = 'save';
        }
        else{
            newText.contentEditable= false
            editButton.textContent = 'Edit'
        }
    })

  
    const deleteButton = document.createElement('button');
    deleteButton.textContent= 'Delete';
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);

   

    deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });


}
