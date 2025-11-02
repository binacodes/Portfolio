import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/binacodes/",
      username: "@binapokhrel",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/bina-pokhrel-35b495331/",
      username: "Bina Pokhrel",
    },
  ];

  return (
    <section id="connect" className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">Let's Connect</h2>
          <div className="w-16 h-0.5 bg-gradient-accent mx-auto mb-6 rounded-full" />

          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 hover:text-primary transition-all duration-200"
              >
                <link.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm font-medium">{link.username}</span>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center pt-6 border-t border-border">
            <p className="text-muted-foreground text-xs">
              made by binacodes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
