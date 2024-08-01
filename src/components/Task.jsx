const Task = ({ task, onDelete, onDone }) => {
  const completed = task.completed ? "done" : "";

  return (
    <li>
      <span className={completed} onClick={onDone}>
        {task.name}
      </span>
      <button onClick={onDelete}>Remover</button>
    </li>
  );
};

export default Task;
