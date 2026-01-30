import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import logo from '@/assets/logyo.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-navy text-navy-foreground relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-elevated hover:opacity-90 transition-opacity duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container-wide section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Firm Info */}
          <div className="lg:col-span-2">
            <Link to="/" onClick={scrollToTop} className="inline-block mb-6">
              <img 
                src={logo} 
                alt="Anil Anand & Associates" 
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-elegant opacity-70 max-w-md">
              A distinguished law practice committed to providing comprehensive legal 
              services with the highest standards of professionalism and integrity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li>New Delhi, India</li>
              <li>contact@anilanand.law</li>
              <li>+91 78009 66576</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-navy-foreground/10 my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider">
            <Link 
              to="/disclaimer" 
              onClick={scrollToTop}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              Disclaimer
            </Link>
            <Link 
              to="/privacy-policy" 
              onClick={scrollToTop}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-use" 
              onClick={scrollToTop}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              Terms of Use
            </Link>
          </div>
          <p className="text-xs opacity-60 text-center">
            © {currentYear} Anil Anand & Associates. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
