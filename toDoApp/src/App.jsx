import "./App.css";
import TaskColumn from "./assets/components/TaskColumn";
import TaskForm from "./assets/components/TaskForm";
import ToDo from "./assets/images/cscsc.png";
import InProgress from "./assets/images/42656-glowing-star-icon.png";
import Completed from "./assets/images/pngtree-3d-green-check-icon-in-transparent-background-png-image_6552254.png";
import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);
const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };
  const handleStatusChange = (id, status) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status };
      }
      return task;
    });
    setTasks(newTasks);
  };
  const onDragEnd = (result) => {
    const { source, destination } = result;
    console.log(source, destination);
    if (!destination) return;

    const [movedTask] = tasks.splice(source.index, 1);
    movedTask.status = destination.droppableId;
    tasks.splice(destination.index, 0, movedTask);

    setTasks([...tasks]);
  };
  console.log(tasks);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
    </DragDropContext>
  );
};

export default App;
