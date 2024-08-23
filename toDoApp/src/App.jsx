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
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }
    const [movedTask] = tasks.filter((task) => task.id === result.draggableId);

    const filteredTasks = tasks.filter(
      (task) => task.id !== result.draggableId
    );

    // Update the status of the moved task
    movedTask.status = destination.droppableId;

    // Insert the task into the new location
    const updatedTasks = [
      ...filteredTasks.slice(0, destination.index),
      movedTask,
      ...filteredTasks.slice(destination.index),
    ];
    setTasks(updatedTasks);
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
