import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Offerings', path: '/services' },
    { name: 'Stack', path: '/technologies' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Careers', path: '/careers' },
    { name: 'About', path: '/about' }
  ];

  return (
    <header className="header">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src="/sivionlogo.jpeg" alt="SiviOn Global" />
        </Link>
        <nav>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  style={{ color: location.pathname === link.path ? '#f59e0b' : '' }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="hp-btn hp-btn-primary">Let's Talk</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
