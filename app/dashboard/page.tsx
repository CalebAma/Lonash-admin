import { 
  Users, 
  Home, 
  Eye, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock,
  Plus
} from "lucide-react";

export default function DashboardOverview() {
  const stats = [
    { label: "Total Properties", value: "24", icon: Home, trend: "+12%", up: true, color: "blue" },
    { label: "Active Leads", value: "156", icon: Users, trend: "+25%", up: true, color: "orange" },
    { label: "Total Views", value: "12,840", icon: Eye, trend: "-4%", up: false, color: "indigo" },
    { label: "Revenue Est.", value: "$45.2k", icon: TrendingUp, trend: "+8%", up: true, color: "emerald" },
  ];

  const recentLeads = [
    { id: 1, name: "John Doe", property: "Sunset Villa", date: "2 mins ago", status: "New" },
    { id: 2, name: "Sarah Smith", property: "Modern Condo", date: "1 hour ago", status: "Contacted" },
    { id: 3, name: "Mike Johnson", property: "Beachfront House", date: "3 hours ago", status: "New" },
    { id: 4, name: "Emma Wilson", property: "Luxury Penthouse", date: "5 hours ago", status: "Follow-up" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-slate-500 mt-1">Monitor your property performance and lead activity</p>
        </div>
        <button className="btn-primary flex items-center gap-2 text-sm py-2.5 px-5">
          <Plus size={18} />
          <span>New Property</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="glass rounded-3xl p-6 border-white hover:scale-[1.02] transition-transform cursor-default">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl bg-slate-50 text-brand-primary`}>
                <stat.icon size={24} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${stat.up ? "text-emerald-500" : "text-rose-500"}`}>
                {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.trend}
              </div>
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 glass rounded-3xl p-8 border-white">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900">Recent Leads</h3>
            <button className="text-brand-primary text-sm font-semibold hover:underline">View all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="pb-4 font-semibold text-slate-400 text-sm">Customer</th>
                  <th className="pb-4 font-semibold text-slate-400 text-sm">Property</th>
                  <th className="pb-4 font-semibold text-slate-400 text-sm">Time</th>
                  <th className="pb-4 font-semibold text-slate-400 text-sm">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {recentLeads.map((lead) => (
                  <tr key={lead.id} className="group">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-xs font-bold">
                          {lead.name.charAt(0)}
                        </div>
                        <span className="font-medium text-slate-700">{lead.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-slate-500 text-sm">{lead.property}</td>
                    <td className="py-4 text-slate-400 text-xs">
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        {lead.date}
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        lead.status === "New" 
                          ? "bg-emerald-500/10 text-emerald-600" 
                          : "bg-brand-primary/10 text-brand-primary"
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Tips/Actions */}
        <div className="glass rounded-3xl p-8 border-white bg-brand-primary text-white">
          <h3 className="text-lg font-bold mb-4">Quick Tip</h3>
          <p className="text-blue-100 text-sm leading-relaxed mb-6">
            Updating your property listings with high-quality images can increase lead conversion by up to 40%. Try refreshing your "Sunset Villa" listing.
          </p>
          <button className="w-full py-3 bg-white text-brand-primary font-bold rounded-xl hover:bg-blue-50 transition-colors text-sm">
            Refresh Listings
          </button>
          
          <div className="mt-10 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-300">Upcoming Tasks</h4>
            <div className="space-y-3">
              {[
                "Call Sarah Smith",
                "Approve 3 testimonials",
                "Update monthly report"
              ].map((task, i) => (
                <div key={i} className="flex items-center gap-3 bg-blue-800/30 p-3 rounded-xl border border-blue-700/50">
                  <div className="w-2 h-2 rounded-full bg-brand-accent" />
                  <span className="text-sm">{task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
