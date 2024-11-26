import { Link } from "@inertiajs/react";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-pink-100 py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-pink-600 mb-2">
                        Wedding Planner
                    </h3>
                    <p className="text-gray-600">
                        Making your special day perfect
                    </p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/"
                        className="text-pink-600 hover:text-pink-800"
                    >
                        About
                    </Link>
                    <Link
                        href="#"
                        className="text-pink-600 hover:text-pink-800"
                    >
                        Services
                    </Link>
                    <Link
                        href="#"
                        className="text-pink-600 hover:text-pink-800"
                    >
                        Contact
                    </Link>
                </div>
            </div>
            <div className="mt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Wedding Planner. All rights
                reserved.
            </div>
        </footer>
    );
}
