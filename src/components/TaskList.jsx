import { useContext } from "react";
import { TaskContext } from "../contexts/TaskListContextProvider";
import Task from "../components/Task";

const TaskList = () => {
  const { taskList, deleteTask, toogleCompletedTask } = useContext(TaskContext);

  return (
    <>
      {taskList.length <= 0 && <h3>Nenhuma tarefa cadastrada</h3>}
      <ul>
        {taskList.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            onDone={() => toogleCompletedTask(task.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
