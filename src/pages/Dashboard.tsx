import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useAuth } from "@/src/AuthContext";
import { db } from "@/src/firebase";
import { collection, query, where, orderBy, limit, onSnapshot, doc } from "firebase/firestore";
import { SensorData } from "@/src/types";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Activity, Cpu, Wind, Award, Zap, ShieldCheck } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/src/lib/utils";

export default function Dashboard() {
  const { profile, user } = useAuth();
  const [emissions, setEmissions] = useState<SensorData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const emissionsRef = collection(db, "emissions");
    const q = query(
      emissionsRef,
      where("industryId", "==", user.uid),
      orderBy("timestamp", "desc"),
      limit(20)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as SensorData)).reverse();
      setEmissions(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const stats = [
    { label: "Wallet Balance", value: profile?.carbonCredits || 0, unit: "CRD", icon: <Award className="w-5 h-5" />, sub: "Market Value: Nu. 450/CRD", color: "text-emerald-600" },
    { label: "Total Emissions", value: profile?.totalEmissions || 0, unit: "MT CO₂e", icon: <Wind className="w-5 h-5" />, sub: "↓ 12% from last month", color: "text-slate-800" },
    { label: "Credit Score", value: 842, unit: "Excellent", icon: <Activity className="w-5 h-5" />, sub: "30-day moving average", color: "text-emerald-500" },
    { label: "Active Nodes", value: 2, unit: "Sensors", icon: <Cpu className="w-5 h-5" />, sub: "BCX-ETH-772 Online", color: "text-sky-600" },
  ];

  return (
    <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto bhutanese-pattern min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h1 className="text-3xl font-sans font-black text-slate-800 mb-1">{profile?.displayName || "Industrial Hub"}</h1>
          <p className="text-xs text-slate-500 font-medium">Region: Western Bhutan • Status: <span className="text-emerald-600 font-bold uppercase tracking-wider">Active</span></p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-[10px] font-black tracking-widest uppercase">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Sensors Online
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm group hover:border-slate-200 transition-all"
          >
            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.1em] mb-3">{stat.label}</div>
            <div className={cn("text-2xl font-black mb-1", stat.color)}>
                {stat.value} <span className="text-[10px] font-bold text-slate-400 ml-0.5">{stat.unit}</span>
            </div>
            <div className="text-[9px] text-slate-400 font-bold tracking-tight uppercase group-hover:text-slate-600 transition-colors">
                {stat.sub}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Graph */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-8 flex flex-col">
          <div className="flex justify-between items-center mb-10">
              <h3 className="font-black text-slate-800 text-sm uppercase tracking-widest flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-500" />
                  Gas Concentration Trends
              </h3>
              <div className="flex gap-1.5 p-1 bg-slate-50 rounded-xl">
                  <button className="px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">24H</button>
                  <button className="px-3 py-1.5 bg-emerald-600 text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-lg shadow-emerald-600/20 active:scale-95 transition-all">Live</button>
              </div>
          </div>
          
          <div className="flex-1 h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={emissions}>
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#059669" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                    dataKey="timestamp" 
                    tickFormatter={(val) => format(new Date(val), 'HH:mm')} 
                    stroke="#94a3b8" 
                    fontSize={10} 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fontWeight: 600 }}
                />
                <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} tick={{ fontWeight: 600 }} />
                <Tooltip 
                    contentStyle={{ borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '16px' }}
                    labelFormatter={(val) => format(new Date(val), 'MMM d, HH:mm:ss')}
                />
                <Area type="monotone" dataKey="mq2" stroke="#059669" strokeWidth={3} fillOpacity={1} fill="url(#chartGradient)" />
                <Area type="monotone" dataKey="mq3" stroke="#d97706" strokeWidth={3} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-6">
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500"></div><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">MQ2 Carbon</span></div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-amber-500"></div><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">MQ3 Ethanol</span></div>
          </div>
        </div>

        {/* Marketplace Sidbar */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-slate-200 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
            
            <div className="mb-8 relative z-10">
                <h3 className="font-black text-lg mb-1 tracking-tight">Marketplace</h3>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-[0.2em]">Live Trading Pulse</p>
            </div>

            <div className="flex-1 space-y-4 relative z-10">
                {[
                    { entity: "Druk Green Power", type: "BUY", amt: 50, price: "Nu. 4,250", time: "2m ago" },
                    { entity: "Tashi Infocomm", type: "SELL", amt: 120, price: "Nu. 10,200", time: "5m ago" },
                    { entity: "Wangdue Solar", type: "BUY", amt: 300, price: "Nu. 25,500", time: "12m ago" },
                ].map((trade, i) => (
                    <div key={i} className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/[0.08] transition-colors group">
                        <div className="text-xs">
                            <p className="font-black text-white mb-0.5">{trade.entity}</p>
                            <p className="text-[9px] font-black text-slate-500 tracking-widest">{trade.type} • {trade.amt} CRD</p>
                        </div>
                        <div className="text-right">
                            <p className="text-emerald-400 font-mono font-black text-sm">{trade.price}</p>
                            <p className="text-[8px] font-bold text-slate-600 uppercase tracking-wider">{trade.time}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full mt-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-500/30 tracking-tight active:scale-95 z-10">
                Trading Floor
            </button>
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bhutanese-pattern" />
        </div>
      </div>
      
      {/* Bottom Insights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="col-span-1 md:col-span-2 bg-emerald-600 p-8 rounded-[2.5rem] text-white flex justify-between items-center overflow-hidden relative shadow-xl shadow-emerald-100">
                <div className="relative z-10 pr-12">
                    <p className="text-[10px] font-black opacity-60 uppercase tracking-[0.2em] mb-3">Climate Action Initiative</p>
                    <p className="text-lg font-black leading-tight tracking-tight mb-4">Join the Jigme Dorji Wangchuck<br />Reforestation Drive</p>
                    <button className="px-6 py-2.5 bg-white text-emerald-700 rounded-full text-xs font-black shadow-lg hover:scale-105 active:scale-95 transition-all">Participate Now</button>
                </div>
                <div className="absolute right-0 top-0 bottom-0 flex items-center pr-8 opacity-20"><Award size={120} /></div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-100 flex items-center gap-6 group hover:border-slate-200 transition-colors">
                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"><Award size={28} /></div>
                <div>
                   <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Global Weight</p>
                   <p className="text-lg font-black text-slate-800">#12 in Nation</p>
                </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 flex items-center gap-6 group hover:border-slate-200 transition-colors">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"><Zap size={28} /></div>
                <div>
                   <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Loan Status</p>
                   <p className="text-lg font-black text-slate-800">Pre-Approved</p>
                </div>
            </div>
      </div>
    </div>
  );
}
