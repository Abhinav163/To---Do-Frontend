import { useState } from "react";
import { createTask } from "../api/api";

const TaskForm = ({ refreshTasks }: { refreshTasks: () => void }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTask({ title, description });
    setTitle("");
    setDescription("");
    refreshTasks();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 flex flex-col space-y-4">
      <input
        type="text"
        className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
