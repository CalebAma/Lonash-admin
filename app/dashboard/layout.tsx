"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  Home, 
  MessageSquare, 
  LogOut, 
  Menu, 
  X, 
  ChevronRight,
  TrendingUp,
  User
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Properties", href: "/dashboard/properties", icon: Home },
  { label: "Leads", href: "/dashboard/leads", icon: TrendingUp },
  { label: "Testimonials", href: "/dashboard/testimonials", icon: MessageSquare },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Mobile Backdrop */}
      {!isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(true)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-sidebar text-white transition-transform duration-300 transform lg:relative lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 px-2 mb-10">
            <div className="w-10 h-10 rounded-xl bg-brand-accent flex items-center justify-center shadow-lg shadow-brand-accent/20">
              <TrendingUp size={24} className="text-white" />
            </div>
            <div>
              <h2 className="font-bold text-xl tracking-tight">LONASH</h2>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Admin Panel</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group ${
                    isActive 
                      ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20" 
                      : "text-slate-400 hover:bg-sidebar-hover hover:text-white"
                  }`}
                >
                  <Icon size={20} className={isActive ? "text-white" : "group-hover:text-brand-accent transition-colors"} />
                  <span className="font-medium">{item.label}</span>
                  {isActive && <ChevronRight size={16} className="ml-auto opacity-50" />}
                </Link>
              );
            })}
          </nav>

          {/* User Info & Logout */}
          <div className="mt-auto pt-6 border-t border-slate-800">
            <div className="flex items-center gap-3 px-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                <User size={20} className="text-slate-300" />
              </div>
              <div className="overflow-hidden">
                <p className="font-semibold text-sm truncate">Super Admin</p>
                <p className="text-xs text-slate-500 truncate">admin@lonashhomes.com</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-3.5 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-all duration-200"
            >
              <LogOut size={20} />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 flex-shrink-0">
          <button 
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="flex items-center gap-4 ml-auto">
             <div className="hidden sm:flex flex-col text-right">
                <span className="text-sm font-semibold text-slate-900">Welcome back, Admin</span>
                <span className="text-xs text-slate-500">{new Date().toDateString()}</span>
             </div>
             <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-brand-primary font-bold">
                A
             </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
