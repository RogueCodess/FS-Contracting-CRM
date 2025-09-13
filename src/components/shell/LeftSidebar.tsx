'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Wallet,
  Banknote,
  FileText,
  Users,
  Wrench,
  BarChart3,
  Settings,
  FolderKanban
} from 'lucide-react';
import { useSidebar } from '@/lib/sidebarStore';
import { FEATURE_PROJECTS } from '@/lib/featureFlags';

interface Item {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const baseItems: Item[] = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/kasboek', label: 'Kasboek', icon: Wallet },
  { href: '/bankboek', label: 'Bankboek', icon: Banknote },
  { href: '/invoices', label: 'Invoices', icon: FileText },
  { href: '/clients', label: 'Clients', icon: Users },
  { href: '/services', label: 'Services', icon: Wrench },
  { href: '/reports', label: 'Reports', icon: BarChart3 },
  { href: '/settings', label: 'Settings', icon: Settings }
];

if (FEATURE_PROJECTS) {
  baseItems.splice(6, 0, { href: '/projects', label: 'Projects', icon: FolderKanban });
}

export default function LeftSidebar() {
  const pathname = usePathname();
  const { collapsed, toggle } = useSidebar();

  return (
    <aside
      className={`flex h-full flex-col bg-neutral-800 p-2 transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-56'
      }`}
    >
      <nav className="flex-1 space-y-1">
        {baseItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center rounded px-3 py-2 text-sm hover:bg-neutral-700 ${
                active ? 'bg-neutral-700 font-medium' : ''
              }`}
            >
              <Icon className="h-5 w-5" />
              {!collapsed && <span className="ml-3">{item.label}</span>}
            </Link>
          );
        })}
      </nav>
      <button
        onClick={toggle}
        className="mt-auto rounded px-3 py-2 text-sm hover:bg-neutral-700"
        aria-label="Toggle sidebar"
      >
        {collapsed ? '»' : '«'}
      </button>
    </aside>
  );
}
