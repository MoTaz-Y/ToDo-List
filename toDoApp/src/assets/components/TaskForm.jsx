import Tag from "./Tag";
import "./taskform.css";
import { useState } from "react";
const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
  });
  const handleTaskChange = (event) => {
    const { name, value } = event.target;
    setTaskData({ ...taskData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };
  return (
    <div>
      <header className="app_header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your task"
            className="task_input"
            name="task"
            id="task"
            onChange={handleTaskChange}
          ></input>
          <div className="task_form_bottom_line">
            <div>
              <Tag tagName="HTML" />
              <Tag tagName="CSS" />
              <Tag tagName="JavaScript" />
              <Tag tagName="React" />
            </div>
            <div>
              <select
                name="status"
                id="status"
                className="task_status"
                onChange={handleTaskChange}
              >
                <option value="todo">To do</option>
                <option value="doing">In Progress</option>
                <option value="done">Completed</option>
              </select>
              <button className="task_submit" type="submit">
                + Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
};

export default TaskForm;
