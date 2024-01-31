//putting DOM connections for manipulation
const displayTask = document.querySelector('.display-task');
const task = document.querySelector(".input-task input");
var newTask = '<li> <input type="checkbox" id="0"><p>First</p><button class="delete-button"><img src="./assets/delete-button-svgrepo-com.svg" id="0"></button></li><li> <input type="checkbox" id="1"><p>Second</p><button class="delete-button"><img src="./assets/delete-button-svgrepo-com.svg" id="1"></button></li><li><input type="checkbox" id="2"><p> Third </p><button class="delete-button"><img src="./assets/delete-button-svgrepo-com.svg" id="2"></button></li>';

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
function updateDisplay() {
    // let html = '' ;
    // newTask.forEach((v, i) => {html = html + v})    
    displayTask.innerHTML ='<ul>' + newTask + '</ul>';
    const delButtons = document.getElementsByClassName("delete-button");
    const checkInputs = document.querySelectorAll(".display-task input");
    console.log(checkInputs);

    // Remove event listeners important for performance / behaviour
    for (let i = 0; i < delButtons.length; i++) {
        delButtons[i].removeEventListener("click", delEventHandler, true);
        checkInputs[i].removeEventListener('click', checkboxHandler, true);
    }
    
    // setting up new event listeners on current delete buttons
    for (let i = 0; i < delButtons.length; i++) {
        delButtons[i].addEventListener("click", delEventHandler, true);
        checkInputs[i].addEventListener('click', checkboxHandler, true);        
    }
}

// calling update display for first mounting display
updateDisplay();

//create new task handler function
function createNewTask(value) {
    newTask = document.querySelector(".display-task ul").innerHTML
    newTask += '<li><input type="checkbox"><p>'+value+'</p><button class="delete-button"><img src="./assets/delete-button-svgrepo-com.svg"></button></li>';
    updateDisplay();
    task.value = '';
}

//Putting up Listeners for keyup and click
task.addEventListener('keyup', event => {
    if (event.key == "Enter" && task.value != ''){
        createNewTask(task.value);
    }else if(event.key == "Enter" && task.value == '') {
        alert("Write a task to add before pressing Enter");
    };
});

//Putting up Listeners for click
document.querySelector("#push").onclick = (e) => {
    e.preventDefault();
    if (task.value != '') {
        createNewTask(task.value);
    }else if(task.value == ''){
        alert("Write a task to add before clicking 'Add' button");
    }
}