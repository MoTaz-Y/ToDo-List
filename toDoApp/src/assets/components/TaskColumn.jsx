import TaskCard from "./TaskCard";
import "./taskcolumn.css";
const TaskColumn = (props) => {
  const { title, taskIcon, tasks, status } = props || "";
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={taskIcon} alt="" className="task_column_icon" /> {title}
      </h2>
      {tasks
        .filter((task) => task.status === status)
        .map((task, index) => (
          <TaskCard key={index} task={task} status={status} />
        ))}
    </section>
  );
};

export default TaskColumn;
