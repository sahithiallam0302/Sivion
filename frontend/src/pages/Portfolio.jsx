import React from 'react';

const Portfolio = () => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Our Projects Portfolio</h1>
          <p>Delivering Excellence, One Project at a Time</p>
        </div>
      </div>
      <section className="section container">
        <p style={{textAlign: 'center', marginBottom: '40px', fontSize: '1.2rem', color: '#666'}}>
          A curated selection of our recent work across Java development, Web Apps, and Digital Marketing metrics.
        </p>
        <div className="grid">
          {/* Demo Portfolio Layouts */}
          <div className="card" style={{padding: '0', overflow: 'hidden'}}>
            <div style={{height: '200px', background: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{color: '#666'}}>Corporate Website Demo Screenshot</span>
            </div>
            <div style={{padding: '20px'}}>
              <h3 style={{marginBottom: '10px'}}>Fintech Portal</h3>
              <p style={{fontSize: '0.9rem', color: '#555'}}>Java Spring Boot backend with React Dashboard for secure transactions.</p>
            </div>
          </div>
          <div className="card" style={{padding: '0', overflow: 'hidden'}}>
            <div style={{height: '200px', background: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{color: '#666'}}>E-commerce Web App Demo</span>
            </div>
            <div style={{padding: '20px'}}>
              <h3 style={{marginBottom: '10px'}}>Global Retailer Platform</h3>
              <p style={{fontSize: '0.9rem', color: '#555'}}>Custom E-commerce logic with robust PostgreSQL database & seamless API integrations.</p>
            </div>
          </div>
          <div className="card" style={{padding: '0', overflow: 'hidden'}}>
            <div style={{height: '200px', background: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{color: '#666'}}>Digital Marketing Analytics Demo</span>
            </div>
            <div style={{padding: '20px'}}>
              <h3 style={{marginBottom: '10px'}}>B2B Lead Generation Campaign</h3>
              <p style={{fontSize: '0.9rem', color: '#555'}}>200% ROI scale using advanced Google/Meta Ads targeting & technical SEO improvements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
