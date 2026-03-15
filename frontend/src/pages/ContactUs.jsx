import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div style={{ background: 'var(--primary-blue)', minHeight: '100vh', color: 'white' }}>
      
      {/* Header */}
      <section style={{ 
        padding: '140px 0 80px', 
        background: 'linear-gradient(to bottom, rgba(0,210,255,0.05) 0%, transparent 100%)',
        textAlign: 'center'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="about-badge" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <div className="about-badge-line"></div>
              <span className="about-badge-text">CONTACT US</span>
            </div>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 600, marginBottom: '20px', letterSpacing: '-1.5px' }}>
              Let's Build Your Success Story
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '0 auto' }}>
              Have a project in mind? Reach out to our experts for a free consultation and project quote.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section container" style={{ paddingBottom: '120px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ flex: '1 1 400px' }}
          >
            <h2 style={{ fontSize: '2.2rem', fontWeight: 600, color: '#ffffff', marginBottom: '30px' }}>Get in Touch</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '50px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(0, 210, 255, 0.1)', padding: '15px', borderRadius: '12px', color: 'var(--accent-cyan)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '5px' }}>Phone & WhatsApp</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '10px' }}>+91 XXX XXX XXXX</p>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    color: '#25D366', 
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    <MessageCircle size={18} /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(0, 210, 255, 0.1)', padding: '15px', borderRadius: '12px', color: 'var(--accent-cyan)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '5px' }}>Email Address</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)' }}>info@sivionglobal.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(0, 210, 255, 0.1)', padding: '15px', borderRadius: '12px', color: 'var(--accent-cyan)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '5px' }}>Office Address</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                    SiviOn Global Technologies<br />
                    Business Hub, New Delhi, India
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(0, 210, 255, 0.1)', padding: '15px', borderRadius: '12px', color: 'var(--accent-cyan)' }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '5px' }}>Working Hours</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)' }}>Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Map Mock */}
            <div style={{ 
              width: '100%', 
              height: '300px', 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <iframe 
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112067.75168019315!2d77.03960014389104!3d28.62624892408018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b71dbff41d5!2sDelhi!5e0!3m2!1sen!2sin!4v1710500000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9)' }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
          
          {/* Right Side: Enquiry Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ flex: '1 1 500px' }}
          >
            <div style={{ 
              background: 'rgba(255,255,255,0.02)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              padding: '50px', 
              borderRadius: '30px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 600, color: 'white', marginBottom: '30px' }}>Enquiry / Get a Quote</h3>
              <form>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div className="form-group-custom">
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Name</label>
                    <input type="text" placeholder="John Doe" style={inputStyle} required />
                  </div>
                  <div className="form-group-custom">
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Company Name</label>
                    <input type="text" placeholder="Enter company" style={inputStyle} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div className="form-group-custom">
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Mobile Number</label>
                    <input type="tel" placeholder="+91 00000 00000" style={inputStyle} required />
                  </div>
                  <div className="form-group-custom">
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Address</label>
                    <input type="email" placeholder="john@example.com" style={inputStyle} required />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div className="form-group-custom">
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Service Interested In</label>
                    <select style={inputStyle} required>
                      <option value="">Select a service</option>
                      <option value="java">Java Full Stack Development</option>
                      <option value="website">Website Design & Development</option>
                      <option value="webapp">Custom Web Application</option>
                      <option value="marketing">Digital Marketing / Ads</option>
                      <option value="seo">SEO Services</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  <div className="form-group-custom">
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Budget Range</label>
                    <select style={inputStyle}>
                      <option value="">Select range</option>
                      <option value="small">Below $5,000</option>
                      <option value="medium">$5,000 - $15,000</option>
                      <option value="large">$15,000 - $50,000</option>
                      <option value="enterprise">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div className="form-group-custom" style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Project Details</label>
                  <textarea placeholder="Describe your project goals and requirements..." style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}></textarea>
                </div>

                <button type="submit" className="hp-btn-solid" style={{ width: '100%', height: '60px', borderRadius: '15px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  Send Enquiry <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '15px 20px',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '12px',
  color: 'white',
  fontSize: '1rem',
  outline: 'none',
  transition: 'all 0.3s ease',
  boxSizing: 'border-box'
};

export default ContactUs;
