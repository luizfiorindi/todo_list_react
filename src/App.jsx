import InputTask from "./components/InputTask";
import TaskList from "./components/TaskList";
import { TaskContextProvider } from "./contexts/TaskListContextProvider";

function App() {
  return (
    <>
      <TaskContextProvider>
        <InputTask />
        <TaskList />
      </TaskContextProvider>
    </>
  );
}

export default App;
