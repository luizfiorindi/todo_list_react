import { createContext, useEffect, useState } from "react";

const saveData = (tasks) => {};

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const inputTask = (taskName) => {
    setTaskList([
      ...taskList,
      { id: Date.now(), name: taskName, completed: false },
    ]);
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const toogleCompletedTask = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const taskListValue = {
    taskList,
    inputTask,
    deleteTask,
    toogleCompletedTask,
  };

  return (
    <TaskContext.Provider value={taskListValue}>
      {children}
    </TaskContext.Provider>
  );
};
