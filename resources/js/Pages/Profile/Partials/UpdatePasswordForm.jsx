import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { useRef } from "react";

export default function UpdatePasswordForm() {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <form onSubmit={updatePassword} className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="current_password">Current Password</Label>
                <Input
                    id="current_password"
                    ref={currentPasswordInput}
                    value={data.current_password}
                    onChange={(e) =>
                        setData("current_password", e.target.value)
                    }
                    type="password"
                    required
                />
                {errors.current_password && (
                    <p className="text-sm text-red-500">
                        {errors.current_password}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <Input
                    id="password"
                    ref={passwordInput}
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    type="password"
                    required
                />
                {errors.password && (
                    <p className="text-sm text-red-500">{errors.password}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="password_confirmation">Confirm Password</Label>
                <Input
                    id="password_confirmation"
                    value={data.password_confirmation}
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                    type="password"
                    required
                />
                {errors.password_confirmation && (
                    <p className="text-sm text-red-500">
                        {errors.password_confirmation}
                    </p>
                )}
            </div>

            <Button
                className="bg-stone-700"
                type="submit"
                disabled={processing}
            >
                {processing && (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Update Password
            </Button>
            <Transition
                show={recentlySuccessful}
                enter="transition ease-in-out"
                enterFrom="opacity-0"
                leave="transition ease-in-out"
                leaveTo="opacity-0"
            >
                <p>Saved.</p>
            </Transition>
        </form>
    );
}
