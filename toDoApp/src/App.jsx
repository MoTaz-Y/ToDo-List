import "./App.css";
import TaskColumn from "./assets/components/TaskColumn";
import TaskForm from "./assets/components/TaskForm";
import ToDo from "./assets/images/cscsc.png";
import InProgress from "./assets/images/42656-glowing-star-icon.png";
import Completed from "./assets/images/pngtree-3d-green-check-icon-in-transparent-background-png-image_6552254.png";
import { useState } from "react";
const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleDelete = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };
  const handleStatusChange = (index, status) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, status };
      }
      return task;
    });
    setTasks(newTasks);
  };
  console.log(tasks);
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />

      <main className="app-main">
        <TaskColumn
          title="To do"
          taskIcon={ToDo}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          handleStatusChange={handleStatusChange}
        />
        <TaskColumn
          title="In Progress"
          taskIcon={InProgress}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
          handleStatusChange={handleStatusChange}
        />
        <TaskColumn
          title="Completed"
          taskIcon={Completed}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
          handleStatusChange={handleStatusChange}
        />
      </main>
    </div>
  );
};

export default App;
