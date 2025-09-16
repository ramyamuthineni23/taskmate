import { useState } from "react";
import { createTask } from "../api";

export default function TaskForm({ onTaskAdded }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("LOW");
    const [category, setCategory] = useState("WORK");
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTask = await createTask({
            title,
            description,
            completed: false,
            priority,
            category,
            dueDate,
        });

        onTaskAdded(newTask);

        // Reset form
        setTitle("");
        setDescription("");
        setPriority("LOW");
        setCategory("WORK");
        setDueDate("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option>LOW</option>
                <option>MEDIUM</option>
                <option>HIGH</option>
            </select>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>WORK</option>
                <option>PERSONAL</option>
                <option>OTHER</option>
            </select>
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}
