import React from 'react';

const TermsConditions = () => {
  return (
    <div style={{ background: 'var(--primary-blue)', minHeight: '100vh', color: 'white', padding: '120px 0' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', fontWeight: 600, marginBottom: '40px' }}>Terms & Conditions</h1>
        <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>Welcome to SiviOn Global Technologies. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use.</p>
          <h2>License</h2>
          <p>Unless otherwise stated, SiviOn Global Technologies and/or its licensors own the intellectual property rights for all material on SiviOn.</p>
          {/* Add more standard terms here */}
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
