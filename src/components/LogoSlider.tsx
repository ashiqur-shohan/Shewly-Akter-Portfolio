import { useRef, useState } from 'react';

const LogoSlider = () => {
  const sliderTrackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

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

  // Duplicate logos for seamless loop
  const allLogos = [...logos, ...logos];

  const handlePrev = () => {
    if (sliderTrackRef.current) {
      const track = sliderTrackRef.current;
      const itemWidth = (track.children[0] as HTMLElement).offsetWidth + 48; // 48px is gap
      track.style.animation = 'none';
      const currentTransform = getComputedStyle(track).transform;
      const matrix = new DOMMatrix(currentTransform);
      const currentX = matrix.m41;
      track.style.transform = `translateX(${currentX + itemWidth}px)`;
    }
  };

  const handleNext = () => {
    if (sliderTrackRef.current) {
      const track = sliderTrackRef.current;
      const itemWidth = (track.children[0] as HTMLElement).offsetWidth + 48;
      track.style.animation = 'none';
      const currentTransform = getComputedStyle(track).transform;
      const matrix = new DOMMatrix(currentTransform);
      const currentX = matrix.m41;
      track.style.transform = `translateX(${currentX - itemWidth}px)`;
    }
  };

  return (
    <section className="px-5 pb-20 bg-white relative">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-[2.5rem] text-primary mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-1 after:bg-accent after:rounded">
          Organizations I've Worked With
        </h2>
        <div className="max-w-full overflow-hidden rounded-lg bg-bg-light py-10 px-5 relative">
          <div 
            ref={sliderTrackRef}
            className={`flex gap-12 w-fit ${isPaused ? '' : 'animate-scroll-auto'}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {allLogos.map((logo, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[220px] h-[120px] flex items-center justify-center bg-white rounded-lg shadow-md transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="max-w-[90%] max-h-[90%] object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-8 mt-8">
          <button 
            onClick={handlePrev}
            className="bg-primary text-white border-none w-[45px] h-[45px] rounded-full text-xl cursor-pointer transition-all duration-300 flex items-center justify-center hover:bg-secondary hover:scale-110 hover:shadow-xl active:scale-95"
          >
            ❮
          </button>
          <button 
            onClick={handleNext}
            className="bg-primary text-white border-none w-[45px] h-[45px] rounded-full text-xl cursor-pointer transition-all duration-300 flex items-center justify-center hover:bg-secondary hover:scale-110 hover:shadow-xl active:scale-95"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
