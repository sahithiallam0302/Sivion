import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Contact Us / Get a Quote</h1>
          <p>We're ready to build your digital success.</p>
        </div>
      </div>
      <section className="section container">
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '50px'}}>
          <div style={{flex: '1 1 400px'}}>
            <h2 className="section-title" style={{textAlign: 'left'}}>Get in Touch</h2>
            <p style={{color: '#666', marginBottom: '30px', fontSize: '1.1rem'}}>
              Fill out the form to request a consultation, quote, or discuss your upcoming projects. Our technical team will get back to you within 24 hours.
            </p>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                <span className="card-icon" style={{width: 50, height: 50, marginBottom: '0'}}><Phone size={24}/></span>
                <div>
                  <h4 style={{marginBottom: '5px'}}>Phone / WhatsApp</h4>
                  <p style={{color: '#666', fontSize: '0.9rem'}}>+91 XXX XXX XXXX</p>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                <span className="card-icon" style={{width: 50, height: 50, marginBottom: '0'}}><Mail size={24}/></span>
                <div>
                  <h4 style={{marginBottom: '5px'}}>Email Address</h4>
                  <p style={{color: '#666', fontSize: '0.9rem'}}>info@sivionglobaltechnologies.com</p>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                <span className="card-icon" style={{width: 50, height: 50, marginBottom: '0'}}><MapPin size={24}/></span>
                <div>
                  <h4 style={{marginBottom: '5px'}}>Office Location</h4>
                  <p style={{color: '#666', fontSize: '0.9rem'}}>SiviOn Global Tech, Hyderabad</p>
                </div>
              </div>
            </div>

            {/* Google Maps placeholder */}
            <div style={{width: '100%', height: '250px', background: '#e2e8f0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{color: '#64748b', fontWeight: 'bold'}}>[ Google Maps Embed ]</span>
            </div>
          </div>
          
          <div style={{flex: '1 1 500px'}}>
            <div className="contact-form">
              <h3>Drop Us a Message</h3>
              <form style={{marginTop: '20px'}}>
                <div style={{display: 'flex', gap: '20px'}}>
                  <div className="form-group" style={{flex: '1'}}>
                    <label>Full Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group" style={{flex: '1'}}>
                    <label>Company Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div style={{display: 'flex', gap: '20px'}}>
                  <div className="form-group" style={{flex: '1'}}>
                    <label>Mobile Number</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group" style={{flex: '1'}}>
                    <label>Email Address</label>
                    <input type="email" className="form-control" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Service Interested In</label>
                  <select className="form-control" required>
                    <option value="">Select Service...</option>
                    <option value="java">Java Full Stack Development</option>
                    <option value="website">Website Design & Dev</option>
                    <option value="webapp">Web Application</option>
                    <option value="digital_marketing">Digital Marketing / SEO</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Project Details / Budget Range</label>
                  <textarea className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{color: 'var(--primary-blue)', width: '100%'}}>Send Enquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
