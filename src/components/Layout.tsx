import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Rocket, 
  GitMerge, 
  Server, 
  Settings, 
  Bell,
  Menu,
  X,
  CircleDot
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Layout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Overview', path: '/', icon: LayoutDashboard },
    { name: 'Deployments', path: '/deployments', icon: Rocket },
    { name: 'Pipelines', path: '/pipelines', icon: GitMerge },
    { name: 'Infrastructure', path: '/infrastructure', icon: Server },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#0f111a] text-gray-200 font-sans overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-[#1a1d27] border-r border-[#2a2e3d]">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Rocket size={20} className="text-white" />
          </div>
          <h1 className="font-semibold text-lg text-white">DevOps Dash</h1>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors text-sm font-medium",
                isActive 
                  ? "bg-blue-600/10 text-blue-400" 
                  : "text-gray-400 hover:text-gray-200 hover:bg-[#2a2e3d]"
              )}
            >
              <item.icon size={18} />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-50 bg-[#1a1d27] transform transition-transform duration-300 ease-in-out md:hidden",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-4 flex justify-between items-center border-b border-[#2a2e3d]">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Rocket size={20} className="text-white" />
            </div>
            <h1 className="font-semibold text-lg text-white">DevOps Dash</h1>
          </div>
          <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-3 rounded-md transition-colors text-base font-medium",
                isActive 
                  ? "bg-blue-600/10 text-blue-400" 
                  : "text-gray-400 hover:text-gray-200 hover:bg-[#2a2e3d]"
              )}
            >
              <item.icon size={20} />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navigation */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-[#1a1d27] border-b border-[#2a2e3d]">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f111a] border border-[#2a2e3d]">
              <CircleDot size={12} className="text-emerald-500" />
              <span className="text-xs font-medium text-gray-300">Production</span>
              <span className="text-xs text-gray-500 border-l border-[#2a2e3d] pl-2 ml-1">Healthy</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-white relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border-2 border-[#2a2e3d]"></div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
