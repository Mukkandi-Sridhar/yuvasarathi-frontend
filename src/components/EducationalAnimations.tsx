
import { motion } from "framer-motion";
import { Brain, BookOpen, Target, TrendingUp } from "lucide-react";

const EducationalAnimations = () => {
  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-20, 0, -20],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotateVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Books */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-20 left-10 text-indigo-200 opacity-20"
        style={{ animationDelay: "0s" }}
      >
        <BookOpen className="h-16 w-16" />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-40 right-20 text-purple-200 opacity-20"
        style={{ animationDelay: "1s" }}
      >
        <BookOpen className="h-12 w-12" />
      </motion.div>

      {/* Pulsing Brain */}
      <motion.div
        variants={pulseVariants}
        initial="initial"
        animate="animate"
        className="absolute top-60 left-1/4 text-blue-200 opacity-30"
      >
        <Brain className="h-20 w-20" />
      </motion.div>

      {/* Rotating Target */}
      <motion.div
        variants={rotateVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-40 right-10 text-indigo-200 opacity-25"
      >
        <Target className="h-14 w-14" />
      </motion.div>

      {/* Trending Up Arrow */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-20 left-20 text-green-200 opacity-20"
        style={{ animationDelay: "2s" }}
      >
        <TrendingUp className="h-18 w-18" />
      </motion.div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
};

export default EducationalAnimations;
