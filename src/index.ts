// src/index.ts
import inquirer from 'inquirer';
import TodoList from './todos/TodoList.js';

const todoList = new TodoList();

const showMenu = async () => {
  const choices = [
    { name: 'View Todos', value: 'view' },
    { name: 'Add Todo', value: 'add' },
    { name: 'Complete Todo', value: 'complete' },
    { name: 'Quit', value: 'quit' },
  ];

  const { action } = await inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices,
  });

  return action;
};

const viewTodos = () => {
  const todos = todoList.getTodos();
  console.log('Current Todos:');
  todos.forEach(todo => {
    const status = todo.isCompleted() ? '[x]' : '[ ]';
    console.log(`${status} ${todo.getTask()}`);
  });
};

const addTodo = async () => {
  const { task } = await inquirer.prompt({
    type: 'input',
    name: 'task',
    message: 'Enter the task:',
  });

  todoList.addTodo(task);
  console.log('Todo added!');
};

const completeTodo = async () => {
  const todos = todoList.getTodos();
  const choices = todos.map(todo => ({
    name: todo.getTask(),
    value: todo.getId(),
  }));

  const { id } = await inquirer.prompt({
    type: 'list',
    name: 'id',
    message: 'Select a todo to mark as complete:',
    choices,
  });

  todoList.completeTodo(id);
  console.log('Todo marked as complete!');
};

const main = async () => {
  let action = '';
  while (action !== 'quit') {
    action = await showMenu();

    switch (action) {
      case 'view':
        viewTodos();
        break;
      case 'add':
        await addTodo();
        break;
      case 'complete':
        await completeTodo();
        break;
      case 'quit':
        console.log('Goodbye!');
        break;
    }
  }
};

main();
