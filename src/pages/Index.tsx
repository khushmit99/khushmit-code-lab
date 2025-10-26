import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Code2, 
  Sparkles, 
  GraduationCap, 
  Mail, 
  Github, 
  Linkedin, 
  Globe,
  ChevronDown,
  Terminal,
  Database,
  Server,
  CheckCircle2,
  Braces,
  BookOpen,
  Zap,
  Target,
  Instagram,
  Copy,
  Send,
  Rocket
} from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import { FloatingParticles } from '@/components/FloatingParticles';
import { ScrollSpy } from '@/components/ScrollSpy';
import { Link } from 'react-router-dom';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const skills = {
    programming: ["C++", "Python", "HTML & CSS", "JavaScript", "OOP", "DSA"],
    core: ["Problem Solving", "Debugging", "Clean Code", "Git & GitHub", "CLI"],
    backend: ["REST APIs", "Databases", "Auth & Security", "HTTP/JSON", "Postman"],
    learning: ["Mini Projects", "Reading Docs", "Performance", "UI/UX", "Accessibility"]
  };

  const education = [
    {
      icon: GraduationCap,
      title: "Oshin International School",
      description: "My learning journey goes beyond the classroom. I focus on applying knowledge to real-world problems and building practical skills.",
      badge: "Class 11th — Current",
      year: "2024 - Present"
    },
    {
      icon: CheckCircle2,
      title: "Universal Informatics, Indore",
      description: "Completed C++ and Python certification courses, strengthening my programming foundation and backend logic.",
      badges: ["C++ Certified", "Python Certified"],
      year: "2023"
    }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('khushmitbokre@gmail.com');
    toast({
      title: "Email copied!",
      description: "khushmitbokre@gmail.com has been copied to clipboard.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Message sent! 🎉",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollSpy />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <FloatingParticles />
        
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-medium to-navy-deep" />

        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary animate-glow" />
            <span className="text-sm text-muted-foreground">Welcome to my digital space</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
            <span className="text-gradient animate-glow">Where Creativity</span>
            <br />
            <span className="text-foreground">Meets Code</span>
          </h1>

          <div className="h-12 text-xl md:text-2xl text-primary font-medium animate-fade-in">
            <TypeAnimation
              sequence={[
                'Backend Developer',
                2000,
                'Student',
                2000,
                'Code Explorer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Here, I bring logic to life through code. Explore my journey as I transform ideas into interactive, functional, and meaningful digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="glow-cyan group w-full sm:w-auto"
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
              Explore My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:border-primary w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Scroll down</span>
            <ChevronDown className="w-6 h-6 text-primary animate-glow" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="intro" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Terminal className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3 flex-wrap">
            Khushmit Bokre
            <CheckCircle2 className="w-8 h-8 text-primary animate-glow" />
          </h2>

          <p className="text-xl text-muted-foreground">
            An Aspiring Backend Developer | Skilled in C++ & Python | Always Learning | Class 11 Student
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-8">
            {["C++", "Python", "Logic", "Servers", "APIs", "Databases"].map((tag, i) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="text-sm px-4 py-2 bg-card border border-primary/20 hover:border-primary transition-all animate-float"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <Braces className="w-3 h-3 mr-2 text-primary" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center md:justify-start">
            <Zap className="w-8 h-8 text-primary animate-glow" />
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="p-8 bg-gradient-to-br from-card via-secondary/20 to-card border-primary/20 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-500 h-full animate-fade-in">
              <div className="space-y-6 text-base md:text-lg leading-relaxed">
                <p className="flex items-start gap-3">
                  <span className="text-4xl animate-float">👋</span>
                  <span className="flex-1">
                    Hey there, I'm <span className="text-primary font-semibold">Khushmit Bokre</span>, 
                    a curious and passionate Class 11 student who's fascinated by how the internet works behind the scenes.
                  </span>
                </p>

                <p className="text-muted-foreground">
                  I spend my time writing code in <span className="text-primary font-medium">C++</span> and <span className="text-primary font-medium">Python</span>, building web projects, and exploring 
                  backend systems that power the digital world.
                </p>

                <p className="text-muted-foreground">
                  For me, programming isn't just about syntax — it's about creating solutions, building 
                  systems that scale, and learning how small ideas can become big innovations.
                </p>

                <p className="text-muted-foreground">
                  When I'm not coding, you'll probably find me experimenting with new tools, solving problems, 
                  or learning something new every single day.
                </p>
              </div>
            </Card>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Backend Focus</h3>
                </div>
                <p className="text-muted-foreground">
                  Specializing in server-side logic, APIs, and database management to create robust digital solutions.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Always Learning</h3>
                </div>
                <p className="text-muted-foreground">
                  Constantly exploring new technologies, frameworks, and best practices to stay ahead in the tech world.
                </p>
              </Card>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Code2, label: "Backend" },
                  { icon: Database, label: "Databases" },
                  { icon: Server, label: "Servers" },
                  { icon: Terminal, label: "CLI" }
                ].map((item, i) => (
                  <div 
                    key={item.label} 
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-primary/10 hover:border-primary/30 hover:scale-105 transition-all animate-fade-in"
                    style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - Timeline */}
      <section id="education" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <GraduationCap className="w-8 h-8 text-primary animate-glow" />
            <h2 className="text-3xl md:text-4xl font-bold">Education Journey</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            <div className="space-y-12">
              {education.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center animate-fade-in ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary shadow-[0_0_20px_rgba(6,182,212,0.6)] z-10 animate-glow" />

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="p-6 ml-16 md:ml-0 bg-card border-primary/20 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-500 group">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${index % 2 === 0 ? 'md:order-last' : ''}`}>
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                          </div>
                          <p className="text-sm text-primary/70 mb-3">{item.year}</p>
                          <p className="text-muted-foreground mb-3">{item.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {'badge' in item && (
                              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                {item.badge}
                              </Badge>
                            )}
                            {'badges' in item && item.badges?.map((badge) => (
                              <Badge key={badge} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                {badge}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Spacer for timeline */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Target className="w-8 h-8 text-primary animate-glow" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Skills That Power My Code</h2>
            <p className="text-muted-foreground text-base md:text-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>A quick look at what I work with and how I think</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Programming Languages */}
            <Card className="p-6 bg-gradient-to-br from-card to-secondary/30 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Code2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold">Programming Languages</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">💻 Efficient. Readable. Logical.</p>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill, i) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-secondary/50 border-primary/10 hover:border-primary/30 hover:scale-110 transition-all animate-fade-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Core Skills */}
            <Card className="p-6 bg-gradient-to-br from-card to-secondary/30 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold">Core Skills</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">🧠 Think clearly. Debug fast. Ship clean code.</p>
              <div className="flex flex-wrap gap-2">
                {skills.core.map((skill, i) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-secondary/50 border-primary/10 hover:border-primary/30 hover:scale-110 transition-all animate-fade-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Backend Development */}
            <Card className="p-6 bg-gradient-to-br from-card to-secondary/30 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Server className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold">Backend Development</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">⚙️ Learning the logic behind the screens.</p>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, i) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-secondary/50 border-primary/10 hover:border-primary/30 hover:scale-110 transition-all animate-fade-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Always Learning */}
            <Card className="p-6 bg-gradient-to-br from-card to-secondary/30 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold">Always Learning</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">📚 Projects that push me further.</p>
              <div className="flex flex-wrap gap-2">
                {skills.learning.map((skill, i) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-secondary/50 border-primary/10 hover:border-primary/30 hover:scale-110 transition-all animate-fade-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Projects Button */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/projects">
              <Button 
                size="lg" 
                className="glow-cyan group gap-2"
              >
                <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                View My Projects Gallery
                <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30 relative overflow-hidden">
        <FloatingParticles />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center animate-glow">
                <Mail className="w-6 h-6 text-primary" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">Let's Connect!</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Have a question, idea, or collaboration in mind?<br className="hidden sm:block" />
              Feel free to reach out — I'd love to connect with fellow learners and creators.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary">Currently Learning React ⚛️</span>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a 
              href="mailto:khushmitbokre@gmail.com"
              className="group"
            >
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:border-primary hover:scale-110 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 cursor-pointer h-full">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3 group-hover:animate-bounce" />
                <p className="font-semibold mb-1 text-sm">Email</p>
              </Card>
            </a>

            <a 
              href="https://linkedin.com/in/khushmit-bokre" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:border-primary hover:scale-110 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 cursor-pointer h-full">
                <Linkedin className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-semibold mb-1 text-sm">LinkedIn</p>
              </Card>
            </a>

            <a 
              href="https://github.com/khushmitbokre" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:border-primary hover:scale-110 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 cursor-pointer h-full">
                <Github className="w-8 h-8 text-primary mx-auto mb-3 group-hover:rotate-12 transition-transform" />
                <p className="font-semibold mb-1 text-sm">GitHub</p>
              </Card>
            </a>

            <a 
              href="https://instagram.com/khushmitbokre" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:border-primary hover:scale-110 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 cursor-pointer h-full">
                <Instagram className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-semibold mb-1 text-sm">Instagram</p>
              </Card>
            </a>

            <button
              onClick={handleCopyEmail}
              className="group"
            >
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:border-primary hover:scale-110 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 cursor-pointer h-full">
                <Copy className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-semibold mb-1 text-sm">Copy Email</p>
              </Card>
            </button>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-secondary/50 border-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Your Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-secondary/50 border-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your idea or project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-secondary/50 border-primary/20 focus:border-primary transition-colors resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full glow-cyan group"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 animate-glow">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You! 🎉</h3>
                <p className="text-muted-foreground">Your message has been sent successfully. I'll get back to you soon!</p>
              </div>
            )}
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50 text-center">
        <p className="text-sm text-muted-foreground">
          Built with 💻 and ☕ by <span className="text-primary font-semibold">Khushmit Bokre</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;
