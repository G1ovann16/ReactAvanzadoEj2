import React, { useState } from "react";
import useList from "../../hooks/useList";

const TodoList = () => {
  const tasks = useList([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    tasks.push(newTask);
    setNewTask("");
  };
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div>
      <h1>Task List</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={newTask}
          onChange={handleInputChange}
          placeholder="new task"
          type="text"
        />
        <button type="submit">Create task</button>

        </form>
        {tasks.isEmpty() ? (
          <p>Está vacia la lista</p>
        ) : (
          <ul>
            {tasks.value.map((task, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  onClick={() => tasks.remove(index)}
                  checked={false}
                />
                {task}
              </li>
            ))}
          </ul>
        )}
        <button
        onClick={tasks.clear}>Reset</button>
        <button>Sort</button>
        <button>Invert</button>
    </div>
  );
};

export default TodoList;
