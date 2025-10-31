import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const faqs = [
  {
    question: "How often do I receive fruit?",
    answer: "Depending on your chosen plan, you'll receive fresh fruit deliveries either weekly (every 7 days) or monthly (once a month). You can change your delivery frequency anytime from your account settings.",
  },
  {
    question: "Can I pause or change combos?",
    answer: "Absolutely! You have full flexibility to pause your subscription, skip deliveries, or switch to a different fruit combo at any time. Simply log in to your account and manage your preferences.",
  },
  {
    question: "Are these fruits organic?",
    answer: "We source the freshest seasonal fruits from trusted local farms in the Ganga valley region. While not all fruits are certified organic, we prioritize natural farming practices and ensure all produce is thoroughly washed and quality-checked before delivery.",
  },
  {
    question: "What if I'm not satisfied with my delivery?",
    answer: "Your satisfaction is our priority. If you're not happy with any delivery, contact us within 24 hours and we'll provide a replacement or full refund, no questions asked.",
  },
  {
    question: "Can I customize my fruit selection?",
    answer: "Yes! While our combos are carefully curated for maximum health benefits, you can use our 'Build Your Own Basket' feature to create a custom selection of your 5 favorite fruits.",
  },
];

const SubscriptionFAQ = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-leaf/5 to-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-valley mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/70">
            Everything you need to know about your fruit subscription
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-primary/20 rounded-lg px-6 data-[state=open]:shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-leaf/10 to-primary/10 border-2 border-primary/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Already a subscriber?
            </h3>
            <p className="text-foreground/70 mb-6">
              Log in to manage your subscription, view delivery history, and update your preferences
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-leaf hover:shadow-soft transition-all duration-300"
            >
              <LogIn size={20} />
              View Your Combo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscriptionFAQ;
