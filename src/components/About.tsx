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
               As a dedicated Computer Science student and an aspiring software developer, I am driven by a deep passion for learning and implementing code. My academic journey is focused on mastering the foundational principles of computing and emerging technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond my core studies, I bring a unique blend of creativity and technical skill. I am a proficient Graphic Designer, utilizing visual storytelling to enhance digital projects and user experiences. Additionally, I maintain a regular blog where I share insights, tutorials, and reflections on technology, design, and the coding process.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am actively seeking opportunities that allow me to combine my technical knowledge with my creative skills, committed to building innovative, user-centric solutions.
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
