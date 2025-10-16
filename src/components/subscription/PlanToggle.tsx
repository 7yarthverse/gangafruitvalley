import { motion } from "framer-motion";
import { Calendar, RefreshCw, Clock } from "lucide-react";

interface PlanToggleProps {
  planType: "today-only" | "weekly" | "monthly";
  setPlanType: (type: "today-only" | "weekly" | "monthly") => void;
}

const PlanToggle = ({ planType, setPlanType }: PlanToggleProps) => {
  const getActivePosition = () => {
    if (planType === "today-only") return 0;
    if (planType === "weekly") return "calc(33.333% + 5.33px)";
    return "calc(66.666% + 10.66px)";
  };

  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="relative bg-card border-2 border-primary/30 rounded-full p-2 shadow-soft">
          <motion.div
            className="absolute top-2 left-2 h-[calc(100%-16px)] bg-gradient-to-r from-mango to-accent rounded-full"
            initial={false}
            animate={{
              width: "calc(33.333% - 5.33px)",
              x: getActivePosition(),
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          
          <div className="relative z-10 grid grid-cols-3 gap-2">
            <button
              onClick={() => setPlanType("today-only")}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-full transition-colors ${
                planType === "today-only" ? "text-foreground" : "text-foreground/70"
              }`}
            >
              <Clock size={18} />
              <span className="font-medium hidden sm:inline">Today Only</span>
              <span className="font-medium sm:hidden">Today</span>
            </button>
            
            <button
              onClick={() => setPlanType("weekly")}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-full transition-colors ${
                planType === "weekly" ? "text-foreground" : "text-foreground/70"
              }`}
            >
              <RefreshCw size={18} />
              <span className="font-medium">Weekly</span>
            </button>
            
            <button
              onClick={() => setPlanType("monthly")}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-full transition-colors ${
                planType === "monthly" ? "text-foreground" : "text-foreground/70"
              }`}
            >
              <Calendar size={18} />
              <span className="font-medium">Monthly</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanToggle;
