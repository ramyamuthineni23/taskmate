import { useEffect, useState } from "react";
import { fetchTasks } from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks().then(setTasks);
    }, []);

    return (
        <div>
            <h1>TaskMate</h1>
            <TaskForm onTaskAdded={(task) => setTasks([...tasks, task])} />
            <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
    );
}

export default App;
