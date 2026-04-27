import { motion } from "motion/react";
import { Leaf, ArrowRight, ShieldCheck, Mail, Lock, Chrome, Globe, Award } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/src/AuthContext";
import { useEffect } from "react";

export default function LoginPage() {
  const { login, user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleLogin = async () => {
    await login();
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bhutanese-pattern overflow-hidden">
      {/* Visual Side */}
      <div className="hidden lg:flex flex-1 relative bg-slate-900 items-center justify-center p-20 overflow-hidden">
         <div className="absolute inset-0 bhutanese-pattern opacity-[0.03] scale-150 rotate-12" />
         <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full -mr-48 -mt-48 blur-[100px]" />
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full -ml-48 -mb-48 blur-[100px]" />
         
         <div className="relative z-10 max-w-lg">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               className="mb-12"
            >
                <div className="w-16 h-16 bg-emerald-600 rounded-3xl flex items-center justify-center text-white mb-8 shadow-2xl shadow-emerald-900/50">
                    <Leaf size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6 leading-tight tracking-tight">
                    Powering Bhutan's <br />
                    <span className="text-emerald-500">Green Constitution.</span>
                </h2>
                <p className="text-slate-400 text-lg font-medium leading-relaxed">
                    Access the national carbon node to synchronize your industrial emissions with global climate standards.
                </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                {[
                  { label: "Verified Nodes", val: "1,248", icon: <Globe className="text-emerald-500" /> },
                  { label: "Reserve Cap", val: "Nu. 4.5B", icon: <Award className="text-emerald-500" /> },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 shadow-inner">{stat.icon}</div>
                     <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
                        <p className="text-lg font-black text-white leading-none">{stat.val}</p>
                     </div>
                  </div>
                ))}
            </div>
         </div>
      </div>

      {/* Login Side */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white relative">
         <div className="absolute top-0 right-0 p-12 opacity-5 lg:hidden">
            <Leaf size={120} className="text-emerald-600 rotate-12" />
         </div>
         
         <div className="w-full max-w-sm">
            <div className="mb-12 text-center md:text-left">
                <div className="lg:hidden inline-flex p-3 bg-emerald-50 rounded-2xl text-emerald-600 mb-6">
                    <Leaf size={28} />
                </div>
                <h1 className="text-3xl font-black text-slate-800 mb-2 tracking-tight">Industry Access</h1>
                <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Exchange Gateway Node 0xBCX</p>
            </div>

            <div className="space-y-6">
                <button 
                  onClick={handleLogin}
                  disabled={loading}
                  className="w-full py-4 bg-white border border-slate-100 rounded-2xl flex items-center justify-center gap-4 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all shadow-sm group active:scale-[0.98] disabled:opacity-50"
                >
                  <div className="p-1 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all">
                    <Chrome size={20} className="text-slate-800" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-700">Continue with Google</span>
                </button>

                <div className="relative py-4 flex items-center justify-center">
                   <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-50"></div></div>
                   <span className="relative bg-white px-4 text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">Enterprise Synchronize</span>
                </div>

                <div className="space-y-4 opacity-40">
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input 
                            type="text" 
                            disabled 
                            placeholder="Enterprise Identity" 
                            className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-100 rounded-2xl text-sm font-bold placeholder:text-slate-300 cursor-not-allowed outline-none" 
                        />
                    </div>
                    <button disabled className="w-full py-4 bg-slate-100 text-slate-400 rounded-2xl text-xs font-black uppercase tracking-widest cursor-not-allowed flex items-center justify-center gap-2">
                        <span>Secure Sync</span>
                        <Lock size={14} />
                    </button>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-emerald-500" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">End-to-End Encrypted</span>
                </div>
                <Link to="/" className="text-[10px] font-black text-emerald-600 uppercase tracking-widest hover:text-emerald-700 transition-colors">Emergency Protocol</Link>
            </div>
         </div>
      </div>
    </div>
  );
}
