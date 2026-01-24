import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-dark text-white py-12 px-5">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Shewly Akter</h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Empowering communities and driving social impact through dedicated leadership and innovation.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/Bala.Shewly"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-1 group"
              aria-label="Facebook"
            >
              <FaFacebook size={18} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.instagram.com/shewlybala"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-1 group"
              aria-label="Instagram"
            >
              <FaInstagram size={18} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/shewlyakter/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-1 group"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <a
              href="mailto:shewlyakter@gmail.com"
              className="group flex flex-col items-center md:items-end"
            >
              <span className="text-xs text-gray-500 uppercase tracking-widest mb-1 group-hover:text-accent transition-colors">Email Me</span>
              <span className="text-white font-medium group-hover:text-accent transition-colors">shewlyakter@gmail.com</span>
            </a>
            <a
              href="tel:+880-16-16750597"
              className="group flex flex-col items-center md:items-end"
            >
              <span className="text-xs text-gray-500 uppercase tracking-widest mb-1 group-hover:text-accent transition-colors">Call Me</span>
              <span className="text-white font-medium group-hover:text-accent transition-colors">+880-16-16750597</span>
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            &copy; {currentYear} Shewly Akter. All rights reserved. Built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


