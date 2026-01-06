import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 bg-white ${
      scrolled ? 'shadow-lg' : 'shadow-md'
    }`}>
      <div className="max-w-[1200px] mx-auto px-5 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary hover:text-secondary transition-colors">
          Shewly Akter
        </Link>

        <ul className={`${
          isMenuOpen ? 'left-0' : '-left-full'
        } md:flex md:static fixed top-[70px] flex-col md:flex-row md:gap-8 bg-white w-full md:w-auto text-center md:text-left transition-all duration-300 md:transition-none py-8 md:py-0 shadow-md md:shadow-none`}>
          <li>
            <Link 
              to="/" 
              className={`nav-link relative inline-block py-1 font-medium transition-colors ${
                isActive('/') ? 'text-primary after:w-full' : 'text-text-dark'
              } hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                !isActive('/') ? 'after:w-0' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`nav-link relative inline-block py-1 font-medium transition-colors ${
                isActive('/about') ? 'text-primary after:w-full' : 'text-text-dark'
              } hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                !isActive('/about') ? 'after:w-0' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/experience" 
              className={`nav-link relative inline-block py-1 font-medium transition-colors ${
                isActive('/experience') ? 'text-primary after:w-full' : 'text-text-dark'
              } hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                !isActive('/experience') ? 'after:w-0' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`nav-link relative inline-block py-1 font-medium transition-colors ${
                isActive('/contact') ? 'text-primary after:w-full' : 'text-text-dark'
              } hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                !isActive('/contact') ? 'after:w-0' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div 
          className={`md:hidden flex flex-col cursor-pointer ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-[25px] h-[3px] bg-primary my-[3px] transition-all duration-300"></span>
          <span className="w-[25px] h-[3px] bg-primary my-[3px] transition-all duration-300"></span>
          <span className="w-[25px] h-[3px] bg-primary my-[3px] transition-all duration-300"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
