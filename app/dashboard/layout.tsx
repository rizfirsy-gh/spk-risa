"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Home,
  Box,
  Boxes,
  NotepadText,
  Table,
  Diameter,
  FileLineChart,
  Workflow,
} from "lucide-react";
import DashboardItem from "./components/DashboardItem";
import DashboardHeader from "./components/DashboardHeader";
import DashboardSidebarTitle from "./components/DashboardSidebarTitle";
import { DeleteAlertProvider } from "@/context/delete_alert_dialog";
import { useTheme } from "next-themes";
import { ScrollArea } from "@/components/ui/scroll-area";
import { checkUserRole } from "@/lib/auth";
import AdminDashboard from "./admin/AdminDashboard";
import ShiftManagerDashboard from "./shift-manager/ShiftManagerDashboard";
import KaryawanDashboard from "./karyawan/KaryawanDashboard";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { theme } = useTheme();
  const role = checkUserRole();

  if (role === "admin") {
    return <ShiftManagerDashboard>{children}</ShiftManagerDashboard>;
  }

  if (role === "sm") {
    return <ShiftManagerDashboard>{children}</ShiftManagerDashboard>;
  }

  if (role === "cm") {
    return <ShiftManagerDashboard>{children}</ShiftManagerDashboard>;
  }

  if (role === "hrd") {
    return <ShiftManagerDashboard>{children}</ShiftManagerDashboard>;
  }
  if (role === "karyawan") {
    return <KaryawanDashboard>{children}</KaryawanDashboard>;
  }
};

export default DashboardLayout;
