var taskform = document.getElementById("task-form");
var taskIListEl = document.getElementById("task-list-el");
var taskcompleate = document.getElementById("taskcompleate");

let taskArray = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

let completedTask = localStorage.getItem("doneTasks")
  ? JSON.parse(localStorage.getItem("doneTasks"))
  : [];

displayTask();

function buttonClick() {
  event.preventDefault();
  getTask();
}

function capitalizeFirstLetter(str) {
  return str
    .split(" ") // Split the string into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words back into a string
}

function getTask() {
  var taskinput = document.getElementById("task-input").value;
  if (taskinput != "") {
    taskinput = capitalizeFirstLetter(taskinput);

    taskArray.unshift(taskinput);
    localStorage.setItem("tasks", JSON.stringify(taskArray));
    document.getElementById("task-input").value = "";
    displayTask();
  }
}

function displayTask() {
  console.log(taskArray);
  console.log(completedTask);

  if (taskArray.length >= 0) {
    let eachTask = "";
    taskArray.forEach((task, i) => {
      eachTask =
        eachTask +
        `
            <li class="list-group-item list-group-item-secondary mb-2">
                <span>${task}</span>
                <button class="float-end btnn" onclick="deleteFunction(${i})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                </button>
                <button class="float-end btnn  me-2" onclick="updateFunction(${i})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>
                </button>
                <button class="float-end btnn  me-2" onclick="taskDone(${i})">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                  </svg>
                </button>
            </li>
            `;
    });
    taskIListEl.innerHTML = eachTask;
  }

  // --------------------------------------------------------------------------------------------------------------------

  if (completedTask.length >= 0) {
    let eachTaskdone = "";
    completedTask.forEach((task, i) => {
      eachTaskdone =
        eachTaskdone +
        `
            <li class="list-group-item list-group-item-secondary mb-2">
                <span>${task}</span>
                <button class="float-end btnn" onclick="deleteDoneFunction(${i})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                </button>
            </li>
            `;
    });
    taskcompleate.innerHTML = eachTaskdone;
  }
}

function deleteDoneFunction(id) {
  completedTask.splice(id, 1);
  localStorage.setItem("doneTasks", JSON.stringify(completedTask));
  displayTask();
}
function deleteFunction(id) {
  taskArray.splice(id, 1);
  localStorage.setItem("tasks", JSON.stringify(taskArray));
  displayTask();
}

function updateFunction(id) {
  document.getElementById("task-input").value = taskArray[id];
  taskArray.splice(id, 1);
  localStorage.setItem("tasks", JSON.stringify(taskArray));
  displayTask();
}

// ------------------

function taskDone(id) {
  completedTask.unshift(taskArray[id]);
  taskArray.splice(id, 1);
  localStorage.setItem("doneTasks", JSON.stringify(completedTask));
  localStorage.setItem("tasks", JSON.stringify(taskArray));
  displayTask();
}
