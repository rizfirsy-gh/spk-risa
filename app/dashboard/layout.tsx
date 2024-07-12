"use client";
import React from "react";
import AdminDashboard from "./layouts/AdminDashboard";
import { useRouter } from "next/navigation";
import KepsekDashboard from "./layouts/KepsekDashboard";
import { checkUserRole } from "../app-utils/auth";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const role = checkUserRole();
  const route = useRouter();

  if (role === "adm") {
    return <AdminDashboard>{children}</AdminDashboard>;
  }

  if (role === "kps") {
    return <KepsekDashboard>{children}</KepsekDashboard>;
  }

  route.push("/");
};

export default DashboardLayout;
