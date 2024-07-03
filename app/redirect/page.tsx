"use client";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { checkUserRole } from "../app-utils/auth";

const RedirectScreen = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const route = useRouter();

  useEffect(() => {
    if (timeLeft > 90) {
      route.push("/dashboard");
    } // Exit if the countdown is finished

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft + 30); // Update the state
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, [timeLeft]); //

  return (
    <div className="w-screen h-screen grid place-content-center bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl">Redirecting...</h1>
      <Progress value={timeLeft} className="w-full my-4" />
    </div>
  );
};

export default RedirectScreen;
