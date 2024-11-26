'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeartIcon } from 'lucide-react'

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    // Here you would handle the authentication logic
    // For example, calling an API to login or register
    setTimeout(() => setIsLoading(false), 2000) // Simulating API call
  }

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <HeartIcon className="mx-auto h-12 w-12 text-pink-600" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome to Wedding Planner</h2>
          <p className="mt-2 text-sm text-gray-600">Sign in or create an account to start planning your perfect day</p>
        </div>
        <Tabs defaultValue="login" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <Label htmlFor="login-email" className="sr-only">Email address</Label>
                  <Input id="login-email" name="email" type="email" autoComplete="email" required className="rounded-t-md" placeholder="Email address" />
                </div>
                <div>
                  <Label htmlFor="login-password" className="sr-only">Password</Label>
                  <Input id="login-password" name="password" type="password" autoComplete="current-password" required className="rounded-b-md" placeholder="Password" />
                </div>
              </div>
              <div>
                <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 focus:ring-pink-500" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
              </div>
            </form>
          </TabsContent>
          <TabsContent value="register">
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <Label htmlFor="register-name" className="sr-only">Full name</Label>
                  <Input id="register-name" name="name" type="text" autoComplete="name" required className="rounded-t-md" placeholder="Full name" />
                </div>
                <div>
                  <Label htmlFor="register-email" className="sr-only">Email address</Label>
                  <Input id="register-email" name="email" type="email" autoComplete="email" required placeholder="Email address" />
                </div>
                <div>
                  <Label htmlFor="register-password" className="sr-only">Password</Label>
                  <Input id="register-password" name="password" type="password" autoComplete="new-password" required className="rounded-b-md" placeholder="Password" />
                </div>
              </div>
              <div>
                <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 focus:ring-pink-500" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create account"}
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

