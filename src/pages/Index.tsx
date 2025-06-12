
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, MessageSquare, Target, Users, Star, BookOpen, TrendingUp, Mail, Phone, MapPin, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import EducationalAnimations from "@/components/EducationalAnimations";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Engineering Student",
      content: "Dhraviq helped me understand my career options after engineering. The AI mentor is incredibly insightful!",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Rahul Kumar",
      role: "Commerce Graduate",
      content: "Being from a small town, I had limited guidance. Dhraviq changed everything for me!",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Anita Patel",
      role: "Science Student",
      content: "The personalized career roadmap gave me clarity on my goals. Highly recommended!",
      rating: 5,
      avatar: "AP"
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Guidance",
      description: "Get personalized career advice from our intelligent AI mentor trained specifically for Tier-3 students"
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Set clear, achievable career goals with step-by-step roadmaps tailored to your aspirations"
    },
    {
      icon: BookOpen,
      title: "Skill Development",
      description: "Discover relevant skills and get recommendations for courses and certifications"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your career development journey with detailed progress insights and milestones"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <EducationalAnimations />
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md border-b border-white/20"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center animate-glow">
              <Brain className="h-6 w-6 text-white animate-pulse" />
            </div>
            <span className="text-xl font-bold text-gradient">Dhraviq</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/chat" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Chat
            </Link>
            <Link to="/learn-more" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Learn More
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Contact
            </Link>
            <Link to="/chat">
              <Button className="btn-modern px-6 py-2 rounded-full">
                Start Chat
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-indigo-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/20"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link to="/" className="block text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2">
                Home
              </Link>
              <Link to="/chat" className="block text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2">
                Chat
              </Link>
              <Link to="/learn-more" className="block text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2">
                Learn More
              </Link>
              <Link to="/contact" className="block text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2">
                Contact
              </Link>
              <Link to="/chat" className="block">
                <Button className="btn-modern w-full rounded-full py-3 text-lg">
                  Start Chat
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        style={{ y: y1 }}
        className="pt-24 pb-16 px-4 relative z-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto max-w-6xl text-center"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-white/50 border-white/30">
              AI-Powered Career Mentorship
            </Badge>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient mb-6 leading-tight"
          >
            Your AI Career
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-shift bg-300%">
              Mentor for Success
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Navigate your career journey with Dhraviq - an intelligent AI mentor that understands 
            the unique challenges of Tier-3 students and guides you toward success.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/chat">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="btn-modern px-8 py-4 text-lg font-semibold rounded-full shadow-2xl min-w-48 h-14">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start Your Journey
                </Button>
              </motion.div>
            </Link>
            
            <Link to="/learn-more">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="px-8 py-4 text-lg font-semibold rounded-full glass hover:glass-dark transition-all duration-300 border-white/30 min-w-48 h-14">
                  Learn More
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        style={{ y: y2 }}
        className="py-16 px-4 relative z-10"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6">
              Why Choose Dhraviq?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for Indian Tier-3 students with empathy, understanding, and real-world guidance
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="glass hover-glow border-white/20 shadow-xl h-full">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-semibold text-gray-800">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Dhraviq has transformed careers of students like you
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="glass hover-glow border-white/20 shadow-xl h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 border-white/20 shadow-2xl"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Brain className="h-8 w-8 text-white" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of students who have already started their journey to success with Dhraviq
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/chat">
                <Button className="btn-modern px-8 py-4 text-lg font-semibold rounded-full shadow-2xl">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start Chatting Now
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 px-4 relative z-10 border-t border-white/20 glass backdrop-blur-md">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gradient">Dhraviq</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Empowering Tier-3 students with AI-powered career guidance and mentorship.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-gray-600 hover:text-indigo-600 transition-colors">Home</Link>
                <Link to="/chat" className="block text-gray-600 hover:text-indigo-600 transition-colors">Chat</Link>
                <Link to="/learn-more" className="block text-gray-600 hover:text-indigo-600 transition-colors">Learn More</Link>
                <Link to="/contact" className="block text-gray-600 hover:text-indigo-600 transition-colors">Contact</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">ilovegreatepicmahabharat@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+91 9392886199</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Kadapa, India</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                >
                  <Users className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                >
                  <MessageSquare className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-gray-600">
              © 2025 Dhraviq. All rights reserved. Built with ❤️ for Indian students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
