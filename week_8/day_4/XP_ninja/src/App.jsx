
import React from "react";
import { TaskProvider } from "./TaskContext";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {
  return (
    <TaskProvider>
      <div className="container py-4">
        <h1 className="text-center mb-4"> Task Manager</h1>

        <AddTask />

        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;