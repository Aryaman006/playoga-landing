import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Heart, Sparkles, Users, Globe, ArrowRight, Briefcase, TrendingUp, Building, Gem } from "lucide-react";

import instructorMeditation from "@/assets/instructor-meditation.jpeg";
import instructorPortrait from "@/assets/instructor-portrait.jpeg";
import cofounderAbhishek from "@/assets/cofounder-abhishek.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const About = () => {
  const credentials = [
    { icon: BookOpen, title: "Yoga Acharya", description: "Master's in Yogic Sciences" },
    { icon: Award, title: "PhD Scholar", description: "Yoga Research Scholar" },
    { icon: Sparkles, title: "Biochemist", description: "Scientific Approach to Wellness" },
    { icon: Heart, title: "Mrs. India Top 10", description: "Inspiring Millions" },
  ];

  const milestones = [
    { number: "16+", label: "Years of Experience" },
    { number: "1st", label: "Global Yoga App Launch" },
    { number: "10K+", label: "Students Transformed" },
    { number: "18+", label: "Yoga Categories" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeInUp}
                className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
              >
                The Visionary
              </motion.p>
              
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6"
              >
                Meet <span className="text-gradient-gold">Dt. Bhavika Choradia</span>
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground mb-6"
              >
                A PhD Yoga Research Scholar and Biochemist who has dedicated over 16 years 
                to transforming lives through the perfect blend of ancient yogic wisdom and 
                modern scientific understanding.
              </motion.p>
              
              <motion.p
                variants={fadeInUp}
                className="text-muted-foreground mb-8"
              >
                Recognized as Mrs. India Top 10, Bhavika is not just a yoga instructor—she's 
                a catalyst for transformation. As the first person to launch a global yoga 
                app for universal practice, she's making wellness accessible to everyone, 
                everywhere.
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                <Button variant="gold" size="lg" asChild>
                  <a href="https://app.playoga.co.in" target="_blank" rel="noopener noreferrer">
                    Learn From Bhavika
                    <ArrowRight className="ml-2" size={18} />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={instructorPortrait}
                  alt="Dt. Bhavika Choradia"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-sage/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {credentials.map((credential, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card rounded-2xl p-6 text-center shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <credential.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold mb-1">{credential.title}</h3>
                <p className="text-sm text-muted-foreground">{credential.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={instructorMeditation}
                  alt="Meditation practice"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-1 lg:order-2"
            >
              <motion.div variants={fadeInUp} className="mb-12">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h2 className="text-3xl font-serif font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg">
                  <span className="text-foreground font-medium">
                    Transforming wellness from a luxury into a way of life.
                  </span>
                  {" "}We believe that yoga therapy should be accessible to everyone, 
                  regardless of age, location, or health condition.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Users className="w-10 h-10 text-primary mb-4" />
                <h2 className="text-3xl font-serif font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg">
                  To create a global community of mindful practitioners who embrace 
                  yoga not as exercise, but as a holistic science for complete wellbeing. 
                  One breath, one practice, one transformation at a time.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-sage/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-serif font-bold">
              Journey of <span className="text-gradient-gold">Impact</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <p className="text-5xl md:text-6xl font-serif font-bold text-gradient-gold mb-2">
                  {milestone.number}
                </p>
                <p className="text-muted-foreground">{milestone.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Co-Founder Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={cofounderAbhishek}
                  alt="CA Abhishek Srivastava"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sage/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeInUp}
                className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
              >
                Co-Founder
              </motion.p>
              
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-2"
              >
                CA <span className="text-gradient-gold">Abhishek Srivastava</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-primary/80 font-medium mb-6"
              >
                Chartered Accountant | Entrepreneur | Start-up Investor | Real Estate & Wellness Visionary
              </motion.p>
              
              <motion.p
                variants={fadeInUp}
                className="text-muted-foreground mb-4"
              >
                Abhishek Srivastava is a seasoned Chartered Accountant, Multi-Venture Entrepreneur, 
                and Start-up Investor with a diversified business portfolio spanning Finance, 
                Luxury Real Estate, Diamonds & Jewellery, Bespoke Fashion, E-Commerce, and Wellness Technology.
              </motion.p>
              
              <motion.p
                variants={fadeInUp}
                className="text-muted-foreground mb-6"
              >
                With a rare ability to combine financial discipline with entrepreneurial foresight, 
                he has consistently built and backed ventures rooted in quality, scalability, and 
                long-term value creation.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-4 mb-6"
              >
                {[
                  { icon: Gem, title: "Johri by Amaze", desc: "Diamond Jewellery" },
                  { icon: Briefcase, title: "Amaze Menz", desc: "Bespoke Fashion" },
                  { icon: TrendingUp, title: "Label Purkhin", desc: "Ladies Ethnic Wear" },
                  { icon: Building, title: "Altiuus Realty", desc: "Luxury Real Estate" },
                ].map((venture, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <venture.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{venture.title}</p>
                      <p className="text-xs text-muted-foreground">{venture.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.blockquote
                variants={fadeInUp}
                className="border-l-4 border-primary pl-4 italic text-muted-foreground"
              >
                "Curating Capital, Crafting Luxury, Cultivating Wellness."
              </motion.blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Started Playoga */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Why We Started <span className="text-gradient-gold">Playoga</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6 text-lg text-muted-foreground">
              <p>
                At the heart of Playoga lies a simple belief: <span className="text-foreground font-medium">yoga is not meant 
                to be an occasional activity—it is meant to be a way of life.</span>
              </p>
              
              <p>
                Over time, modern living has distanced us from our own bodies and minds. We often rush towards 
                expensive treatments, medications, and temporary fixes, even for ailments that can be addressed 
                through discipline, mindful living, and consistent yoga practice. Yet, the wisdom to heal 
                already exists within us.
              </p>
              
              <p>
                My own life has been deeply transformed through yoga and meditation—not just physically, but 
                mentally and emotionally. With regular practice came clarity, balance, resilience, and a 
                renewed sense of wellbeing. This personal transformation sparked a powerful realization: 
                if yoga could change my life, it could change countless others too.
              </p>

              <motion.blockquote
                variants={fadeInUp}
                className="border-l-4 border-primary pl-6 py-4 my-8 bg-card rounded-r-xl text-foreground italic"
              >
                "When yoga became part of my daily life, everything changed. Playoga is my way of sharing 
                that transformation with the world."
              </motion.blockquote>

              <p>
                That realization became the foundation of Playoga.
              </p>
              
              <p>
                We started Playoga with a clear purpose—<span className="text-foreground font-medium">to make yoga therapy 
                accessible to everyone</span>, regardless of age, location, or health condition. Wellness should not 
                be a privilege or a luxury; it should be simple, practical, and integrated into daily life.
              </p>
              
              <p>
                Through the Playoga app, we aim to bring structured, science-backed yoga practices to people 
                wherever they are—helping them manage and overcome various ailments naturally, sustainably, 
                and holistically.
              </p>
              
              <p className="text-center text-xl font-serif text-foreground font-medium pt-4">
                Our vision is to build a global community of mindful practitioners who embrace yoga not merely 
                as exercise, but as a holistic science for complete wellbeing.
              </p>
              
              <p className="text-center text-primary font-medium">
                One breath. One practice. One transformation at a time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Transform Your <span className="text-gradient-gold">Life</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join Dt. Bhavika Choradia, CA Abhishek Srivastava, and thousands of practitioners on a journey 
              to complete wellness.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="https://app.playoga.co.in" target="_blank" rel="noopener noreferrer">
                Start Your Journey
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
