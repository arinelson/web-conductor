
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/#services' },
    { name: 'Preços', path: '/#pricing' },
    { name: 'Portfólio', path: '/#portfolio' },
    { name: 'Contato', path: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Check if the current hash matches the nav item
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/' && !location.hash;
    return location.hash === path.substring(path.indexOf('#'));
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold text-primary flex items-center"
        >
          <span className="mr-1">Web</span>
          <span>Conductor</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-sm font-medium transition-colors duration-200 relative',
                'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:origin-left',
                'after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300',
                isActive(item.path) 
                  ? 'text-primary after:scale-x-100' 
                  : 'text-foreground hover:text-primary'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden transition-transform duration-300 ease-in-out',
          'flex flex-col items-center justify-center space-y-8 pt-16',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              'text-xl font-medium transition-colors duration-200',
              isActive(item.path) 
                ? 'text-primary' 
                : 'text-foreground hover:text-primary'
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
