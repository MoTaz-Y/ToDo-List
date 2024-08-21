import "./App.css";
import TaskColumn from "./assets/components/TaskColumn";
import TaskForm from "./assets/components/TaskForm";
import ToDo from "./assets/images/cscsc.png";
import InProgress from "./assets/images/42656-glowing-star-icon.png";
import Completed from "./assets/images/pngtree-3d-green-check-icon-in-transparent-background-png-image_6552254.png";
const App = () => {
  return (
    <div className="app">
      <TaskForm />

      <main className="app-main">
        <TaskColumn title="To do" taskIcon={ToDo} />
        <TaskColumn title="In Progress" taskIcon={InProgress} />
        <TaskColumn title="Completed" taskIcon={Completed} />
      </main>
    </div>
  );
};

export default App;
