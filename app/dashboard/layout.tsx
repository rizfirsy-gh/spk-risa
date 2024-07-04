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
import HRDDashboard from "./hrd/HRDDashboard";
import ClusterManagerDashboard from "./cluster-manager/ClusterManagerDashboard";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const role = checkUserRole();

  if (role === "admin") {
    return <AdminDashboard>{children}</AdminDashboard>;
  }

  if (role === "sm") {
    return <ShiftManagerDashboard>{children}</ShiftManagerDashboard>;
  }

  if (role === "cm") {
    return <ClusterManagerDashboard>{children}</ClusterManagerDashboard>;
  }

  if (role === "hrd") {
    return <HRDDashboard>{children}</HRDDashboard>;
  }

  if (role === "karyawan") {
    return <KaryawanDashboard>{children}</KaryawanDashboard>;
  }
};

export default DashboardLayout;
