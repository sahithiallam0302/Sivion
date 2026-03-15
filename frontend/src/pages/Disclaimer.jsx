import React from 'react';

const Disclaimer = () => {
  return (
    <div style={{ background: 'var(--primary-blue)', minHeight: '100vh', color: 'white', padding: '120px 0' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', fontWeight: 600, marginBottom: '40px' }}>Disclaimer</h1>
        <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>The information provided by SiviOn Global Technologies ("we", "us", or "our") on our website is for general informational purposes only.</p>
          <p>All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the Site.</p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
