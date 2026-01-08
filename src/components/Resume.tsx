import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".resume-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
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
    <section ref={sectionRef} id="resume" className="py-24 md:py-32">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="resume-content opacity-0">
            <span className="section-heading">Resume</span>
            <h2 className="section-title">Get My Resume</h2>
          </div>

          <p className="resume-content text-muted-foreground text-lg mb-10 opacity-0">
            Interested in my background? Download my resume to learn more about my 
            experience, skills, and achievements in full-stack development.
          </p>

          <div className="resume-content card-elevated p-8 md:p-12 opacity-0">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <FileText className="w-10 h-10 text-primary" />
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Tanmay Jadhav
            </h3>
            <p className="text-muted-foreground mb-8">
              Full Stack Developer • Computer Engineering Student
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a
                  href="/TanmayJadhav_Resume.pdf"
                  download="TanmayJadhav_Resume.pdf"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a
                  href="/TanmayJadhav_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Online
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
