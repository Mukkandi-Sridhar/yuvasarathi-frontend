import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Send, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import FloatingActionButton from "@/components/FloatingActionButton";
import MotivationalQuotes from "@/components/MotivationalQuotes";

const API_URL = "https://yuvasarathi-backend.onrender.com/chat";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm Dhraviq, your AI career mentor. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_input: inputMessage, chat_history: [] }),
      });

      const data = await res.json();
      const botMessage: Message = {
        id: Date.now().toString() + "-bot",
        content:
          data.response?.trim() ||
          "⚠️ Sorry, I couldn’t understand. Try rephrasing your question.",
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString() + "-err",
          content: "⚠️ Server error. Please try again later.",
          isBot: true,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative">
      <MotivationalQuotes isActive={true} />

      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="glass backdrop-blur-md border-b border-white/20 p-4 sticky top-0 z-50"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center"
            >
              <Brain className="h-6 w-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-gradient">Dhraviq AI Mentor</h1>
              <p className="text-sm text-gray-600 hidden sm:block">
                Your career guidance companion
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">
              Home
            </Link>
            <Link to="/learn-more" className="text-gray-600 hover:text-indigo-600">
              Learn More
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-indigo-600">
              Contact
            </Link>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-indigo-600"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.header>

      {/* Chat Body */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto chat-scroll p-4 space-y-4"
      >
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`flex gap-3 ${msg.isBot ? "justify-start" : "justify-end"}`}
            >
              {msg.isBot && (
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    <Brain className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              )}
              <div className={`max-w-[85%] sm:max-w-[70%] ${msg.isBot ? "order-2" : "order-1"}`}>
                <Card
                  className={`${
                    msg.isBot
                      ? "glass border-white/30"
                      : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-none"
                  }`}
                >
                  <CardContent className="p-3 sm:p-4">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
                      p: ({ children }) => <p className="prose prose-sm sm:prose-base max-w-none">{children}</p>
                        }}>
                        {msg.content}
                    </ReactMarkdown>

                    <p className={`text-xs mt-2 ${msg.isBot ? "text-gray-500" : "text-white/70"}`}>
                      {formatTime(msg.timestamp)}
                    </p>
                  </CardContent>
                </Card>
              </div>
              {!msg.isBot && (
                <Avatar className="w-8 h-8 order-2">
                  <AvatarFallback className="bg-gray-600 text-white">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            className="flex gap-3 justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <Brain className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <Card className="glass border-white/30">
              <CardContent className="p-3 sm:p-4">
                <div className="typing-indicator flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="glass backdrop-blur-md border-t border-white/20 p-4 sticky bottom-0"
      >
        <div className="flex gap-2 sm:gap-3 items-end max-w-4xl mx-auto">
          <div className="flex-1">
            <Textarea
              ref={textareaRef}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about careers, goals, courses or skills..."
              className="glass border-white/30 focus:border-indigo-400 resize-none min-h-[50px] max-h-32 text-sm sm:text-base"
              rows={1}
            />
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="btn-modern h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-xl"
            >
              <Send className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <FloatingActionButton
        onScrollToTop={() => {
          chatContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onScrollToBottom={() => {
          messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>
  );
};

export default Chat;
