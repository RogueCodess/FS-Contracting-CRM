import LeftSidebar from '@/components/shell/LeftSidebar';
import TopBar from '@/components/shell/TopBar';
import '@/styles/globals.css';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen bg-neutral-900 text-neutral-50">
      <LeftSidebar />
      <div className="flex flex-1 flex-col">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}
