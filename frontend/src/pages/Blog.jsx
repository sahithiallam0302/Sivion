import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>IT Insights & Digital Trends</h1>
          <p>Expert articles on Java, Web Development, and Digital Strategy</p>
        </div>
      </div>
      <section className="section container">
        <div className="grid">
          {['Java Development Trends 2026', 'Why React.js is Perfect for High-Performance Apps', 'SEO Best Practices for Enterprise Portals', 'Maximizing ROI with Targeted Meta Ads'].map((title, i) => (
            <div key={i} className="card" style={{display: 'flex', flexDirection: 'column'}}>
              <h3 style={{marginBottom: '15px'}}>{title}</h3>
              <p style={{flexGrow: '1', color: '#666', fontSize: '0.9rem'}}>
                A deep dive into industry-specific strategies tailored for modern business growth and robust software design paradigms.
              </p>
              <button className="btn btn-outline" style={{marginTop: '20px', width: 'fit-content', color: 'var(--primary-blue)', border: 'none', padding: '0', borderBottom: '1px solid var(--accent-cyan)', background: 'transparent', borderRadius: '0'}}>Read More</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
