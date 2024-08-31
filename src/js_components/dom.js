import { Todo } from './todoClass.js';
import { writeDom } from './writeDom.js';

const todo = new Todo();

export function initializeDom() {
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
    const emptyState = document.getElementById('empty-state');

    addTaskButton.addEventListener('click', showAddTaskForm);
    renderTasks();

    function showAddTaskForm() {
        const form = document.createElement('form');
        form.innerHTML = `
            <input type="text" placeholder="Task name" required>
            <button type="submit">Add Task</button>
            <button type="button" class="cancel">Cancel</button>
        `;
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const taskName = form.querySelector('input').value;
            todo.addTask(taskName);
            renderTasks();
            form.remove();
        });
        form.querySelector('.cancel').addEventListener('click', () => form.remove());
        taskList.insertBefore(form, taskList.firstChild);
        form.querySelector('input').focus();
    }

    function renderTasks() {
        const tasks = todo.getTasks();
        if (tasks.length === 0) {
            emptyState.classList.add('show');
            taskList.innerHTML = '';
        } else {
            emptyState.classList.remove('show');
            writeDom(tasks, taskList, handleTaskAction);
        }
    }

    function handleTaskAction(action, id) {
        if (action === 'toggle') {
            todo.toggleTask(id);
        } else if (action === 'delete') {
            todo.deleteTask(id);
        }
        renderTasks();
    }
}