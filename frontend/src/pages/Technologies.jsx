import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Database, 
  Globe, 
  BarChart, 
  Code2, 
  Layers, 
  Cpu 
} from 'lucide-react';

const Technologies = () => {
  const techCategories = [
    {
      title: 'Backend & Core',
      icon: <Cpu size={32} />,
      skills: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs']
    },
    {
      title: 'Frontend & UI',
      icon: <Globe size={32} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React / Angular']
    },
    {
      title: 'Styling & Frameworks',
      icon: <Layers size={32} />,
      skills: ['Bootstrap / Tailwind', 'Material UI']
    },
    {
      title: 'Database Management',
      icon: <Database size={32} />,
      skills: ['MySQL', 'PostgreSQL']
    },
    {
      title: 'CMS & Platforms',
      icon: <Code2 size={32} />,
      skills: ['WordPress']
    },
    {
      title: 'Growth & Ads',
      icon: <BarChart size={32} />,
      skills: ['SEO Tools', 'Google Ads / Meta Ads']
    }
  ];

  return (
    <div style={{ background: 'var(--primary-blue)', minHeight: '100vh', color: 'white' }}>
      
      {/* Page Header */}
      <section style={{ padding: '140px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="about-badge" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <div className="about-badge-line"></div>
              <span className="about-badge-text">TECH STACK</span>
            </div>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 600, marginBottom: '25px', letterSpacing: '-1.5px' }}>
              Technologies We Master
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', maxWidth: '800px', margin: '0 auto' }}>
              We utilize a project-hardened suite of technologies to build scalable architectures and high-performance digital marketing engines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Grid */}
      <section className="section container" style={{ paddingBottom: '120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {techCategories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              style={{ 
                background: 'rgba(255,255,255,0.02)', 
                border: '1px solid rgba(255,255,255,0.05)', 
                borderRadius: '24px', 
                padding: '40px',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ 
                y: -10, 
                backgroundColor: 'rgba(255,255,255,0.04)',
                borderColor: 'var(--accent-cyan)'
              }}
            >
              <div style={{ color: 'var(--accent-cyan)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                {cat.icon}
                <h3 style={{ fontSize: '1.6rem', fontWeight: 600, color: 'white', margin: 0 }}>
                  {cat.title}
                </h3>
              </div>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {cat.skills.map((skill, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)' }}>
                    <div style={{ width: '6px', height: '6px', background: 'var(--accent-cyan)', borderRadius: '50%' }}></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'white', marginBottom: '30px' }}>
            Ready to build with a modern stack?
          </h2>
          <Link to="/contact" className="hp-btn-solid" style={{ padding: '18px 50px' }}>
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
