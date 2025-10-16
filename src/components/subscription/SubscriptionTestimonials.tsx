import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    combo: "Tropical Sunrise",
    quote: "The freshness is unmatched! My mornings feel more energized, and I love the natural sweetness of these fruits.",
    benefit: "Increased energy & better digestion",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    combo: "Valley Boost",
    quote: "Haven't fallen sick once since I started this subscription. The pomegranates and amla are absolute game-changers!",
    benefit: "Stronger immunity",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    combo: "Detox Delight",
    quote: "My skin has never looked better! The combination of cucumber and green apple works wonders.",
    benefit: "Glowing skin & hydration",
    rating: 5,
  },
];

const SubscriptionTestimonials = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-valley mb-4">
            What Our Subscribers Say
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real stories from real people experiencing the Ganga Valley difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full border-2 border-leaf/30 bg-gradient-to-br from-card to-leaf/5 hover:shadow-float transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="text-mango" />
                  ))}
                </div>

                <p className="text-foreground/90 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="mt-auto">
                  <p className="font-semibold text-foreground mb-1">{testimonial.name}</p>
                  <p className="text-sm text-primary/80 mb-2">Using: {testimonial.combo}</p>
                  <div className="inline-block bg-gradient-to-r from-river/20 to-sky/20 border border-river/30 rounded-full px-3 py-1">
                    <p className="text-xs text-foreground/70 font-medium">
                      ✨ {testimonial.benefit}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionTestimonials;
