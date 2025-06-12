// 🚀 Dhraviq v1.0 — LearnMore Page

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Crown,
  Brain,
  ArrowLeft,
  CheckCircle,
  Target,
  Users,
  BookOpen,
  TrendingUp,
  Award,
  Zap,
  Smartphone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const agendaItems = [
  {
    icon: <Crown />,
    title: "Dhraviq v1.0 Launched",
    description:
      "You're exploring the official first release of Dhraviq — an AI-powered career mentor crafted for Tier-3 colleges.",
    status: "v1",
  },
  {
    icon: <TrendingUp />,
    title: "Industry Trends & Recruiter Insights",
    description:
      "Get updated data on trending careers, hot skills, and company expectations — weekly.",
    status: "upcoming",
  },
  {
    icon: <Award />,
    title: "Resume Builder & Project Library",
    description:
      "Build standout resumes and portfolios using pre-vetted project templates.",
    status: "upcoming",
  },
  {
    icon: <Users />,
    title: "Mentor Access & Peer Networking",
    description:
      "Connect with alumni, mentors, and peer communities aligned with your goals.",
    status: "upcoming",
  },
  {
    icon: <Smartphone />,
    title: "Mobile App & WhatsApp AI Bot",
    description:
      "Take your coach on the go — WhatsApp bot and Android app launching soon.",
    status: "upcoming",
  },
  {
    icon: <Brain />,
    title: "Multi-Agent AI Guidance (Beta)",
    description:
      "GoalPlannerAgent, SkillAdvisorAgent, and MindsetCoach collaborate asynchronously to guide you.",
    status: "beta",
  },
  {
    icon: <Mail />,
    title: "Weekly AI Nudges via Email (Beta)",
    description:
      "Personalized weekly nudges, suggestions, and reflections sent straight to your inbox.",
    status: "beta",
  },
  {
    icon: <CheckCircle />,
    title: "Progress Dashboard (Beta)",
    description:
      "Visually track your journey, completed goals, and upcoming milestones in one dashboard.",
    status: "beta",
  },
  {
    icon: <Target />,
    title: "Career Planning & Roadmap Building",
    description:
      "Define your dream career path and receive a structured roadmap tailored to your domain and year.",
    status: "active",
  },
  {
    icon: <BookOpen />,
    title: "Skill Gap Analysis & Learning Plans",
    description:
      "Identify your current skill gaps and receive curated learning paths powered by AI.",
    status: "active",
  },
  {
    icon: <Users />,
    title: "Mock Interviews & Domain Practice",
    description:
      "Sharpen your interview readiness with targeted question sets and real-time evaluation.",
    status: "active",
  },
  {
    icon: <Brain />,
    title: "Mindset & Confidence Coaching",
    description:
      "Break mental barriers and build confidence with motivational coaching and self-awareness tools.",
    status: "active",
  },
];

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Particles */}
      <div className="particles-bg">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="container mx-auto px-6 py-6 relative z-10">
        <nav className="flex items-center justify-between glass rounded-2xl px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center animate-glow">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">Dhraviq</span>
          </div>
          <Link to="/">
            <Button
              variant="outline"
              className="px-6 py-2 rounded-full glass hover:glass-dark transition-all duration-300 hover-glow"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Journey with
              <span className="text-gradient block mt-2"> Dhraviq</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Explore how our AI mentor helps Tier-3 students transform into
              confident professionals.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12 animate-fade-in">
              Roadmap & Features
            </h2>

            {agendaItems.map((item, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] animate-fade-in ${
                  item.status === "v1"
                    ? "bg-gradient-to-r from-yellow-200 to-yellow-100 shadow-2xl border-2 border-yellow-400"
                    : "glass border border-white/30"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center 
                      ${
                        item.status === "v1"
                          ? "bg-yellow-100 border border-yellow-400 shadow-md"
                          : "bg-white/60 backdrop-blur-md border border-gray-300"
                      }`}
                  >
                    {React.cloneElement(item.icon, {
                      className: "w-6 h-6",
                      color:
                        item.status === "v1"
                          ? "#D97706"
                          : item.status === "active"
                          ? "#16A34A"
                          : item.status === "beta"
                          ? "#CA8A04"
                          : item.status === "upcoming"
                          ? "#2563EB"
                          : "#6B7280",
                    })}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.title}
                      </h3>

                      {item.status === "active" && (
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                          Live Now
                        </div>
                      )}

                      {item.status === "beta" && (
                        <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                          Beta
                        </div>
                      )}

                      {item.status === "upcoming" && (
                        <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          Coming Soon
                        </div>
                      )}

                      {item.status === "v1" && (
                        <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm sm:text-base font-semibold shadow-md">
                          🎊 Version 1.0
                        </div>
                      )}
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call To Action */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl text-white hover-glow animate-fade-in">
            <div className="flex justify-center mb-4">
              <Zap className="h-12 w-12 text-yellow-300 animate-float" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Start Your Transformation
            </h3>
            <p className="text-indigo-100 mb-8 text-lg max-w-2xl mx-auto">
              Thousands of students like you are already unlocking career
              clarity — powered by AI.
            </p>
            <Link to="/chat">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Launch Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-gray-200/50 mt-20 relative z-10">
        <div className="text-center text-gray-600">
          &copy; 2024 Dhraviq. Built for students, powered by purpose.
        </div>
      </footer>
    </div>
  );
};

export default LearnMore;
