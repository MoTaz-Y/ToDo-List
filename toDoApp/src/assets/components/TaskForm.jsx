import Tag from "./Tag";
import "./taskform.css";
const TaskForm = () => {
  return (
    <div>
      <header className="app_header">
        <form>
          <input
            type="text"
            placeholder="Enter your task"
            className="task_input"
          ></input>
          <div className="task_form_bottom_line">
            <div>
              <Tag tagName="HTML" />
              <Tag tagName="CSS" />
              <Tag tagName="JavaScript" />
              <Tag tagName="React" />
            </div>
            <div>
              <select name="" id="" className="task_status">
                <option value="todo">To do</option>
                <option value="doing">In Progress</option>
                <option value="done">Completed</option>
              </select>
              <button className="task_submit">+ Add Task</button>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
};

export default TaskForm;
