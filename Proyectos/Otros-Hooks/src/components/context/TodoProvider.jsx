import { useState } from "react";
import TodoContext from "./TodoContext";

const initialState = [
  { id: 1, content: "Buy groceries", completed: false },
  { id: 2, content: "Buy groceries", completed: false },
  { id: 3, content: "Buy groceries", completed: false },
];

const TodoProvider = ({ childrem }) => {
  const [tasks, setTasks] = useState(initialState);

  return (
    <TodoContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
