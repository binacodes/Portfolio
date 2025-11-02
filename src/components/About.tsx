import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful interfaces with attention to detail",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Building fast, optimized applications for the best user experience",
    },
  ];

  return (
    <section id="about" className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12 rounded-full" />

          <div className="space-y-8">
            <Card className="p-8 bg-card border-border">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate full-stack developer with a keen eye for design and a love for building
                exceptional digital experiences. With expertise in modern web technologies, I transform
                ideas into elegant, functional solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community. I believe in continuous learning
                and pushing the boundaries of what's possible on the web.
              </p>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                >
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
