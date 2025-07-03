import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  icon: LucideIcon;
  className?: string;
}

const SidebarCard: React.FC<DashboardCardProps> = ({ title, icon: Icon, className = '' }) => {
  return (
    <>
      <div
        className={`flex items-center gap-4 bg-white p-4 shadow-md transition hover:shadow-lg ${className}`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-base font-medium text-gray-700">{title}</span>
      </div>
      <hr className="text-amber-400" />
    </>
  );
};

export default SidebarCard;
