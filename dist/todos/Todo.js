// src/todos/Todo.ts
export default class Todo {
    constructor(id, task, completed = false) {
        this.id = id;
        this.task = task;
        this.completed = completed;
    }
    getId() {
        return this.id;
    }
    getTask() {
        return this.task;
    }
    isCompleted() {
        return this.completed;
    }
    completeTask() {
        this.completed = true;
    }
    serialize() {
        return {
            id: this.id,
            task: this.task,
            completed: this.completed,
        };
    }
}
