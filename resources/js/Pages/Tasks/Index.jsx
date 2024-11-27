import { Link } from "@inertiajs/react";

export default function TaskIndex({ tasks }) {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-50 py-12">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow p-6">
                <h1 className="text-2xl font-bold mb-4">Task List</h1>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id} className="border-b py-4">
                            <h2 className="text-lg font-semibold">{task.title}</h2>
                            <p>{task.completed ? "Completed" : "Pending"}</p>
                        </li>
                    ))}
                </ul>
                <Link href="/tasks/create" className="mt-4 inline-block text-pink-600 hover:underline">
                    Add Task
                </Link>
            </div>
        </div>
    );
}
