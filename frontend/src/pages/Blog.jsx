import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Rss } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogs = [
    {
      title: 'Java Development Trends 2026: What Enterprises Need to Know',
      category: 'Java Development',
      author: 'Technical Team',
      date: 'March 10, 2026',
      desc: 'Explore the latest shifts in Java ecosystems, from Project Loom to the evolution of Spring Boot 3.x for microservices.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: '5 Website Development Tips to Boost Conversion Rates',
      category: 'Web Design',
      author: 'UX Lab',
      date: 'March 14, 2026',
      desc: 'Learn how technical performance, accessibility, and intuitive UI patterns can drastically improve user retention.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Digital Marketing Strategies for High-Growth Startups',
      category: 'Digital Marketing',
      author: 'Growth Strategist',
      date: 'March 16, 2026',
      desc: 'A comprehensive guide to multi-channel customer acquisition and scaling your brand footprint effectively.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'SEO Best Practices: Dominating Search in 2026',
      category: 'SEO',
      author: 'SEO Expert',
      date: 'March 18, 2026',
      desc: 'Why technical SEO is no longer optional. Deep dive into Core Web Vitals and semantic content structures.',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Accelerating Business Growth Through Strategic Technology',
      category: 'Business Growth',
      author: 'Consultancy Lead',
      date: 'March 20, 2026',
      desc: 'How choosing the right technical architecture today prevents expensive technical debt and scaling bottlenecks tomorrow.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div style={{ background: 'var(--primary-blue)', minHeight: '100vh', color: 'white' }}>
      
      {/* Header */}
      <section style={{ padding: '140px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="about-badge" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <div className="about-badge-line"></div>
              <span className="about-badge-text">INSIGHTS</span>
            </div>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 600, marginBottom: '25px', letterSpacing: '-1.5px' }}>
              Blog & Digital Strategy
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', maxWidth: '800px', margin: '0 auto' }}>
              Expert perspectives on Java development, web architectures, and growth-focused digital marketing trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section container" style={{ paddingBottom: '120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '40px' }}>
          {blogs.map((blog, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              style={{ 
                background: 'rgba(255,255,255,0.02)', 
                border: '1px solid rgba(255,255,255,0.05)', 
                borderRadius: '24px', 
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'var(--accent-cyan)' }}
            >
              <div style={{ height: '240px', overflow: 'hidden' }}>
                <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {blog.category}
                  </span>
                  <div style={{ display: 'flex', gap: '15px', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={14} /> {blog.date}</span>
                  </div>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 600, color: 'white', marginBottom: '20px', lineHeight: 1.3 }}>
                  {blog.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '30px', fontSize: '1.05rem' }}>
                  {blog.desc}
                </p>
                
                <Link to={`#`} style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '10px', 
                  color: 'white', 
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}>
                  Read Full Article <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,210,255,0.02)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Rss color="var(--accent-cyan)" size={40} style={{ marginBottom: '20px' }} />
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'white', marginBottom: '20px' }}>
            Subscribe to Our Insights
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>
            Get the latest technical trends and digital marketing strategies delivered to your inbox.
          </p>
          <div style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', gap: '10px' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ flex: 1, padding: '15px 25px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }}
            />
            <button className="hp-btn-solid" style={{ padding: '0 30px' }}>Subscribe</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;
