const Footer = () => {
  return (
    <footer className="bg-text-dark text-white py-8 px-5 text-center">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm md:text-base">&copy; 2025 Shewly Akter. All rights reserved.</p>
        <div className="flex gap-6 md:gap-8">
          <a
            href="mailto:shewlyakter@gmail.com"
            className="text-white hover:text-accent transition-colors"
          >
            Email
          </a>
          <a
            href="tel:+880-16-16750597"
            className="text-white hover:text-accent transition-colors"
          >
            Phone
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
