'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function GuestsForm() {
  const [newGuest, setNewGuest] = useState({
    first_name: '',
    last_name: '',
    email: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewGuest((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Implement form submission logic here
    console.log('Submitting new guest:', newGuest)
  }

  return (
    <AuthenticatedLayout className="container mx-auto p-6 bg-pink-50 min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-pink-800">Add New Guest</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="first_name">First Name</Label>
              <Input
                id="first_name"
                name="first_name"
                value={newGuest.first_name}
                onChange={handleChange}
                className="w-full"
                required
              />
            </div>
            <div>
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                id="last_name"
                name="last_name"
                value={newGuest.last_name}
                onChange={handleChange}
                className="w-full"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email (Optional)</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={newGuest.email}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <Button type="submit" className="bg-pink-600 hover:bg-pink-700">
              Add Guest
            </Button>
          </form>
        </CardContent>
      </Card>
    </AuthenticatedLayout>
  )
}
