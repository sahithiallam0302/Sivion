import React from 'react';

const Technologies = () => {
  const techStack = {
    Backend: ['Java 17+', 'Spring Boot', 'Hibernate / JPA', 'Node.js', 'RESTful APIs', 'Microservices'],
    Frontend: ['React.js', 'Angular', 'HTML5 / CSS3', 'JavaScript / TypeScript', 'Tailwind CSS', 'Bootstrap'],
    Databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    Marketing: ['Google Ads', 'Meta Ads', 'SEO Tools (Ahrefs/Semrush)', 'Google Analytics', 'WordPress CMS']
  };

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Technologies We Master</h1>
          <p>Leveraging modern tools for robust architectures and intelligent marketing</p>
        </div>
      </div>
      <section className="section container">
        <div className="grid">
          {Object.entries(techStack).map(([category, skills]) => (
            <div key={category} className="card" style={{background: '#f8fafc'}}>
              <h3 style={{borderBottom: '2px solid var(--accent-cyan)', paddingBottom: '10px', display: 'inline-block'}}>{category}</h3>
              <ul style={{listStyle: 'none', marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                {skills.map((skill, index) => (
                  <li key={index} style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#4b5563'}}>
                    <span style={{color: 'var(--accent-cyan)'}}>❖</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Technologies;
