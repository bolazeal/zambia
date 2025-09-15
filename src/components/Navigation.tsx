import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  navLinks: string[];
  registrationLink: string;
  scrollToSection: (id: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ navLinks, registrationLink, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className='fixed w-full z-50 transition-all duration-300 bg-slate-900/95 backdrop-blur-sm py-3'>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
          Unstoppable Greatness
        </span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              {item}
            </button>
          ))}
        </div>

        <a href={registrationLink} target="_blank" rel="noopener noreferrer">
          <Button className="hidden md:flex bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold">
            Reserve Seat
          </Button>
        </a>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm mt-2 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="py-2 hover:text-yellow-400 transition-colors duration-200 text-left"
              >
                {item}
              </button>
            ))}
            <a href={registrationLink} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold">
                Reserve Seat
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;