"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode } from "react";

interface DashboardItemProps {
  icon: ReactNode;
  text: string;
  route: string;
}

const DashboardItem: React.FC<DashboardItemProps> = ({ icon, text, route }) => {
  const router = useRouter();
  const pathname = usePathname();

  console.log("pathname", pathname);

  return (
    <div
      className={`flex items-center gap-4 p-8 h-14 rounded-lg ${
        pathname === `/dashboard/data/${route}`
          ? "active-sidebar hover:bg-zinc-900"
          : "hover:bg-zinc-200"
      }`}
      onClick={() => router.push(`/dashboard/data/${route}`)}
    >
      <span
        className={`font-semibold ${
          pathname === `/dashboard/data/${route}`
            ? "text-zinc-50"
            : "text-zinc-500"
        }`}
      >
        {icon}
      </span>
      <p
        className={`font-semibold text-sm ${
          pathname === `/dashboard/data/${route}`
            ? "text-zinc-50"
            : "text-zinc-500"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default DashboardItem;
