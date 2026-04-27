import { motion } from "motion/react";
import { Coins, Zap, ShieldCheck, ArrowRight, TrendingUp, Handshake, Globe, Award, Sun, Waves, Wind, BarChart4, Target } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function Financing() {
  const options = [
    {
      title: "Emission Modernization Loan",
      amount: "Nu. 5M - 20M",
      rate: "4.5% APR",
      desc: "For industries upgrading to low-emission technology. Collateralized by future carbon credits.",
      icon: <Zap className="text-emerald-600" />
    },
    {
      title: "Solar Transition Equity",
      amount: "Nu. 15M+",
      rate: "Equity Based",
      desc: "Partner with national green funds to transition your factory to 100% solar energy.",
      icon: <Globe className="text-sky-600" />
    },
    {
      title: "Micro-Green Credits",
      amount: "Nu. 100K - 1M",
      rate: "0% for 12mo",
      desc: "Small business grants for immediate sustainability improvements and IoT sensor installation.",
      icon: <Award className="text-bcx-saffron" />
    }
  ];

  return (
    <div className="pt-32 pb-20 bhutanese-pattern min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <header className="max-w-3xl mb-16">
          <span className="inline-block px-3 py-1 mb-6 text-[9px] font-black tracking-widest text-emerald-600 uppercase bg-emerald-50 border border-emerald-100 rounded-full">
            Bhutan Trust Fund Integration
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-black text-slate-800 mb-6 tracking-tighter leading-tight">
            Green Finance for <br />
            <span className="text-emerald-600">Pure Progress.</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl">
            Access low-interest capital and equity partners dedicated to Bhutan's carbon-neutral constitutional mandate.
          </p>
        </header>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
           {[
             { label: "Global Fund Cap", val: "Nu. 4.5B", trend: "+$20M Flow" },
             { label: "Interest Avg", val: "4.2%", trend: "Historic Low" },
             { label: "Projects Funded", val: "842 Units", trend: "+12 This Week" },
             { label: "Approval Time", val: "72 Hours", trend: "Express Verification" },
           ].map((stat, i) => (
             <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-2xl font-black text-slate-800 mb-1">{stat.val}</p>
                <p className="text-[9px] font-black text-emerald-500 tracking-tight uppercase leading-none">{stat.trend}</p>
             </div>
           ))}
        </div>

        {/* Main Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <Handshake className="w-24 h-24" />
              </div>
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-emerald-600/5">
                {option.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-4">{option.title}</h3>
              <div className="flex gap-4 mb-6">
                  <div className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-lg">{option.amount}</div>
                  <div className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-lg">{option.rate}</div>
              </div>
              <p className="text-slate-500 leading-relaxed font-medium mb-10">{option.desc}</p>
              <button className="w-full py-4 bg-slate-900 group-hover:bg-emerald-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-slate-200 active:scale-95 leading-none">
                Start Application
              </button>
            </motion.div>
          ))}
        </div>

        {/* Feature Banner */}
        <section className="mt-20">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                <div className="max-w-xl relative z-10">
                    <h2 className="text-4xl font-black mb-6 tracking-tight">Bhutan Carbon Credit Reserve</h2>
                    <p className="text-slate-400 text-lg mb-8 font-medium">Use your existing verified carbon credits as high-liquidity collateral for immediate expansion loans.</p>
                    <div className="flex gap-4">
                        <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl text-xs uppercase tracking-widest transition-all shadow-2xl shadow-emerald-900/40 leading-none">Check Eligibility</button>
                        <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl text-xs font-black uppercase tracking-widest transition-all leading-none">Learn More</button>
                    </div>
                </div>
                <div className="hidden lg:block relative z-10 w-full h-[300px]">
                    <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] rounded-full"></div>
                    <div className="w-full h-full border border-white/5 rounded-[2.5rem] p-8">
                        <div className="flex justify-between items-center mb-8">
                            <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Live Flow Index</p>
                            <TrendingUp className="text-emerald-500" />
                        </div>
                        <div className="space-y-6">
                            {[1, 0.8, 0.9, 1.2].map((h, i) => (
                                <div key={i} className="h-4 bg-white/5 rounded-full relative overflow-hidden">
                                    <motion.div 
                                      initial={{ width: 0 }}
                                      whileInView={{ width: `${60 * (i + 1) / 4}%` }}
                                      className="absolute left-0 top-0 bottom-0 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bhutanese-pattern" />
          </div>
        </section>
      </div>
    </div>
  );
}
