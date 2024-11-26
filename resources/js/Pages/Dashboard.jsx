'use client'

import { Sidebar } from "@/components/Sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Mail, Gift } from 'lucide-react'
import { Link } from "@inertiajs/react"

export default function Dashboard() {
    return (
        <div className="min-h-screen flex bg-pink-50">
            <Sidebar />
            <main className="flex-grow p-8">
                <div className="max-w-5xl mx-auto">
                    <header className="mb-8">
                        <h1 className="text-4xl font-bold text-pink-800 mb-2">Welcome, Lovely Couple!</h1>
                        <p className="text-lg text-pink-600">Your dream wedding is just a few clicks away.</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <DashboardCard title="Upcoming Events" icon={<Calendar className="h-6 w-6" />} value="2" />
                        <DashboardCard title="Total Guests" icon={<Users className="h-6 w-6" />} value="150" />
                        <DashboardCard title="Invitations Sent" icon={<Mail className="h-6 w-6" />} value="100" />
                        <DashboardCard title="Registry Items" icon={<Gift className="h-6 w-6" />} value="50" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold text-pink-800">Quick Actions</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-2 gap-4">
                                <QuickActionButton href="/events" icon={<Calendar className="mr-2 h-4 w-4" />}>
                                    Manage Events
                                </QuickActionButton>
                                <QuickActionButton href="/guests" icon={<Users className="mr-2 h-4 w-4" />}>
                                    Guest List
                                </QuickActionButton>
                                <QuickActionButton href="/invitations" icon={<Mail className="mr-2 h-4 w-4" />}>
                                    Invitations
                                </QuickActionButton>
                                <QuickActionButton href="/registry" icon={<Gift className="mr-2 h-4 w-4" />}>
                                    Registry
                                </QuickActionButton>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold text-pink-800">Wedding Countdown</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-5xl font-bold text-pink-600 text-center">
                                    180 Days
                                </div>
                                <p className="text-center text-pink-800 mt-2">Until your special day!</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}

function DashboardCard({ title, icon, value }) {
    return (
        <Card>
            <CardContent className="flex flex-col items-center justify-center h-32">
                <div className="text-pink-600 mb-2">{icon}</div>
                <h2 className="text-xl font-semibold text-pink-800 mb-1">{title}</h2>
                <p className="text-3xl font-bold text-pink-600">{value}</p>
            </CardContent>
        </Card>
    )
}

function QuickActionButton({ href, icon, children }) {
    return (
        <Link href={href}>
            <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white" size="lg">
                {icon}
                {children}
            </Button>
        </Link>
    )
}

