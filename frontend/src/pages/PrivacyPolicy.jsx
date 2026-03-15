import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{ background: 'var(--primary-blue)', minHeight: '100vh', color: 'white', padding: '120px 0' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', fontWeight: 600, marginBottom: '40px' }}>Privacy Policy</h1>
        <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>SiviOn Global Technologies ("us", "we", or "our") operates the SiviOn website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
          <h2>Information Collection and Use</h2>
          <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
          {/* Add more standard privacy policy text here */}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
