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
  LogOut,
  SunIcon,
  MoonIcon,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardSidebarTitle from "@/app/dashboard/components/DashboardSidebarTitle";
import DashboardItem from "@/app/dashboard/components/DashboardItem";
import DashboardHeader from "@/app/dashboard/components/DashboardHeader";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { logout } from "@/app/app-utils/auth";

const AdminDashboard = ({ children }: any) => {
  const router = useRouter();

  return (
    <ResizablePanelGroup direction="horizontal" className="w-screen h-screen">
      {/* Sidebar */}
      <ResizablePanel defaultSize={20}>
        <ScrollArea className="h-full p-4">
          <DashboardSidebarTitle
            icon={<School size={28} color="#10b981" />}
            text="MI Raudlatul Athfal"
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
          <Separator />
          <div
            className="flex items-center gap-4 p-8 h-14 my-2 text-red-800 rounded-lg cursor-pointer  hover:bg-red-300 hover:text-red-800"
            onClick={() => {
              logout();
              router.push("/");
            }}
          >
            <span className={"font-semibold text-zinc-500 dark:text-zinc-50"}>
              <LogOut />
            </span>
            <p className="text-zinc-500 dark:text-zinc-300">Logout</p>
          </div>
        </ScrollArea>
      </ResizablePanel>
      <ResizableHandle withHandle />
      {/* Content */}
      <ResizablePanel defaultSize={90} className="h-screen w-full p-6">
        <ScrollArea className="h-full w-full pr-6">{children}</ScrollArea>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default AdminDashboard;
