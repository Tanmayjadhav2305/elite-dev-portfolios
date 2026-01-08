import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Globe, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const contactLinks = [
  {
    label: "Email",
    value: "tanmayjadhav2305@gmail.com",
    href: "mailto:tanmayjadhav2305@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "tanmay-jadhav-795a96293",
    href: "https://linkedin.com/in/tanmay-jadhav-795a96293",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "@tanmayjadhav",
    href: "https://github.com/tanmayjadhav",
    icon: Github,
  },
  {
    label: "Portfolio",
    value: "tanmayjadhav.vercel.app",
    href: "https://tanmayjadhav.vercel.app",
    icon: Globe,
  },
  {
    label: "Phone",
    value: "+91 8080281489",
    href: "tel:+918080281489",
    icon: Phone,
  },
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 md:py-32 bg-secondary/30"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="contact-content opacity-0">
            <span className="section-heading">Contact</span>
            <h2 className="section-title">Get In Touch</h2>
          </div>

          <p className="contact-content text-muted-foreground text-lg mb-12 opacity-0">
            I'm currently looking for internship opportunities in software or web development. 
            Whether you have a question or just want to say hi, my inbox is always open!
          </p>

          <div className="contact-content grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 opacity-0">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-elevated p-5 hover-lift group flex items-center gap-4 text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-muted-foreground mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-sm text-foreground font-medium truncate group-hover:text-primary transition-colors">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="contact-content opacity-0">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:tanmayjadhav2305@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Say Hello
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
