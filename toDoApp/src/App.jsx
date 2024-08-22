import "./App.css";
import TaskColumn from "./assets/components/TaskColumn";
import TaskForm from "./assets/components/TaskForm";
import ToDo from "./assets/images/cscsc.png";
import InProgress from "./assets/images/42656-glowing-star-icon.png";
import Completed from "./assets/images/pngtree-3d-green-check-icon-in-transparent-background-png-image_6552254.png";
import { useState } from "react";
const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />

      <main className="app-main">
        <TaskColumn title="To do" taskIcon={ToDo} tasks={tasks} status="todo" />
        <TaskColumn
          title="In Progress"
          taskIcon={InProgress}
          tasks={tasks}
          status="doing"
        />
        <TaskColumn
          title="Completed"
          taskIcon={Completed}
          tasks={tasks}
          status="done"
        />
      </main>
    </div>
  );
};

export default App;
