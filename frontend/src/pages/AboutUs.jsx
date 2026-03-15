import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, 
  Rocket, 
  ShieldCheck, 
  Users, 
  Clock, 
  Tag, 
  Handshake, 
  Layers, 
  Code2, 
  Settings, 
  BarChart, 
  Heart, 
  Lightbulb, 
  TrendingUp,
  Search,
  Wrench,
  Eye,
  Flag,
  ArrowRight
} from 'lucide-react';

const AboutUs = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const advantages = [
    { title: 'Skilled Team of Developers', icon: <Users />, desc: 'Project-hardened engineers with deep expertise in modern architectures.' },
    { title: 'Scalable & Secure Solutions', icon: <ShieldCheck />, desc: 'Cloud-ready infrastructures built with security-first engineering.' },
    { title: 'On-time Project Delivery', icon: <Clock />, desc: 'Rigorous project management ensuring every milestone is met.' },
    { title: 'Cost-effective Pricing', icon: <Tag />, desc: 'Premium engineering and marketing services tailored to your budget.' },
    { title: 'Client-focused Approach', icon: <Handshake />, desc: 'Collaborative delivery models that put your business goals first.' },
    { title: 'Modern Tech Stack', icon: <Layers />, desc: 'Utilizing the latest versions of Java, React, and Cloud technologies.' }
  ];

  const cultureCards = [
    { 
      title: 'Innovation First', 
      icon: <Lightbulb size={32} />, 
      desc: 'We embrace new technologies and encourage creative problem-solving at every level.' 
    },
    { 
      title: 'Collaboration Over Hierarchy', 
      icon: <Users size={32} />, 
      desc: 'Flat structure where every voice matters and ideas flow freely across teams.' 
    },
    { 
      title: 'Growth Mindset', 
      icon: <TrendingUp size={32} />, 
      desc: 'We invest in our people — freshers, trainees, and senior engineers — because their growth is our growth.' 
    }
  ];

  const approachSteps = [
    { title: 'Understand', icon: <Search size={24} />, desc: 'Deep discovery of your business goals and technical needs.' },
    { title: 'Strategize', icon: <Settings size={24} />, desc: 'Architecture planning and technology selection.' },
    { title: 'Execute', icon: <Code2 size={24} />, desc: 'Agile delivery with regular client check-ins and feedback loops.' },
    { title: 'Support', icon: <Wrench size={24} />, desc: 'Post-launch maintenance, monitoring, and growth support.' }
  ];

  return (
    <div style={{ background: 'var(--primary-blue)', minHeight: '100vh', color: 'white' }}>
      
      {/* 1. Hero Banner */}
      <section style={{ 
        minHeight: '600px', 
        display: 'flex', 
        flexWrap: 'wrap', 
        overflow: 'hidden', 
        background: 'var(--primary-blue)', 
        position: 'relative',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        {/* Faint Grid Overlay */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)', 
          backgroundSize: '40px 40px',
          zIndex: 0 
        }}></div>

        <div style={{ flex: '1 1 500px', padding: '120px 8%', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="about-badge"
            style={{ marginBottom: '25px' }}
          >
            <div className="about-badge-line"></div>
            <span className="about-badge-text">ABOUT SIVION</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 3.75rem)', fontWeight: 600, lineHeight: 1.1, marginBottom: '25px', letterSpacing: '-1.5px' }}
          >
            We Build. We Deliver.<br />We Grow.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '600px' }}
          >
            SiviOn Global Technologies is a pure IT-based company delivering scalable, modern, and result-oriented digital solutions for businesses, startups, and enterprises.
          </motion.p>
        </div>
        
        <div style={{ flex: '1 1 500px', position: 'relative', minHeight: '400px' }}>
          <img src="/about-team.jpg" alt="Our Team" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to right, var(--primary-blue) 0%, transparent 100%), linear-gradient(to bottom, transparent 70%, var(--primary-blue) 100%)' 
          }}></div>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(11, 28, 60, 0.4)' }}></div>
        </div>
      </section>

      {/* 2. Company Introduction */}
      <section className="section" style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'flex-start' }}>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              style={{ flex: '2 1 500px' }}
            >
              <h2 style={{ fontSize: '3rem', fontWeight: 600, color: '#ffffff', marginBottom: '40px', letterSpacing: '-1px' }}>Who We Are</h2>
              <div style={{ borderLeft: '1px solid rgba(0, 210, 255, 0.2)', paddingLeft: '40px' }}>
                <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '25px' }}>
                  SiviOn Global Technologies was founded to bridge the gap between complex enterprise requirements and scalable digital execution. We built a single delivery engine that handles robust technical architectures and engaging user interfaces with precision.
                </p>
                <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
                  Today, our experts deliver high-performance Java solutions, modern web platforms, and results-oriented digital marketing for clients across the globe, spanning e-commerce, manufacturing, and fintech.
                </p>
              </div>
            </motion.div>

            <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { title: 'Founded', val: '2014', sub: 'New Delhi, India', icon: <Code2 size={24} /> },
                { title: 'Experience', val: '10+ Years', sub: 'Pure IT Expertise', icon: <Settings size={24} /> },
                { title: 'Sectors', val: 'Java • Web • Digital', sub: 'Integrated Delivery', icon: <BarChart size={24} /> }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="about-card-stat" 
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '25px', display: 'flex', gap: '20px', alignItems: 'center' }}
                >
                  <div style={{ background: 'rgba(0, 210, 255, 0.1)', color: 'var(--accent-cyan)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {card.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px', fontWeight: 700 }}>{card.title}</h4>
                    <p style={{ fontSize: '1.4rem', color: 'white', fontWeight: 700, margin: 0 }}>{card.val}</p>
                    <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>{card.sub}</span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="section" style={{ padding: '80px 0', background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '50px', borderRadius: '24px' }}
            >
              <div style={{ color: 'var(--accent-cyan)', marginBottom: '30px' }}>
                <Eye size={48} />
              </div>
              <h3 style={{ fontSize: '2.2rem', color: 'white', fontWeight: 600, marginBottom: '20px' }}>Our Vision</h3>
              <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                To be a globally recognized IT company that empowers businesses of all sizes through intelligent technology, innovative digital solutions, and measurable results.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '50px', borderRadius: '24px' }}
            >
              <div style={{ color: 'var(--accent-cyan)', marginBottom: '30px' }}>
                <Rocket size={48} />
              </div>
              <h3 style={{ fontSize: '2.2rem', color: 'white', fontWeight: 600, marginBottom: '20px' }}>Our Mission</h3>
              <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                To deliver scalable, secure, and performance-driven digital solutions — from enterprise Java systems to growth-focused digital marketing — with precision, transparency, and client-first thinking.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Why SiviOn Global Technologies */}
      <section className="section" style={{ padding: '120px 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <div className="about-badge" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <div className="about-badge-line"></div>
              <span className="about-badge-text">WHY CHOOSE US</span>
            </div>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 600, color: 'white', letterSpacing: '-1.5px' }}>The SiviOn Advantage</h2>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '30px 80px' 
          }}>
            {advantages.map((adv, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                style={{ display: 'flex', gap: '24px', padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div style={{ width: '50px', height: '50px', background: 'rgba(0, 210, 255, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)', flexShrink: 0 }}>
                  {React.cloneElement(adv.icon, { size: 24 })}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white', marginBottom: '10px' }}>{adv.title}</h3>
                  <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{adv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Work Culture */}
      <section className="section" style={{ padding: '120px 0', background: 'rgba(27, 54, 100, 0.4)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '80px' }}
          >
            <div className="about-badge" style={{ marginBottom: '20px' }}>
              <div className="about-badge-line"></div>
              <span className="about-badge-text">OUR CULTURE</span>
            </div>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 600, color: 'white', letterSpacing: '-1.5px' }}>
              A Team That Thinks Like Owners
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {cultureCards.map((card, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '40px', borderRadius: '20px', textAlign: 'center' }}
              >
                <div style={{ color: 'var(--accent-cyan)', marginBottom: '25px', display: 'flex', justifyContent: 'center' }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'white', marginBottom: '15px' }}>{card.title}</h3>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Approach to Client Solutions */}
      <section className="section" style={{ padding: '120px 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <div className="about-badge" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <div className="about-badge-line"></div>
              <span className="about-badge-text">OUR APPROACH</span>
            </div>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 600, color: 'white', letterSpacing: '-1.5px' }}>
              How We Think About Your Project
            </h2>
          </motion.div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', position: 'relative' }}>
            {approachSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                style={{ flex: '1 1 250px', textAlign: 'center', padding: '30px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px', position: 'relative' }}
              >
                <div style={{ width: '60px', height: '60px', background: 'var(--accent-cyan)', color: 'var(--primary-blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px' }}>
                  {step.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white', marginBottom: '15px' }}>{step.title}</h3>
                <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{step.desc}</p>
                
                {/* Arrow Connector for Desktop */}
                {i < approachSteps.length - 1 && (
                  <div style={{ position: 'absolute', top: '50%', right: '-15px', transform: 'translateY(-50%)', color: 'rgba(0, 210, 255, 0.2)', display: 'none' }} className="approach-arrow">
                    <ArrowRight size={30} />
                  </div>
                )}
              </motion.div>
            ))}
            <style>{`
              @media (min-width: 1024px) {
                .approach-arrow { display: block !important; }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Banner */}
      <section style={{ padding: '120px 0', background: 'radial-gradient(circle at center, rgba(0, 210, 255, 0.08) 0%, transparent 70%), var(--primary-blue)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: '3.5rem', fontWeight: 600, color: 'white', marginBottom: '25px', letterSpacing: '-1.5px' }}>
              Ready to build something great together?
            </h2>
            <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.6)', marginBottom: '50px', maxWidth: '700px', margin: '0 auto 50px' }}>
              Let's discuss your project, your goals, and how SiviOn can help you get there.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
              <Link to="/contact" className="hp-btn-solid" style={{ padding: '18px 45px', fontSize: '1.1rem' }}>
                Get a Free Consultation
              </Link>
              <Link to="/services" className="hp-btn-outline" style={{ padding: '18px 45px', fontSize: '1.1rem', color: 'white', borderColor: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)' }}>
                View Our Services &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
