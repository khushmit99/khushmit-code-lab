import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Target
} from "lucide-react";

const Index = () => {
  const skills = {
    programming: ["C++", "Python", "HTML & CSS", "JavaScript", "OOP", "DSA"],
    core: ["Problem Solving", "Debugging", "Clean Code", "Git & GitHub", "CLI"],
    backend: ["REST APIs", "Databases", "Auth & Security", "HTTP/JSON", "Postman"],
    learning: ["Mini Projects", "Reading Docs", "Performance", "UI/UX", "Accessibility"]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-medium to-navy-deep">
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-primary"
                style={{
                  width: Math.random() * 4 + 2 + "px",
                  height: Math.random() * 4 + 2 + "px",
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                  animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
                  animationDelay: Math.random() * 2 + "s"
                }}
              />
            ))}
          </div>
        </div>

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
              onClick={() => window.location.href = 'mailto:khushmitbokre@gmail.com'}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-secondary/30">
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
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center md:justify-start">
            <Zap className="w-8 h-8 text-primary animate-glow" />
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="p-8 bg-gradient-to-br from-card via-secondary/20 to-card border-primary/20 card-hover h-full animate-fade-in">
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
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Backend Focus</h3>
                </div>
                <p className="text-muted-foreground">
                  Specializing in server-side logic, APIs, and database management to create robust digital solutions.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 card-hover">
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

      {/* Education Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-primary animate-glow" />
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card border-primary/20 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Oshin International School</h3>
                  <p className="text-muted-foreground mb-3">
                    My learning journey goes beyond the classroom. I focus on applying knowledge to 
                    real-world problems and building practical skills.
                  </p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Class 11th — Current
                  </Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-primary/20 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Universal Informatics, Indore</h3>
                  <p className="text-muted-foreground mb-3">
                    Completed C++ and Python certification courses, strengthening my programming 
                    foundation and backend logic.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      C++ Certified
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Python Certified
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary"
              style={{
                width: Math.random() * 3 + 1 + "px",
                height: Math.random() * 3 + 1 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animation: `float ${Math.random() * 4 + 3}s ease-in-out infinite`,
                animationDelay: Math.random() * 2 + "s"
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center animate-glow">
              <Mail className="w-6 h-6 text-primary" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">Let's Connect!</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Have a question, idea, or collaboration in mind?<br className="hidden sm:block" />
            Feel free to reach out — I'd love to connect with fellow learners and creators.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <a 
              href="mailto:khushmitbokre@gmail.com"
              className="group"
            >
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:border-primary hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer h-full">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3 group-hover:animate-bounce" />
                <p className="font-semibold mb-1">Email Me</p>
                <p className="text-sm text-muted-foreground">Let's talk</p>
              </Card>
            </a>

            <a 
              href="https://linkedin.com/in/khushmit-bokre" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:border-primary hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer h-full">
                <Linkedin className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-semibold mb-1">LinkedIn</p>
                <p className="text-sm text-muted-foreground">Connect with me</p>
              </Card>
            </a>

            <a 
              href="https://github.com/khushmitbokre" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:border-primary hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer h-full">
                <Github className="w-8 h-8 text-primary mx-auto mb-3 group-hover:rotate-12 transition-transform" />
                <p className="font-semibold mb-1">GitHub</p>
                <p className="text-sm text-muted-foreground">View my code</p>
              </Card>
            </a>

            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="group"
            >
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:border-primary hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer h-full">
                <Globe className="w-8 h-8 text-primary mx-auto mb-3 group-hover:rotate-180 transition-transform duration-500" />
                <p className="font-semibold mb-1">Projects</p>
                <p className="text-sm text-muted-foreground">Explore work</p>
              </Card>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="glow-cyan group w-full sm:w-auto"
              onClick={() => window.location.href = 'mailto:khushmitbokre@gmail.com'}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Send a Message
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:border-primary w-full sm:w-auto group"
              onClick={() => window.open('https://github.com/khushmitbokre', '_blank')}
            >
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              View GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Built with <Code2 className="w-4 h-4 text-primary" /> by Khushmit Bokre
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
