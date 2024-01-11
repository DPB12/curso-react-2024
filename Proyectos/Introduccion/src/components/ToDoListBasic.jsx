import { useState } from "react";

const initialTasks = [
  { id: 1, content: "Buy groceries", completed: false },
  { id: 2, content: "Take out the trash", completed: true },
];

const ToDoListBasic = () => {
  const [tasks, setTasks] = useState(initialTasks);

  function handleToggleCompleted(taskid) {
    const updateTask = tasks.map((task) =>
      task.id === taskid ? { ...task, completed: !task.completed } : task
    );

    setTasks(updateTask);
  }

  return (
    <>
      <div>
        <h2>To Do List Basic</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.content}
              </span>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleCompleted(task.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDoListBasic;
