import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Folder } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "WhaTok",
    description:
      "A modern WhatsApp-like web interface integrating Reels, Map, and Gaming features into a single seamless experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://whatsapp-52gml4u8e-tanmay-jadhavs-projects.vercel.app",
    year: "2025",
  },
  {
    title: "CNG Queue Tracker",
    description:
      "Real-time tracking system for CNG stations using Firebase Realtime Database, displaying live queue updates for users.",
    tech: ["Firebase", "HTML", "CSS", "JavaScript"],
    link: "https://cngqueuetracker.web.app",
    year: "2025",
  },
  {
    title: "Healthcare Hub",
    description:
      "A responsive medical web app for online consultations, appointment booking, and record management.",
    tech: ["React", "JavaScript"],
    link: "https://tanmay-medico-app.netlify.app",
    year: "2025",
  },
  {
    title: "Pet Friendly City",
    description:
      "A visually appealing web app promoting pet adoption with testimonial carousel, responsive layout, and theme toggle.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://tanmayjadhav2305.github.io/Pet-friendly-City/",
    year: "2024",
  },
  {
    title: "iPhone 14 Dynamic Island Clone",
    description:
      "An interactive UI component mimicking Apple's Dynamic Island purely with CSS animations and transitions.",
    tech: ["HTML", "CSS"],
    link: "https://tanmayjadhav2305.github.io/iPhone-14-Dynamic-Island/",
    year: "2024",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
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
      id="projects"
      className="py-24 md:py-32 bg-secondary/30"
    >
      <div className="container-custom">
        <div className="project-card opacity-0">
          <span className="section-heading">Projects</span>
          <h2 className="section-title">Things I've Built</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group opacity-0"
            >
              <div className="card-elevated h-full p-6 flex flex-col group-hover:border-primary/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-muted-foreground">
                      {project.year}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tech}
                      {techIndex < project.tech.length - 1 && (
                        <span className="ml-2 text-border">•</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
