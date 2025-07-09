'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

import {
  BedDouble,
  CalendarCheck,
  CalendarClock,
  LucideIcon,
  TrendingUpDownIcon,
} from 'lucide-react';
import { FC } from 'react';

interface DashboardCardProps {
  title: string;
  icon: LucideIcon;
  className?: string;
}

const dashboard_modules: DashboardCardProps[] = [
  {
    title: 'Bookings',
    icon: CalendarClock,
  },
  {
    title: 'Rooms',
    icon: BedDouble,
  },
  {
    title: 'Checked ins',
    icon: CalendarCheck,
  },
  {
    title: 'Reports',
    icon: TrendingUpDownIcon,
  },
];

const DashboardCard: FC<DashboardCardProps> = ({ title, icon: Icon, className = '' }) => {
  return (
    <div
      className={`flex flex-col items-center gap-6 rounded-xl bg-white px-12 py-8 shadow-md transition hover:shadow-lg ${className}`}
    >
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-amber-600">
        <Icon className="h-18 w-18" />
      </div>
      <span className="text-lg font-medium text-gray-700">{title}</span>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="flex w-full flex-col">
        <Header title="Dashboard - Home" welcomeMsg="Welcome Admin" />
        <div className="flex h-full w-full flex-wrap items-center justify-center gap-4">
          {dashboard_modules &&
            dashboard_modules.map(module => (
              <DashboardCard title={module.title} icon={module.icon} key={module.title} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
