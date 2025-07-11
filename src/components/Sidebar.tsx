import { Bed, Book, Calendar, TrendingUpDownIcon } from 'lucide-react';
import SidebarCard from './SidebarCard';

const Sidebar = ({}) => {
  return (
    <aside>
      <div className="space-y-4">
        <h1 className="p-8 text-2xl font-semibold text-gray-800">Dashboard</h1>
        <div className="flex flex-col">
          <SidebarCard title="Total Bookings" icon={Book} />
          <SidebarCard title="Available Rooms" icon={Bed} />
          <SidebarCard title="Checked-In Today" icon={Calendar} />
          <SidebarCard title="Revenue (LKR)" icon={TrendingUpDownIcon} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
