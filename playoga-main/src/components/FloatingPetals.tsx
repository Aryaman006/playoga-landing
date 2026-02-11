import { motion } from "framer-motion";
import { useMemo } from "react";

const FloatingPetals = () => {
  const petals = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      size: 10 + Math.random() * 15,
      opacity: 0.2 + Math.random() * 0.3,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: petal.left,
            top: -50,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(petal.id) * 100, Math.cos(petal.id) * 50, 0],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Lotus petal shape */}
          <svg
            width={petal.size}
            height={petal.size * 1.5}
            viewBox="0 0 20 30"
            style={{ opacity: petal.opacity }}
          >
            <path
              d="M10 0 C5 8, 0 15, 10 30 C20 15, 15 8, 10 0"
              fill="hsl(42 70% 55%)"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingPetals;
