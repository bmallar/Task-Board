// Retrieve tasks and nextId from localStorage

// let nextId = JSON.parse(localStorage.getItem("nextId"));
let taskArray = JSON.parse(localStorage.getItem("taskList")) || []
console.log(taskArray)
const cardContainer = document.getElementById('in-progress-cards')
function generateTaskId() {


}

// Todo: create a function to create a task card
function createTaskCard(task) {

}


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
cardContainer.innerHTML = ""
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
          
          if (taskArray.dueDate && taskArray.status !== 'done') {
            const now = dayjs();
            const taskDueDate = dayjs(taskArray.dueDate, 'DD/MM/YYYY');
        
            // ? If the task is due today, make the card yellow. If it is overdue, make it red.
            if (now.isSame(taskDueDate, 'day')) {
              taskCard.addClass('bg-done text-white');
            } else if (now.isAfter(taskDueDate)) {
              taskCard.addClass('bg-warning text-white');
              cardDeleteBtn.addClass('border-light');
            }
          }
      
          
  }
 
}

// Todo: create a function to handle adding a new task
function handleAddTask (event) {
 event.preventDefault()
const descriptionInput = $('#modal-body-1').val()
const dateDueInput = $('#datepicker').val()
const titleInput= $('#modal-body-3').val()

const taskObject = {
  task: dateDueInput,
  title: titleInput,
  description: descriptionInput
}
taskArray.push(taskObject)
localStorage.setItem("taskList", JSON.stringify(taskArray))


$('#datepicker').val("")
$('#modal-body-1').val("")
$('#modal-body-3').val("")

renderTaskList();

}


// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
  const cardDeleteBtn = $('<button>')
  .addClass('btn btn-warning delete')
  .text('Delete')
  .attr('data-project-id', project.id);
cardDeleteBtn.on('click', handleDeleteTask);
if (now.isSame(taskDueDate, 'day')) {
  taskCard.addClass('bg-done text-white');
} else if (now.isAfter(taskDueDate)) {
  taskCard.addClass('bg-warning text-white');
  cardDeleteBtn.addClass('border-light');
}

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
 renderTaskList();
  
})

$( function() {
  $( "#datepicker" ).datepicker();
  
} );

$("#taskForm").on("submit", handleAddTask);
  
