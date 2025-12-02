import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 animate-in fade-in duration-1000">
          {/* Profile Photo */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
            <img 
              src={profilePhoto} 
              alt="Bina Pokhrel" 
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent animate-fade-in">
              Bina Pokhrel
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-light">
            Software Developer
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aspiring software developer currently exploring all areas of development, 
            with a growing interest in frontend technologies. Passionate about learning, 
            creating, and building meaningful digital experiences.
          </p>

          {/* Social Links */}
          <div className="flex gap-6 justify-center pt-8 pb-16">
            <a
              href="https://github.com/binacodes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/bina-pokhrel-35b495331/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:binapokhrel056@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;