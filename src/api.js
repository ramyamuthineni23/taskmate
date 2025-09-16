const API_URL = "http://localhost:8080/api/tasks";

export async function fetchTasks() {
    const res = await fetch(API_URL);
    return res.json();
}

export async function createTask(task) {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
    });
    return res.json();
}

export async function completeTask(id) {
    const res = await fetch(`${API_URL}/${id}/complete`, { method: "PUT" });
    return res.json();
}

export async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
