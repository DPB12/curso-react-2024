import { useState } from "react";
import generateId from "../../helpers/generateId";
const initialTasks = [
  { id: 1, content: "Buy groceries", completed: false },
  { id: 2, content: "Take out the trash", completed: true },
];
const ToDoListBasicTailWindCss = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  function handleToggleCompleted(taskid) {
    const updateTask = tasks.map((task) =>
      task.id === taskid ? { ...task, completed: !task.completed } : task
    );

    setTasks(updateTask);
  }

  function handleAddTask() {
    if (newTask.trim() !== "") {
      const id = generateId();

      const obj = {
        id: id,
        content: newTask.trim(),
        completed: false,
      };

      setTasks([...tasks, obj]);
      setNewTask("");
    } else {
      console.log("no puede estar vacio el input de la tarea");
      return false;
    }
  }

  function handleRemoveTask(taskId) {
    const taskDontDelete = tasks.filter((task) => task.id !== taskId);

    setTasks(taskDontDelete);
  }

  return (
    <>
      <div className="max-w-md mx-auto mt-8 p-6 bg-slate-300">
        <h1 className="text-2x1 mb-4 font-bold">Lista de tareas</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            placeholder="neva tarea"
            className="flex-1 mr-2 border rounded-md focus:outline-none focus:border-blue-600"
            onChange={(e) => setNewTask(e.target.value)}
          />

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-900"
            onClick={handleAddTask}
          >
            Agragar Tarea
          </button>
        </div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center mb-2">
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

              <button
                className="ml-auto bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-800 focus:outline-none"
                onClick={() => handleRemoveTask(task.id)}
              >
                Borrar Tarea
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDoListBasicTailWindCss;
