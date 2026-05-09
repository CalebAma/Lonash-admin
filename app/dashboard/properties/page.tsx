"use client";

import { useState } from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  ExternalLink,
  MapPin,
  BedDouble,
  Bath
} from "lucide-react";

// Mock data based on the structure from lonash-homes
const MOCK_PROPERTIES = [
  {
    id: "1",
    title: "Luxury 4-Bedroom Villa with Pool",
    type: "sale",
    price: 850000,
    location: "Airport Residential Area",
    city: "Accra",
    bedrooms: 4,
    bathrooms: 4,
    status: "Active",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop"
  },
  {
    id: "2",
    title: "Modern 3-Bedroom Apartment",
    type: "rent",
    price: 5500,
    location: "East Legon",
    city: "Accra",
    bedrooms: 3,
    bathrooms: 2,
    status: "Pending",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop"
  },
  {
    id: "3",
    title: "Executive 5-Bedroom House",
    type: "sale",
    price: 1200000,
    location: "Trasacco Valley",
    city: "Accra",
    bedrooms: 5,
    bathrooms: 5,
    status: "Active",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop"
  },
];

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Properties</h1>
          <p className="text-slate-500 mt-1">Manage your real estate listings</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          <span>Add Property</span>
        </button>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search properties..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/10 focus:bg-white transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
            <Filter size={18} />
            <span className="text-sm font-medium">Filters</span>
          </button>
          <select className="px-4 py-2 text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 outline-none transition-colors text-sm font-medium">
            <option>All Types</option>
            <option>For Sale</option>
            <option>For Rent</option>
          </select>
        </div>
      </div>

      {/* Properties Table/List */}
      <div className="grid grid-cols-1 gap-6">
        {MOCK_PROPERTIES.map((property) => (
          <div key={property.id} className="glass rounded-3xl p-4 border-white/60 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 group">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Image */}
              <div className="relative w-full lg:w-64 h-44 rounded-2xl overflow-hidden shrink-0">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase text-brand-primary">
                  For {property.type}
                </div>
              </div>

              {/* Details */}
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors cursor-pointer">
                        {property.title}
                      </h3>
                      <p className="text-slate-500 flex items-center gap-1 mt-1 text-sm">
                        <MapPin size={14} className="text-slate-400" />
                        {property.location}, {property.city}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                       <button className="p-2 text-slate-400 hover:text-brand-primary hover:bg-brand-primary/5 rounded-lg transition-all">
                          <Edit2 size={18} />
                       </button>
                       <button className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all">
                          <Trash2 size={18} />
                       </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mt-6">
                    <div className="flex items-center gap-2 text-slate-600">
                      <BedDouble size={18} className="text-slate-400" />
                      <span className="font-semibold text-sm">{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Bath size={18} className="text-slate-400" />
                      <span className="font-semibold text-sm">{property.bathrooms} Baths</span>
                    </div>
                    <div className="ml-auto">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                        property.status === "Active" 
                          ? "bg-emerald-100 text-emerald-600" 
                          : "bg-amber-100 text-amber-600"
                      }`}>
                        {property.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-50">
                  <div className="text-2xl font-black text-brand-primary">
                    GHS {property.price.toLocaleString()}
                    {property.type === "rent" && <span className="text-sm font-medium text-slate-400 ml-1">/mo</span>}
                  </div>
                  <button className="flex items-center gap-2 text-slate-400 hover:text-brand-primary text-sm font-semibold transition-colors">
                    <ExternalLink size={16} />
                    <span>View on Site</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
