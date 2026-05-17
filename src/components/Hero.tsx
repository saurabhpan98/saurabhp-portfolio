import { motion } from 'framer-motion';
import { ArrowRight, FileText, ChevronDown, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-12 overflow-hidden pt-32 pb-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.15),transparent_70%)]" />
        
        {/* Animated Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
        />

        {/* Floating Ethereal Orbs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full"
        />

        {/* Scanning Line Animation */}
        <motion.div
          animate={{
            top: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/10 to-transparent z-10 hidden md:block opacity-30"
        />
      </div>
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-12">
          <div className="w-12 h-px bg-primary/30" />
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.4em] uppercase text-primary font-semibold">
            Status: System.Operational
          </span>
          <div className="w-12 h-px bg-primary/30" />
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-display font-black tracking-tighter mb-10 leading-[0.8] py-2"
        >
          <span className="text-gradient block">SAURABH</span>
          <span className="text-primary dark:text-primary-foreground drop-shadow-[0_0_35px_rgba(139,92,246,0.3)] block">
            PANCHAL
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-14 font-sans font-normal leading-relaxed tracking-wide px-4"
        >
          Architecting resilient digital ecosystems with a focus on 
          <span className="text-foreground font-semibold"> High-Availability</span> 
          and 
          <span className="text-foreground font-semibold"> Intelligent Agents</span>.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button 
            size="lg" 
            className="w-full sm:w-auto rounded-full px-10 h-16 text-sm font-display font-bold tracking-wider uppercase group bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 relative overflow-hidden"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">View.Projects()</span>
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <motion.div 
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-foreground/10 px-10 h-16 text-sm font-display font-bold tracking-wider uppercase backdrop-blur-md hover:bg-foreground/[0.05] transition-all">
            <FileText className="mr-3 w-5 h-5" />
            Resume.pdf
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating Indicators */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-10 hidden xl:block"
      >
        <div className="flex items-center gap-4 font-mono text-[10px] text-muted-foreground uppercase tracking-widest vertical-rl rotate-180">
          <span className="text-primary font-bold">2026 // EDITION</span>
          <div className="h-24 w-px bg-gradient-to-t from-primary/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
