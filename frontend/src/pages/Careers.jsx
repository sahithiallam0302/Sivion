import React from 'react';

const Careers = () => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Join Our Growing Team</h1>
          <p>Freshers, Trainees, and Experienced Professionals Welcome</p>
        </div>
      </div>
      <section className="section container">
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '40px'}}>
          <div style={{flex: '1 1 500px'}}>
            <h2 className="section-title" style={{textAlign: 'left'}}>Current Openings</h2>
            <div style={{background: '#f8fafc', padding: '20px', borderRadius: '8px', marginBottom: '20px', borderLeft: '4px solid var(--accent-cyan)'}}>
              <h3 style={{marginBottom: '5px'}}>Junior Java Developer</h3>
              <p style={{color: '#666', fontSize: '0.9rem'}}>Full-time | Freshers & Trainees</p>
              <p style={{marginTop: '10px'}}>We are looking for passionate individuals with foundational knowledge in core Java and spring boot concepts. Paid internships leading to full-time roles available.</p>
            </div>
            <div style={{background: '#f8fafc', padding: '20px', borderRadius: '8px', marginBottom: '20px', borderLeft: '4px solid var(--accent-cyan)'}}>
              <h3 style={{marginBottom: '5px'}}>Digital Marketing Executive</h3>
              <p style={{color: '#666', fontSize: '0.9rem'}}>Full-time | 1-2 Yrs Exp</p>
              <p style={{marginTop: '10px'}}>Seeking experts in SEO, content strategy, and paid ads (Meta/Google). Help scale our clients' digital footprints effectively.</p>
            </div>
          </div>
          <div style={{flex: '1 1 400px'}}>
            <div className="contact-form">
              <h3 style={{marginBottom: '20px'}}>Apply Now</h3>
              <form>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" className="form-control" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Phone / WhatsApp</label>
                  <input type="text" className="form-control" placeholder="+91 XXX XXX XXXX" required />
                </div>
                <div className="form-group">
                  <label>Role Applying For</label>
                  <select className="form-control" required>
                    <option value="">Select a role...</option>
                    <option value="java">Junior Java Developer</option>
                    <option value="web">Web Developer</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="internship">General Internship</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Upload Resume Link (Drive/Dropbox)</label>
                  <input type="url" className="form-control" placeholder="https://" required />
                </div>
                <button type="submit" className="btn btn-primary" style={{color: 'var(--primary-blue)', width: '100%'}}>Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
