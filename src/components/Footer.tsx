import { Link } from 'react-router-dom';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">Matrix Solution</span>
            </div>
            <p className="text-primary-foreground/80 max-w-md">
              Leading provider of innovative technology solutions, specializing in design, manufacturing, 
              electrical systems, and AI/ML solutions for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-primary-foreground/80 hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/projects" className="text-primary-foreground/80 hover:text-accent transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a 
                href="https://linkedin.com/company/matrix-solution" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-accent transition-colors group"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-accent transition-colors group"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="mailto:info@matrixsolution.com"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-accent transition-colors group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {currentYear} Matrix Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;