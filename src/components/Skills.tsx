import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data & Analytics",
      skills: ["Python", "Numpy"],
    },
    {
      title: "Development",
      skills: ["Html", "CSS", "JavaScript", "WordPress"],
    },
    {
      title: "Digital Marketing",
      skills: ["SEO", "Social Media Management", "Content Writing"],
    },
    {
      title: "Designing",
      skills: ["Graphic Designer"],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6 rounded-full" />

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex} // ✅ FIXED: moved "key" into the Badge opening tag
                      variant="secondary" // ✅ FIXED: moved "variant" into props
                      className="px-3 py-1 text-sm" // ✅ FIXED: moved "className" into props
                    >
                      {skill} {/* ✅ FIXED: "skill" should be the child of <Badge> */}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
