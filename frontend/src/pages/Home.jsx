import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Monitor, 
  BarChart, 
  Settings, 
  Smartphone, 
  CheckCircle, 
  ArrowRight, 
  ShoppingCart, 
  Puzzle, 
  Wrench, 
  Megaphone, 
  Search, 
  Share2, 
  Target,
  Users,
  ShieldCheck,
  Clock,
  Tag,
  Handshake,
  Layers
} from 'lucide-react';

const Home = () => {
  const devServices = [
    { title: 'Java Full Stack Development', icon: <Code2 />, desc: 'End-to-end enterprise Java solutions utilizing Spring Boot and React.' },
    { title: 'Website Design & Development', icon: <Monitor />, desc: 'Modern, responsive corporate websites designed for conversions.' },
    { title: 'E-commerce Development', icon: <ShoppingCart />, desc: 'Scalable online stores with seamless payment and inventory systems.' },
    { title: 'Custom Web Applications', icon: <Puzzle />, desc: 'Tailored SAAS solutions and robust internal business portals.' },
    { title: 'Mobile App Development', icon: <Smartphone />, desc: 'High-performance cross-platform iOS and Android applications.' },
    { title: 'Maintenance & Support', icon: <Wrench />, desc: 'Proactive updates and technical support for zero-downtime performance.' }
  ];

  const marketingServices = [
    { title: 'Digital Marketing', icon: <Megaphone />, desc: 'Strategic brand positioning and multi-channel growth campaigns.' },
    { title: 'SEO Services', icon: <Search />, desc: 'Technical SEO and content audits to dominate search rankings.' },
    { title: 'Social Media Marketing', icon: <Share2 />, desc: 'Engaging social strategies to build communities and brand loyalty.' },
    { title: 'Performance Marketing', icon: <Target />, desc: 'High-ROI Google and Meta ad campaigns driven by analytics.' }
  ];

  const advantages = [
    { title: 'Skilled Team of Developers', icon: <Users />, desc: 'Project-hardened engineers with deep expertise in modern architectures.' },
    { title: 'Scalable & Secure Solutions', icon: <ShieldCheck />, desc: 'Cloud-ready infrastructures built with security-first engineering.' },
    { title: 'On-time Project Delivery', icon: <Clock />, desc: 'Rigorous project management ensuring every milestone is met.' },
    { title: 'Cost-effective Pricing', icon: <Tag />, desc: 'Premium engineering and marketing services tailored to your budget.' },
    { title: 'Client-focused Approach', icon: <Handshake />, desc: 'Collaborative delivery models that put your business goals first.' },
    { title: 'Modern Tech Stack', icon: <Layers />, desc: 'Utilizing the latest versions of Java, React, and Cloud technologies.' }
  ];

  const processSteps = [
    { title: 'Requirements', desc: 'Deep-dive into your business goals and technical needs.' },
    { title: 'Strategic Planning', desc: 'Defining the architecture and delivery roadmap.' },
    { title: 'Design & UX Phase', desc: 'Crafting intuitive and high-fidelity user experiences.' },
    { title: 'Agile Development', desc: 'Iterative coding cycles with regular feedback loops.' },
    { title: 'Rigorous Testing', desc: 'End-to-end QA, performance, and security audits.' },
    { title: 'Delivery & Support', desc: 'Seamless deployment followed by proactive maintenance.' }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="hero-content"
            style={{ paddingTop: 'clamp(2rem, 15vh, 6rem)' }}
          >
            <motion.h1 
              variants={fadeUp} 
              style={{ 
                maxWidth: '850px',
                fontSize: 'clamp(2.25rem, 8vw, 3.75rem)', 
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: '-1px',
                marginBottom: '1.5rem'
              }}
            >
              Transforming Ideas into<br />Powerful Solutions
            </motion.h1>
            <motion.p variants={fadeUp} style={{ marginBottom: '20px' }}>
              Ideal IT solutions for enterprises and startups. Capability driven. Globally placed.
            </motion.p>
            
            {/* Sub-hero Stat Row */}
            <motion.div 
              variants={fadeUp}
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                gap: '15px 25px', 
                marginBottom: '35px', 
                color: 'rgba(255,255,255,0.7)', 
                fontSize: '0.95rem', 
                fontWeight: 500 
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>50+</span> clients
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>12+</span> countries
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="hero-buttons">
              <Link to="/contact" className="hp-btn hp-btn-primary">Let's Talk</Link>
              <Link to="/services" className="hp-btn hp-btn-outline" style={{ 
                color: 'white', 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                borderColor: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(10px)',
                fontWeight: 700
              }}>
                Our Offerings
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="hero-dots">
          <div className="hero-dot active"></div>
          <div className="hero-dot"></div>
          <div className="hero-dot"></div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section about-section">
        <div className="about-glow"></div>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px 80px', alignItems: 'flex-start' }}>
            
            <div className="about-text-column" style={{ flex: '2 1 500px' }}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="about-badge"
              >
                <div className="about-badge-line"></div>
                <span className="about-badge-text">ABOUT SIVION</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: '#ffffff', marginBottom: '40px', lineHeight: 1.1, fontWeight: 600, letterSpacing: '-1.5px' }}
              >
                Execution at scale,<br />built from ground up
              </motion.h2>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{ borderLeft: '1px solid rgba(0, 210, 255, 0.2)', paddingLeft: '40px', position: 'relative' }}
              >
                <p style={{ fontSize: '1.25rem', color: '#ffffff', lineHeight: '1.7', marginBottom: '12px', fontWeight: 500 }}>
                  SiviOn Global Technologies was founded to bridge the gap between complex enterprise requirements and scalable digital execution. We built a single delivery engine that handles robust technical architectures and engaging user interfaces with precision.
                </p>
                <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.8', marginBottom: '0' }}>
                  Today, our experts deliver high-performance Java solutions, modern web platforms, and results-oriented digital marketing for clients across the globe, spanning e-commerce, manufacturing, and fintech.
                </p>
              </motion.div>
            </div>

            <div className="about-stats-column" style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="about-card-stat"
              >
                <div className="about-card-icon"><Code2 size={28} /></div>
                <div className="about-card-info">
                  <h4 style={{ fontWeight: 900, letterSpacing: '-0.5px' }}>Founded</h4>
                  <p style={{ fontWeight: 900, color: 'var(--accent-cyan)' }}>2014</p>
                  <span>New Delhi, India</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="about-card-stat"
              >
                <div className="about-card-icon"><Settings size={28} /></div>
                <div className="about-card-info">
                  <h4 style={{ fontWeight: 900, letterSpacing: '-0.5px' }}>Experience</h4>
                  <p style={{ fontWeight: 900, color: 'var(--accent-cyan)' }}>10+ Years</p>
                  <span>Pure IT Expertise</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="about-card-stat"
              >
                <div className="about-card-icon"><BarChart size={28} /></div>
                <div className="about-card-info">
                  <h4 style={{ fontWeight: 900, letterSpacing: '-0.5px' }}>Sectors</h4>
                  <p style={{ fontWeight: 900, color: 'var(--accent-cyan)' }}>Java • Web • Digital</p>
                  <span>Integrated delivery</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                style={{ marginTop: '10px' }}
              >
                <Link to="/about" className="hp-btn-solid">
                  View Our Story &rarr;
                </Link>
              </motion.div>
            </div>

          </div>
          
          {/* Logo Strip / Divider Anchor */}
          <div style={{ marginTop: '100px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '60px', display: 'flex', justifyContent: 'center', opacity: 0.5 }}>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
              Trusted Partner for Digital Transformation
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="section" style={{ padding: '120px 0', background: 'var(--primary-blue)', position: 'relative', overflow: 'hidden' }}>
        <div className="about-glow" style={{ top: '20%', left: '70%', opacity: 0.4 }}></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '45px' }} // Reduced from 80px
          >
            <div className="about-badge" style={{ marginBottom: '20px' }}>
              <div className="about-badge-line"></div>
              <span className="about-badge-text">WHAT WE DO</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: '#ffffff', margin: 0, lineHeight: 1.1, fontWeight: 600, letterSpacing: '-1.5px' }}>
              End-to-end digital execution.
            </h2>
          </motion.div>

          {/* Development Group */}
          <div style={{ marginBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
              <div style={{ width: '20px', height: '2px', background: 'var(--accent-cyan)' }}></div>
              <h3 style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.8)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Development</h3>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.05)' }}></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {devServices.map((s, index) => (
                <motion.div 
                  variants={fadeUp} 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ 
                    borderColor: 'var(--accent-cyan)', 
                    boxShadow: '0 0 40px rgba(0, 210, 255, 0.15)',
                    borderLeftWidth: '5px' // Distinct hover effect
                  }}
                  key={index} 
                  style={{ 
                    padding: '35px', 
                    background: 'rgba(255,255,255,0.02)', 
                    border: '1px solid rgba(255,255,255,0.08)', 
                    borderLeft: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ color: 'var(--accent-cyan)', marginBottom: '25px' }}>
                    {React.cloneElement(s.icon, { size: 32 })}
                  </div>
                  <h4 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '12px', fontWeight: 900, letterSpacing: '-0.5px' }}>{s.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', marginBottom: '20px', lineHeight: 1.5 }}>{s.desc}</p>
                  <div style={{ marginTop: 'auto', color: 'var(--accent-cyan)', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                    Learn More <ArrowRight size={14} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Marketing Group */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
              <div style={{ width: '20px', height: '2px', background: 'var(--accent-cyan)' }}></div>
              <h3 style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.8)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Digital Marketing</h3>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.05)' }}></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {marketingServices.map((s, index) => (
                <motion.div 
                  variants={fadeUp} 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ 
                    borderColor: 'var(--accent-cyan)', 
                    boxShadow: '0 0 40px rgba(0, 210, 255, 0.15)',
                    borderLeftWidth: '5px' 
                  }}
                  key={index} 
                  style={{ 
                    padding: '35px', 
                    background: 'rgba(255,255,255,0.02)', 
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderLeft: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ color: 'var(--accent-cyan)', marginBottom: '25px' }}>
                    {React.cloneElement(s.icon, { size: 32 })}
                  </div>
                  <h4 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '12px', fontWeight: 900, letterSpacing: '-0.5px' }}>{s.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', marginBottom: '20px', lineHeight: 1.5 }}>{s.desc}</p>
                  <div style={{ marginTop: 'auto', color: 'var(--accent-cyan)', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                    Learn More <ArrowRight size={14} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <Link to="/services" className="hp-btn-solid" style={{ padding: '18px 50px', fontSize: '1.1rem' }}>
              Explore All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section" style={{ background: 'var(--primary-blue)', color: 'white', padding: '160px 0 120px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <div className="about-badge" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <div className="about-badge-line"></div>
              <span className="about-badge-text">WHY PARTNER WITH US?</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: '#ffffff', margin: 0, lineHeight: 1.1, fontWeight: 600, letterSpacing: '-1.5px' }}>
              The SiviOn Advantage
            </h2>
          </motion.div>

            <style>{`
              @media (max-width: 640px) {
                .advantages-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
              }
            `}</style>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ staggerChildren: 0.1 }}
              className="advantages-grid"
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '30px 40px' 
              }}
            >
            {advantages.map((adv, i) => (
              <motion.div 
                variants={fadeUp} 
                whileHover={{ y: -5 }}
                key={i} 
                style={{ 
                  display: 'flex', 
                  gap: '24px', 
                  padding: '10px 10px 30px 10px',
                  position: 'relative',
                  group: 'true',
                  borderBottom: '1px solid rgba(255,255,255,0.05)' // Subtle row separator
                }}
              >
                {/* Visual Left Accent on Hover */}
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: 'rgba(0, 210, 255, 0.08)', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0,
                  color: 'var(--accent-cyan)',
                  transition: 'all 0.3s ease'
                }}>
                  {React.cloneElement(adv.icon, { size: 24 })}
                </div>
                
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 900, margin: '0 0 8px 0', color: '#ffffff', letterSpacing: '-0.5px' }}>{adv.title}</h3>
                  <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.5, maxWidth: '350px' }}>
                    {adv.desc}
                  </p>
                  
                  {/* Subtle Underline Accent */}
                  <div className="adv-accent" style={{ 
                    width: '0%', 
                    height: '2px', 
                    background: 'var(--accent-cyan)', 
                    marginTop: '15px',
                    transition: 'width 0.3s ease'
                  }}></div>
                </div>
                
                {/* CSS logic for hover logic */}
                <style>{`
                  div[group="true"]:hover .adv-accent { width: 40px !important; }
                  div[group="true"]:hover > div:first-child { background: var(--accent-cyan) !important; color: var(--primary-blue) !important; transform: scale(1.1); }
                `}</style>
              </motion.div>
            ))}
          </motion.div>

          {/* Section Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '80px' }}
          >
            <Link to="/contact" className="hp-btn-solid" style={{ padding: '16px 40px' }}>
              Let's Talk &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" style={{ background: 'var(--primary-blue)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '120px 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <div className="about-badge" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <div className="about-badge-line"></div>
              <span className="about-badge-text">OUR PROCESS</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: '#ffffff', margin: 0, lineHeight: 1.1, fontWeight: 600, letterSpacing: '-1.5px' }}>
              How We Work
            </h2>
          </motion.div>

          {/* 3x2 Grid for Balanced Layout */}
          <style>{`
            @media (max-width: 768px) {
              .process-connector { display: none !important; }
              .process-grid { gap: 40px 20px !important; }
            }
          `}</style>
          <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ staggerChildren: 0.15 }}
              className="process-grid"
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '60px 40px' // Tightened gap from 80px to 60px
              }}
            >
              {processSteps.map((step, i) => (
                <motion.div 
                  variants={fadeUp} 
                  key={i} 
                  style={{ 
                    textAlign: 'center', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    position: 'relative'
                  }}
                >
                  {/* Horizontal Dashed Connector */}
                  {(i % 3 !== 2 && i < 5) && (
                    <div className="process-connector" style={{ 
                      position: 'absolute', 
                      top: '25px', 
                      left: 'calc(50% + 35px)', 
                      width: 'calc(100% - 70px)', 
                      height: '2px', 
                      borderTop: '2px dashed rgba(0, 210, 255, 0.4)',
                      zIndex: 0
                    }}></div>
                  )}

                  {/* Snake/Vertical Connector between Row 1 and Row 2 (Step 3 to 4) */}
                  {i === 2 && (
                    <div className="process-connector" style={{ 
                      position: 'absolute', 
                      top: '50px', 
                      right: 'calc(50%)', 
                      height: '60px', 
                      width: '2px', 
                      borderLeft: '2px dashed rgba(0, 210, 255, 0.4)',
                      zIndex: 0,
                      transform: 'translateY(10px)'
                    }}></div>
                  )}

                  {/* Number Node with Hover Interaction & Pulse */}
                  <motion.div 
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: 'var(--accent-cyan)', 
                      color: 'var(--primary-blue)', 
                      boxShadow: '0 0 30px rgba(0, 210, 255, 0.6)'
                    }}
                    transition={{
                      scale: {
                        duration: 0.4,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }
                    }}
                    style={{ 
                      width: '50px', 
                      height: '50px', 
                      background: 'var(--primary-blue)', 
                      border: '2px solid var(--accent-cyan)', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: 'var(--accent-cyan)', 
                      fontWeight: 800, 
                      fontSize: '1.1rem',
                      marginBottom: '25px',
                      boxShadow: '0 0 20px rgba(0, 210, 255, 0.1)',
                      zIndex: 2,
                      transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
                      cursor: 'default'
                    }}
                  >
                    {i + 1}
                  </motion.div>
                  
                  {/* Step Info */}
                  <h4 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '12px', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.5px' }}>{step.title}</h4>
                  <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.6, maxWidth: '240px' }}>{step.desc} </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Process Section Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '100px' }}
          >
            <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '25px', fontSize: '1.1rem' }}>Ready to begin?</p>
            <Link to="/contact" className="hp-btn-solid" style={{ 
              padding: '18px 50px', 
              fontSize: '1.1rem',
              background: 'var(--accent-cyan)',
              color: 'var(--primary-blue)'
            }}>
              Let's Talk &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section" style={{ background: 'var(--bg-navy-alt)', padding: '60px 0 100px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="about-badge" style={{ justifyContent: 'center', marginBottom: '20px' }}>
            <div className="about-badge-line"></div>
            <span className="about-badge-text">TECHNOLOGIES WE USE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: '#ffffff', marginBottom: '40px', fontWeight: 600, letterSpacing: '-1.5px' }}>
            Powered by Modern Tech Stack
          </h2>
        </div>

        {/* Infinite Marquee Wrapper */}
        <div style={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', padding: '20px 0', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--bg-navy-alt), transparent 15%, transparent 85%, var(--bg-navy-alt))', zIndex: 2, pointerEvents: 'none' }}></div>
          <motion.div
            animate={{ x: [0, -2500] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'inline-flex', gap: '30px' }}
          >
            {[
              { name: 'Java', color: '#f89820' },
              { name: 'Spring Boot', color: '#6db33f' },
              { name: 'Hibernate', color: '#bcae79' },
              { name: 'REST APIs', color: '#00d2ff' },
              { name: 'MySQL', color: '#4479a1' },
              { name: 'PostgreSQL', color: '#336791' },
              { name: 'HTML', color: '#e34f26' },
              { name: 'CSS', color: '#1572b6' },
              { name: 'JavaScript', color: '#f7df1e' },
              { name: 'React', color: '#61dafb' },
              { name: 'Angular', color: '#dd0031' },
              { name: 'Bootstrap', color: '#7952b3' },
              { name: 'Tailwind CSS', color: '#38b2ac' },
              { name: 'WordPress', color: '#21759b' },
              { name: 'SEO Tools', color: '#00a300' },
              { name: 'Google Ads', color: '#4285f4' },
              { name: 'Meta Ads', color: '#0668e1' },
              // Duplicates for seamless loop
              { name: 'Java', color: '#f89820' },
              { name: 'Spring Boot', color: '#6db33f' },
              { name: 'Hibernate', color: '#bcae79' },
              { name: 'REST APIs', color: '#00d2ff' },
              { name: 'MySQL', color: '#4479a1' },
              { name: 'PostgreSQL', color: '#336791' },
              { name: 'HTML', color: '#e34f26' },
              { name: 'CSS', color: '#1572b6' },
              { name: 'JavaScript', color: '#f7df1e' }
            ].map((tech, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05, borderColor: tech.color, boxShadow: `0 0 25px ${tech.color}44`, backgroundColor: 'rgba(255,255,255,0.05)' }}
                style={{ 
                  background: 'rgba(255,255,255,0.02)', 
                  padding: '18px 35px', 
                  borderRadius: '16px', 
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ width: '28px', height: '28px', color: tech.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Simplistic Icon Representational Circle/Dot */}
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: tech.color, boxShadow: `0 0 10px ${tech.color}` }}></div>
                </div>
                <span style={{ fontWeight: 700, color: 'white', fontSize: '1.2rem', letterSpacing: '0.5px' }}>{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust & Quality Section */}
      <section className="section" style={{ padding: '120px 0 80px', background: 'var(--primary-blue)', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="about-badge" style={{ justifyContent: 'center', marginBottom: '20px' }}>
            <div className="about-badge-line"></div>
            <span className="about-badge-text">CLIENT TRUST</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: '#ffffff', marginBottom: '25px', fontWeight: 600, letterSpacing: '-1.5px' }}>Trusted by Enterprises Worldwide</h2>
          <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.6)', marginBottom: '60px', maxWidth: '750px', margin: '0 auto 60px', lineHeight: 1.7 }}>
            We prioritize quality and precision. Our commitment to excellence has earned us the trust of businesses looking for reliable, scalable, and secure digital architectures.
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.15 }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: '24px', 
              maxWidth: '1200px', 
              margin: '0 auto' 
            }}
          >
            {[
              { num: '99%', label: 'Client Retention', sub: 'across all core engagements' },
              { num: '24/7', label: 'Expert Support', sub: 'dedicated technical assistance' },
              { num: '50+', label: 'Projects Delivered', sub: 'successful end-to-end executions' },
              { num: 'ISO', label: '9001:2015', sub: 'Certified Quality Management' }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                whileHover={{ y: -10, borderColor: 'var(--accent-cyan)', boxShadow: '0 10px 30px rgba(0, 210, 255, 0.15)' }} 
                style={{ 
                  padding: '40px 20px', 
                  background: 'rgba(255,255,255,0.02)', 
                  border: '1px solid rgba(255,255,255,0.08)', 
                  borderTop: '2px solid transparent', // Subtle top accent placeholder
                  borderRadius: '20px', 
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
              >
                <style>{`
                  div.trust-card:hover { border-top-color: var(--accent-cyan) !important; }
                `}</style>
                <h3 style={{ 
                  fontSize: stat.num === 'ISO' ? '3.5rem' : '3.2rem', // Slightly larger for ISO to match weight
                  color: 'var(--accent-cyan)', 
                  marginBottom: '5px', 
                  fontWeight: 900,
                  letterSpacing: stat.num === 'ISO' ? '2px' : 'normal' 
                }}>
                  {stat.num}
                </h3>
                <p style={{ fontWeight: 700, color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  {stat.label}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', margin: 0, lineHeight: 1.4 }}>
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision Statement Section (HP Style Banner) */}
      <section style={{ display: 'flex', flexWrap: 'wrap', minHeight: '600px', overflow: 'hidden', background: 'var(--primary-blue)' }}>
        <div style={{ flex: '1 1 500px', padding: '100px 8%', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
          <div className="about-badge" style={{ marginBottom: '25px' }}>
            <div className="about-badge-line"></div>
            <span className="about-badge-text">OUR VISION</span>
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: '#ffffff', lineHeight: 1.1, fontWeight: 600, marginBottom: '35px', letterSpacing: '-1.5px', position: 'relative', zIndex: 1, maxWidth: '800px' }}
          >
            Technology is powering the future of business.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '45px', maxWidth: '580px', position: 'relative', zIndex: 1 }}
          >
            From modern web applications to scalable data architectures, SiviOn's technology enables mastery: enhancing performance, precision, and efficiency for enterprises worldwide.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <Link to="/about" className="hp-btn-solid" style={{ padding: '16px 36px' }}>
              See How We Build &rarr;
            </Link>
          </motion.div>
        </div>
        
        <div style={{ flex: '1 1 500px', position: 'relative', minHeight: '450px', background: '#020617' }}>
          <img src="/vision-banner.jpg" alt="Technology Future" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.4 }} />
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to right, var(--primary-blue) 0%, var(--primary-blue) 10%, transparent 60%, rgba(2, 6, 23, 0.8) 100%)' 
          }}></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ 
        textAlign: 'center', 
        padding: '120px 0', 
        background: 'radial-gradient(circle at top, var(--navy-light) 0%, var(--primary-blue) 100%)', 
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle decorative glow */}
        <div style={{ 
          position: 'absolute', 
          top: '-20%', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          width: '80%', 
          height: '100%', 
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.08) 0%, transparent 70%)',
          zIndex: 0
        }}></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div className="about-badge" style={{ justifyContent: 'center', marginBottom: '30px' }}>
            <div className="about-badge-line"></div>
            <span className="about-badge-text">READY TO SCALE?</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: 'white', marginBottom: '25px', fontWeight: 600, letterSpacing: '-1.5px' }}>
            Ready to scale your business?
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', marginBottom: '50px', maxWidth: '650px', margin: '0 auto 50px', lineHeight: 1.6 }}>
            Consult with our expert developers and marketing strategists today. Let's build your digital success story together.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            <Link to="/contact" className="hp-btn-solid" style={{ padding: '18px 45px', fontSize: '1.1rem' }}>
              Get a Quote
            </Link>
            <Link to="/contact" className="hp-btn-outline" style={{ 
              padding: '18px 45px', 
              fontSize: '1.1rem', 
              color: 'white', 
              borderColor: 'var(--accent-cyan)',
              background: 'rgba(255, 255, 255, 0.05)'
            }}>
              Contact Us
            </Link>
            <Link to="/contact" className="hp-btn-outline" style={{ 
              padding: '18px 45px', 
              fontSize: '1.1rem', 
              color: 'white', 
              borderColor: 'var(--accent-green)',
              background: 'rgba(255, 255, 255, 0.05)'
            }}>
              Book Consultation
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
