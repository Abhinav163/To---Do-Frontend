import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-3xl w-full">
        <h1 className="text-2xl font-bold text-center">To-Do List</h1>
        <TaskForm refreshTasks={() => {}} />
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
