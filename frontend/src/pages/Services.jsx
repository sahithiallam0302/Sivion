import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Our Core IT & Digital Services</h1>
          <p>Scalable, Modern, and Result-Oriented Solutions</p>
        </div>
      </div>
      <section className="section container">
        <div className="grid">
          <div className="card">
            <h3>Java Full Stack Development</h3>
            <p>End-to-end applications using Spring Boot, Hibernate, microservices, and modern frontend frameworks like React and Angular.</p>
          </div>
          <div className="card">
            <h3>Website Design & Development</h3>
            <p>Premium corporate presence, custom WordPress themes, and high-performance Web Apps designed for conversion.</p>
          </div>
          <div className="card">
            <h3>Custom Web Application Development</h3>
            <p>Dynamic, robust SAAS solutions, portals, and dashboards tailored to your exact operational requirements.</p>
          </div>
          <div className="card">
            <h3>Digital Marketing & SEO</h3>
            <p>Accelerate your reach with targeted Google & Meta campaigns, technical SEO, content strategy, and performance analytics.</p>
          </div>
        </div>
        <div style={{textAlign: 'center', marginTop: '60px'}}>
          <Link to="/contact" className="btn btn-primary" style={{color: 'var(--primary-blue)'}}>Discuss Your Project</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
