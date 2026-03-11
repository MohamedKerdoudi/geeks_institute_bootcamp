import { TodoList } from './todo.js';

const myList = new TodoList();

myList.addTask("Learn Node.js");
myList.addTask("Build a project");
myList.addTask("Practice coding");

myList.markComplete("Learn Node.js");

myList.listTasks();