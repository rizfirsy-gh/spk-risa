"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { MouseEventHandler, ReactNode } from "react";

interface DashboardItemProps {
  icon: ReactNode;
  text: string;
  route: string;
  onClick: MouseEventHandler;
}

const DashboardItem: React.FC<DashboardItemProps> = ({
  icon,
  text,
  route,
  onClick,
}) => {
  const pathname = usePathname();

  return (
    <div
      className={`flex items-center gap-4 p-8 h-14 my-2 rounded-lg cursor-pointer ${
        pathname === `/dashboard/data/${route}`
          ? "active-sidebar hover:bg-emerald-800 dark:bg-emerald-300/15"
          : "hover:bg-zinc-200 dark:hover:bg-zinc-800"
      }`}
      onClick={onClick}
    >
      <span
        className={`font-semibold ${
          pathname === `/dashboard/data/${route}`
            ? "text-zinc-50 dark:text-zinc-950"
            : "text-zinc-500 dark:text-zinc-50"
        }`}
      >
        {icon}
      </span>
      <p
        className={`font-semibold text-sm ${
          pathname === `/dashboard/data/${route}`
            ? "text-zinc-50 dark:text-zinc-50"
            : "text-zinc-500 dark:text-zinc-300"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default DashboardItem;
