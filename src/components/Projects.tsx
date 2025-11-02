import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team features, and advanced filtering. Utilizes WebSocket for live updates.",
      tags: ["Next.js", "TypeScript", "MongoDB", "WebSocket"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Portfolio Builder",
      description:
        "A drag-and-drop portfolio builder that allows users to create stunning portfolio websites without coding. Features custom domains and analytics.",
      tags: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "AI Content Generator",
      description:
        "An AI-powered content generation tool that helps marketers create blog posts, social media content, and ad copy using advanced language models.",
      tags: ["Python", "FastAPI", "React", "OpenAI"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Fitness Tracking App",
      description:
        "A mobile-first fitness tracking application with workout plans, progress tracking, and social features. Includes nutrition tracking and AI coaching.",
      tags: ["React Native", "Node.js", "MongoDB", "Redux"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Real-Time Chat Platform",
      description:
        "A scalable real-time chat platform with channels, direct messaging, file sharing, and video calls. Built for team collaboration.",
      tags: ["Vue.js", "Socket.io", "Express", "WebRTC"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow flex flex-col"
              >
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
