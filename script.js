//putting DOM connections for manipulation
let displayTask = document.getElementsByClassName('display-task');
let task = document.querySelector(".input-task input");
let newTask;






//Putting up Listeners for keyup and click
task.addEventListener('keyup', event => {
    if (event.key == "Enter"){
        newTask = task.value;
        console.log(newTask);
        task.value = '';
    }
    // console.log(event.key)
});

document.querySelector("#push").onclick = (e) => {
    e.preventDefault();
    console.log(task.value);
    task.value = '';
}