import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Database,
  Layers,
  Settings,
  Globe,
  Cpu,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "C++", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Tailwind CSS", "Responsive Design", "UI/UX"],
  },
  {
    title: "Backend",
    icon: Layers,
    skills: ["Flask", "REST APIs", "Node.js", "API Integration"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "Firebase", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    icon: Settings,
    skills: ["Git", "VS Code", "Postman", "GitHub"],
  },
  {
    title: "Core Areas",
    icon: Cpu,
    skills: ["Full Stack Dev", "API Integration", "Database Systems"],
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-card",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 md:py-32">
      <div className="container-custom">
        <div className="skill-card opacity-0">
          <span className="section-heading">Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-card card-elevated p-6 group hover-lift opacity-0"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md border border-border/50 hover:border-primary/50 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
