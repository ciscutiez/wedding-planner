import { HeartIcon } from "lucide-react";

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <HeartIcon className="mx-auto h-12 w-12 text-pink-600" />
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Wedding Planner
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Plan your perfect day with us
                    </p>
                </div>

                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="px-6 py-8">{children}</div>
                </div>
            </div>

         
        </div>
    );
}
