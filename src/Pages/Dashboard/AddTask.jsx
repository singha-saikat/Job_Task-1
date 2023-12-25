import { useState } from 'react';
import axios from 'axios';
import useAuth from '../../../Hook/UseAuth';
import toast from 'react-hot-toast';

const TaskManager = () => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [priority, setPriority] = useState('Low');
    const [taskType, setTaskType] = useState('To-Do');
    const {user} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!taskName) {
            toast.error('Please add a task name');
            return;
        }

        try {
            const response = await axios.post('http://localhost:4000/taskInfo', {
                user_email : user.email,
                taskName,
                description,
                deadline,
                priority,
                status:taskType,
            });
            console.log(response.data);
            toast.success("New Task added successfully")
        } catch (error) {
            console.error('Error adding task:', error);
        }

        setTaskName('');
        setDescription('');
        setDeadline('');
        setPriority('Low');
        setTaskType('To-Do');
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-6 text-center">Add a New Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskName">
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
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
                    <label htmlFor="deadline" className="block text-gray-700 text-sm font-bold mb-2">
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
                    <label htmlFor="priority" className="block text-gray-700 text-sm font-bold mb-2">
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
                    <label htmlFor="taskType" className="block text-gray-700 text-sm font-bold mb-2">
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
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskManager;
