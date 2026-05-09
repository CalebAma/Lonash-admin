"use client";

import { 
  Star, 
  Plus, 
  Search, 
  CheckCircle2, 
  XCircle, 
  Trash2,
  Quote
} from "lucide-react";

const MOCK_TESTIMONIALS = [
  {
    id: "1",
    name: "Kofi Asante",
    role: "First-Time Homebuyer, Cape Coast",
    content: "Lonash Homes guided me through every step of buying my first property in Cape Coast. The team was patient, honest, and always available to answer my questions.",
    rating: 5,
    status: "Approved",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
  },
  {
    id: "2",
    name: "Abena Owusu",
    role: "Property Seller, Accra",
    content: "I was impressed by how quickly Lonash Homes connected me with serious buyers for my property. Their professionalism and deep knowledge of the local market made the selling process smooth.",
    rating: 5,
    status: "Approved",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: "3",
    name: "Samuel Osei",
    role: "Investor",
    content: "The level of transparency and data provided by the Lonash team is unmatched in the Ghanaian market. Highly recommended for serious investors.",
    rating: 4,
    status: "Pending",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
];

export default function TestimonialsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Testimonials</h1>
          <p className="text-slate-500 mt-1">Manage client feedback and reviews</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          <span>Add Testimonial</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {MOCK_TESTIMONIALS.map((testimonial) => (
          <div key={testimonial.id} className="glass rounded-3xl p-6 border-white flex flex-col justify-between hover:shadow-xl transition-shadow group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Quote size={80} className="text-brand-primary" />
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-2xl object-cover ring-2 ring-white shadow-md"
                />
                <div>
                  <h3 className="font-bold text-slate-900">{testimonial.name}</h3>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill={i < testimonial.rating ? "currentColor" : "none"} 
                    className={i < testimonial.rating ? "" : "text-slate-200"}
                  />
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                testimonial.status === "Approved" 
                  ? "bg-emerald-100 text-emerald-600" 
                  : "bg-amber-100 text-amber-600"
              }`}>
                {testimonial.status}
              </span>

              <div className="flex items-center gap-1">
                {testimonial.status === "Pending" && (
                  <button className="p-2 text-emerald-500 hover:bg-emerald-50 rounded-lg transition-colors" title="Approve">
                    <CheckCircle2 size={18} />
                  </button>
                )}
                <button className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors" title="Delete">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
