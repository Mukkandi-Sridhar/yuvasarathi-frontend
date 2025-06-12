
import { motion } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

interface FloatingActionButtonProps {
  onScrollToTop: () => void;
  onScrollToBottom: () => void;
}

const FloatingActionButton = ({ onScrollToTop, onScrollToBottom }: FloatingActionButtonProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(true);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const scrollTop = target.scrollTop;
      const scrollHeight = target.scrollHeight;
      const clientHeight = target.clientHeight;
      
      setShowScrollTop(scrollTop > 100);
      setShowScrollBottom(scrollTop < scrollHeight - clientHeight - 100);
    };

    const chatContainer = document.querySelector('.chat-scroll');
    if (chatContainer) {
      chatContainer.addEventListener('scroll', handleScroll);
      return () => chatContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="fixed bottom-24 right-4 flex flex-col gap-2 z-40">
      {showScrollTop && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onScrollToTop}
          className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
      
      {showScrollBottom && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onScrollToBottom}
          className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.button>
      )}
    </div>
  );
};

export default FloatingActionButton;
