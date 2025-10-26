import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "⚙️ Backend Playground",
    description: "Experimenting with APIs, databases, and server-side logic. Building scalable REST APIs with authentication.",
    tech: ["Python", "Backend", "API"],
    github: "https://github.com/khushmitbokre",
    demo: null,
    category: "Backend"
  },
  {
    id: 2,
    title: "C++ Algorithm Visualizer",
    description: "Interactive tool to visualize sorting and searching algorithms. Built to understand DSA concepts better.",
    tech: ["C++", "Algorithms"],
    github: "https://github.com/khushmitbokre",
    demo: null,
    category: "C++"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing my journey as a developer. Built with modern web technologies.",
    tech: ["Web", "React"],
    github: "https://github.com/khushmitbokre",
    demo: "https://khushmitbokre.com",
    category: "Web"
  },
  {
    id: 4,
    title: "Python Task Automation",
    description: "Collection of Python scripts to automate daily tasks and boost productivity.",
    tech: ["Python", "Automation"],
    github: "https://github.com/khushmitbokre",
    demo: null,
    category: "Python"
  }
];

const categories = ["All", "C++", "Web", "Python", "Backend"];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.tech.includes(filter) || p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-lg bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Projects Gallery
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Title Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
            🚀 My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work, experiments, and learning journey. Each project represents a step forward in mastering code.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => (
            <Badge
              key={category}
              variant={filter === category ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 text-sm transition-all duration-300 hover:scale-105 ${
                filter === category 
                  ? 'shadow-[0_0_20px_rgba(6,182,212,0.4)]' 
                  : 'hover:border-primary/50'
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-fade-in hover:scale-105 hover:-rotate-1"
              style={{ 
                animationDelay: `${0.1 * index}s`,
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary border-primary/30 group-hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="relative z-10 flex gap-3">
                {project.github && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 gap-2 bg-gradient-to-r from-primary to-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <p className="text-xl text-muted-foreground">
              No projects found in this category. Check back soon!
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Projects;
