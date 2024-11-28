import { Sidebar } from "@/Components/Sidebar";
import { Toaster } from "@/Components/ui/sonner";



export default function AuthenticatedLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <main className="flex-1 p-4">{children}</main>
                <Toaster />
            </div>
        </div>
    );
}
