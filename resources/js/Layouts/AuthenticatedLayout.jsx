import { Sidebar } from "@/Components/Sidebar";



export default function AuthenticatedLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <main className="flex-1 p-4">{children}</main>
            </div>
        </div>
    );
}
