import React from "react";
import { Link, usePage } from "@inertiajs/react"; // usePage hook to get the current route
import { Calendar, Users, Mail, Gift, Settings, LogOut, BarChart, DollarSign } from "lucide-react";

// Define an array of routes for the sidebar
const links = [
    { href: "/dashboard", label: "Dashboard", icon: <Calendar className="w-5 h-5" /> },
    { href: "/events", label: "Events", icon: <Calendar className="w-5 h-5" /> },
    { href: "/guests", label: "Guest List", icon: <Users className="w-5 h-5" /> },
    { href: "/notifications", label: "Notifications", icon: <Mail className="w-5 h-5" /> },
    { href: "/budget", label: "Budget Tracker", icon: <DollarSign className="w-5 h-5" /> },
    { href: "/analytics", label: "Analytics", icon: <BarChart className="w-5 h-5" /> },
    { href: "/vendors", label: "Vendors", icon: <Users className="w-5 h-5" /> }
];

// Settings and logout links
const settingsLinks = [
    { href: "/profile", label: "Profile", icon: <Settings className="w-5 h-5" /> },
    { href: "/logout", label: "Logout", icon: <LogOut className="w-5 h-5" /> }
];

export function Sidebar() {
    const { url } = usePage(); // Get the current page URL to highlight the active link

    // Helper function to get the active link class
    const getLinkClass = (path) => {
        return url.includes(path)
            ? "flex items-center space-x-2 p-2 rounded-lg bg-pink-200 text-pink-800" // Active link class
            : "flex items-center space-x-2 p-2 rounded-lg hover:bg-pink-100 transition-colors"; // Default link class
    };

    return (
        <aside className="bg-pink-50 text-pink-800 w-64 min-h-screen p-4 hidden md:block">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-pink-700">Wedding Planner</h2>
            </div>

            {/* Navigation Links */}
            <nav>
                <ul className="space-y-2">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={getLinkClass(link.href)}>
                                {link.icon}
                                <span>{link.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Settings and Logout Links */}
            <div className="mt-auto pt-8">
                <ul className="space-y-2">
                    {settingsLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={getLinkClass(link.href)}>
                                {link.icon}
                                <span>{link.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
