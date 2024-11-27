"use client";

import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Mail, Gift, ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import AnimatedHeartsBackground from "@/Components/AnimatedHearts";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard() {
    return (
        <AuthenticatedLayout className="min-h-screen flex bg-gradient-to-br from-red-50 to-pink-100 relative overflow-hidden">
            <AnimatedHeartsBackground />
            <main className="flex-grow p-8 z-10">
                <div className="max-w-6xl mx-auto">
                    <header className="mb-12 text-center">
                        <h1 className="text-5xl font-bold text-red-800 mb-3">
                            Welcome, Lovely Couple!
                        </h1>
                        <p className="text-xl text-red-600">
                            Your dream wedding is just a few clicks away.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <DashboardCard
                            title="Upcoming Events"
                            icon={<Calendar className="h-8 w-8" />}
                            value="2"
                            color="bg-gradient-to-br from-purple-400 to-purple-600"
                        />
                        <DashboardCard
                            title="Total Guests"
                            icon={<Users className="h-8 w-8" />}
                            value="150"
                            color="bg-gradient-to-br from-blue-400 to-blue-600"
                        />
                        <DashboardCard
                            title="Invitations Sent"
                            icon={<Mail className="h-8 w-8" />}
                            value="100"
                            color="bg-gradient-to-br from-green-400 to-green-600"
                        />
                        <DashboardCard
                            title="Registry Items"
                            icon={<Gift className="h-8 w-8" />}
                            value="50"
                            color="bg-gradient-to-br from-yellow-400 to-yellow-600"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <Card className="col-span-2 backdrop-blur-md bg-white/40 border-none shadow-lg">
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-semibold text-red-800 mb-6">
                                    Quick Actions
                                </h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <QuickActionButton
                                        href="/events"
                                        icon={<Calendar className="h-5 w-5" />}
                                        color="bg-purple-500 hover:bg-purple-600"
                                    >
                                        Manage Events
                                    </QuickActionButton>
                                    <QuickActionButton
                                        href="/guests"
                                        icon={<Users className="h-5 w-5" />}
                                        color="bg-blue-500 hover:bg-blue-600"
                                    >
                                        Guest List
                                    </QuickActionButton>
                                    <QuickActionButton
                                        href="/invitations"
                                        icon={<Mail className="h-5 w-5" />}
                                        color="bg-green-500 hover:bg-green-600"
                                    >
                                        Invitations
                                    </QuickActionButton>
                                    <QuickActionButton
                                        href="/registry"
                                        icon={<Gift className="h-5 w-5" />}
                                        color="bg-yellow-500 hover:bg-yellow-600"
                                    >
                                        Registry
                                    </QuickActionButton>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="backdrop-blur-md bg-white/40 border-none shadow-lg">
                            <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                                <h2 className="text-2xl font-semibold text-red-800 mb-4">
                                    Wedding Countdown
                                </h2>
                                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                                    180
                                </div>
                                <p className="text-xl text-red-700 mt-2">
                                    Days
                                </p>
                                <p className="text-center text-red-600 mt-4">
                                    Until your special day!
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}

function DashboardCard({ title, icon, value, color }) {
    return (
        <Card className="overflow-hidden border-none shadow-lg transition-all hover:shadow-xl hover:scale-105">
            <CardContent className={`${color} p-6 text-white h-full`}>
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white/20 rounded-lg">{icon}</div>
                    <span className="text-4xl font-bold">{value}</span>
                </div>
                <h2 className="text-lg font-semibold mb-1">{title}</h2>
                <Link
                    href="#"
                    className="text-sm opacity-80 hover:opacity-100 inline-flex items-center"
                >
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </CardContent>
        </Card>
    );
}

function QuickActionButton({ href, icon, children, color }) {
    return (
        <Link href={href}>
            <Button
                className={`w-full ${color} text-white transition-all hover:shadow-lg text-sm h-16`}
            >
                <div className="flex flex-col items-center">
                    {icon}
                    <span className="mt-1">{children}</span>
                </div>
            </Button>
        </Link>
    );
}
