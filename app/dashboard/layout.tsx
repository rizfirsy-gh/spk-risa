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
import AdminDashboard from "./admin/components/AdminDashboard";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { theme } = useTheme();
  const role = checkUserRole();

  if (role === "admin") {
    return <AdminDashboard>{children}</AdminDashboard>;
  }

  return (
    <ResizablePanelGroup direction="horizontal" className="w-screen h-screen">
      {/* Sidebar */}
      <ResizablePanel defaultSize={20}>
        <p>aside</p>
      </ResizablePanel>
      <ResizableHandle withHandle />
      {/* Header */}
      <ResizablePanel defaultSize={80}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={10}>
            <p>header</p>
          </ResizablePanel>
          {/* Main Content */}
          <ResizablePanel defaultSize={90} className="h-screen w-full p-6">
            <p>main</p>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default DashboardLayout;
