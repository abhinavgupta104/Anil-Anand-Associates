import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-wide section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Firm Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-serif text-2xl font-medium tracking-heading">
                Anil Anand
              </span>
              <span className="text-sm tracking-widest uppercase opacity-70">
                & Associates
              </span>
            </div>
            <p className="text-sm leading-elegant opacity-70 max-w-md">
              A distinguished law practice committed to providing comprehensive legal 
              services with the highest standards of professionalism and integrity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Practice Areas', 'Team', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-300"
                  >
                    {link}
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
              <li>+91 11 XXXX XXXX</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-navy-foreground/10 my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider">
            <Link to="/disclaimer" className="opacity-60 hover:opacity-100 transition-opacity duration-300">
              Disclaimer
            </Link>
            <Link to="/privacy-policy" className="opacity-60 hover:opacity-100 transition-opacity duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="opacity-60 hover:opacity-100 transition-opacity duration-300">
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
