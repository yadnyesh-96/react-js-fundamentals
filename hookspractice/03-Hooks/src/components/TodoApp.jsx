import { useState } from "react";


function TodoApp() {

    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);


    const addTask = () => {
        if (task.trim() === "") return;

        const newTask = {
            id: Date.now(),
            text: task,
            completed: false,
        };

        setTodos([...todos, newTask]);
        setTask("");
    }

    const deleteTask = (id) => {
        const update = todos.filter((todo) => todo.id !== id);
        setTodos(update);
    }

    const toggleTask = (id) => {
        const update = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(update);
    }

    return (
        <div>
            <div className="grid grid-cols-5 gap-4 m-16 p-5">
                <div className="col-start-1 col-end-6">
                    <input
                        type="text"
                        value={task}
                        placeholder="Enter Task"
                        onChange={(e) => setTask(e.target.value)}
                        className="w-full p-2 text-lg border border-slate-300 round rounded-md"
                    />
                </div>
                <button
                    className="col-start-5 p-1 col-end-6 border border-green-700 rounded-md bg-green-700 text-white text-2xl font-semibold"
                    onClick={addTask}
                >Add Task</button>
                <ul className="col-start-1 col-end-6">
                    {todos.map((todo,index) => (
                        <li
                            key={todo.id}
                            className="flex justify-between items-center border-b p-3 mb-2 rounded"
                        >
                            <span className={todo.completed ? "line-through text-gray-400" : ""}>
                                {index+1} . {todo.text}
                            </span>

                            <div className="flex gap-2">
                                <button
                                    className="border border-blue-400 px-2 py-1 rounded"
                                    onClick={() => toggleTask(todo.id)}
                                >
                                    Toggle
                                </button>

                                <button
                                    className="border border-red-400 px-2 py-1 rounded"
                                    onClick={() => deleteTask(todo.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default TodoApp;