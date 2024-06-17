import Link from "next/link";
import React, { ReactNode } from "react";

interface DashboardItemProps {
  icon: ReactNode;
  text: string;
}

const DashboardSidebarTitle: React.FC<DashboardItemProps> = ({
  icon,
  text,
}) => {
  return (
    <div className="flex items-center gap-4 p-8 h-14 border-b hover:bg-zinc-200">
      <span className="font-semibold">{icon}</span>
      <p className="font-bold text-md text-green-600">{text}</p>
    </div>
  );
};

export default DashboardSidebarTitle;
