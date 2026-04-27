import { motion } from "motion/react";
import { ArrowRight, BarChart3, ShieldCheck, Zap, Globe, Cpu, Coins, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";

export default function LandingPage() {
  return (
    <div className="pt-16 bhutanese-pattern overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center hero-gradient px-4">
        <div className="max-w-5xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] text-bcx-emerald uppercase bg-emerald-50 border border-emerald-100 rounded-full">
              National Sustainability Initiative
            </span>
            <h1 className="text-6xl md:text-8xl font-sans font-black text-slate-800 leading-[0.9] mb-8 tracking-tighter">
              Track. Reduce. Trade.<br />
              <span className="text-emerald-600">Pure Bhutan.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed font-medium">
              The Bhutan Carbon Exchange empowers industries to monitor emissions via IoT nodes, earning verified credits for a carbon-negative future.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/login"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all flex items-center justify-center space-x-2 group shadow-xl shadow-emerald-200"
              >
                <span>Initialize Hub</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/marketplace"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center space-x-2 shadow-sm"
              >
                <Globe size={20} className="text-emerald-500" />
                <span>Trading Floor</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-bcx-emerald/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-bcx-saffron/5 blur-[120px] rounded-full" />
      </section>

      {/* Stats Row */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "CO2 Sequestrated", value: "2.5M", unit: "MT", icon: <Zap className="w-5 h-5" />, color: "text-emerald-600" },
            { label: "Verified Credits", value: "850K", unit: "CRD", icon: <ShieldCheck className="w-5 h-5" />, color: "text-blue-600" },
            { label: "Industrial Nodes", value: "1,200", unit: "Active", icon: <Cpu className="w-5 h-5" />, color: "text-bcx-saffron" },
            { label: "Community Gain", value: "Nu. 12M", unit: "Payout", icon: <Coins className="w-5 h-5" />, color: "text-emerald-700" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50/50 p-6 rounded-3xl border border-slate-100 hover:border-slate-200 transition-colors group"
            >
              <div className={cn("inline-flex p-3 rounded-xl bg-white shadow-sm mb-4 group-hover:scale-110 transition-transform", stat.color)}>
                {stat.icon}
              </div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-none mb-2">{stat.label}</div>
              <div className="text-2xl font-black text-slate-800">
                {stat.value} <span className="text-[10px] text-slate-500 font-bold ml-1">{stat.unit}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Features */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-slate-800 mb-6 tracking-tight">The Ecosystem Bridge</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">Fusing IoT monitoring with decentralized carbon markets to drive national prosperity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "IoT Edge Nodes",
                desc: "Deploy ESP32-MQ sensors for granular, high-frequency emission tracking across industrial zones.",
                icon: <Cpu className="text-emerald-600" />,
                tag: "Hardware"
              },
              {
                title: "Smart Verification",
                desc: "Automatic credit mining protocols ensure every MT of CO2 detected is verified and recorded.",
                icon: <ShieldCheck className="text-emerald-600" />,
                tag: "Software"
              },
              {
                title: "Liquid Hub",
                desc: "A high-performance trading platform for credits, supporting both small community deeds and massive industrial trades.",
                icon: <BarChart3 className="text-emerald-600" />,
                tag: "Fintech"
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    {step.icon}
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-8">
                    {step.tag}
                </div>
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-emerald-600/5">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-800 mb-4">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer Banner */}
      <section className="pb-32 px-4">
        <div className="max-w-7xl mx-auto p-16 md:p-24 bg-slate-900 rounded-[3rem] relative overflow-hidden shadow-2xl shadow-slate-200">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-xl text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-sans font-black text-white mb-8 leading-tight tracking-tighter">Enter the<br /><span className="text-emerald-400">Carbon Frontier.</span></h2>
                    <p className="text-slate-400 text-lg mb-10 font-medium">
                        Apply for industry access or discover high-yield green investments today.
                    </p>
                    <Link to="/login" className="inline-flex px-10 py-5 bg-emerald-600 text-white rounded-2xl font-black hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-900/40 tracking-tight">
                        Access Dashboard
                    </Link>
                </div>
                
                <div className="hidden lg:block w-[400px] h-[400px] border-8 border-white/5 rounded-full relative">
                    <div className="absolute inset-0 m-12 border-4 border-emerald-500/20 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Leaf className="w-24 h-24 text-emerald-500/40" />
                    </div>
                </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none bhutanese-pattern" />
        </div>
      </section>
    </div>
  );
}
