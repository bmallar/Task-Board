// Retrieve tasks and nextId from localStorage

// let nextId = JSON.parse(localStorage.getItem("nextId"));
let taskArray = JSON.parse(localStorage.getItem("taskList")) || []
const cardContainer = document.getElementById('in-progress-cards')
console.log(taskArray)
function generateTaskId() {


}

// Todo: create a function to create a task card
function createTaskCard(task) {

}


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
  
 
}

// Todo: create a function to handle adding a new task
function handleAddTask (event) {
 event.preventDefault()
const descriptionInput = $('#modal-body-1').val("")
const dateDueInput = $('#datepicker').val()
const titleInput= $('#modal-body-3').val("")

const taskObject = {
  task: dateDueInput,
  title: titleInput,
  description: descriptionInput
}
taskArray.push(taskObject)
localStorage.setItem("taskList", JSON.stringify(taskArray))
console.log(taskObject) 
}
for (let i = 0; i < taskArray.length; i++) {
  
  const taskCard = document.createElement('div')
        taskCard.setAttribute("class", "taskCard")

        const taskEl = document.createElement('h4')
        taskEl.textContent = taskArray[i].task

        const titleEl = document.createElement('h4')
        titleEl.textContent = taskArray[i].title

        const descriptionEl = document.createElement('h4')
        descriptionEl.textContent = taskArray[i].description

        taskCard.append(taskEl, titleEl, descriptionEl)
        cardContainer.append(taskCard)

    
        
}




// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
  const cardDeleteBtn = $('<button>')
  .addClass('btn btn-danger delete')
  .text('Delete')
  .attr('data-project-id', project.id);
cardDeleteBtn.on('click', handleDeleteTask);


}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
  
  $( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
         
      }
    });
  } );
  
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
 
  
})

$( function() {
  $( "#datepicker" ).datepicker();
  
} );

$("#taskForm").on("submit", handleAddTask);
  
