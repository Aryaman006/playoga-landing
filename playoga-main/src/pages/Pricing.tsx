import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, Star, Sparkles, ArrowRight, Heart } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const Pricing = () => {
  const features = [
    "Unlimited VOD Library Access",
    "100+ Specialized Courses",
    "Live Scheduled Classes",
    "Disease Management Programs",
    "Teacher Training Access",
    "Global Community Access",
    "Progress Tracking",
    "Personal Practice Planner",
    "Priority Support",
  ];

  const comparisons = [
    { feature: "On-Demand Video Library", included: true },
    { feature: "Live Interactive Classes", included: true },
    { feature: "18+ Yoga Categories", included: true },
    { feature: "Disease Management Programs", included: true },
    { feature: "Personalized Recommendations", included: true },
    { feature: "Community Forum Access", included: true },
    { feature: "Certificate of Completion", included: true },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="text-primary uppercase tracking-widest text-sm mb-4">
              Simple Pricing
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">
              One Plan. <span className="text-gradient-gold">Unlimited Wellness.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              Everything you need for complete transformation — no tiers, no confusion.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-lg mx-auto"
          >
            <div className="relative bg-card rounded-3xl p-8 md:p-10 shadow-elevated border border-primary/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-primary to-gold-dark text-primary-foreground px-4 py-1.5 rounded-full flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4" fill="currentColor" />
                  Most Popular
                </div>
              </div>

              <div className="text-center mb-8 pt-4">
                <h2 className="text-2xl font-serif font-bold mb-2">Playoga All-Access</h2>
                <p className="text-muted-foreground mb-6">Complete wellness at your fingertips</p>

                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-serif font-bold text-gradient-gold">
                    ₹999
                  </span>
                  <span className="text-muted-foreground">/ year</span>
                </div>

                <p className="text-sm text-muted-foreground mt-2">
                  Less than ₹3/day for unlimited wellness
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{f}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA + GST */}
              <div className="flex flex-col items-center gap-2">
                <Button variant="hero" size="xl" className="w-full" asChild>
                  <a href="https://app.playoga.co.in" target="_blank" rel="noopener noreferrer">
                    Start Your Journey
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                </Button>

                <p className="text-xs text-muted-foreground">
                  * Additional GST will be applied at checkout
                </p>
              </div>

              <p className="text-center text-xs text-muted-foreground mt-4">
                30-day money-back guarantee • Cancel anytime
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Begin Your <span className="text-gradient-gold">Transformation</span>?
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Join thousands already transforming with Playoga.
            </p>

            <div className="flex flex-col items-center gap-2">
              <Button variant="hero" size="xl" asChild>
                <a href="https://app.playoga.co.in" target="_blank" rel="noopener noreferrer">
                  Get All-Access for ₹999/year
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>

              <p className="text-xs text-muted-foreground">
                * Additional GST will be applied at checkout
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
