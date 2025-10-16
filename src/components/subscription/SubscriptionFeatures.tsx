import { motion } from "framer-motion";
import { Truck, Leaf, BookOpen, Gift, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Fresh fruits delivered right to your doorstep at no extra cost",
  },
  {
    icon: Leaf,
    title: "Seasonal Freshness Guarantee",
    description: "Only the freshest, in-season fruits handpicked from local orchards",
  },
  {
    icon: BookOpen,
    title: "Natural Storage Tips",
    description: "Get expert tips with each delivery to keep your fruits fresh longer",
  },
  {
    icon: Gift,
    title: "Ganga Valley Story Card",
    description: "Learn the journey of each fruit from our valley to your home",
  },
  {
    icon: CheckCircle2,
    title: "Surprise Fruit Occasionally",
    description: "Delight in seasonal surprises and discover new favorites",
  },
];

const SubscriptionFeatures = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-leaf/5 via-primary/5 to-river/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-valley mb-4">
            What's Included in Your Subscription
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience wellness delivered with care, quality, and a touch of nature's magic
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-leaf/30 flex items-center justify-center mb-4">
                <feature.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-foreground/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionFeatures;
