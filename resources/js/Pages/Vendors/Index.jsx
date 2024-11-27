import { Link } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"

export default function VendorIndex({ vendors }) {
    return (
        <AuthenticatedLayout className="container mx-auto p-6 bg-pink-50 min-h-screen">
            <h1 className="text-3xl font-bold text-pink-800 mb-6">Vendor List</h1>
            <Link href="/vendors/create">
                <Button className="mb-6 bg-pink-600 hover:bg-pink-700">
                    Add Vendor
                </Button>
            </Link>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {vendors.map((vendor) => (
                    <Card key={vendor.id}>
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-pink-700">{vendor.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-pink-600">{vendor.service}</p>
                            <p className="text-pink-600">{vendor.contact}</p>
                            <p className="text-pink-800 font-bold mt-2">₱{vendor.price.toLocaleString()}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </AuthenticatedLayout>
    )
}

