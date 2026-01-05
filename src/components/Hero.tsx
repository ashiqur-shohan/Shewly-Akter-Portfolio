import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="flex items-center justify-center px-5 pt-[200px] pb-[160px] relative overflow-hidden">
      {/* Background with opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(248, 249, 250, 0.85), rgba(233, 236, 239, 0.85)), url(/background_image.jpg)'
        }}
      ></div>

      <div className="relative z-10 max-w-[1200px] grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
        <div className="hero-text">
          <h1 className="text-[3.5rem] text-primary mb-4 leading-tight animate-fade-in">
            Shewly Akter
          </h1>
          <h2 className="text-2xl text-secondary mb-6 font-medium animate-fade-in-delay">
            Gender Equality & Social Inclusion Specialist
          </h2>
          <p className="text-lg text-text-light mb-8 leading-relaxed animate-fade-in-delay-2">
            Empowering communities through research, gender mainstreaming, and knowledge management.
            Passionate about creating sustainable social impact in international development.
          </p>
          <div className="flex gap-4 flex-wrap animate-fade-in-delay-3">
            <Link 
              to="/experience" 
              className="px-8 py-3 rounded bg-primary text-white font-semibold hover:bg-secondary hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 rounded bg-transparent text-primary border-2 border-primary font-semibold hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img 
            src="/profile_image.JPG" 
            alt="Profile Picture" 
            className="w-[350px] h-[350px] rounded-full object-cover shadow-xl animate-float"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="block w-5 h-8 border-2 border-primary rounded-[15px] relative">
          <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-2 bg-primary rounded animate-scroll"></span>
        </span>
      </div>
    </section>
  );
};

export default Hero;
