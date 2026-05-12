import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  ChevronLeft,
  ExternalLink, 
  Code2, 
  Brain, 
  Palette,
  Send,
  Github,
  Linkedin,
  Terminal,
  Cpu,
  Globe,
  Database,
  Layers,
  Quote
} from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GitHubStats from './components/GitHubStats';
import { 
  PROJECTS, 
  EXPERIENCES, 
  EDUCATIONS, 
  ACHIEVEMENTS, 
  SERVICES, 
  BLOG_POSTS, 
  TESTIMONIALS 
} from './constants';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <Helmet>
          <title>Saurabh Panchal | Full Stack Engineer</title>
          <meta name="description" content="Portfolio of Saurabh Panchal, a Full Stack Engineer specialized in building modern web applications and AI systems." />
          <meta name="keywords" content="Saurabh Panchal, Software Engineer, Portfolio, Full Stack, DTU, Computer Engineering" />
        </Helmet>

        <Navbar />
        
        <main>
          <Hero />

          {/* About Section */}
          <section id="about" className="section-padding relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
              <motion.div {...fadeInUp}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-primary" />
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Biographical // Data</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold mb-10 tracking-tight uppercase leading-[0.9] text-gradient">
                  DECODING <br /> THE HUMAN <br /> ELEMENT
                </h2>
                <div className="space-y-6 text-base sm:text-lg text-muted-foreground font-normal leading-relaxed tracking-wide max-w-xl">
                  <p>
                    I am a Computer Engineering graduate from <span className="text-foreground font-medium border-b border-primary/30 pb-0.5">Delhi Technological University</span>, 
                    architecting high-performance digital experiences.
                  </p>
                  <p>
                    With 3+ years of engineering experience, I specialize in building scalable web ecosystems 
                    and implementing intelligent AI integrations that bridge the gap between abstract logic and human utility.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 pt-12 border-t border-border/50">
                  <div className="group">
                    <h4 className="text-[10px] font-mono text-primary/60 uppercase tracking-[0.4em] mb-3">Geolocation.node</h4>
                    <p className="text-xl font-display font-semibold uppercase tracking-tight">New Delhi, India</p>
                  </div>
                  <div className="group">
                    <h4 className="text-[10px] font-mono text-primary/60 uppercase tracking-[0.4em] mb-3">Experience.log</h4>
                    <p className="text-xl font-display font-semibold uppercase tracking-tight">3+ Years Active</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="relative aspect-[4/5] glass-morphism overflow-hidden rounded-2xl group">
                  <img 
                    src="https://picsum.photos/seed/saurabh/800/1000"
                    alt="Saurabh Panchal"
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-8">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">S.Panchal // System.Init</div>
                    <div className="w-12 h-0.5 bg-primary" />
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl -z-10" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-primary/20 rounded-bl-3xl -z-10" />
              </motion.div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="section-padding bg-muted/20 relative">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-px bg-primary" />
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Service // Models</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold tracking-tight uppercase leading-[0.9] text-gradient">CORE <br /> CAPABILITIES</h2>
                </div>
                <p className="text-muted-foreground max-w-xs font-normal leading-relaxed tracking-wide text-sm sm:text-base">
                  Architecting bespoke digital ecosystems where high-performance engineering meets intuitive design.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
                {[
                  { title: 'Full Stack Engineering', icon: Code2, desc: 'Architecting robust, scalable web applications with React, Node, and secure cloud infrastructures.' },
                  { title: 'AI & Machine Learning', icon: Brain, desc: 'Integrating advanced LLM workflows and automated intelligence into product ecosystems.' },
                  { title: 'System Architecture', icon: Cpu, desc: 'Designing high-availability distributed systems optimized for performance and rapid deployment.' },
                ].map((service, i) => (
                  <motion.div 
                    key={`${service.title}-${i}`} 
                    {...fadeInUp} 
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="glass-card h-full p-8 sm:p-10 group relative overflow-hidden flex flex-col items-start border-none">
                      <div className="absolute -top-12 -right-12 p-6 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-125 transition-all duration-700">
                        <service.icon className="w-48 h-48" />
                      </div>
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-lg shadow-primary/10">
                        <service.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-4 tracking-tight uppercase group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm font-normal tracking-wide flex-grow">{service.desc}</p>
                      <div className="w-full h-px bg-gradient-to-r from-primary/30 to-transparent mt-8" />
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section-padding bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(56,189,248,0.03),transparent_40%)]" />
            <div className="max-w-7xl mx-auto mb-24 flex flex-col md:flex-row justify-between md:items-end gap-12 relative z-10">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-primary" />
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Deployment.Log</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase leading-none">FEATURED <br /> OUTPUT</h2>
              </div>
              <Button variant="outline" className="rounded-none border-foreground/10 font-mono text-[10px] tracking-widest uppercase hover:bg-foreground/5 h-12 px-8" asChild>
                <a href="https://github.com/saurabhpan98" target="_blank" rel="noreferrer">
                  Terminal.GitHub() <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
              {PROJECTS.map((project, i) => (
                <motion.div 
                  key={`${project.id}-${i}`} 
                  {...fadeInUp} 
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden glass-card p-0 mb-8 border-none group-hover:translate-y-[-8px] transition-transform duration-500">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 backdrop-blur-[2px]">
                      <Button size="icon" className="rounded-none w-14 h-14 bg-primary hover:scale-110 transition-transform" asChild>
                        <a href={project.github} target="_blank" rel="noreferrer"><Github className="w-5 h-5 text-primary-foreground" /></a>
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-none w-14 h-14 border-foreground/20 bg-muted/40 hover:bg-muted/60 hover:scale-110 transition-transform">
                        <ExternalLink className="w-5 h-5 text-foreground" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase">{project.tags[0] || 'Module'}</span>
                    <div className="flex-1 h-px bg-border/50" />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4 tracking-tighter uppercase group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-8 font-light text-sm leading-relaxed tracking-wide max-w-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/60">#{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* GitHub Stats Section */}
          <section id="github" className="section-padding relative">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-primary" />
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Contribution.Matrix</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase leading-none">GITHUB <br /> ANALYTICS</h2>
              </div>
              <div className="relative z-10">
                <GitHubStats username="saurabhpan98" />
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="section-padding bg-muted/20 relative">
            <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-px bg-primary" />
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Career // Roadmap</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold tracking-tight uppercase leading-[0.9] text-gradient">PROFESSIONAL <br /> EXPERIENCE</h2>
                </div>
                <p className="text-muted-foreground max-w-sm font-normal leading-relaxed tracking-wide text-sm">
                  A timeline of architectural contributions and leadership in software engineering.
                </p>
              </div>

              <div className="space-y-12 max-w-4xl mx-auto">
                {EXPERIENCES.map((exp, i) => (
                    <motion.div 
                      key={`${exp.company}-${i}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="relative flex gap-6 sm:gap-8 group"
                    >
                      <div className="hidden sm:flex flex-col items-center">
                        <motion.div 
                          whileHover={{ scale: 1.2, rotate: 15 }}
                          className="w-12 h-12 rounded-full glass flex items-center justify-center border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-colors"
                        >
                          <Briefcase className="w-5 h-5 text-primary" />
                        </motion.div>
                        <div className="w-px flex-1 bg-gradient-to-b from-primary/50 to-transparent my-2" />
                      </div>
                      
                      <div className="flex-1 glass-card p-6 sm:p-10 rounded-2xl group-hover:bg-primary/[0.05] group-hover:border-primary/30 transition-all duration-500 relative overflow-hidden border shadow-xl shadow-black/20">
                      <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase tracking-tight mb-1">{exp.role}</h3>
                          <p className="text-primary font-mono text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold">{exp.company}</p>
                        </div>
                        <span className="font-mono text-[10px] text-muted-foreground bg-muted/50 py-1.5 px-4 rounded-full border border-border uppercase tracking-widest self-start sm:self-center">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-5">
                        {exp.description.map((desc, idx) => (
                          <li key={idx} className="flex gap-4 text-sm sm:text-base text-muted-foreground font-normal leading-relaxed tracking-wide">
                            <div className="mt-2 w-2 h-2 shrink-0 bg-primary/60 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.6)]" />
                            <span className="flex-1">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="section-padding bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.05),transparent_50%)]" />
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-px bg-primary" />
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Academic // Log</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold tracking-tight uppercase leading-[0.9] text-gradient">ACADEMIC <br /> FOUNDATION</h2>
                </div>
                <p className="text-muted-foreground max-w-xs font-normal leading-relaxed tracking-wide text-sm">
                  The theoretical groundwork of computer science and complex engineering systems.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {EDUCATIONS.map((edu, i) => (
                  <motion.div 
                    key={`${edu.institution}-${i}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02, y: -10 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                  >
                    <Card className="glass-card h-full p-8 sm:p-12 rounded-3xl group border-none relative overflow-hidden flex flex-col items-start min-h-[300px]">
                      <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-[0.1] group-hover:scale-125 transition-all duration-700">
                        <GraduationCap className="w-40 h-40" />
                      </div>
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-8 border border-primary/20">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex justify-between items-start w-full mb-6">
                        <h3 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-none">{edu.institution}</h3>
                      </div>
                      <p className="font-mono text-[11px] text-primary uppercase tracking-[0.3em] mb-4 font-bold">{edu.period}</p>
                      <p className="text-xl font-display mb-6 text-foreground uppercase tracking-tight font-bold">{edu.degree}</p>
                      <p className="text-muted-foreground text-sm sm:text-base font-normal leading-relaxed tracking-wide flex-grow">{edu.details}</p>
                      <div className="w-full h-px bg-gradient-to-r from-primary/30 to-transparent mt-10" />
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="section-padding bg-muted/20 relative">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12 text-left">
                <div className="max-w-2xl">
                  <div className="flex items-center justify-start gap-3 mb-6">
                    <div className="w-8 h-px bg-primary" />
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Honor // Index</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold tracking-tight uppercase leading-[0.9] text-gradient">KEY <br /> ACHIEVEMENTS</h2>
                </div>
                <p className="text-muted-foreground max-w-xs font-normal leading-relaxed tracking-wide text-sm mx-auto md:mx-0">
                  Recognitions and honors earned through technical excellence and innovation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {ACHIEVEMENTS.map((ach, i) => (
                  <motion.div 
                    key={`${ach.title}-${i}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                  >
                    <Card className="glass-card h-full p-10 rounded-3xl group border-none relative overflow-hidden transition-all duration-500">
                      <div className="absolute -bottom-10 -right-10 p-4 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-150 transition-all duration-1000">
                        <Award className="w-40 h-40 text-primary" />
                      </div>
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-lg shadow-primary/20 border border-primary/20">
                        <Award className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-black uppercase tracking-tight mb-3 group-hover:text-primary transition-colors leading-tight">{ach.title}</h3>
                      <p className="text-primary text-[10px] font-mono tracking-[0.35em] uppercase mb-6 font-bold">{ach.issuer}</p>
                      <p className="text-muted-foreground text-sm sm:text-base font-normal leading-relaxed tracking-wide">
                        {ach.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="section-padding bg-muted/20 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_50%,rgba(56,189,248,0.05),transparent_50%)]" />
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-primary" />
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Ecosystem.Array</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 tracking-tighter uppercase leading-none">TECHNICAL <br /> STACK</h2>
                <p className="text-base text-muted-foreground font-light leading-relaxed tracking-wide mb-12 max-w-lg">
                  Specialized in the React ecosystem with a focus on high-performance architectures, 
                  system scalability, and intelligent agentic integrations.
                </p>
                <div className="flex flex-wrap gap-4">
                  {['TypeScript', 'React', 'Node.js', 'Next.js', 'PostgreSQL', 'Docker', 'AWS', 'Redis', 'Tailwind', 'Git', 'D3.js', 'Python'].map((skill, i) => (
                    <Badge key={`${skill}-${i}`} className="px-6 py-3 text-[10px] font-mono rounded-none uppercase tracking-[0.2em] glass-card border-border bg-muted/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all cursor-default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="glass-card rounded-none p-12 border-border bg-muted/30">
                <div className="space-y-12">
                  {[
                    { name: 'Core Infrastructure', level: 95, icon: Layers },
                    { name: 'System Engineering', level: 90, icon: Database },
                    { name: 'Architecture Design', level: 85, icon: Globe },
                  ].map(item => (
                    <div key={item.name} className="group">
                      <div className="flex justify-between items-end mb-4 pr-1">
                        <div className="flex items-center gap-3">
                          <item.icon className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
                          <span className="font-display font-bold text-sm uppercase tracking-widest">{item.name}</span>
                        </div>
                        <span className="font-mono text-[10px] text-primary">{item.level}%</span>
                      </div>
                      <div className="h-px w-full bg-border relative">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "circOut" }}
                          className="absolute h-px bg-primary shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="section-padding bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.05),transparent_60%)]" />
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="flex flex-col items-center text-center mb-20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-primary" />
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Validation // Index</span>
                  <div className="w-8 h-px bg-primary" />
                </div>
                <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight uppercase leading-[0.9] text-gradient">ENDORSEMENTS</h2>
              </div>

              <div className="relative max-w-5xl mx-auto">
                <div className="overflow-hidden px-4 py-12">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial}
                      initial={{ opacity: 0, x: 100, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -100, scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      className="glass-card p-10 sm:p-16 rounded-[2.5rem] border border-border relative shadow-2xl shadow-black/40"
                    >
                      <Quote className="absolute top-10 right-10 w-20 h-20 text-primary/5 -z-10" />
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-10 relative">
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 p-1 bg-background"
                          >
                            <img src={TESTIMONIALS[activeTestimonial].avatar} alt={TESTIMONIALS[activeTestimonial].name} className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                          </motion.div>
                          <div className="absolute -bottom-2 -right-2 bg-primary p-2 rounded-full shadow-lg">
                            <Quote className="w-4 h-4 text-primary-foreground" />
                          </div>
                        </div>
                        
                        <p className="text-xl sm:text-2xl italic font-light mb-12 leading-relaxed text-foreground tracking-wide max-w-3xl">
                          "{TESTIMONIALS[activeTestimonial].content}"
                        </p>
                        
                        <div>
                          <h4 className="text-2xl font-display font-bold uppercase tracking-tight text-gradient">{TESTIMONIALS[activeTestimonial].name}</h4>
                          <p className="text-[11px] font-mono text-primary uppercase tracking-[0.4em] mt-2 font-bold">{TESTIMONIALS[activeTestimonial].role}</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex justify-center items-center gap-8 mt-8">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={prevTestimonial}
                    className="w-14 h-14 rounded-full border-border bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all group"
                  >
                    <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </Button>
                  <div className="flex gap-3">
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTestimonial(i)}
                        className={`h-1.5 transition-all duration-500 rounded-full ${activeTestimonial === i ? 'w-8 bg-primary shadow-[0_0_8px_rgba(139,92,246,0.5)]' : 'w-2 bg-foreground/20 hover:bg-foreground/40'}`}
                      />
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={nextTestimonial}
                    className="w-14 h-14 rounded-full border-border bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all group"
                  >
                    <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <section className="section-padding bg-muted/20 relative">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-px bg-primary" />
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Intelligence.Stream</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase leading-none">RECENT <br /> INSIGHTS</h2>
                </div>
                <p className="text-muted-foreground max-w-sm font-light leading-relaxed tracking-wide">
                  Sharing technical perspectives on software engineering, distributed systems, and modern design patterns.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {BLOG_POSTS.map((post, i) => (
                  <motion.div key={`${post.id}-${i}`} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                    <Card className="glass-card rounded-none hover:bg-muted/50 transition-all cursor-pointer p-10 group relative border-t-0 border-r-0 border-b-2 border-l-0 border-b-primary/20 hover:border-b-primary">
                      <div className="flex justify-between items-center mb-8 pr-1">
                        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">{post.date}</span>
                        <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest bg-muted/50 px-2 py-0.5">{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-6 group-hover:text-primary transition-colors uppercase tracking-tight leading-snug">{post.title}</h3>
                      <p className="text-muted-foreground font-light mb-10 leading-relaxed tracking-wide text-sm">{post.excerpt}</p>
                      <Button variant="link" className="p-0 text-primary font-mono text-[10px] uppercase tracking-[0.3em] group-hover:translate-x-2 transition-transform">
                        Read.Data() <ChevronRight className="ml-2 w-3.5 h-3.5" />
                      </Button>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section-padding bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(56,189,248,0.03),transparent_40%)]" />
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-primary" />
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Transmission.Node</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 tracking-tighter uppercase leading-none">INITIALIZE <br /> CONNECTION</h2>
                <p className="text-base text-muted-foreground font-light leading-relaxed tracking-wide mb-16 max-w-lg">
                  Available for architectural consulting, full-stack engineering, and deep-tech collaborations.
                </p>
                
                <div className="space-y-10">
                  {[
                    { icon: Mail, label: 'Email.Protocol', value: 'srbhpanchal98@gmail.com' },
                    { icon: Globe, label: 'Digital.Presence', value: 'saurabhpan98 (GitHub)' },
                    { icon: MapPin, label: 'Geo.Location', value: 'New Delhi, India' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-8 group">
                      <div className="w-14 h-14 bg-muted/50 border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] mb-1">{item.label}</h4>
                        <p className="text-lg font-display font-bold uppercase tracking-tight">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div {...fadeInUp} className="glass-card rounded-none p-12 bg-muted/30 border-border">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-primary">Identity.String</Label>
                      <Input id="name" placeholder="Name" className="bg-muted/50 border-border rounded-none h-12 px-5 font-mono text-sm focus:border-primary transition-colors" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-primary">Email.Protocol</Label>
                      <Input id="email" type="email" placeholder="Email" className="bg-muted/50 border-border rounded-none h-12 px-5 font-mono text-sm focus:border-primary transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-primary">Payload.Content</Label>
                    <Textarea id="message" placeholder="Initialize message body..." className="bg-muted/50 border-border rounded-none min-h-[160px] p-5 font-mono text-sm focus:border-primary transition-colors" />
                  </div>
                  <Button size="lg" className="w-full h-14 rounded-none bg-primary text-primary-foreground font-mono text-[10px] uppercase tracking-[0.4em] hover:bg-primary/90 transition-all">
                    Execute.Send() <Send className="ml-4 w-4 h-4" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </section>
        </main>

        <footer className="py-20 px-6 border-t border-border bg-muted/30">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-xl font-display font-bold tracking-tighter uppercase">SAURABH <span className="text-primary">PANCHAL</span></h2>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em]">
                &copy; 2026 Saurabh Panchal. Engineered for Excellence.
              </p>
            </div>
            <div className="flex items-center gap-10">
              {[
                { icon: Github, href: 'https://github.com/saurabhpan98' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: 'mailto:srbhpanchal98@gmail.com' },
                { icon: Terminal, href: '#' },
              ].map((item, i) => (
                <a key={i} href={item.href} className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
  );
}

