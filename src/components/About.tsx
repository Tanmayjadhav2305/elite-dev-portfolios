import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, MapPin, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-content",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
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
      id="about"
      className="py-24 md:py-32"
    >
      <div className="container-custom">
        <div className="about-content opacity-0">
          <span className="section-heading">About Me</span>
          <h2 className="section-title">Background & Journey</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            <p className="about-content text-muted-foreground text-lg leading-relaxed opacity-0">
              I'm an innovative and detail-oriented Computer Engineering student from Nashik, Maharashtra, 
              passionate about Full Stack Development and Software Engineering.
            </p>
            <p className="about-content text-muted-foreground text-lg leading-relaxed opacity-0">
              Skilled in developing user-centric web applications and real-time systems using modern 
              technologies. I thrive on transforming complex problems into elegant, intuitive solutions.
            </p>
            <p className="about-content text-muted-foreground text-lg leading-relaxed opacity-0">
              Currently pursuing my B.E. in Computer Engineering while actively seeking opportunities 
              to contribute technical expertise, creativity, and enthusiasm for impactful product development.
            </p>
          </div>

          <div className="space-y-6">
            {/* Education Card */}
            <div className="about-content card-elevated p-6 hover-lift opacity-0">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    B.E. in Computer Engineering
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Guru Gobind Singh College of Engineering and Research Center
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-primary font-medium">CGPA: 9.2</span>
                    <span className="text-muted-foreground">2023 – 2027</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="about-content card-elevated p-6 hover-lift opacity-0">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Based in Nashik, Maharashtra
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Available for internship opportunities in Software or Web Development
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements Card */}
            <div className="about-content card-elevated p-6 hover-lift opacity-0">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Key Achievements
                  </h3>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Campus Ambassador at Unstop</li>
                    <li>• Internshala Student Partner (ISP)</li>
                    <li>• Ranked 33rd in Unstop Weekly Case Challenge</li>
                    <li>• Certified in Python, MySQL, JavaScript & Cyber Security</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
