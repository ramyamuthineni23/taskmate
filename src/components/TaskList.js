import { completeTask, deleteTask } from "../api";

export default function TaskList({ tasks, setTasks }) {
    const handleComplete = async (id) => {
        const updated = await completeTask(id);
        setTasks(tasks.map((t) => (t.id === id ? updated : t)));
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        setTasks(tasks.filter((t) => t.id !== id));
    };

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
          <span style={{ textDecoration: task.completed ? "line-through" : "" }}>
            {task.title} - {task.description}
          </span>
                    <button onClick={() => handleComplete(task.id)}>Complete</button>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
