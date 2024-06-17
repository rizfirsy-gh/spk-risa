import React from "react";
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

const DashboardLayout = ({ children }: any) => {
  return (
    <main className="w-screen h-screen">
      <ResizablePanelGroup direction="horizontal" className="w-full">
        {/* Sidebar */}
        <ResizablePanel defaultSize={20}>
          <aside className="h-full p-4">
            <DashboardSidebarTitle
              icon={<Workflow size={32} color="#15803d" />}
              text="System Penunjang Keputusan"
            />
            <DashboardItem
              icon={<Home size={20} color="#a1a1aa" />}
              text="Dashboard Overview"
              route="dashboard"
            />
            <div className="pb-2">
              <h4>Master Data</h4>
            </div>
            <DashboardItem
              icon={<Box size={20} color="#a1a1aa" />}
              text="Kriteria"
              route="kriteria"
            />
            <DashboardItem
              icon={<Boxes size={20} color="#a1a1aa" />}
              text="Sub Kriteria"
              route="data-kriteria"
            />
            <DashboardItem
              icon={<Table size={20} color="#a1a1aa" />}
              text="Alternatif"
              route="alternatif"
            />
            <DashboardItem
              icon={<NotepadText size={20} color="#a1a1aa" />}
              text="Penilaian"
              route="penilaian"
            />
            <DashboardItem
              icon={<Diameter size={20} color="#a1a1aa" />}
              text="Perhitungan"
              route="perhitungan"
            />
            <DashboardItem
              icon={<FileLineChart size={20} color="#a1a1aa" />}
              text="Hasil akhir"
              route="hasil-akhir"
            />
            <div className="pb-2">
              <h4>User Data</h4>
            </div>
            <DashboardItem
              icon={<Box size={20} color="#a1a1aa" />}
              text="User"
              route="users"
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
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">{children}</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
};

export default DashboardLayout;
