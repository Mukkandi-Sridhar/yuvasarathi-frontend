
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden">
      {/* Background Particles */}
      <div className="particles-bg opacity-30">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="text-center max-w-md mx-auto px-6 relative z-10">
        <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-glow">
          <Brain className="h-12 w-12 text-white animate-float" />
        </div>
        
        <h1 className="text-8xl font-bold text-gradient mb-4 animate-fade-in">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4 animate-fade-in">Page Not Found</h2>
        <p className="text-gray-600 mb-8 leading-relaxed animate-fade-in">
          The page you're looking for doesn't exist. Let's get you back to your career journey with Dhraviq.
        </p>
        
        <div className="space-y-4 animate-slide-up">
          <Link to="/">
            <Button className="btn-modern px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-xl">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </Link>
          
          <div>
            <Link to="/chat">
              <Button variant="outline" className="px-8 py-3 rounded-full glass hover:glass-dark transition-all duration-300 hover-glow">
                Start Chatting
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
