import Tag from "./Tag";
import "./taskform.css";
import { useState } from "react";
import PropTypes from "prop-types";
const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });
  const handleTaskChange = (event) => {
    const { name, value } = event.target;
    setTaskData({ ...taskData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => [...prev, taskData]);
    setTaskData({ task: "", status: "todo", tags: [] });
  };
  const checkSelected = (tagName) => {
    return taskData.tags.includes(tagName);
  };

  const selectTag = (tagName) => {
    if (taskData.tags.includes(tagName)) {
      setTaskData({
        ...taskData,
        tags: taskData.tags.filter((tag) => tag !== tagName),
      });
    } else {
      setTaskData({ ...taskData, tags: [...taskData.tags, tagName] });
    }
  };
  return (
    <div>
      <header className="app_header">
        <form onSubmit={handleSubmit}>
          <div className="task_form_top_line">
            <input
              type="text"
              value={taskData.task}
              placeholder="Enter your task"
              className="task_input"
              name="task"
              id="task"
              onChange={handleTaskChange}
            ></input>
          </div>
          <div className="task_form_bottom_line">
            <div>
              <Tag
                tagName="HTML"
                selected={selectTag}
                selectTag={checkSelected("HTML")}
              />
              <Tag
                tagName="CSS"
                selected={selectTag}
                selectTag={checkSelected("CSS")}
              />
              <Tag
                tagName="JavaScript"
                selected={selectTag}
                selectTag={checkSelected("JavaScript")}
              />
              <Tag
                tagName="React"
                selected={selectTag}
                selectTag={checkSelected("React")}
              />
              <Tag
                tagName="Angular"
                selected={selectTag}
                selectTag={checkSelected("Angular")}
              />
              <Tag
                tagName="Vue"
                selected={selectTag}
                selectTag={checkSelected("Vue")}
              />
              <Tag
                tagName="Node"
                selected={selectTag}
                selectTag={checkSelected("Node")}
              />
              <Tag
                tagName="Python"
                selected={selectTag}
                selectTag={checkSelected("Python")}
              />
            </div>
            <div>
              <select
                name="status"
                id="status"
                value={taskData.status}
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

TaskForm.propTypes = {
  setTasks: PropTypes.func.isRequired,
};

export default TaskForm;
