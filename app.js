let addBtn = document.querySelector("#addBtn");
let input = document.querySelector("#inputTask");
let taskList = document.querySelector("#task-list");

addBtn.addEventListener ("click", () => {
    if (input.value.length == 0){
        alert("Please enter a task to be done...");
    }
    else {
        let newTask = document.createElement("li");
        newTask.textContent = input.value;
        taskList.appendChild(newTask);
        input.value = "";  
        deleteTask(newTask);
        completeTask(newTask);
    }

    function deleteTask (newTask) {
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.textContent = "Delete";
        newTask.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () => {
            newTask.remove();
        });
    }

    function completeTask (newTask) {
        newTask.addEventListener("click", () => {
            newTask.style.textDecoration = "line-through";
        });
    }
});