'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"

export default function BudgetTracker() {
    const [expenses, setExpenses] = useState([
        { id: 1, category: "Venue", amount: 250000 },
        { id: 2, category: "Catering", amount: 150000 },
    ])
    const [newExpense, setNewExpense] = useState({ category: '', amount: '' })

    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)

    const handleAddExpense = (e) => {
        e.preventDefault()
        const expense = {
            id: expenses.length + 1,
            category: newExpense.category,
            amount: parseInt(newExpense.amount)
        }
        setExpenses([...expenses, expense])
        setNewExpense({ category: '', amount: '' })
    }

    return (
        <AuthenticatedLayout className="container mx-auto p-6 bg-pink-50 min-h-screen">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-pink-800">Budget Tracker</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="mb-4">
                        {expenses.map((expense) => (
                            <li key={expense.id} className="flex justify-between mb-2 text-pink-700">
                                <span>{expense.category}</span>
                                <span>₱{expense.amount.toLocaleString()}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="text-right font-bold text-lg text-pink-800 mb-4">Total: ₱{total.toLocaleString()}</div>
                    <form onSubmit={handleAddExpense} className="space-y-4">
                        <div>
                            <Label htmlFor="category">Category</Label>
                            <Input
                                id="category"
                                value={newExpense.category}
                                onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="amount">Amount (₱)</Label>
                            <Input
                                id="amount"
                                type="number"
                                value={newExpense.amount}
                                onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                                required
                            />
                        </div>
                        <Button type="submit" className="bg-pink-600 hover:bg-pink-700">
                            Add Expense
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </AuthenticatedLayout>
    )
}

