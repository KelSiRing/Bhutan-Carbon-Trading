import { motion } from "motion/react";
import { Users, Leaf, Globe, Heart, ArrowRight, MessageSquare, Award, TreePine } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function Community() {
  return (
    <div className="pt-32 pb-20 bhutanese-pattern min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <header className="max-w-3xl mb-20">
          <span className="inline-block px-3 py-1 mb-6 text-[9px] font-black tracking-widest text-emerald-600 uppercase bg-emerald-50 border border-emerald-100 rounded-full">
            Bhutan Carbon Foundation Network
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-black text-slate-800 mb-8 tracking-tighter leading-tight">
            Common Wealth.<br />
            <span className="text-emerald-600">Shared Responsibility.</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium">
            Join thousands of Bhutanese citizens and local cooperatives mining carbon through reforestation and clean energy adoption.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Monitored Forests",
              val: "1.2M Ha",
              desc: "Verified through satellite and physical community patrol.",
              icon: <TreePine className="text-emerald-600" />,
              color: "emerald"
            },
            {
              title: "Community Yield",
              val: "Nu. 45M",
              desc: "Direct payouts to local gewogs for preservation efforts.",
              icon: <Award className="text-bcx-saffron" />,
              color: "amber"
            },
            {
              title: "Global Reach",
              val: "14 Partners",
              desc: "Connecting rural Bhutan to international carbon buyers.",
              icon: <Globe className="text-sky-600" />,
              color: "sky"
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm group hover:border-slate-200 transition-all flex flex-col"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-black/5">
                {card.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-1">{card.title}</h3>
              <p className="text-3xl font-black text-slate-900 mb-4 tracking-tight">{card.val}</p>
              <p className="text-slate-500 leading-relaxed font-medium">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Action Board */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">Active Initiatives</h2>
                <button className="px-6 py-2 bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-500 rounded-xl hover:bg-slate-100 transition-colors">View All</button>
            </div>
            
            <div className="space-y-6">
                {[
                    { title: "2024 Jigme Dorji Wangchuck Reforestation", tag: "Preservation", progress: 85, end: "May 15", goal: "50,000 Saplings" },
                    { title: "Haa District Solar Cooperative Fund", tag: "Energy", progress: 42, end: "Jun 20", goal: "Nu. 12M" },
                    { title: "Trashigang Methane Capture Trial", tag: "Innovation", progress: 12, end: "Aug 10", goal: "15 Sites" }
                ].map((act, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 bg-slate-50/50 rounded-3xl border border-slate-100 hover:bg-white hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all group"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="flex-1">
                                <div className="inline-block px-3 py-1 bg-white border border-slate-100 text-[8px] font-black uppercase tracking-widest text-slate-400 rounded-md mb-4">{act.tag}</div>
                                <h3 className="text-xl font-black text-slate-800 mb-1 leading-tight">{act.title}</h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Target: {act.goal} • Deadline: {act.end}</p>
                            </div>
                            <div className="w-full md:w-64">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">{act.progress}% Funded</span>
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic flex items-center gap-1 group-hover:text-emerald-600 transition-colors">Join <ArrowRight size={10} /></span>
                                </div>
                                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                    <motion.div 
                                      initial={{ width: 0 }}
                                      whileInView={{ width: `${act.progress}%` }}
                                      className="h-full bg-emerald-600 shadow-[0_0_8px_rgba(5,150,105,0.4)]" 
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
          </div>

          <div className="space-y-8">
                <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-slate-200 relative overflow-hidden flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center text-emerald-400 mb-6 border border-white/5"><MessageSquare size={32} /></div>
                    <h3 className="font-black text-xl mb-3 tracking-tight leading-tight uppercase tracking-[0.05em]">Voices of<br />the Forest</h3>
                    <p className="text-slate-500 text-xs font-medium mb-8">Discuss strategies with local preservation leaders.</p>
                    <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl text-[10px] uppercase tracking-[0.15em] transition-all shadow-2xl shadow-emerald-900/40">Enter Community Hub</button>
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bhutanese-pattern" />
                </div>
                
                <div className="bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100 relative group overflow-hidden">
                    <div className="relative z-10">
                        <Leaf className="text-emerald-500 mb-4 group-hover:rotate-12 transition-transform" />
                        <h3 className="font-black text-lg text-slate-800 mb-2 leading-tight">Bhutanese Net-Zero Constitution</h3>
                        <p className="text-xs text-slate-500 font-medium mb-6 leading-relaxed">Read about the legal framework governing carbon-negative growth in Bhutan.</p>
                        <button className="text-[10px] font-black text-emerald-600 uppercase tracking-widest border-b-2 border-emerald-200 hover:border-emerald-600 transition-all leading-none">View Document</button>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
