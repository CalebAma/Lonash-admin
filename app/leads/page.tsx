"use client";

import { 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  Calendar,
  MessageCircle,
  MoreVertical,
  CheckCircle2
} from "lucide-react";

const MOCK_LEADS = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "+233 24 123 4567", property: "Sunset Villa", date: "2024-05-08", status: "New" },
  { id: 2, name: "Sarah Smith", email: "sarah@example.com", phone: "+233 50 987 6543", property: "Modern Condo", date: "2024-05-08", status: "Contacted" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", phone: "+233 20 555 0123", property: "Beachfront House", date: "2024-05-07", status: "Qualified" },
  { id: 4, name: "Emma Wilson", email: "emma@example.com", phone: "+233 27 333 4444", property: "Luxury Penthouse", date: "2024-05-07", status: "Follow-up" },
  { id: 5, name: "Robert Taylor", email: "rob@example.com", phone: "+233 55 111 2222", property: "3-Bedroom Townhouse", date: "2024-05-06", status: "Closed" },
];

export default function LeadsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Leads & Inquiries</h1>
        <p className="text-slate-500 mt-1">Track and manage potential buyers and tenants</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search leads by name, email or property..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/10 transition-all"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
          <Filter size={18} />
          <span className="text-sm font-medium">Filter Status</span>
        </button>
      </div>

      <div className="glass rounded-3xl overflow-hidden border-white/60">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-6 py-4 font-semibold text-slate-900 text-sm">Lead Name</th>
              <th className="px-6 py-4 font-semibold text-slate-900 text-sm">Contact Info</th>
              <th className="px-6 py-4 font-semibold text-slate-900 text-sm">Interested In</th>
              <th className="px-6 py-4 font-semibold text-slate-900 text-sm">Status</th>
              <th className="px-6 py-4 font-semibold text-slate-900 text-sm text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {MOCK_LEADS.map((lead) => (
              <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-blue-600 text-white flex items-center justify-center font-bold shadow-md">
                      {lead.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{lead.name}</div>
                      <div className="flex items-center gap-1 text-xs text-slate-400 mt-0.5">
                        <Calendar size={12} />
                        {lead.date}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Mail size={14} className="text-slate-400" />
                      {lead.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Phone size={14} className="text-slate-400" />
                      {lead.phone}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-lg inline-block">
                    {lead.property}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    lead.status === "New" ? "bg-emerald-100 text-emerald-600" :
                    lead.status === "Closed" ? "bg-slate-100 text-slate-600" :
                    "bg-blue-100 text-brand-primary"
                  }`}>
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-brand-primary hover:bg-brand-primary/5 rounded-lg transition-all">
                      <MessageCircle size={18} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
