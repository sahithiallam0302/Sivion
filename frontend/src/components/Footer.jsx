import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Code2, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div style={{ paddingRight: '20px' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.8rem', color: 'white', marginBottom: '25px' }}>
            <Code2 size={32} color="var(--accent-cyan)" /> SiviOn Global
          </h3>
          <p style={{ marginBottom: '30px', maxWidth: '320px', lineHeight: '1.7' }}>
            We engineer the future of digital. SiviOn Global Technologies delivers reliable enterprise solutions, robust web architectures, and data-driven marketing to scale your business.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="#" style={{ width: 40, height: 40, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', color: 'white', transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.1)' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-cyan)'; e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}><Linkedin size={18} /></a>
            <a href="#" style={{ width: 40, height: 40, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', color: 'white', transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.1)' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-cyan)'; e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}><Twitter size={18} /></a>
            <a href="#" style={{ width: 40, height: 40, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', color: 'white', transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.1)' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-cyan)'; e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}><Facebook size={18} /></a>
            <a href="#" style={{ width: 40, height: 40, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', color: 'white', transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.1)' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-cyan)'; e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}><Instagram size={18} /></a>
          </div>
        </div>

        <div>
          <h3>Our Services</h3>
          <ul className="footer-links">
            <li><Link to="/services">Java Full Stack Development</Link></li>
            <li><Link to="/services">Website Design & Development</Link></li>
            <li><Link to="/services">Custom Web Applications</Link></li>
            <li><Link to="/services">Digital Marketing & SEO</Link></li>
            <li><Link to="/portfolio">Portfolio & Case Studies</Link></li>
            <li><Link to="/services">Maintenance & Support</Link></li>
          </ul>
        </div>

        <div>
          <h3>Company</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/technologies">Technologies</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/blog">Blog & Insights</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>

        <div>
          <h3>Contact Us</h3>
          <ul className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <li style={{ display: 'flex', gap: '15px', alignItems: 'center', margin: 0 }}>
              <div style={{ background: 'rgba(0, 210, 255, 0.1)', padding: '10px', borderRadius: '8px' }}><Phone size={20} color="var(--accent-cyan)" /></div>
              <span style={{ fontWeight: 500, color: 'white' }}>+1 (800) 555-0199</span>
            </li>
            <li style={{ display: 'flex', gap: '15px', alignItems: 'center', margin: 0 }}>
              <div style={{ background: 'rgba(0, 210, 255, 0.1)', padding: '10px', borderRadius: '8px' }}><Mail size={20} color="var(--accent-cyan)" /></div>
              <span style={{ fontWeight: 500, color: 'white' }}>Hr@sivionglobaltechnologies.Com</span>
            </li>
            <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', margin: 0 }}>
              <div style={{ background: 'rgba(0, 210, 255, 0.1)', padding: '10px', borderRadius: '8px' }}><MapPin size={20} color="var(--accent-cyan)" /></div>
              <span style={{ fontWeight: 500, color: '#94a3b8', lineHeight: 1.5 }}>SiviOn Global Technologies<br />New Delhi, India</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <p>&copy; {new Date().getFullYear()} SiviOn Global Technologies. <span style={{ color: '#475569' }}>All Rights Reserved.</span></p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>Designed with <span style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem' }}>♥</span> for modern enterprises.</p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        background: '#25D366',
        color: 'white',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 15px rgba(37,211,102,0.4)',
        zIndex: 1000
      }}>
        <MessageCircle size={32} />
      </a>
    </footer>
  );
};

export default Footer;
