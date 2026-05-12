import { motion } from 'framer-motion';
import { ArrowRight, FileText, ChevronDown, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-12 overflow-hidden py-32 md:py-0">
      {/* Structural Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.15),transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full opacity-50" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full opacity-50" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "circOut" }}
        className="relative z-10 w-full max-w-5xl mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-12 h-px bg-primary/30" />
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.4em] uppercase text-primary font-semibold">
            Status: System.Operational
          </span>
          <div className="w-12 h-px bg-primary/30" />
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-display font-black tracking-tighter mb-10 leading-[0.8] text-gradient py-2">
          SAURABH <br />
          <span className="drop-shadow-[0_0_35px_rgba(139,92,246,0.3)]">PANCHAL</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-14 font-sans font-normal leading-relaxed tracking-wide px-4">
          Architecting resilient digital ecosystems with a focus on 
          <span className="text-foreground font-semibold"> High-Availability</span> 
          and 
          <span className="text-foreground font-semibold"> Intelligent Agents</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button 
            size="lg" 
            className="w-full sm:w-auto rounded-full px-10 h-16 text-sm font-display font-bold tracking-wider uppercase group bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View.Projects()
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-foreground/10 px-10 h-16 text-sm font-display font-bold tracking-wider uppercase backdrop-blur-md hover:bg-foreground/[0.05] transition-all">
            <FileText className="mr-3 w-5 h-5" />
            Resume.pdf
          </Button>
        </div>
      </motion.div>

      {/* Floating Indicators */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
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
