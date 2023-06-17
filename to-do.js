const taskInput = document.getElementById("task-input");

const addTaskBtn = document.getElementById("add-task-btn");

const taskList = document.getElementById("task-list");

const clearallbutton = document.getElementById ("clear-task-btn");

addTaskBtn.addEventListener("click", function() {

  const taskText = taskInput.value;

  if (taskText.trim() !== "") {

    const taskItem = document.createElement("li");
    taskItem.innerText = taskText;

    const button = document.createElement("button"); 
    taskItem.appendChild(button);
    button.innerHTML ="X";
    

    button.addEventListener("click", function() {

      taskItem.remove();

    });
    
    taskList.appendChild(taskItem);

    taskInput.value = "";

  }

});

clearallbutton.addEventListener("click", function() {
    taskList.remove();
});