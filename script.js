//putting DOM connections for manipulation
const displayTask = document.querySelector('.display-task');
const task = document.querySelector(".input-task input");
const newTask = ['<li> <input type="checkbox" id="0"><p>First</p><button class="delete-button"><img src="./assets/delete-button-svgrepo-com.svg" id="0"></button></li>', '<li> <input type="checkbox" id="1"><p>Second</p><button class="delete-button"><img src="./assets/delete-button-svgrepo-com.svg" id="1"></button></li>', '<li><input type="checkbox" id="2"><p> Third </p><button class="delete-button"><img src="./assets/delete-button-svgrepo-com.svg" id="2"></button></li>'];
let delButtons = [];

//delete button event handler function
const delEventHandler = (e) => {
    e.preventDefault();

    // filter method returns list always remember to use box notation for accessinf an item
    let currentTargetIndex = newTask.indexOf(newTask.filter( v => v.includes(e.target.id))[0]);
    newTask.splice(currentTargetIndex, 1);
    updateDisplay();
}

// Update display when any user interaction took place
function updateDisplay() {
    let html = '' ;
    newTask.forEach((v, i) => {html = html + v})    
    displayTask.innerHTML ='<ul>' + html + '</ul>';
    delButtons = document.getElementsByClassName("delete-button");    

    // Remove event listeners important for performance / behaviour
    for (let i = 0; i < delButtons.length; i++) {
        delButtons[i].removeEventListener("click", delEventHandler, true)
    }
    
    // setting up new event listeners on current delete buttons
    for (let i = 0; i < delButtons.length; i++) {
        delButtons[i].addEventListener("click", delEventHandler, true);        
    }
}

updateDisplay();


//Putting up Listeners for keyup and click
task.addEventListener('keyup', event => {
    if (event.key == "Enter" && task.value != ''){
        newTask.push('<li>' + '<input type="checkbox" id=' + newTask.length +'> <p>'+task.value+'</p><button class="delete-button"><img src="./assets/delete-button-svgrepo-com.svg" id=' + newTask.length +'></button></li>');
        updateDisplay();
        task.value = '';
    };
});

document.querySelector("#push").onclick = (e) => {
    e.preventDefault();
    if (task.value != '') {
        newTask.push('<li>' + '<input type="checkbox" id=' + newTask.length +'> <p>'+task.value+'</p><button class="delete-button"><img src="./assets/delete-button-svgrepo-com.svg" id=' + newTask.length +'></button></li>');
        updateDisplay();
        task.value = '';
    }
}