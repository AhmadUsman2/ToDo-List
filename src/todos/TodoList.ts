// src/todos/TodoList.ts
import Todo from './Todo.js';

export default class TodoList {
  private todos: Todo[];

  constructor() {
    this.todos = [];
  }

  public addTodo(task: string): void {
    const id = this.todos.length + 1;
    const todo = new Todo(id, task);
    this.todos.push(todo);
  }

  public completeTodo(id: number): void {
    const todo = this.todos.find(todo => todo.getId() === id);

    if (todo) {
      todo.completeTask();
    }
  }

  public getTodos(): Todo[] {
    return this.todos;
  }

  public serialize(): object[] {
    return this.todos.map(todo => todo.serialize());
  }
}
