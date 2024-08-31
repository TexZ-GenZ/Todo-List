export function writeDom(tasks, taskList, handleTaskAction) {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task-item');
        taskElement.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''}>
            <span class="task-text">${task.name}</span>
            <div class="task-actions">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash"></i></button>
            </div>
        `;
        taskElement.querySelector('input').addEventListener('change', () => handleTaskAction('toggle', task.id));
        taskElement.querySelector('.delete').addEventListener('click', () => handleTaskAction('delete', task.id));
        taskList.appendChild(taskElement);
    });
}