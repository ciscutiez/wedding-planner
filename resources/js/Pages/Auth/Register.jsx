"use client";

import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link } from "@inertiajs/react";
import Checkbox from "@/Components/Checkbox";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <GuestLayout>
            <form onSubmit={submit} className="space-y-6">
                <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />
                    {errors.name && (
                        <Alert variant="destructive" className="mt-2">
                            <AlertDescription>{errors.name}</AlertDescription>
                        </Alert>
                    )}
                </div>

                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />
                    {errors.email && (
                        <Alert variant="destructive" className="mt-2">
                            <AlertDescription>{errors.email}</AlertDescription>
                        </Alert>
                    )}
                </div>

                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />
                    {errors.password && (
                        <Alert variant="destructive" className="mt-2">
                            <AlertDescription>
                                {errors.password}
                            </AlertDescription>
                        </Alert>
                    )}
                </div>

                <div>
                    <Label htmlFor="password_confirmation">
                        Confirm Password
                    </Label>
                    <Input
                        id="password_confirmation"
                        type={showPassword ? "text" : "password"}
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />
                    {errors.password_confirmation && (
                        <Alert variant="destructive" className="mt-2">
                            <AlertDescription>
                                {errors.password_confirmation}
                            </AlertDescription>
                        </Alert>
                    )}
                </div>

                <div className="flex items-center">
                    <Checkbox
                        id="show-password"
                        className="mr-2"
                        onChange={() => setShowPassword(!showPassword)}
                    />
                    <Label htmlFor="show-password" className="text-sm">
                        Show Password
                    </Label>
                </div>

                <div className="flex items-center justify-between">
                    <Link
                        href={route("login")}
                        className="text-sm text-pink-600 hover:text-pink-500"
                    >
                        Already registered?
                    </Link>
                    <Button
                        type="submit"
                        className="bg-pink-600 hover:bg-pink-700"
                        disabled={processing}
                    >
                        Register
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
