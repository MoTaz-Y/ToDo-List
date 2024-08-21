import "./taskcolumn.css";
const TaskColumn = (props) => {
  const { title } = props || "";
  const { taskIcon } = props || "";
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={taskIcon} alt="" className="task_column_icon" /> {title}
      </h2>
    </section>
  );
};

export default TaskColumn;
