// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
const tasks =$('<div>').addClass('card task content').attr('data-task-id', task.id);
}

// Todo: create a function to create a task card
function createTaskCard(task) {
const taskCard = $('<div>').addClass('card task content').attr('data-task-id', task.id);
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
const tasks = readTasksFromStorage();
const todoList = $('#todo-cards');
todoList.empty();

const doneList = $('#done-cards');
doneList.empty();

for (let task of tasks) {
    if (task.status === 'to-do') {
        todoList.append(createTaskCard(task));
    } else if (task.status === 'in-progress') {
        inProgressList.append(createTaskCard(task));
    } else if (task.status === 'done') {
        doneList.append(createTaskCard(task));
    }
}
$('.draggable').draggable({
    opacity: 0.6,
    zIndex: 100,
    helper: function (e) {
        const original = $(e.target).hasClass('ui-draggable')
        $(e.target)
        $(e.target).closest('.ui-draggable');
    return original.clone().css({
        width: original.outerWidth(),
        });
    },
});
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
const taskAddBtn = $('<button>').addClass('addBtn').text('ADD').attr('data-task-id', task.id);
taskAddBtn.on('click', handleAddTask);
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
const taskDeleteBtn = $('<button>').addClass('btn btn-danger delete').text('Delete').attr('data-task-id', task.id);
taskDeleteBtn.on('click', handleDeleteTask);
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

const tasks =readTasksFromStorage();

const taskId = ui.draggable[0].dataset.taskId;

const newStatus = event.target.id;

for (let task of tasks) {

    if (task.id === taskId) {
        task.status = newStatus;
    }
}
localStorage.setItem('tasks', JSON.stringify(tasks));
printTaskData();
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

$("#datepicker").datepicker({
    changeMonth: true,
    changeYear: true,
});

// makes the lanes droppable
$('.lane').droppable({
    accept: '.draggable',
    drop: handleDrop,
    });
});