// src/todos/Todo.ts
export default class Todo {
    private id: number;
    private task: string;
    private completed: boolean;
  
    constructor(id: number, task: string, completed: boolean = false) {
      this.id = id;
      this.task = task;
      this.completed = completed;
    }
  
    public getId(): number {
      return this.id;
    }
  
    public getTask(): string {
      return this.task;
    }
  
    public isCompleted(): boolean {
      return this.completed;
    }
  
    public completeTask(): void {
      this.completed = true;
    }
  
    public serialize(): object {
      return {
        id: this.id,
        task: this.task,
        completed: this.completed,
      };
    }
  }
  