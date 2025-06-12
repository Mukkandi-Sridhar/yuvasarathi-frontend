
import { useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import { Heart, Star, Zap, Trophy, BookOpen } from 'lucide-react';

const motivationalQuotes = [
  { text: "You're doing great — just stay consistent!", icon: Heart },
  { text: "One skill a day keeps regret away. 🌟", icon: Star },
  { text: "Tier-3 is your strength, not a weakness. 🔥", icon: Trophy },
  { text: "Every expert was once a beginner. Keep learning!", icon: BookOpen },
  { text: "Your potential is unlimited. Believe in yourself!", icon: Zap },
  { text: "Small steps daily lead to big results yearly.", icon: Star },
  { text: "Knowledge is the only investment that pays dividends.", icon: BookOpen },
  { text: "Your college doesn't define you, your skills do.", icon: Trophy },
  { text: "Practice makes progress, not perfection.", icon: Heart },
  { text: "Dream big, start small, act now!", icon: Zap },
  { text: "Consistency beats intensity every time.", icon: Star },
  { text: "You are capable of amazing things!", icon: Heart },
  { text: "Learning never exhausts the mind.", icon: BookOpen },
  { text: "Success is the sum of small efforts repeated.", icon: Trophy },
  { text: "Believe you can and you're halfway there.", icon: Zap },
  { text: "Growth begins at the end of your comfort zone.", icon: Star },
  { text: "Your journey is unique and valuable.", icon: Heart },
  { text: "Skills + Persistence = Success", icon: Trophy },
  { text: "Today's learning is tomorrow's strength.", icon: BookOpen },
  { text: "You're building your future, one day at a time.", icon: Zap },
  { text: "Embrace challenges, they make you stronger.", icon: Star },
  { text: "Your dedication will pay off!", icon: Heart },
  { text: "Focus on progress, not perfection.", icon: Trophy },
  { text: "Every question you ask makes you smarter.", icon: BookOpen },
  { text: "Your mindset determines your success.", icon: Zap }
];

interface MotivationalQuotesProps {
  isActive?: boolean;
}

const MotivationalQuotes = ({ isActive = true }: MotivationalQuotesProps) => {
  useEffect(() => {
    if (!isActive) return;

    const showRandomQuote = () => {
      const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
      const IconComponent = randomQuote.icon;
      
      toast({
        title: "💫 Stay Motivated",
        description: (
          <div className="flex items-center gap-2">
            <IconComponent className="h-4 w-4 text-indigo-500" />
            <span>{randomQuote.text}</span>
          </div>
        ),
        duration: 4000,
        className: "border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50"
      });
    };

    // Show first quote after 10 seconds
    const initialTimer = setTimeout(() => {
      showRandomQuote();
    }, 10000);

    // Then show quotes every 60-90 seconds
    const interval = setInterval(() => {
      showRandomQuote();
    }, Math.random() * 30000 + 60000); // 60-90 seconds

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isActive]);

  return null; // This component doesn't render anything visible
};

export default MotivationalQuotes;
