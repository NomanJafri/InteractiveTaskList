let displayTask = document.getElementsByClassName('display-task');
let task = document.querySelector(".input-task input");
let newTask;


task.addEventListener('keyup', event => {
    if (event.key == "Enter"){
        newTask = task.value;
        console.log(newTask);
        task.value = '';
    }
    // console.log(event.key)
});

document.querySelector("#push").onclick = () => {
    console.log(task.value);
    task.value = '';
}