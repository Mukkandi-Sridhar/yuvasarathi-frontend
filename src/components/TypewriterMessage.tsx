
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '@/hooks/useTypewriter';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Brain } from 'lucide-react';

interface TypewriterMessageProps {
  content: string;
  timestamp: Date;
  onComplete?: () => void;
}

const TypewriterMessage = ({ content, timestamp, onComplete }: TypewriterMessageProps) => {
  const { displayedText, isTyping } = useTypewriter({
    text: content,
    speed: 50,
    delay: 500,
    onComplete
  });

  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [displayedText]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex gap-3 justify-start"
      ref={messageRef}
    >
      <Avatar className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
        <AvatarFallback className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs">
          <Brain className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>
      
      <div className="max-w-[85%] sm:max-w-[70%] order-2">
        <Card className="glass border-white/30 shadow-lg">
          <CardContent className="p-3 sm:p-4">
            <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap font-mono">
              {displayedText}
              {isTyping && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block w-2 h-5 bg-indigo-500 ml-1"
                />
              )}
            </p>
            <p className="text-xs mt-2 text-gray-500">
              {formatTime(timestamp)}
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default TypewriterMessage;
