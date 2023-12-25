/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../Hook/UseAuth";
import { FiEdit, FiTrash } from "react-icons/fi";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
// Import the edit (update) icon

<motion.li
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: 100 }}
  transition={{ duration: 0.5 }}
  //... other props
>
  {/* content of the list item */}
</motion.li>;

const Modal = ({ onClose, children }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
    >
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            {children}
            <div className="items-center px-4 py-3">
              <button
                className="px-4 py-2 bg-gray-400 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TaskManagement = () => {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [todoTasks, setTodoTasks] = useState([]);
  const [ongoingTasks, setOngoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Form states
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("Low");
  const [taskType, setTaskType] = useState("To-Do");

  useEffect(() => {
    fetchTasks();
  }, [user?.email]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/tasks?email=${user?.email}`
      );
      const tasks = response.data;

      setTodoTasks(tasks.filter((task) => task.status === "To-Do"));
      setOngoingTasks(tasks.filter((task) => task.status === "Ongoing"));
      setCompletedTasks(tasks.filter((task) => task.status === "Completed"));
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Function to handle when the edit icon is clicked
  const handleEditClick = (taskId) => {
    // Find the task by ID from all tasks
    const allTasks = [...todoTasks, ...ongoingTasks, ...completedTasks];
    const taskToEdit = allTasks.find((task) => task._id === taskId);
    if (taskToEdit) {
      setCurrentTask(taskToEdit);
      setTaskName(taskToEdit.taskName);
      setDescription(taskToEdit.description);
      setDeadline(taskToEdit.deadline);
      setPriority(taskToEdit.priority);
      setTaskType(taskToEdit.taskType);
      setIsModalOpen(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // PUT request to update the task
      const response = await axios.patch(
        `http://localhost:4000/tasksUpdate/${currentTask._id}`,
        {
          taskName,
          description,
          deadline,
          priority,
          status: taskType,
        }
      );
      toast.success("Task updated successfully!");
      console.log(response.data);
      setIsModalOpen(false);
      fetchTasks(); // Re-fetch tasks to update the UI
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteClick = async (taskId) => {
    try {
      await axios.delete(`http://localhost:4000/tasksDelete/${taskId}`);
      toast.success("Task deleted successfully!");
      fetchTasks(); // Re-fetch tasks to update the UI
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Task Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {/* To-Do Tasks */}
        <div>
          <div className="bg-gray-300 shadow rounded p-4 mb-4">
            <h2 className="text-xl font-semibold mb-4">
              To-Do{" "}
              <span className="text-sm bg-gray-600 text-white py-1 px-2 rounded-full">
                {todoTasks.length}
              </span>
            </h2>
          </div>
          <ul className="space-y-2">
            {todoTasks.map((task) => (
              <li
                key={task._id}
                className="bg-white shadow border rounded-md py-2 px-4 flex justify-between items-center"
              >
                <span>{task.taskName}</span>
                <div className="flex">
                  <FiEdit
                    onClick={() => handleEditClick(task._id)}
                    className="text-lg cursor-pointer hover:text-blue-500 transition-colors duration-200 mr-2"
                  />
                  <FiTrash
                    onClick={() => handleDeleteClick(task._id)}
                    className="text-lg cursor-pointer hover:text-red-500 transition-colors duration-200"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Ongoing Tasks */}
        <div>
          <div className="bg-purple-500 shadow rounded p-4 mb-4">
            <h2 className="text-xl font-semibold mb-4">
              In Progress{" "}
              <span className="text-sm bg-purple-700 text-white py-1 px-2 rounded-full">
                {ongoingTasks.length}
              </span>
            </h2>
          </div>
          <ul className="space-y-2">
            {ongoingTasks.map((task) => (
              <li
                key={task.id}
                className="bg-white shadow border rounded-md py-2 px-4 flex justify-between items-center"
              >
                <span>{task.taskName}</span>
                <div className="flex">
                  <FiEdit
                    onClick={() => handleEditClick(task._id)}
                    className="text-lg cursor-pointer hover:text-blue-500 transition-colors duration-200 mr-2"
                  />
                  <FiTrash
                    onClick={() => handleDeleteClick(task._id)}
                    className="text-lg cursor-pointer hover:text-red-500 transition-colors duration-200"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Completed Tasks */}
        <div>
          <div className="bg-green-500 shadow rounded p-4 mb-4">
            <h2 className="text-xl font-semibold mb-4">
              Closed{" "}
              <span className="text-sm bg-green-700 text-white py-1 px-2 rounded-full">
                {completedTasks.length}
              </span>
            </h2>
          </div>
          <ul className="space-y-2">
            {completedTasks.map((task) => (
              <li
                key={task.id}
                className="bg-white shadow border rounded-md py-2 px-4 flex justify-between items-center"
              >
                <span>{task.taskName}</span>
                <div className="flex">
                  <FiEdit
                    onClick={() => handleEditClick(task._id)}
                    className="text-lg cursor-pointer hover:text-blue-500 transition-colors duration-200 mr-2"
                  />
                  <FiTrash
                    onClick={() => handleDeleteClick(task._id)}
                    className="text-lg cursor-pointer hover:text-red-500 transition-colors duration-200"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="taskName"
              >
                Task Name
              </label>
              <input
                type="text"
                id="taskName"
                name="taskName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="deadline"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Deadline
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="priority"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="taskType"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Task Type
              </label>
              <select
                id="taskType"
                name="taskType"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={taskType}
                onChange={(e) => setTaskType(e.target.value)}
              >
                <option value="To-Do">To-Do</option>
                {/* Add more task types if needed */}
              </select>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Update Task
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default TaskManagement;
