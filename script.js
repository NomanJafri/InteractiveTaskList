//putting DOM connections for manipulation
const displayTask = document.querySelector('.display-task');
const task = document.querySelector(".input-task input");
const newTask = ['<li> <input type="checkbox" id="0"><p>First</p><button style="float:right;"><img src="./assets/delete-button-svgrepo-com.svg"></button></li>', '<li> <input type="checkbox" id="1"><p>Second</p><button style="float:right;"><img src="./assets/delete-button-svgrepo-com.svg"></button></li>', '<li><input type="checkbox" id="2"><p> Third </p><button style="float:right;"><img src="./assets/delete-button-svgrepo-com.svg"></button></li>'];

function updateDisplay() {
    let html = '' ;
    newTask.forEach((v, i) => {html = html + v})
    displayTask.innerHTML ='<ul>' + html + '</ul>';
}

updateDisplay();


//Putting up Listeners for keyup and click
task.addEventListener('keyup', event => {
    if (event.key == "Enter" && task.value != ''){
        newTask.push('<li>' + '<input type="checkbox" id=' + newTask.length +'> <p>'+task.value+'</p><button style="float:right;"><img src="./assets/delete-button-svgrepo-com.svg"></button></li>');
        updateDisplay();
        task.value = '';
    };
});

document.querySelector("#push").onclick = (e) => {
    e.preventDefault();
    if (task.value != '') {
        newTask.push('<li>' + '<input type="checkbox" id=' + newTask.length +'> <p>'+task.value+'</p><button style="float:right;"><img src="./assets/delete-button-svgrepo-com.svg"></button></li>');
        updateDisplay();
        task.value = '';
    }
}