import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../api/api";

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleDelete = async (id: string) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">Your Tasks</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white p-4 shadow-md rounded-md">
            <h3 className="font-bold">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
            <div className="flex justify-between items-center mt-3">
              <span className={`text-sm px-2 py-1 rounded ${task.status === "completed" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}`}>
                {task.status}
              </span>
              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
