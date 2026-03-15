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
  ArrowRight,
  Zap
} from 'lucide-react';

const AboutUs = () => {
  const colors = {
    primaryBg: '#0A1128',
    cardBg: '#0D1B3E',
    white: '#FFFFFF',
    secondaryText: '#94A3B8',
    accent: '#06B6D4',
    subLabel: '#64748B',
    accentBorder: 'rgba(6, 182, 212, 0.15)',
    accentBg: 'rgba(6, 182, 212, 0.1)'
  };

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

  const labelStyle = {
    fontSize: '13px',
    fontWeight: 700,
    color: colors.accent,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px'
  };

  const bodyStyle = {
    fontSize: '16px',
    color: colors.secondaryText,
    lineHeight: '1.7',
    margin: 0
  };

  return (
    <div style={{ background: colors.primaryBg, minHeight: '100vh', color: colors.white }}>

      {/* Breadcrumbs */}
      <div className="container" style={{ padding: '120px 0 20px', display: 'flex', gap: '8px', fontSize: '0.9rem', color: colors.secondaryText }}>
        <Link to="/" style={{ color: colors.accent, textDecoration: 'none' }}>Home</Link>
        <span>&gt;</span>
        <span style={{ color: colors.white }}>About</span>
      </div>

      {/* 1. Hero Banner */}
      <section className="container" style={{ marginBottom: '80px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            width: '100%',
            paddingBottom: '32%',
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative',
            background: 'linear-gradient(135deg, #0A1128 0%, #0D2248 100%)'
          }}
        >
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/about-team.jpg"
              alt="About SiviOn"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <h1 style={{
              position: 'relative',
              zIndex: 1,
              fontSize: 'min(5rem, 10vw)',
              fontWeight: 900,
              color: colors.white,
              margin: 0,
              textShadow: '0 10px 30px rgba(0,0,0,0.8)'
            }}>
              About
            </h1>
          </div>
        </motion.div>
      </section>

      {/* Brand Statement */}
      <section className="container" style={{ marginBottom: '80px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 500px' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={labelStyle}
            >
              <div style={{ width: '40px', height: '1px', background: colors.accent }}></div>
              ABOUT SIVION
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ fontSize: 'clamp(52px, 5vw, 60px)', fontWeight: 700, color: colors.white, lineHeight: 1.1, marginBottom: '25px' }}
            >
              We Build. We Deliver.<br />We Grow.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ ...bodyStyle, fontSize: '17px', maxWidth: '600px' }}
            >
              SiviOn Global Technologies is a pure IT-based company delivering scalable, modern, and result-oriented digital solutions for businesses, startups, and enterprises.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'center' }}>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              style={{ flex: '2 1 500px' }}
            >
              <div style={labelStyle}>
                <div style={{ width: '40px', height: '1px', background: colors.accent }}></div>
                WHO WE ARE
              </div>
              <h2 style={{ fontSize: '40px', fontWeight: 700, color: colors.white, marginBottom: '40px', letterSpacing: '-1px' }}>Who We Are</h2>
              <div style={{ borderLeft: `1px solid ${colors.accentBorder}`, paddingLeft: '40px' }}>
                <p style={{ ...bodyStyle, marginBottom: '25px' }}>
                  SiviOn Global Technologies was founded to bridge the gap between complex enterprise requirements and scalable digital execution. We built a single delivery engine that handles robust technical architectures and engaging user interfaces with precision.
                </p>
                <p style={bodyStyle}>
                  Today, our experts deliver high-performance Java solutions, modern web platforms, and results-oriented digital marketing for clients across the globe, spanning e-commerce, manufacturing, and fintech.
                </p>
              </div>
            </motion.div>

            <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { title: 'FOUNDED', val: '2014', sub: 'New Delhi, India', icon: <Code2 size={24} /> },
                { title: 'EXPERIENCE', val: '10+ Years', sub: 'Pure IT Expertise', icon: <Settings size={24} /> },
                { title: 'SECTORS', val: 'Java • Web • Digital', sub: 'Integrated Delivery', icon: <BarChart size={24} /> }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    background: colors.cardBg,
                    border: `1px solid ${colors.accentBorder}`,
                    borderRadius: '16px',
                    padding: '25px',
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ background: colors.accentBg, color: colors.accent, width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {card.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '12px', color: colors.secondaryText, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px', fontWeight: 700 }}>{card.title}</h4>
                    <p style={{ fontSize: '22px', color: colors.white, fontWeight: 700, margin: 0 }}>{card.val}</p>
                    <span style={{ fontSize: '13px', color: colors.subLabel }}>{card.sub}</span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision & Mission (Asymmetric Layout) */}
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ ...labelStyle, marginBottom: '32px' }}
          >
            <div style={{ width: '40px', height: '1px', background: colors.accent }}></div>
            OUR PURPOSE
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 58%) minmax(0, 38%)',
            gap: '24px',
            alignItems: 'stretch',
            justifyContent: 'space-between'
          }}>
            {/* Vision Card (Left - Wider) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              style={{
                background: colors.cardBg,
                border: `1px solid rgba(6, 182, 212, 0.12)`,
                borderLeft: `3px solid ${colors.accent}`,
                padding: '40px',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ width: '44px', height: '44px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.accent, marginBottom: '25px' }}>
                <Target size={20} />
              </div>
              <h3 style={{ fontSize: '26px', color: colors.white, fontWeight: 700, marginBottom: '15px' }}>Our Vision</h3>
              <div style={{ width: '40px', height: '1px', background: colors.accent, marginBottom: '20px' }}></div>
              <p style={{ ...bodyStyle, fontSize: '16px', lineHeight: '1.75' }}>
                To be the go-to technology partner for businesses that want to scale — delivering precision-built systems that outlast trends.
              </p>
            </motion.div>

            {/* Mission Card (Right - Narrower) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              style={{
                background: colors.cardBg,
                border: `1px solid rgba(6, 182, 212, 0.12)`,
                borderTop: `3px solid ${colors.accent}`,
                padding: '40px',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ width: '44px', height: '44px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.accent, marginBottom: '25px' }}>
                <Zap size={20} />
              </div>
              <h3 style={{ fontSize: '26px', color: colors.white, fontWeight: 700, marginBottom: '15px' }}>Our Mission</h3>
              <div style={{ width: '40px', height: '1px', background: colors.accent, marginBottom: '20px' }}></div>
              <p style={{ ...bodyStyle, fontSize: '16px', lineHeight: '1.75' }}>
                Ship robust Java backends, modern web platforms, and performance-driven digital marketing. Every sprint. Every client.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Why SiviOn Global Technologies */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <div style={{ ...labelStyle, justifyContent: 'center', marginBottom: '8px' }}>
              <div style={{ width: '40px', height: '1px', background: colors.accent }}></div>
              WHY CHOOSE US
              <div style={{ width: '40px', height: '1px', background: colors.accent }}></div>
            </div>
            <h2 style={{ fontSize: '42px', fontWeight: 700, color: colors.white, letterSpacing: '-1px', margin: 0 }}>The SiviOn Advantage</h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {advantages.map((adv, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                style={{ 
                  background: colors.cardBg, 
                  border: '1px solid rgba(6, 182, 212, 0.12)', 
                  borderRadius: '14px', 
                  padding: '28px',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}
              >
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  background: 'rgba(6, 182, 212, 0.12)', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: colors.accent, 
                  marginBottom: '16px',
                  flexShrink: 0 
                }}>
                  {React.cloneElement(adv.icon, { size: 22 })}
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 600, color: colors.white, marginBottom: '12px' }}>{adv.title}</h3>
                  <p style={{ ...bodyStyle, fontSize: '14px', lineHeight: '1.7' }}>{adv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Work Culture */}
      <section style={{ padding: '100px 0', background: 'rgba(13, 27, 62, 0.4)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '80px' }}
          >
            <div style={labelStyle}>
              <div style={{ width: '40px', height: '1px', background: colors.accent }}></div>
              OUR CULTURE
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: 700, color: colors.white, letterSpacing: '-1.5px' }}>
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
                style={{ background: colors.cardBg, border: `1px solid ${colors.accentBorder}`, padding: '40px', borderRadius: '20px', textAlign: 'center' }}
              >
                <div style={{ color: colors.accent, marginBottom: '25px', display: 'flex', justifyContent: 'center' }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: colors.white, marginBottom: '15px' }}>{card.title}</h3>
                <p style={bodyStyle}>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Approach */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <div style={{ ...labelStyle, justifyContent: 'center' }}>
              <div style={{ width: '40px', height: '1px', background: colors.accent }}></div>
              OUR APPROACH
              <div style={{ width: '40px', height: '1px', background: colors.accent }}></div>
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: 700, color: colors.white, letterSpacing: '-1.5px' }}>
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
                style={{ flex: '1 1 250px', textAlign: 'center', padding: '30px', background: colors.cardBg, border: `1px solid ${colors.accentBorder}`, borderRadius: '20px', position: 'relative' }}
              >
                <div style={{ width: '60px', height: '60px', background: colors.accent, color: colors.primaryBg, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px' }}>
                  {step.icon}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: colors.white, marginBottom: '15px' }}>{step.title}</h3>
                <p style={bodyStyle}>{step.desc}</p>

                {i < approachSteps.length - 1 && (
                  <div style={{ position: 'absolute', top: '50%', right: '-15px', transform: 'translateY(-50%)', color: 'rgba(6, 182, 212, 0.2)', display: 'none' }} className="approach-arrow">
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

      {/* 7. Bottom CTA */}
      <section style={{ padding: '100px 0', background: `radial-gradient(circle at center, rgba(6, 182, 212, 0.08) 0%, transparent 70%), ${colors.primaryBg}`, borderTop: `1px solid ${colors.accentBorder}` }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 40px)', fontWeight: 700, color: colors.white, marginBottom: '25px', letterSpacing: '-1.5px' }}>
              Ready to build something great together?
            </h2>
            <p style={{ ...bodyStyle, fontSize: '18px', marginBottom: '50px', maxWidth: '700px', margin: '0 auto 50px' }}>
              Let's discuss your project, your goals, and how SiviOn can help you get there.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
              <Link to="/contact" className="hp-btn-solid" style={{ padding: '18px 45px', fontSize: '1.1rem' }}>
                Get a Free Consultation
              </Link>
              <Link to="/services" className="hp-btn-outline" style={{ padding: '18px 45px', fontSize: '1.1rem', color: colors.white, borderColor: colors.accentBorder, background: 'rgba(255,255,255,0.05)' }}>
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
