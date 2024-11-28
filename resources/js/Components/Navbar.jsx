import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { HeartIcon } from "lucide-react";

export function Navbar() {
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="flex-shrink-0 flex gap-4 flex-row items-center"
                        >
                            <HeartIcon className="mx-auto h-8 w-8 text-pink-600" />
                            <h1 className="text-2xl font-bold text-pink-600">
                                Wedding Planner
                            </h1>
                        </Link>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link
                                href="/services"
                                className="text-gray-600 hover:text-pink-600 px-3 py-2 text-sm font-medium"
                            >
                                Services
                            </Link>
                            <Link
                                href="/about"
                                className="text-gray-600 hover:text-pink-600 px-3 py-2 text-sm font-medium"
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="text-gray-600 hover:text-pink-600 px-3 py-2 text-sm font-medium"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Link href="/login">
                            <Button
                                variant="ghost"
                                className="text-pink-600 hover:text-pink-700 hover:bg-pink-50"
                            >
                                Login
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button
                                variant="default"
                                className="ml-4 bg-pink-600 hover:bg-pink-700 text-white"
                            >
                                Register
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
