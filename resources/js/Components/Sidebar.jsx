import React from "react";
import { Link } from "@inertiajs/react";
import { Calendar, Users, Mail, Gift, Settings, LogOut } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="bg-pink-50 text-pink-800 w-64 min-h-screen p-4 hidden md:block">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-pink-700">
                    Wedding Planner
                </h2>
            </div>
            <nav>
                <ul className="space-y-2">
                    <li>
                        <Link
                            href="/dashboard"
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-pink-100 transition-colors"
                        >
                            <Calendar className="w-5 h-5" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/events"
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-pink-100 transition-colors"
                        >
                            <Calendar className="w-5 h-5" />
                            <span>Events</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/guests"
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-pink-100 transition-colors"
                        >
                            <Users className="w-5 h-5" />
                            <span>Guest List</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/invitations"
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-pink-100 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Invitations</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/registry"
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-pink-100 transition-colors"
                        >
                            <Gift className="w-5 h-5" />
                            <span>Registry</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="mt-auto pt-8">
                <ul className="space-y-2">
                    <li>
                        <Link
                            href="/settings"
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-pink-100 transition-colors"
                        >
                            <Settings className="w-5 h-5" />
                            <span>Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/logout"
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-pink-100 transition-colors"
                        >
                            <LogOut className="w-5 h-5" />
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
