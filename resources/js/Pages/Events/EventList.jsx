"use client";

import { Link } from "@inertiajs/react";
import { Calendar, Clock, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function EventList() {
  const events = [
    { id: 1, title: "Engagement Party", date: "2024-12-10", status: "Upcoming" },
    { id: 2, title: "Wedding Ceremony", date: "2025-01-01", status: "Planned" },
  ];

  return (
    <AuthenticatedLayout className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 py-12 px-4">
      <Card className="w-full max-w-4xl mx-auto shadow-lg">
        <CardHeader className="border-b border-gray-200">
          <CardTitle className="text-3xl font-bold text-red-800">Event Management</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40%]">Title</TableHead>
                <TableHead className="w-[25%]">Date</TableHead>
                <TableHead className="w-[20%]">Status</TableHead>
                <TableHead className="w-[15%]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-medium">{event.title}</TableCell>
                  <TableCell>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="mr-2 h-4 w-4" />
                      {event.date}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={event.status === "Upcoming" ? "default" : "secondary"}
                      className="font-semibold"
                    >
                      {event.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      className="text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                      asChild
                    >
                      <Link href={`/events/${event.id}`}>
                        View
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-6 flex justify-end">
            <Button asChild>
              <Link href="/events/create" className="inline-flex items-center">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Event
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </AuthenticatedLayout>
  );
}

