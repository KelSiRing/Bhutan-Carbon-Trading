import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Leaf, Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { NAVIGATION, BRAND } from "@/src/constants";
import { useAuth } from "@/src/AuthContext";
import { cn } from "@/src/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, profile, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="max-w-7xl mx-auto glass rounded-3xl h-20 px-8 flex items-center justify-between border border-slate-200/50">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200 group-hover:scale-105 transition-transform">
            <Leaf size={24} strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-xl font-black tracking-tighter text-slate-800 leading-none">BCX</div>
            <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none mt-1">Bhutan Carbon</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {NAVIGATION.filter(item => !item.private).map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="px-5 py-2.5 text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="px-5 py-2 bg-slate-900 text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                Dashboard
              </Link>
              <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
                <div className="text-right hidden sm:block">
                  <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Balance</div>
                  <div className="text-xs font-black text-emerald-600 font-mono leading-none">{profile?.carbonCredits || 0} CRD</div>
                </div>
                <button 
                  onClick={() => logout()}
                  className="p-2.5 bg-slate-100/50 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-xl transition-all group"
                >
                  <LogOut size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-6 py-3 bg-emerald-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 active:scale-95"
            >
              Industry Access
            </Link>
          )}
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1, marginTop: "1rem" } : { height: 0, opacity: 0, marginTop: 0 }}
        className="md:hidden overflow-hidden glass rounded-3xl"
      >
        <div className="px-6 py-8 space-y-4">
          {NAVIGATION.filter(item => !item.private).map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100">
            {user ? (
              <div className="space-y-4">
                <Link
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-4 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => { logout(); setIsOpen(false); }}
                  className="block w-full text-center px-4 py-4 bg-red-50 text-red-500 rounded-xl text-xs font-black uppercase tracking-widest"
                >
                  Sign Out
                </button>
              </div>
            ) : (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-4 bg-emerald-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-emerald-200"
                >
                  Industry Access
                </Link>
            )}
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
