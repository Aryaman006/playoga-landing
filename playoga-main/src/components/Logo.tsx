import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

const Logo = ({ className = "", showTagline = false }: LogoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex flex-col items-start ${className}`}
    >
      <img 
        src="https://firebasestorage.googleapis.com/v0/b/the-notary-app.appspot.com/o/Email%20Icons%2Fplayoga.png?alt=media&token=748f8c0d-4713-4959-ae34-a04ba2c9f944" 
        alt="Playoga - Love • Inspire • Breathe" 
        className="h-12 md:h-14 w-auto"
      />
      
      {showTagline && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xs md:text-sm tracking-[0.3em] text-primary uppercase mt-2 text-left"
        >
          Love ✦ Inspire ✦ Breathe
        </motion.p>
      )}
    </motion.div>
  );
};

export default Logo;
