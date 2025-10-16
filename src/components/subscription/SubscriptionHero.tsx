import { motion } from "framer-motion";
import { Apple, Cherry, Leaf } from "lucide-react";

const SubscriptionHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-leaf/10 to-river/20">
      {/* Floating fruit elements */}
      <motion.div
        className="absolute top-20 left-10 text-mango opacity-30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Apple size={60} />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-16 text-guava opacity-30"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Cherry size={50} />
      </motion.div>

      <motion.div
        className="absolute top-40 right-32 text-leaf opacity-20"
        animate={{ 
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Leaf size={70} />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-gradient-valley mb-6"
        >
          Subscribe to Wellness
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/80 leading-relaxed"
        >
          Choose your perfect fruit combo and enjoy fresh, seasonal, and handpicked produce delivered weekly or monthly
        </motion.p>
      </div>
    </section>
  );
};

export default SubscriptionHero;
