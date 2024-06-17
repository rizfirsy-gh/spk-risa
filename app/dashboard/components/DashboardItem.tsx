import Link from "next/link";
import React, { ReactNode } from "react";

interface DashboardItemProps {
  icon: ReactNode;
  text: string;
  route: string;
}

const DashboardItem: React.FC<DashboardItemProps> = ({ icon, text, route }) => {
  return (
    <Link href={route}>
      <div className="flex items-center gap-4 p-8 h-14 rounded-lg hover:bg-zinc-200">
        <span className="font-semibold">{icon}</span>
        <p className="font-semibold text-sm text-zinc-500">{text}</p>
      </div>
    </Link>
  );
};

export default DashboardItem;
