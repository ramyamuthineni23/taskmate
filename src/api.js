import axios from "axios";

const BASE_URL = "http://localhost:8080/api/tasks";

export const fetchTasks = async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
};

export const createTask = async (task) => {
    const res = await axios.post(BASE_URL, task);
    return res.data;
};

export const completeTask = async (id) => {
    const res = await axios.put(`${BASE_URL}/${id}/complete`);
    return res.data;
};

export const deleteTask = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
};
