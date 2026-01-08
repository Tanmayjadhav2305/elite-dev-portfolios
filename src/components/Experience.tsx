import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Nexonica Systems Pvt. Ltd.",
    location: "Nashik",
    period: "Present",
    description:
      "Working on API development using Python Flask. Building scalable backend solutions and collaborating on full-stack projects.",
    current: true,
  },
  {
    title: "Python Developer Intern",
    company: "Tech Octanet Services Pvt. Ltd.",
    period: "2024",
    description:
      "Developed Python automation and backend logic, improved code structure, and implemented modular functionalities to optimize performance.",
    current: false,
  },
  {
    title: "Software Developer Intern",
    company: "Cognifyz Technologies",
    period: "2024",
    description:
      "Worked on API integration, database handling, and data-driven backend modules ensuring reliability and optimized execution.",
    current: false,
  },
  {
    title: "Web Developer Intern",
    company: "CollegeTips.in",
    period: "2024",
    description:
      "Created and deployed a live project 'Pet Friendly City', featuring responsive layouts, interactive forms, and engaging animations using HTML, CSS, and JavaScript.",
    current: false,
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".exp-item",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.2,
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
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 md:py-32 bg-secondary/30"
    >
      <div className="container-custom">
        <div className="exp-item opacity-0">
          <span className="section-heading">Experience</span>
          <h2 className="section-title">Where I've Worked</h2>
        </div>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="exp-item relative pl-16 md:pl-20 opacity-0">
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 md:left-6 w-4 h-4 rounded-full border-2 ${
                    exp.current
                      ? "bg-primary border-primary glow-effect"
                      : "bg-background border-muted-foreground"
                  }`}
                />

                <div className="card-elevated p-6 hover-lift">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span className="text-primary font-medium">
                          {exp.company}
                        </span>
                        {exp.location && (
                          <span className="text-muted-foreground text-sm">
                            • {exp.location}
                          </span>
                        )}
                      </div>
                    </div>
                    <span
                      className={`text-sm font-mono ${
                        exp.current ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
