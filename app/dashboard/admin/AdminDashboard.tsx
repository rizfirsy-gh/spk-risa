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
  School,
} from "lucide-react";
import { useTheme } from "next-themes";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import DashboardSidebarTitle from "@/app/dashboard/components/DashboardSidebarTitle";
import DashboardItem from "@/app/dashboard/components/DashboardItem";
import DashboardHeader from "@/app/dashboard/components/DashboardHeader";

const AdminDashboard = ({ children }: any) => {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <ResizablePanelGroup direction="horizontal" className="w-screen h-screen">
      {/* Sidebar */}
      <ResizablePanel defaultSize={20}>
        <ScrollArea className="h-full p-4">
          <DashboardSidebarTitle
            icon={
              theme === "dark" ? (
                <School size={28} color="#10b981" />
              ) : (
                <School size={28} color="#10b981" />
              )
            }
            text="MI Raudhatul Athfal"
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
            text="Kepala Sekolah"
            route="kepala-sekolah"
            onClick={() => router.push(`/dashboard/data/kepala-sekolah`)}
          />
          <DashboardItem
            icon={<Table size={20} color="#a1a1aa" />}
            text="Siswa"
            route="siswa"
            onClick={() => router.push(`/dashboard/data/siswa`)}
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
        </ScrollArea>
      </ResizablePanel>
      <ResizableHandle withHandle />
      {/* Header */}
      <ResizablePanel defaultSize={80}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={10}>
            <DashboardHeader />
          </ResizablePanel>
          {/* Main Content */}
          <ResizablePanel defaultSize={90} className="h-screen w-full p-6">
            <ScrollArea className="h-full w-full pr-6">{children}</ScrollArea>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default AdminDashboard;
