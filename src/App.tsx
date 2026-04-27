import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Marketplace from "./pages/Marketplace";
import Financing from "./pages/Financing";
import Community from "./pages/Community";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./AuthContext";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="h-screen flex items-center justify-center bhutanese-pattern"><span className="animate-pulse text-bcx-emerald font-serif text-2xl font-bold italic">BCX Secure Load...</span></div>;
  return user ? <>{children}</> : <Navigate to="/login" />;
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/community" element={<Community />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            {/* Future routes */}
            <Route path="/register" element={<div className="pt-32 text-center container mx-auto">Registration Coming Soon</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}




