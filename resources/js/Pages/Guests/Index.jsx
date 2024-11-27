"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { PlusCircle, Pencil, Trash2, Mail, UserCheck, UserX } from 'lucide-react';
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

export const dummyGuests = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Confirmed" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Pending" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", status: "Confirmed" },
    { id: 4, name: "Bob Williams", email: "bob@example.com", status: "Declined" },
    { id: 5, name: "Emma Brown", email: "emma@example.com", status: "Pending" },
  ];
  
  

export default function GuestList() {
  const guests = dummyGuests;

  const getStatusBadge = (status) => {
    switch (status) {
      case "Confirmed":
        return <Badge className="bg-green-500"><UserCheck className="w-3 h-3 mr-1" /> Confirmed</Badge>;
      case "Pending":
        return <Badge variant="secondary"><Mail className="w-3 h-3 mr-1" /> Pending</Badge>;
      case "Declined":
        return <Badge variant="destructive"><UserX className="w-3 h-3 mr-1" /> Declined</Badge>;
      default:
        return null;
    }
  };

  return (
    <AuthenticatedLayout className="min-h-screen bg-gradient-to-br from-pink-50 to-red-100 py-12 px-4">
      <Card className="w-full max-w-5xl mx-auto shadow-lg">
        <CardHeader className="border-b border-gray-200">
          <div className="flex justify-between items-center">
            <CardTitle className="text-3xl font-bold text-pink-800">Guest List</CardTitle>
            <Button asChild className="bg-pink-600 hover:bg-pink-700">
              <Link href="/guests/create" className="inline-flex items-center">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add New Guest
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[30%]">Name</TableHead>
                <TableHead className="w-[30%]">Email</TableHead>
                <TableHead className="w-[20%]">Status</TableHead>
                <TableHead className="w-[20%]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {guests.map((guest) => (
                <TableRow key={guest.id}>
                  <TableCell className="font-medium">{guest.name}</TableCell>
                  <TableCell>{guest.email}</TableCell>
                  <TableCell>{getStatusBadge(guest.status)}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/guests/${guest.id}/edit`}>
                          <Pencil className="w-4 h-4 mr-1" /> Edit
                        </Link>
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                          if (confirm("Are you sure you want to delete this guest?")) {
                            // Implement delete functionality here
                            console.log("Delete guest:", guest.id);
                          }
                        }}
                      >
                        <Trash2 className="w-4 h-4 mr-1" /> Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AuthenticatedLayout>
  );
}

