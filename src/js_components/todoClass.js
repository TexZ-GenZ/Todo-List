export class Todo {
    constructor() {
        this.tasks = this.loadTasks();
    }

    loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    addTask(name) {
        const task = {
            id: Date.now(),
            name: name,
            completed: false,
            date: new Date().toISOString().split('T')[0]
        };
        this.tasks.push(task);
        this.saveTasks();
        return task;
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
    }

    toggleTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
        }
    }

    getTasks() {
        return this.tasks;
    }
}