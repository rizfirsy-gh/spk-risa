"use client";
import React from "react";
import AdminDashboard from "./layouts/AdminDashboard";
import { useRouter } from "next/navigation";
import KepsekDashboard from "./layouts/KepsekDashboard";
import { checkUserRole, getToken } from "../app-utils/auth";
import SiswaScreen from "./layouts/SiswaDashboard";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const role = checkUserRole();
  const router = useRouter();
  const token = getToken();

  if (!token) {
    router.push("/");
  }

  if (role === "adm") {
    return <AdminDashboard>{children}</AdminDashboard>;
  }

  if (role === "kps") {
    return <KepsekDashboard>{children}</KepsekDashboard>;
  }

  if (role === "ssw") {
    return <SiswaScreen>{children}</SiswaScreen>;
  }
};

export default DashboardLayout;
