import { BRAND } from "@/src/constants";
import { Leaf, Globe, ShieldCheck, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-12 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center space-x-3 group mb-8">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                <Leaf size={24} strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-xl font-black tracking-tighter text-slate-800 leading-none">BCX</div>
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none mt-1">Bhutan Carbon</div>
              </div>
            </Link>
            <p className="text-slate-500 font-medium leading-relaxed mb-8 max-w-sm">
              The national exchange platform for verified carbon credits. Powering Bhutan's constitutional mandate for environmental preservation through next-gen IoT and financial technology.
            </p>
            <div className="flex gap-4">
                {[Globe, ShieldCheck, Mail].map((Icon, i) => (
                    <div key={i} className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:text-emerald-600 hover:bg-emerald-50 transition-all cursor-pointer">
                        <Icon size={18} />
                    </div>
                ))}
            </div>
          </div>
          
          <div className="hidden md:block col-span-1"></div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Exchange</h4>
            <ul className="space-y-4">
              {["Marketplace", "Active Trades", "Price Indices", "Mining Nodes"].map((item) => (
                <li key={item}>
                    <a href="#" className="text-sm font-black text-slate-700 hover:text-emerald-600 transition-all flex items-center gap-1 group">
                        {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Financing</h4>
            <ul className="space-y-4">
              {["Green Loans", "Equity Partner", "Micro-Grants", "Credit Reserve"].map((item) => (
                <li key={item}>
                    <a href="#" className="text-sm font-black text-slate-700 hover:text-emerald-600 transition-all flex items-center gap-1 group">
                        {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Newsletter</h4>
            <div className="p-1 bg-slate-100 rounded-2xl flex">
                <input 
                    type="email" 
                    placeholder="name@industry.bt" 
                    className="bg-transparent border-none px-4 py-3 text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:ring-0 w-full"
                />
                <button className="px-4 py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95">
                    Sync
                </button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Net-Zero Node 0.4.2 BT</span>
            </div>
            
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">© {new Date().getFullYear()} BCX. BHUTAN CARBON EXCHANGE. ALL RIGHTS RESERVED.</p>
            
            <div className="flex gap-8">
                <a href="#" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-emerald-600 transition-colors">Privacy</a>
                <a href="#" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-emerald-700 transition-colors">Legal</a>
            </div>
        </div>
      </div>
      
      {/* Decorative back pattern */}
      <div className="absolute left-0 bottom-0 opacity-[0.03] pointer-events-none bhutanese-pattern w-full h-64 grayscale" />
    </footer>
  );
}
