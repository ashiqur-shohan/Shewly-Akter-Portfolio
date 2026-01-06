import { useRef, useEffect, useCallback } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

const LogoSlider = () => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);
  const resumeTimeoutRef = useRef<any>(null);

  const logos = [
    { src: '/vt.svg', alt: 'Virginia Tech' },
    { src: '/usfs.png', alt: 'USDA Forest Service' },
    { src: '/ide.jpeg', alt: 'International Development Enterprises' },
    { src: '/plan.png', alt: 'Plan International' },
    { src: '/bils.png', alt: 'Bangladesh Institute of Labor Studies' },
    { src: '/hki.png', alt: 'Helen Keller International' },
    { src: '/icrw.png', alt: 'International Center for Research on Women' },
    { src: '/icddrb.png', alt: 'icddr,b' },
  ];

  // 5 sets of logos for absolute bulletproof infinite navigation
  const allLogos = [...logos, ...logos, ...logos, ...logos, ...logos];
  const SPEED = 40; // Pixels per second

  const getDimensions = useCallback(() => {
    if (!containerRef.current) return { contentWidth: 0 };
    const totalWidth = containerRef.current.scrollWidth;
    const contentWidth = totalWidth / 5;
    return { contentWidth };
  }, []);

  // Proactive wrap-around logic to handle rapid clicking
  const wrapPosition = useCallback(() => {
    const { contentWidth } = getDimensions();
    if (contentWidth === 0) return;

    const currentX = x.get();

    // We want to keep the position mostly within the 3rd (middle) set:
    // [-2 * contentWidth, -3 * contentWidth]
    // If we drift too far left (towards 4th/5th set)
    if (currentX <= -3 * contentWidth) {
      x.set(currentX + contentWidth);
    }
    // If we drift too far right (towards 1st/2nd set)
    else if (currentX >= -2 * contentWidth + (contentWidth * 0.5)) {
      x.set(currentX - contentWidth);
    }
  }, [x, getDimensions]);

  const startAnimation = useCallback(() => {
    if (animationRef.current) animationRef.current.stop();

    const { contentWidth } = getDimensions();
    if (contentWidth === 0) return;

    // Boundary for auto-scroll: middle of 3rd set to middle of 4th set
    const currentX = x.get();

    // Safety check start position
    if (currentX === 0) {
      x.set(-2 * contentWidth);
    }

    const targetX = -3 * contentWidth;
    const distance = Math.abs(x.get() - targetX);
    const duration = distance / SPEED;

    animationRef.current = animate(x, targetX, {
      duration: duration,
      ease: "linear",
      onComplete: () => {
        x.set(-2 * contentWidth);
        startAnimation();
      }
    });
  }, [x, getDimensions]);

  useEffect(() => {
    const init = () => {
      const { contentWidth } = getDimensions();
      if (contentWidth > 0) {
        x.set(-2 * contentWidth);
        startAnimation();
      } else {
        setTimeout(init, 100);
      }
    };
    init();

    return () => {
      animationRef.current?.stop();
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [startAnimation, getDimensions, x]);

  const handleMouseEnter = () => {
    if (animationRef.current) animationRef.current.stop();
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleMouseLeave = () => {
    startAnimation();
  };

  const handleManualNav = (direction: 'next' | 'prev') => {
    // 1. Stop everything immediately
    if (animationRef.current) animationRef.current.stop();
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);

    // 2. Proactively wrap position BEFORE moving
    // This ensures we always have buffer in the direction we are moving
    wrapPosition();

    const currentX = x.get();
    const step = 268; // approx width of one item + gap
    const targetX = direction === 'next' ? currentX - step : currentX + step;

    // 3. Smooth nudge
    animate(x, targetX, {
      duration: 0.4,
      ease: "easeOut",
      onComplete: () => {
        // Final sanity wrap after animation
        wrapPosition();

        // 4. Wait 2 seconds before resuming auto-scroll
        resumeTimeoutRef.current = setTimeout(() => {
          startAnimation();
        }, 2000);
      }
    });
  };

  return (
    <section className="px-5 pb-20 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-[2.5rem] font-bold text-primary mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-1 after:bg-accent after:rounded">
          Organizations I've Worked With
        </h2>

        <div
          className="relative w-full overflow-hidden bg-bg-light py-10 rounded-xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Fading Edges Gradient */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-light to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-light to-transparent z-10 pointer-events-none"></div>

          <motion.div
            ref={containerRef}
            className="flex gap-12 w-fit px-12"
            style={{ x }}
          >
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[220px] h-[120px] flex items-center justify-center bg-white rounded-lg shadow-sm transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-[80%] max-h-[80%] object-contain transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-8 mt-8">
          <button
            onClick={() => handleManualNav('prev')}
            className="bg-primary text-white border-none w-[45px] h-[45px] rounded-full text-xl cursor-pointer transition-all duration-300 flex items-center justify-center hover:bg-secondary hover:scale-110 hover:shadow-xl active:scale-95 shadow-md"
            aria-label="Previous"
          >
            ❮
          </button>
          <button
            onClick={() => handleManualNav('next')}
            className="bg-primary text-white border-none w-[45px] h-[45px] rounded-full text-xl cursor-pointer transition-all duration-300 flex items-center justify-center hover:bg-secondary hover:scale-110 hover:shadow-xl active:scale-95 shadow-md"
            aria-label="Next"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
