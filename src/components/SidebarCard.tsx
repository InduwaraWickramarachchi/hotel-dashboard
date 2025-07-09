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
        className={`transition:all flex cursor-pointer items-center gap-4 border-t-2 border-t-amber-400 bg-white p-4 duration-200 hover:-translate-y-0.5 hover:shadow-lg active:shadow-inner ${className}`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-base font-medium text-gray-700">{title}</span>
      </div>
    </>
  );
};

export default SidebarCard;
