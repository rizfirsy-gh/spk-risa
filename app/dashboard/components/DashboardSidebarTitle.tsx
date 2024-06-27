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
    <div className="flex items-center gap-4 p-8 h-14 border-b">
      <span className="font-semibold text-zinc-950 dark:text-zinc-50">
        {icon}
      </span>
      <p className="font-bold text-md text-zinc-950 dark:text-zinc-50">
        {text}
      </p>
    </div>
  );
};

export default DashboardSidebarTitle;
