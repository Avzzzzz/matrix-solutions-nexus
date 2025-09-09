import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleAboutClick = () => {
    if (location.pathname === '/') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleDropdownMouseEnter = (type: 'services' | 'products') => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    if (type === 'services') {
      setIsServicesOpen(true);
      setIsProductsOpen(false); // Close products when services opens
    } else {
      setIsProductsOpen(true);
      setIsServicesOpen(false); // Close services when products opens
    }
  };

  const handleDropdownMouseLeave = (type: 'services' | 'products') => {
    closeTimeout.current = setTimeout(() => {
      if (type === 'services') setIsServicesOpen(false);
      else setIsProductsOpen(false);
    }, 180);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target as Node)
      ) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  const [strokeLength, setStrokeLength] = useState("");
  const [isInteger, setIsInteger] = useState(true);

  const handleStrokeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setStrokeLength(val);
    // Disable submit if value is not an integer
    setIsInteger(val === "" || /^\d+$/.test(val));
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/src/assets/logo1 (2).png" alt="Matrix Solutions Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-gray-800">MATRIX SOLUTION</span>
          </Link>

          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <button onClick={handleAboutClick} className="text-gray-700 hover:text-blue-600">About</button>

            {/* Services Dropdown */}
            <div
              className="relative"
              ref={servicesRef}
              onMouseEnter={() => handleDropdownMouseEnter('services')}
              onMouseLeave={() => handleDropdownMouseLeave('services')}
            >
              <button
                onClick={() => navigate("/services")}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
              >
                Services
              </button>
              {isServicesOpen && (
                <div
                  className="absolute bg-white shadow-md mt-2 rounded-md z-10 min-w-[180px] transition-opacity duration-200"
                  style={{ opacity: isServicesOpen ? 1 : 0 }}
                >
                  <Link to="/services/designing" className="block px-4 py-2 hover:bg-gray-100">Designing</Link>
                  <Link to="/services/manufacturing" className="block px-4 py-2 hover:bg-gray-100">Manufacturing</Link>
                  <Link to="/services/electrical-electronics" className="block px-4 py-2 hover:bg-gray-100">Electrical & Electronics</Link>
                  <Link to="/services/ai-ml" className="block px-4 py-2 hover:bg-gray-100">AI/ML</Link>
                  <Link to="/services/development" className="block px-4 py-2 hover:bg-gray-100">Development</Link>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              ref={productsRef}
              onMouseEnter={() => handleDropdownMouseEnter('products')}
              onMouseLeave={() => handleDropdownMouseLeave('products')}
            >
              <button
                onClick={() => navigate("/products")}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
                aria-haspopup="true"
                aria-expanded={isProductsOpen}
              >
                Products
              </button>
              {isProductsOpen && (
                <div
                  className="absolute bg-white shadow-md mt-2 rounded-md z-10 min-w-[200px] transition-opacity duration-200"
                  style={{ opacity: isProductsOpen ? 1 : 0 }}
                >
                  <Link to="/products/linear-actuators" className="block px-4 py-2 hover:bg-gray-100">Electrical Actuators</Link>
                  <Link to="/products/pneumatics" className="block px-4 py-2 hover:bg-gray-100">Pneumatics</Link>
                  <Link to="/products/control-panels" className="block px-4 py-2 hover:bg-gray-100">Control Panels</Link>
                  <Link to="/cnc-machines" className="block px-4 py-2 hover:bg-gray-100">Desktop CNC</Link>
                  <Link to="/products/robotics-kits" className="block px-4 py-2 hover:bg-gray-100">Robotics Kits</Link>
                  <a
                    href="/products/plastic-enclosure"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Plastic Enclosure
                  </a>
                  <Link to="/products/membrane-industry" className="block px-4 py-2 hover:bg-gray-100">Membrane Industry</Link>
                </div>
              )}
            </div>

            <Link to="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
