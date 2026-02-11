import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  ArrowRight,
  Circle,
  Loader2,
  Flame,
  Activity,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

/* ================= CONFIG ================= */

const SUPABASE_URL = "https://xoampivltwofgecadktc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvYW1waXZsdHdvZmdlY2Fka3RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxOTg4OTksImV4cCI6MjA4NTc3NDg5OX0.Vo2-tIrsOegAC6aYpmSwa1U6cRQUHbFxszxX2pQuKG4";

/* ================= ANIMATIONS ================= */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/* ================= TYPES ================= */

interface LiveSession {
  id: string;
  title: string;
  description: string;
  scheduled_at: string;
  duration_minutes: number;
  thumbnail_url: string | null;
  is_live: boolean | null;
  is_premium: boolean | null;
}

/* ================= HELPERS ================= */

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (date.toDateString() === now.toDateString()) return "Today";
  if (date.toDateString() === tomorrow.toDateString()) return "Tomorrow";

  return date.toLocaleDateString("en-IN", { month: "short", day: "numeric" });
};

const formatTime = (dateStr: string) =>
  new Date(dateStr).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

const isLiveNow = (start: string, duration: number) => {
  const startTime = new Date(start).getTime();
  const endTime = startTime + duration * 60 * 1000;
  const now = Date.now();
  return now >= startTime && now <= endTime;
};

/* ================= COMPONENT ================= */

export default function Classes() {
  const [classes, setClasses] = useState<LiveSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchSessions = async () => {
      setProgress(10);

      const timer = setInterval(
        () => setProgress((p) => Math.min(p + 15, 85)),
        200
      );

      try {
        const res = await fetch(
          `${SUPABASE_URL}/rest/v1/live_sessions?select=*&order=scheduled_at.asc`,
          {
            headers: {
              apikey: SUPABASE_ANON_KEY,
              Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            },
          }
        );

        if (!res.ok) throw new Error("Failed to fetch sessions");

        const data: LiveSession[] = await res.json();
        setClasses(data);
      } catch (err) {
        console.error("Error loading live sessions", err);
      } finally {
        clearInterval(timer);
        setProgress(100);
        setTimeout(() => setLoading(false), 300);
      }
    };

    fetchSessions();
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-20 pb-12 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-serif font-bold"
        >
          Upcoming <span className="text-gradient-gold">Live Classes</span>
        </motion.h1>
        <p className="text-muted-foreground mt-4">
          Practice live with expert guidance and community energy
        </p>
      </section>

      {/* CONTENT */}
      <section className="py-16 container mx-auto px-4">
        {loading ? (
          <div className="text-center py-20">
            <Loader2 className="mx-auto animate-spin mb-4" />
            <Progress value={progress} className="max-w-md mx-auto" />
          </div>
        ) : classes.length === 0 ? (
          <div className="text-center py-20">
            <Calendar className="mx-auto mb-4 opacity-40" size={48} />
            <p className="text-muted-foreground">
              No upcoming live classes yet
            </p>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-4 max-w-4xl mx-auto"
          >
            {classes.map((cls) => {
              const live = isLiveNow(
                cls.scheduled_at,
                cls.duration_minutes
              );

              return (
                <motion.div
                  key={cls.id}
                  variants={fadeInUp}
                  className="bg-card rounded-2xl overflow-hidden shadow-soft border flex flex-col md:flex-row"
                >
                  <div className="relative md:w-48 h-32 md:h-auto">
                    <img
                      src={
                        cls.thumbnail_url ||
                        "https://images.unsplash.com/photo-1554344058-2d5a5a8c0f65"
                      }
                      className="w-full h-full object-cover"
                    />
                    {live && (
                      <div className="absolute top-2 left-2 bg-destructive text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                        <Circle size={8} fill="currentColor" /> LIVE
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-grow">
                    <p className="text-sm text-primary font-medium mb-1">
                      {formatDate(cls.scheduled_at)} •{" "}
                      {formatTime(cls.scheduled_at)}
                    </p>

                    <h3 className="text-xl font-serif font-semibold mb-1">
                      {cls.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-3">
                      {cls.description}
                    </p>

                    <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {cls.duration_minutes} min
                      </span>
                      <span className="flex items-center gap-1">
                        <Flame size={14} /> Live energy burn
                      </span>
                      <span className="flex items-center gap-1">
                        <Activity size={14} /> Full body focus
                      </span>
                    </div>

                    <Button variant={live ? "gold" : "outline"} asChild>
                      <a
                        href="https://app.playoga.co.in"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {live ? "Join Now" : "Book Spot"}
                      </a>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Never Miss a <span className="text-gradient-gold">Session</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Unlock all live classes + full video library with Playoga Premium
        </p>
        <Button variant="hero" size="xl" asChild>
          <a
            href="https://app.playoga.co.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get All-Access — ₹999/year
            <ArrowRight className="ml-2" size={20} />
          </a>
        </Button>
      </section>
    </Layout>
  );
}
