import { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin panel for managing application',
};

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="sticky top-0 h-screen bg-amber-50">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <main className="flex h-screen w-full flex-col overflow-hidden">
        <div className="sticky top-0 z-10">
          <Header title="Dashboard - Home" welcomeMsg="Welcome Admin" />
        </div>
        <section className="flex-1 overflow-y-auto">{children}</section>
      </main>
    </div>
  );
};

export default AdminLayout;
