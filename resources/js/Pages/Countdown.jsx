import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Countdown() {
    const targetDate = "2024-11-27T10:00:00Z"; // Replace this with your actual wedding date

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [progress, setProgress] = useState(100);

    function calculateTimeLeft() {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft();
            setTimeLeft(newTimeLeft);

            const totalSeconds =
                (+new Date(targetDate) - +new Date("2023-11-27T00:00:00Z")) /
                1000;
            const currentSeconds = (+new Date(targetDate) - +new Date()) / 1000;
            const newProgress = (currentSeconds / totalSeconds) * 100;

            setProgress(Math.max(0, Math.min(100, newProgress)));

            if (newProgress <= 0) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const gradientColors = [
        "from-pink-500 to-red-500",
        "from-red-500 to-orange-500",
        "from-orange-500 to-yellow-500",
        "from-yellow-500 to-green-500",
        "from-green-500 to-blue-500",
        "from-blue-500 to-indigo-500",
        "from-indigo-500 to-purple-500",
        "from-purple-500 to-pink-500",
    ];

    const currentGradient =
        gradientColors[
            Math.floor((100 - progress) / (100 / gradientColors.length))
        ];

    return (
        <AuthenticatedLayout>
            <Card className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm shadow-xl">
                <CardContent className="p-6">
                    <div className="relative w-64 h-64 mx-auto">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle
                                className="text-gray-200 stroke-current"
                                strokeWidth="4"
                                cx="50"
                                cy="50"
                                r="46"
                                fill="transparent"
                            ></circle>
                            <motion.circle
                                className={`stroke-current ${currentGradient}`}
                                strokeWidth="4"
                                strokeLinecap="round"
                                cx="50"
                                cy="50"
                                r="46"
                                fill="transparent"
                                initial={{ pathLength: 1 }}
                                animate={{ pathLength: progress / 100 }}
                                transition={{ duration: 0.5, ease: "linear" }}
                                style={{
                                    strokeDasharray: "289.02652413026095",
                                    strokeDashoffset: "0",
                                    rotate: "-90deg",
                                    transformOrigin: "50% 50%",
                                }}
                            ></motion.circle>
                        </svg>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                            <div className="text-5xl font-bold text-gray-800 mb-2">
                                {timeLeft.days}
                            </div>
                            <div className="text-xl font-medium text-gray-600 mb-4">
                                Days
                            </div>
                            <div className="text-2xl font-semibold text-gray-700">
                                {String(timeLeft.hours).padStart(2, "0")}:
                                {String(timeLeft.minutes).padStart(2, "0")}:
                                {String(timeLeft.seconds).padStart(2, "0")}
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            Countdown to Our Wedding
                        </h2>
                        <p className="text-gray-600">
                            {new Date(targetDate).toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </AuthenticatedLayout>
    );
}
