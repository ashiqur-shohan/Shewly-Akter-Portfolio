import { useEffect, useRef, useState } from 'react';

const Stats = () => {
  const [counts, setCounts] = useState({ years: 0, projects: 0, orgs: 0 });
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { years: 13, projects: 8, orgs: 6 };
    const duration = 1500; // 1.5 seconds
    const steps = 50;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounts({
        years: Math.ceil(targets.years * progress),
        projects: Math.ceil(targets.projects * progress),
        orgs: Math.ceil(targets.orgs * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(targets);
      }
    }, stepDuration);
  };

  return (
    <section ref={statsRef} className="py-16 px-5 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-center text-white">
          <div>
            <div className="text-[3.5rem] font-bold mb-2">
              {counts.years}+
            </div>
            <div className="text-lg opacity-90">Years of Experience</div>
          </div>
          <div>
            <div className="text-[3.5rem] font-bold mb-2">
              {counts.projects}+
            </div>
            <div className="text-lg opacity-90">Major Projects</div>
          </div>
          <div>
            <div className="text-[3.5rem] font-bold mb-2">
              {counts.orgs}+
            </div>
            <div className="text-lg opacity-90">International Organizations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
