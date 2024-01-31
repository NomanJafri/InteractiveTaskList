//DOM connection to Add task input field
const task = document.querySelector(".input-task input");


//delete button event handler function
const delEventHandler = function (e) {
    e.preventDefault();
    this.parentNode.remove();
}

//check box click event handler
const checkboxHandler = function () {    
    let element = this.nextElementSibling;
    if (element.classList != 'strike-through'){
        element.classList.add('strike-through');
    }else {
        element.classList.remove('strike-through');
    }
}

// Update display when any user interaction took place
function checkDelListeners() {
    //Gathering all relevant checkboxes and del buttons from DOM
    const delButtons = document.getElementsByClassName("delete-button");
    const checkInputs = document.querySelectorAll(".display-task input");
    
    // Remove event listeners important for performance / behaviour
    for (let i = 0; i < delButtons.length; i++) {
        delButtons[i].removeEventListener("click", delEventHandler, true);
        checkInputs[i].removeEventListener('click', checkboxHandler, true);
    }
    
    // setting up new event listeners on current checkboxes & delete buttons
    for (let i = 0; i < delButtons.length; i++) {
        delButtons[i].addEventListener("click", delEventHandler, true);
        checkInputs[i].addEventListener('click', checkboxHandler, true);        
    }
}

//create new task handler function
function createNewTask(value) {
    const displayTask = document.querySelector('.display-task ul');
    let newTask = displayTask.innerHTML;
    newTask += `<li><input type="checkbox"><p>${value}</p><button class="delete-button"><img src="./assets/delete-button-svgrepo-com.svg"></button></li>`;
    displayTask.innerHTML =`${newTask}`;
    checkDelListeners();
    task.value = '';
}

//Putting up Listeners for Enter key
task.addEventListener('keyup', event => {
    if (event.key == "Enter" && task.value != ''){
        createNewTask(task.value);
    }else if(event.key == "Enter" && task.value == '') {
        alert("Write a task to add before pressing Enter");
    };
});

//Putting up Listeners for click on Add buttom
document.querySelector("#push").onclick = (e) => {
    e.preventDefault();
    if (task.value != '') {
        createNewTask(task.value);
    }else if(task.value == ''){
        alert("Write a task to add before clicking 'Add' button");
    }
}