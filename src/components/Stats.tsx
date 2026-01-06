import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';

interface CountUpProps {
  to: number;
  duration?: number;
}

const CountUp = ({ to, duration = 2 }: CountUpProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [inView, to, duration, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Stats = () => {
  const stats = [
    { label: 'Years of Experience', value: 13 },
    { label: 'Major Projects', value: 8 },
    { label: 'International Organizations', value: 6 },
  ];

  return (
    <section className="py-12 md:py-20 px-5 bg-gradient-to-br from-primary via-secondary to-primary bg-[length:200%_200%] animate-gradient-slow">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center text-white">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-5xl md:text-[4rem] font-extrabold mb-3 tracking-tight">
                <CountUp to={stat.value} />+
              </div>
              <div className="text-sm md:text-lg font-medium opacity-90 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
