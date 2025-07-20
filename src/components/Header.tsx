import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', action: () => window.location.href = '/' },
    { name: 'About', action: () => scrollToSection('about') },
    { name: 'Products', action: () => window.location.href = '/products' },
    { name: 'Projects', action: () => window.location.href = '/projects' },
    { name: 'Contact', action: () => window.location.href = '/contact' },
  ];

  const serviceItems = [
    { name: 'Designing', href: '/services/designing' },
    { name: 'Manufacturing', href: '/services/manufacturing' },
    { name: 'Electrical & Electronics', href: '/services/electrical-electronics' },
    { name: 'AI/ML', href: '/services/ai-ml' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b shadow-soft">
      <nav className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
            <span className="text-accent-foreground font-bold text-lg">M</span>
          </div>
          <span className="text-xl font-bold text-primary">Matrix Solution</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={item.action}
              className="text-foreground hover:text-accent transition-colors duration-200 font-medium relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground hover:text-accent transition-colors duration-200 font-medium relative group flex items-center space-x-1">
              <span>Services</span>
              <ChevronDown className="h-4 w-4" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-card border border-border shadow-large">
              {serviceItems.map((service) => (
                <DropdownMenuItem key={service.name} asChild>
                  <Link
                    to={service.href}
                    className="w-full px-3 py-2 text-foreground hover:text-accent hover:bg-accent-light/50 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t shadow-medium animate-slide-up">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-accent hover:bg-accent-light/50 rounded-lg transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            
            {/* Mobile Services Section */}
            <div className="pt-2">
              <div className="px-4 py-2 text-sm font-medium text-muted-foreground">Services</div>
              {serviceItems.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-6 py-2 text-foreground hover:text-accent hover:bg-accent-light/50 rounded-lg transition-colors duration-200"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;