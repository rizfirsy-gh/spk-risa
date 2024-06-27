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

const DashboardLayout = ({ children }: any) => {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <DeleteAlertProvider>
      <main className="w-screen h-screen">
        <ResizablePanelGroup direction="horizontal" className="w-full">
          {/* Sidebar */}
          <ResizablePanel defaultSize={20}>
            <aside className="h-full p-4">
              <DashboardSidebarTitle
                icon={
                  theme === "dark" ? (
                    <Workflow size={32} color="#ffffff" />
                  ) : (
                    <Workflow size={32} color="#09090b" />
                  )
                }
                text="System Penunjang Keputusan"
              />
              <div className="py-2">
                <DashboardItem
                  icon={<Home size={20} color="#a1a1aa" />}
                  text="Dashboard Overview"
                  route="dashboard"
                  onClick={() => router.push(`/dashboard/`)}
                />
              </div>
              <div className="pb-2">
                <h4>Master Data</h4>
              </div>
              <DashboardItem
                icon={<Box size={20} color="#a1a1aa" />}
                text="Kriteria"
                route="kriteria"
                onClick={() => router.push(`/dashboard/data/kriteria`)}
              />
              <DashboardItem
                icon={<Table size={20} color="#a1a1aa" />}
                text="Alternatif"
                route="alternatif"
                onClick={() => router.push(`/dashboard/data/alternatif`)}
              />
              <DashboardItem
                icon={<NotepadText size={20} color="#a1a1aa" />}
                text="Penilaian"
                route="penilaian"
                onClick={() => router.push(`/dashboard/data/penilaian`)}
              />
              <DashboardItem
                icon={<Diameter size={20} color="#a1a1aa" />}
                text="Perhitungan"
                route="perhitungan"
                onClick={() => router.push(`/dashboard/data/perhitungan`)}
              />
              <DashboardItem
                icon={<FileLineChart size={20} color="#a1a1aa" />}
                text="Hasil akhir"
                route="hasil-akhir"
                onClick={() => router.push(`/dashboard/data/hasil-akhir`)}
              />
              <div className="py-2">
                <h4>User Data</h4>
              </div>
              <DashboardItem
                icon={<Box size={20} color="#a1a1aa" />}
                text="User"
                route="users"
                onClick={() => router.push(`/dashboard/data/users`)}
              />
            </aside>
          </ResizablePanel>
          <ResizableHandle withHandle />
          {/* Header */}
          <ResizablePanel defaultSize={80}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={10}>
                <DashboardHeader />
              </ResizablePanel>
              {/* Main Content */}
              <ResizablePanel defaultSize={90}>
                <div className="h-full w-full px-6">{children}</div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </DeleteAlertProvider>
  );
};

export default DashboardLayout;
