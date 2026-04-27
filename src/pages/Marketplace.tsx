import { useState } from "react";
import { motion } from "motion/react";
import { ShoppingBag, ArrowUpRight, TrendingUp, Filter, Search, Award, Globe, Leaf, ShoppingCart } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { format } from "date-fns";

export default function Marketplace() {
  const credits = [
    { id: 1, seller: "Druk Green Power", amount: 1200, type: "Hydro-Verified", price: 420, risk: "Low", trend: "+2.4%" },
    { id: 2, seller: "Wangdue Solar Park", amount: 450, type: "Solar-Verified", price: 445, risk: "Medium", trend: "+1.8%" },
    { id: 3, seller: "Paro Industrial", amount: 800, type: "Emission-Saved", price: 395, risk: "Low", trend: "-0.5%" },
    { id: 4, seller: "Phuentsholing Tech", amount: 2500, type: "Methane-Capture", price: 410, risk: "Low", trend: "+0.2%" },
    { id: 5, seller: "Bumthang Dairy", amount: 150, type: "Biogas-Offset", price: 460, risk: "High", trend: "+4.1%" },
  ];

  const PRICE_HISTORY = [
    { time: "08:00", price: 420 },
    { time: "10:00", price: 435 },
    { time: "12:00", price: 428 },
    { time: "14:00", price: 445 },
    { time: "16:00", price: 452 },
    { time: "18:00", price: 450 },
  ];

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto bhutanese-pattern min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 mb-4 text-[9px] font-black tracking-widest text-emerald-600 uppercase bg-emerald-50 border border-emerald-100 rounded-full">
            Live Trading Floor
          </span>
          <h1 className="text-4xl md:text-5xl font-sans font-black text-slate-800 mb-4 tracking-tight leading-tight">Bhutan Carbon Marketplace</h1>
          <p className="text-slate-500 font-medium">Verify, purchase, and retire carbon credits from premium Bhutanese sustainable projects.</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
             <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center"><TrendingUp size={20} /></div>
             <div>
                <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Market Status</p>
                <p className="text-sm font-black text-slate-800">Nu. 421.50 <span className="text-[10px] text-emerald-500">+1.2%</span></p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Market Stats & Chart */}
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8 flex flex-col">
              <div className="flex justify-between items-center mb-10">
                  <h3 className="font-black text-slate-800 text-sm uppercase tracking-widest flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                      National Credit Index
                  </h3>
                  <div className="flex gap-1.5 p-1 bg-slate-50 rounded-xl">
                      <button className="px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">7D</button>
                      <button className="px-3 py-1.5 bg-emerald-600 text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-lg shadow-emerald-600/20 active:scale-95 transition-all">Live</button>
                  </div>
              </div>
              
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={PRICE_HISTORY}>
                    <defs>
                      <linearGradient id="marketGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#059669" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                        dataKey="time" 
                        stroke="#94a3b8" 
                        fontSize={10} 
                        axisLine={false} 
                        tickLine={false}
                        tick={{ fontWeight: 600 }}
                    />
                    <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} tick={{ fontWeight: 600 }} />
                    <Tooltip 
                        contentStyle={{ borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '16px' }}
                    />
                    <Area type="monotone" dataKey="price" stroke="#059669" strokeWidth={3} fillOpacity={1} fill="url(#marketGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
           </div>

          {/* Listings */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Search Projects..." 
                      className="w-full pl-12 pr-6 py-4 bg-white border border-slate-100 rounded-3xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/10 shadow-sm"
                    />
                </div>
                <button className="px-6 py-4 bg-white border border-slate-100 rounded-3xl text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2 hover:border-slate-200 transition-colors shadow-sm">
                    <Filter size={16} /> Filters
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {credits.map((credit, i) => (
                <motion.div
                  key={credit.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row items-center gap-6"
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-lg shadow-emerald-500/5">
                    <Leaf size={24} />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-black text-slate-800 leading-none mb-1">{credit.seller}</h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{credit.type}</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="text-right sm:text-left">
                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">Volume</p>
                            <p className="text-sm font-black text-slate-800">{credit.amount} CRD</p>
                        </div>
                        <div className="text-right sm:text-left">
                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">Price</p>
                            <p className="text-sm font-black text-emerald-600">Nu. {credit.price}</p>
                        </div>
                        <div className="hidden md:block">
                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">Trend</p>
                            <p className={cn("text-sm font-black", credit.trend.startsWith('+') ? "text-emerald-500" : "text-red-500")}>{credit.trend}</p>
                        </div>
                  </div>
                  <button className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 active:scale-95">
                    <ShoppingCart size={18} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-slate-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
                <h3 className="font-black text-2xl mb-2 tracking-tight">Market Pulse</h3>
                <p className="text-slate-400 text-sm font-medium mb-10">Aggregated insights from the national exchange.</p>
                
                <div className="space-y-8">
                    {[
                        { label: "Daily Volume", val: "Nu. 4.2M", desc: "+12.4% vs Avg", icon: <TrendingUp className="text-emerald-400" /> },
                        { label: "Active Buyers", val: "482 Entities", desc: "Industrial & Retails", icon: <Globe className="text-sky-400" /> },
                        { label: "Verified Area", val: "24,000 Ha", desc: "Monitored Forest", icon: <Award className="text-amber-400" /> },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-5">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/5 shadow-inner">{item.icon}</div>
                            <div>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                                <p className="text-xl font-black text-white leading-none mb-1">{item.val}</p>
                                <p className="text-[10px] font-bold text-slate-600">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <button className="w-full mt-12 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl transition-all shadow-2xl shadow-emerald-900/40 tracking-tight active:scale-95 leading-none">
                    Market Intelligence Report
                </button>
            </div>
            
            <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100 flex flex-col group overflow-hidden relative">
                <div className="relative z-10">
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-3 italic">Bhutan Trust Fund</p>
                    <p className="text-lg font-black text-slate-800 mb-6 leading-tight tracking-tight">Certify your impact. <br />Join the elite reserve.</p>
                    <button className="px-6 py-2.5 bg-white text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm hover:shadow-lg transition-all">Get Certified</button>
                </div>
                <div className="absolute right-0 bottom-0 opacity-[0.05] grayscale group-hover:grayscale-0 transition-all -mr-4 -mb-4"><Award size={140} className="text-emerald-600" /></div>
            </div>
        </div>
      </div>
    </div>
  );
}
