var input = document.getElementById('input');
var addbutton = document.getElementById('addbtn');


function addtodo(){
var list = document.getElementById('taskl');
var text = document.createTextNode(input.value);
var task = document.createElement('li');
var removebtn = document.createElement('button');
removebtn.setAttribute("class","remove")
removebtn.innerText='X'

task.appendChild(text);
task.appendChild(removebtn);

    if(input.value==""){
        alert("Please type somethig!!")
    }
    else{
        list.appendChild(task)
    }

    removebtn.addEventListener('click',function(){
        removebtn.parentElement.remove()
    })
}