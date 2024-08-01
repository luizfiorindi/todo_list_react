import React, { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskListContextProvider";

const InputTask = () => {
  const [taskName, setTaskName] = useState("");
  const { inputTask } = useContext(TaskContext);

  const addTask = (event) => {
    event.preventDefault();

    if (taskName.trim()) {
      inputTask(taskName);
      setTaskName("");
    }
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <form onSubmit={addTask}>
        <input
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
          type="text"
          name="taskname"
          placeholder="Adicionar uma tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default InputTask;
