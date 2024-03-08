// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
let taskArray = JSON.parse(localStorage.getItem("taskList")) || []

function generateTaskId() {


}

// Todo: create a function to create a task card
function createTaskCard(task) {

}


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
 event.preventDefault()
 const descriptioninput = $('#modal-body-1').val()
const taskinput = document.getElementById('modal-body-2').value
const titleinput= document.getElementById('modal-body-3').value

const taskCard ={
  task: taskinput,
  title: titleinput,
  description: descriptioninput
}
taskArray.push(taskCard)
localStorage.setItem("taskList", JSON.stringify(taskArray))
console.log(taskCard)
}


// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
 
  
})

$( function() {
  $( "#datepicker" ).datepicker();
} );

$("#taskForm").on("submit", handleAddTask);
  
