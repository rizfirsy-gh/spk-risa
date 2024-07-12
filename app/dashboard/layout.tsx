"use client";
import React from "react";
import { checkUserRole } from "@/lib/auth";
import AdminDashboard from "./layouts/AdminDashboard";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const role = checkUserRole();
  const route = useRouter();

  if (role === "admin") {
    return <AdminDashboard>{children}</AdminDashboard>;
  }

  route.push("/");
};

export default DashboardLayout;
