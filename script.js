//putting DOM connections for manipulation
const displayTask = document.querySelector('.display-task');
const task = document.querySelector(".input-task input");
const newTask = ['<li> <input type="checkbox" id="0"> First<button style="float:right;">Delete</button></li>', '<li> <input type="checkbox" id="1"> Second<button style="float:right;">Delete</button></li>', '<li><input type="checkbox" id="2"> Third<button style="float:right;">Delete</button></li>'];

function updateDisplay() {
    let html = '' ;
    newTask.forEach((v, i) => {html = html + v})
    displayTask.innerHTML ='<ul>' + html + '</ul>';
}

updateDisplay();


//Putting up Listeners for keyup and click
task.addEventListener('keyup', event => {
    if (event.key == "Enter" && task.value != ''){
        newTask.push('<li>' + '<input type="checkbox" id=' + newTask.length +'> '+task.value+'<button style="float:right;">Delete</button></li>');
        updateDisplay();
        task.value = '';
    };
});

document.querySelector("#push").onclick = (e) => {
    e.preventDefault();
    if (task.value != '') {
        newTask.push('<li>' + '<input type="checkbox" id=' + newTask.length +'> '+task.value+'<button style="float:right;">Delete</button></li>');
        updateDisplay();
        task.value = '';
    }
}