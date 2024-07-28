var myTodoList = document.getElementById('todo-list');

// var addList = document.getElementById('todo-adder');
// addList.addEventListener("click", addTodoList());

function addTodoList () {
    var todoItem = document.getElementById("todoItem");
    var todoItemValue = todoItem.value;

    if(todoItemValue != "") {
        var li = document.createElement("li");
        var todoItemText = document.createTextNode(todoItemValue);

        var editButton = document.createElement("button");
        var deleteButton = document.createElement("button");
        var complitedButton = document.createElement("button");

        todoItem.value = "";
        
        editButton.innerText = "Edit";
        editButton.className = "editButton btn";
        editButton.id = "edit";
        editButton.setAttribute("onclick", "editTodoItem(this)");


        deleteButton.innerText = "Delete";
        deleteButton.id = "delete";
        deleteButton.className = "todoDelete btn";
        deleteButton.setAttribute("onclick", "deleteTodoList(this)");

        complitedButton.innerText = "Completed";
        complitedButton.id = "compelet";
        complitedButton.className = "compalitedTodo btn";
        complitedButton.setAttribute("onclick", "compalitedTodoItem(this)");


        li.appendChild(todoItemText);
        myTodoList.appendChild(li);


        li.appendChild(editButton);
        li.appendChild(deleteButton);
        li.appendChild(complitedButton);
    }

    else {
        alert("Pelse Enter some Value to Add!");
    }
}

function editTodoItem(e) {
    var editValue = prompt("Enter Value", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editValue;
}


function deleteTodoList(event) {
    event.parentNode.remove(this);
}


function compalitedTodoItem(e) {
    e.parentNode.style.textDecoration = 'line-through';
    document.getElementById("edit").disabled = true;
    document.getElementById("compelet").disabled = true;
}


// var deleteAllList = document.getElementById("Todo-clear");
// deleteAllList.addEventListener("click",  deleteAllTodoList())

function deleteAllTodoList () {
    myTodoList.innerHTML = "";
}