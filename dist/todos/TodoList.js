// src/todos/TodoList.ts
import Todo from './Todo.js';
export default class TodoList {
    constructor() {
        this.todos = [];
    }
    addTodo(task) {
        const id = this.todos.length + 1;
        const todo = new Todo(id, task);
        this.todos.push(todo);
    }
    completeTodo(id) {
        const todo = this.todos.find(todo => todo.getId() === id);
        if (todo) {
            todo.completeTask();
        }
    }
    getTodos() {
        return this.todos;
    }
    serialize() {
        return this.todos.map(todo => todo.serialize());
    }
}
