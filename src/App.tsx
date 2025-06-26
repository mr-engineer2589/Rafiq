import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronRight, 
  Mail, 
  Phone, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Sparkles, 
  Zap, 
  Code, 
  LineChart, 
  MessageSquare,
  Users,
  BookOpen,
  Calendar,
  Brain,
  Heart,
  Star,
  Play,
  Download,
  Sun,
  Moon,
  Globe,
  Monitor
} from 'lucide-react';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import { Textarea } from './components/ui/Textarea';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/Card';
import { Badge } from './components/ui/Badge';
import { FeatureCard } from './components/FeatureCard';
import { TestimonialCard } from './components/TestimonialCard';
import { ScrollRevealSection } from './components/ScrollRevealSection';
import { AuthDemo } from './components/auth/AuthDemo';
import { ThemeProvider, useTheme } from './components/ThemeProvider';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [authPage, setAuthPage] = useState<'login' | 'signup' | null>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const getThemeIcon = () => {
    return theme === 'light' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />;
  };

  // Show auth demo if requested
  if (authPage) {
    return <AuthDemo initialPage={authPage} />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20 text-gray-900 dark:text-gray-100 theme-transition">
        {/* Header */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`sticky top-0 z-50 w-full glass-effect ${scrollY > 50 ? "shadow-lg glow-effect" : ""} theme-transition`}
        >
          <div className="w-full px-6 flex h-16 items-center justify-between max-w-none">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="h-10 w-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg glow-effect"
              >
                <Brain className="h-5 w-5 text-white" />
              </motion.div>
              <span className="font-bold text-xl gradient-text">
                Rafiq
              </span>
            </div>
            
            <nav className="hidden md:flex gap-6">
              {["Features", "For Teachers", "For Parents", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm font-medium theme-transition hover:text-pink-500 dark:hover:text-pink-400 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 theme-transition group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="relative overflow-hidden"
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {getThemeIcon()}
                </motion.div>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setAuthPage('login')}
                className="hover-lift"
              >
                Log In
              </Button>
              <Button 
                size="sm"
                onClick={() => setAuthPage('signup')}
                className="hover-lift glow-effect"
              >
                Get Started
              </Button>
            </div>
            
            <button className="flex md:hidden text-gray-900 dark:text-gray-100 theme-transition" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </motion.header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 glass-effect-strong md:hidden"
            >
              <div className="w-full px-6 flex h-16 items-center justify-between max-w-none">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-xl gradient-text">
                    Rafiq
                  </span>
                </div>
                <button onClick={toggleMenu} className="text-gray-900 dark:text-gray-100 theme-transition">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <motion.nav
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="w-full px-6 grid gap-3 pb-8 pt-6 max-w-none"
              >
                {["Features", "For Teachers", "For Parents", "About", "Contact"].map((item, index) => (
                  <motion.div key={index} variants={itemFadeIn}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="flex items-center justify-between px-4 py-3 text-lg font-medium rounded-xl theme-transition hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                      onClick={toggleMenu}
                    >
                      {item}
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </motion.div>
                ))}
                <motion.div variants={itemFadeIn} className="pt-4 border-t border-gray-200/50 dark:border-gray-800/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Theme</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleTheme}
                      className="capitalize"
                    >
                      {getThemeIcon()}
                      <span className="ml-2">{theme}</span>
                    </Button>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mb-3 hover-lift"
                    onClick={() => {
                      setAuthPage('login');
                      toggleMenu();
                    }}
                  >
                    Log In
                  </Button>
                  <Button 
                    className="w-full hover-lift glow-effect"
                    onClick={() => {
                      setAuthPage('signup');
                      toggleMenu();
                    }}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-20 md:py-32 w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-50 dark:opacity-30" />
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 dark:bg-pink-500/10 mix-blend-normal filter blur-[128px] animate-pulse animation-delay-200" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 mix-blend-normal filter blur-[128px] animate-pulse animation-delay-800" />
            </div>
            
            <div className="w-full px-6 relative z-10 max-w-none">
              <div className="mx-auto max-w-4xl text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 inline-flex items-center glass-effect px-4 py-2 text-sm rounded-full"
                >
                  <Sparkles className="mr-2 h-4 w-4 text-pink-500" />
                  Your Learning Companion
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl text-balance"
                >
                  Meet Rafiq – Your All-in-One Learning Companion
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="mb-8 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed text-balance"
                >
                  A new way to learn, teach, and parent – built for today's world of distractions. 
                  Bringing calm, focus, and progress back into education.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex flex-col gap-4 sm:flex-row sm:justify-center"
                >
                  <Button size="lg" className="h-14 px-10 text-lg hover-lift glow-effect whitespace-nowrap">
                    <span className="whitespace-nowrap">Explore Student Dashboard</span>
                  </Button>
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg hover-lift whitespace-nowrap">
                    Try Smart Tracker
                  </Button>
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg hover-lift whitespace-nowrap">
                    Discover Parent Cards
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Why Rafiq Section */}
          <ScrollRevealSection className="py-20 md:py-32 w-full">
            <div className="w-full px-6 max-w-none">
              <div className="mx-auto max-w-4xl text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="mb-6 inline-flex items-center glass-effect px-4 py-2 text-sm rounded-full"
                >
                  <Zap className="mr-2 h-4 w-4 text-pink-500" />
                  Why Rafiq?
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl text-balance"
                >
                  We live in the age of distraction
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed text-balance"
                >
                  Rafiq is built to bring calm, focus, and progress back into education.
                </motion.p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
                <FeatureCard
                  icon={<Users className="h-8 w-8" />}
                  title="Student Dashboard"
                  description="A clean, distraction-free interface that helps students focus on what matters most – their learning journey."
                  delay={0}
                />
                <FeatureCard
                  icon={<Calendar className="h-8 w-8" />}
                  title="Smart Calendar & Tracker"
                  description="AI-powered scheduling that adapts to your peak learning hours and tracks progress automatically."
                  delay={0.1}
                />
                <FeatureCard
                  icon={<BookOpen className="h-8 w-8" />}
                  title="Courses Page"
                  description="Beautifully organized course materials with progress tracking and personalized recommendations."
                  delay={0.2}
                />
              </div>
            </div>
          </ScrollRevealSection>

          {/* AI Features Section */}
          <ScrollRevealSection className="py-20 md:py-32 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20 w-full theme-transition">
            <div className="w-full px-6 max-w-none">
              <div className="mx-auto max-w-4xl text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="mb-6 inline-flex items-center glass-effect px-4 py-2 text-sm rounded-full"
                >
                  <Brain className="mr-2 h-4 w-4 text-purple-500" />
                  AI That Understands You
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl text-balance"
                >
                  No more app-hopping
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed text-balance"
                >
                  Rafiq's AI explains concepts, finds your best study hours, and even chats with you like a therapist.
                </motion.p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
                <FeatureCard
                  icon={<MessageSquare className="h-8 w-8" />}
                  title="Explain Hard Topics"
                  description="Break down complex concepts into digestible explanations tailored to your learning style."
                  delay={0}
                />
                <FeatureCard
                  icon={<LineChart className="h-8 w-8" />}
                  title="Peak Study Time Detection"
                  description="AI analyzes your patterns to identify when you're most focused and productive."
                  delay={0.1}
                />
                <FeatureCard
                  icon={<Heart className="h-8 w-8" />}
                  title="Mentor & Coach"
                  description="Talk like a mentor, coach, or friend – providing emotional support when you need it most."
                  delay={0.2}
                />
                <FeatureCard
                  icon={<Calendar className="h-8 w-8" />}
                  title="Daily Study Planner"
                  description="Personalized daily schedules that adapt to your goals, deadlines, and energy levels."
                  delay={0.3}
                />
              </div>
            </div>
          </ScrollRevealSection>

          {/* For Teachers Section */}
          <ScrollRevealSection className="py-20 md:py-32 w-full" id="for-teachers">
            <div className="w-full px-6 max-w-none">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center max-w-7xl mx-auto">
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-6 inline-flex items-center glass-effect px-4 py-2 text-sm rounded-full"
                  >
                    <Users className="mr-2 h-4 w-4 text-green-500" />
                    For Teachers
                  </motion.div>
                  
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl text-balance"
                  >
                    Simplified. Streamlined. Supercharged.
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mb-8 text-xl text-gray-600 dark:text-gray-400 leading-relaxed text-balance"
                  >
                    No need for ChatGPT – it's built in. Focus on teaching while Rafiq handles the rest.
                  </motion.p>
                  
                  <div className="space-y-4">
                    {[
                      "Clean dashboard with intuitive navigation",
                      "Easy content upload with AI assistance",
                      "Real-time student analytics and insights",
                      "AI helps summarize reviews and suggest feedback"
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="h-2 w-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" />
                        <span className="text-gray-900 dark:text-gray-100 theme-transition">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="glass-effect p-8 rounded-2xl hover-lift">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <LineChart className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 theme-transition">Teacher Dashboard</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">Real-time insights</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-100/50 dark:bg-gray-800/50 rounded-xl theme-transition">
                        <span className="text-sm text-gray-700 dark:text-gray-300 theme-transition">Class Average</span>
                        <Badge variant="secondary">87%</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-100/50 dark:bg-gray-800/50 rounded-xl theme-transition">
                        <span className="text-sm text-gray-700 dark:text-gray-300 theme-transition">Assignments Submitted</span>
                        <Badge variant="secondary">24/28</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-100/50 dark:bg-gray-800/50 rounded-xl theme-transition">
                        <span className="text-sm text-gray-700 dark:text-gray-300 theme-transition">AI Feedback Generated</span>
                        <Badge variant="secondary">156</Badge>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollRevealSection>

          {/* For Parents Section */}
          <ScrollRevealSection className="py-20 md:py-32 bg-gradient-to-br from-pink-50/50 to-purple-50/50 dark:from-pink-950/20 dark:to-purple-950/20 w-full theme-transition" id="for-parents">
            <div className="w-full px-6 max-w-none">
              <div className="mx-auto max-w-4xl text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="mb-6 inline-flex items-center glass-effect px-4 py-2 text-sm rounded-full"
                >
                  <Heart className="mr-2 h-4 w-4 text-pink-500" />
                  For Parents – Introducing Family Snaps
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl text-balance"
                >
                  You don't need to scroll through reports anymore
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed text-balance"
                >
                  Now, your kids appear as beautiful cards. Click to view full analytics and download PDF reports.
                </motion.p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16 max-w-7xl mx-auto">
                {[
                  { name: "Emma", progress: 92, average: 88, streak: 12, nextQuiz: "Math Quiz" },
                  { name: "Alex", progress: 78, average: 85, streak: 8, nextQuiz: "Science Test" },
                  { name: "Sam", progress: 95, average: 91, streak: 15, nextQuiz: "History Essay" }
                ].map((child, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <Card className="glass-effect hover:glass-effect-strong theme-transition hover-lift overflow-hidden">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {child.name.charAt(0)}
                          </div>
                          <div>
                            <CardTitle className="text-lg text-gray-900 dark:text-gray-100 theme-transition">{child.name}</CardTitle>
                            <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">Grade 8</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400 theme-transition">Course Progress</span>
                          <span className="font-semibold text-gray-900 dark:text-gray-100 theme-transition">{child.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full theme-transition">
                          <div 
                            className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full theme-transition" 
                            style={{ width: `${child.progress}%` }}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-2">
                          <div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 theme-transition">Quiz Average</p>
                            <p className="font-semibold text-gray-900 dark:text-gray-100 theme-transition">{child.average}%</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 theme-transition">Study Streak</p>
                            <p className="font-semibold text-gray-900 dark:text-gray-100 theme-transition">{child.streak} days</p>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-gray-200/50 dark:border-gray-800/50 theme-transition">
                          <p className="text-xs text-gray-600 dark:text-gray-400 theme-transition">Next Quiz</p>
                          <p className="font-medium text-gray-900 dark:text-gray-100 theme-transition">{child.nextQuiz}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 text-balance theme-transition">
                  Plus: AI helps you find the best way to support your child emotionally and academically.
                </p>
                <Button size="lg" className="hover-lift glow-effect">
                  Download Sample Report
                </Button>
              </motion.div>
            </div>
          </ScrollRevealSection>

          {/* Testimonials */}
          <ScrollRevealSection className="py-20 md:py-32 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20 w-full theme-transition">
            <div className="w-full px-6 max-w-none">
              <div className="mx-auto max-w-4xl text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="mb-6 inline-flex items-center glass-effect px-4 py-2 text-sm rounded-full"
                >
                  <Star className="mr-2 h-4 w-4 text-yellow-500" />
                  What Our Users Say
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl text-balance"
                >
                  Loved by Students, Teachers, and Parents
                </motion.h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                <TestimonialCard
                  name="Sarah Chen"
                  role="High School Student"
                  content="Rafiq helped me understand calculus concepts I was struggling with for months. The AI explains things in a way that just clicks!"
                  delay={0}
                />
                <TestimonialCard
                  name="Mr. Rodriguez"
                  role="Math Teacher"
                  content="The analytics dashboard gives me insights I never had before. I can see exactly where each student needs help."
                  delay={0.1}
                />
                <TestimonialCard
                  name="Jennifer Park"
                  role="Parent of Two"
                  content="The family cards are amazing! I can see both my kids' progress at a glance and know exactly how to support them."
                  delay={0.2}
                />
              </div>
            </div>
          </ScrollRevealSection>

          {/* Emotional Ending */}
          <ScrollRevealSection className="py-20 md:py-32 w-full">
            <div className="w-full px-6 max-w-none">
              <div className="mx-auto max-w-4xl text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl leading-tight text-balance"
                >
                  We built Rafiq for every student who felt{" "}
                  <span className="gradient-text">
                    overwhelmed
                  </span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-4 text-2xl text-gray-600 dark:text-gray-400 theme-transition"
                >
                  For every teacher who felt burned out.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-8 text-2xl text-gray-600 dark:text-gray-400 theme-transition"
                >
                  And every parent who didn't know how to help.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-12 text-3xl font-semibold gradient-text"
                >
                  This is education, made human.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Button 
                    size="lg" 
                    className="h-16 px-12 text-xl hover-lift glow-effect whitespace-nowrap"
                    onClick={() => setAuthPage('signup')}
                  >
                    <span className="whitespace-nowrap">Start your journey with Rafiq. Today.</span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </ScrollRevealSection>

          {/* Contact Section */}
          <ScrollRevealSection className="py-20 md:py-32 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20 w-full theme-transition" id="contact">
            <div className="w-full px-6 max-w-none">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6 inline-flex items-center glass-effect px-4 py-2 text-sm rounded-full">
                    <Mail className="mr-2 h-4 w-4 text-pink-500" />
                    Get in Touch
                  </div>
                  
                  <h2 className="mb-6 text-4xl font-bold tracking-tight text-balance">
                    Ready to Transform Education?
                  </h2>
                  
                  <p className="mb-8 text-xl text-gray-600 dark:text-gray-400 leading-relaxed text-balance theme-transition">
                    Join thousands of students, teachers, and parents who are already experiencing the future of learning.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 theme-transition">Email Us</h3>
                        <p className="text-gray-600 dark:text-gray-400 theme-transition">hello@rafiq.education</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 theme-transition">Call Us</h3>
                        <p className="text-gray-600 dark:text-gray-400 theme-transition">+1 (555) RAFIQ-AI</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-effect p-8 rounded-2xl hover-lift">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-2xl text-gray-900 dark:text-gray-100 theme-transition">Start Your Journey</CardTitle>
                      <p className="text-gray-600 dark:text-gray-400 theme-transition">
                        Get early access to Rafiq and be part of the education revolution.
                      </p>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <form className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label htmlFor="first-name" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100 theme-transition">
                              First name
                            </label>
                            <Input id="first-name" placeholder="Enter your first name" />
                          </div>
                          <div>
                            <label htmlFor="last-name" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100 theme-transition">
                              Last name
                            </label>
                            <Input id="last-name" placeholder="Enter your last name" />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100 theme-transition">
                            Email
                          </label>
                          <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                        
                        <div>
                          <label htmlFor="role" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100 theme-transition">
                            I am a...
                          </label>
                          <select className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 rounded-xl theme-transition focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                            <option>Student</option>
                            <option>Teacher</option>
                            <option>Parent</option>
                            <option>Administrator</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100 theme-transition">
                            Message
                          </label>
                          <Textarea 
                            id="message" 
                            placeholder="Tell us about your educational needs..." 
                            className="min-h-[120px]" 
                          />
                        </div>
                        
                        <Button type="submit" className="w-full h-14 hover-lift glow-effect">
                          <span>Join the Waitlist</span>
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </ScrollRevealSection>
        </main>

        {/* Footer */}
        <footer className="glass-effect w-full theme-transition">
          <div className="w-full px-6 py-12 max-w-none">
            <div className="grid gap-8 md:grid-cols-4 max-w-7xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-xl gradient-text">
                    Rafiq
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 theme-transition">
                  Your all-in-one learning companion, built for today's world of distractions.
                </p>
                <div className="flex space-x-4">
                  {[Instagram, Twitter, Linkedin, Facebook].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="h-10 w-10 border border-gray-300/50 dark:border-gray-700/50 rounded-xl flex items-center justify-center hover:bg-gray-100/50 dark:hover:bg-gray-800/50 theme-transition hover-lift"
                    >
                      <Icon className="h-5 w-5 text-gray-600 dark:text-gray-400 theme-transition" />
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100 theme-transition">Features</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><a href="#" className="hover:text-gray-900 dark:hover:text-gray-100 theme-transition">Student Dashboard</a></li>
                  <li><a href="#" className="hover:text-gray-900 dark:hover:text-gray-100 theme-transition">AI Assistant</a></li>
                  <li><a href="#" className="hover:text-gray-900 dark:hover:text-gray-100 theme-transition">Smart Tracker</a></li>
                  <li><a href="#" className="hover:text-gray-900 dark:hover:text-gray-100 theme-transition">Parent Cards</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100 theme-transition">About</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><a href="#" className="hover:text-gray-900 dark:hover:text-gray-100 theme-transition">Our Story</a></li>
                  <li><a href="#" className="hover:text-gray-900 dark:hover:text-gray-100 theme-transition">Team</a></li>
                  <li><a href="#" className="hover:text-gray-900 dark:hover:text-gray-100 theme-transition">Careers</a></li>
                  <li><a href="#" className="hover:text-gray-900 dark:hover:text-gray-100 theme-transition">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100 theme-transition">Legal</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><a href="#" className="hover:text-gray-900 dark:hover:text-gray-100 theme-transition">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-gray-900 dark:hover:text-gray-100 theme-transition">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-gray-900 dark:hover:text-gray-100 theme-transition">Cookie Policy</a></li>
                </ul>
                
                <div className="mt-6 flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleTheme}
                    className="capitalize hover-lift"
                    title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                  >
                    {getThemeIcon()}
                    <span className="ml-2 hidden sm:inline">{theme}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="hover-lift">
                    <Globe className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto theme-transition">
              <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                © 2024 Rafiq. All rights reserved. Made with ❤️ for education.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                Bringing calm, focus, and progress back into education.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;