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
              <button className="tag">HTML</button>
              <button className="tag">CSS</button>
              <button className="tag">JavaScript</button>
              <button className="tag">React</button>
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
