import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Play, Clock, Users, ArrowRight } from "lucide-react";

import bungeeYoga from "@/assets/bungee-yoga.jpg";
import aquaYoga from "@/assets/aqua-yoga.jpg";
import pranayama from "@/assets/pranayama.jpg";
import therapyYoga from "@/assets/therapy-yoga.jpg";
import heroYoga from "@/assets/hero-yoga.jpg";
import liveClass from "@/assets/live-class.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const categories = [
  "All",
  "Disease Management",
  "Pranayama",
  "Meditation",
  "Yoga Therapy",
  "Fitness",
  "Wellness",
];

// 33 health categories from Playoga
const healthCategories = [
  "Hair Loss",
  "Back Problems",
  "Asthma",
  "Arthritis",
  "Heart Problems",
  "Anxiety",
  "Low Hemoglobin",
  "Anti-aging",
  "Diabetes",
  "Stress Management",
  "Prostate Problems",
  "Osteoporosis",
  "Nose Allergy",
  "Neck Problems",
  "Menstrual Problems",
  "Menopause",
  "Liver Problems",
  "Knee Problems",
  "Insomnia",
  "Thyroid",
  "Migraine",
  "Fatigue",
  "Edema",
  "Obesity",
  "Memory Loss",
  "Breathing Problems",
  "Bone Problems",
  "Blood Pressure",
  "Bladder Problems",
  "Leg Pain",
  "Head Pain",
  "Eye Pain",
  "Stomach Disorders",
];

const courseImages = [pranayama, bungeeYoga, aquaYoga, therapyYoga, heroYoga, liveClass];

const courses = [
  {
    title: "Foundation Pranayama",
    category: "Pranayama",
    image: pranayama,
    duration: "12 classes",
    students: "2.5K+",
    level: "Beginner",
  },
  {
    title: "Aerial Bungee Yoga",
    category: "Fitness",
    image: bungeeYoga,
    duration: "8 classes",
    students: "1.2K+",
    level: "Intermediate",
  },
  {
    title: "Aqua Yoga Fitness",
    category: "Fitness",
    image: aquaYoga,
    duration: "10 classes",
    students: "900+",
    level: "All Levels",
  },
  {
    title: "Therapeutic Yoga",
    category: "Yoga Therapy",
    image: therapyYoga,
    duration: "15 classes",
    students: "3.1K+",
    level: "Beginner",
  },
  {
    title: "Morning Flow Meditation",
    category: "Meditation",
    image: heroYoga,
    duration: "21 classes",
    students: "4.8K+",
    level: "All Levels",
  },
  {
    title: "Stress Relief Program",
    category: "Wellness",
    image: liveClass,
    duration: "14 classes",
    students: "2.1K+",
    level: "Beginner",
  },
  {
    title: "Advanced Pranayama",
    category: "Pranayama",
    image: pranayama,
    duration: "16 classes",
    students: "1.8K+",
    level: "Advanced",
  },
  {
    title: "Power Yoga Flow",
    category: "Fitness",
    image: bungeeYoga,
    duration: "20 classes",
    students: "3.5K+",
    level: "Intermediate",
  },
  {
    title: "PCOD Management",
    category: "Disease Management",
    image: aquaYoga,
    duration: "12 classes",
    students: "2.2K+",
    level: "All Levels",
  },
  // Add disease management courses
  ...healthCategories.slice(0, 9).map((condition, index) => ({
    title: `${condition} Yoga Program`,
    category: "Disease Management",
    image: courseImages[index % courseImages.length],
    duration: `${8 + (index % 10)} classes`,
    students: `${(1 + index * 0.3).toFixed(1)}K+`,
    level: index % 3 === 0 ? "Beginner" : index % 3 === 1 ? "Intermediate" : "All Levels",
  })),
];

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = activeCategory === "All"
    ? courses
    : courses.filter(course => course.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.p
              variants={fadeInUp}
              className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
            >
              Course Library
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif font-bold mb-6"
            >
              Explore <span className="text-gradient-gold">100+ Courses</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground"
            >
              From ancient wisdom to modern techniques, discover programs 
              designed for every age and every need across <span className="text-primary font-semibold">33 health categories</span>.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Health Categories */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6"
          >
            <h3 className="text-lg font-serif font-semibold mb-4">33 Disease Management Categories</h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
              {healthCategories.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-card text-muted-foreground border border-border/50"
                >
                  {cat}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sticky top-20 bg-background/80 backdrop-blur-lg z-40 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                layout
                className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-[hsl(40,33%,98%)] flex items-center justify-center shadow-lg">
                      <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Level Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[hsl(40,33%,98%)]/90 backdrop-blur rounded-full text-xs font-medium">
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-primary font-medium uppercase tracking-wider mb-2">
                    {course.category}
                  </p>
                  <h3 className="text-lg font-serif font-semibold mb-4">
                    {course.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      {course.students}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-6">
              Ready to start your practice?
            </p>
            <Button variant="gold" size="lg" asChild>
              <a href="https://app.playoga.co.in" target="_blank" rel="noopener noreferrer">
                Access All Courses — ₹999/year
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
