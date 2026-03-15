import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setProjects(data.data);
        }
      })
      .catch(err => console.error('Error fetching portfolio:', err))
      .finally(() => setLoading(false));
  }, []);

  const categories = [
    { name: 'All Work', id: 'all' },
    { name: 'Web', id: 'Web' },
    { name: 'Java', id: 'Java' },
    { name: 'Mobile', id: 'Mobile' },
    { name: 'Marketing', id: 'Digital Marketing' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#0A1128] pt-32 pb-20 overflow-x-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyan-500/5 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/5 blur-[150px] -z-10" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-cyan-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Our Expertise in Action</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight italic">
              Selected Projects
            </h1>
            <p className="text-xl text-[#94A3B8] leading-relaxed">
              Discover how we've helped leading organizations across the globe 
              transform their digital landscape with precision engineering and strategic vision.
            </p>
          </motion.div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <span className="text-[#94A3B8] flex items-center gap-2 text-sm font-medium mr-2">
            <Filter size={16} /> Filter by:
          </span>
          {categories.map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                filter === tab.id 
                  ? 'bg-cyan-500 border-cyan-500 text-[#0A1128] shadow-[0_0_20px_rgba(6,182,212,0.3)]' 
                  : 'bg-white/5 border-white/10 text-white hover:border-cyan-500/50'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2, 4].map(i => (
              <div key={i} className="aspect-video bg-white/5 rounded-[40px] animate-pulse" />
            ))}
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj, i) => (
                <motion.div
                  key={proj._id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="group"
                >
                  <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden bg-navy-800 border border-white/10">
                    <img 
                      src={proj.coverImage || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'} 
                      alt={proj.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="flex items-center gap-3 mb-4">
                         {(proj.technologies || []).slice(0, 3).map(tech => (
                           <span key={tech} className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-white border border-white/10">
                             {tech}
                           </span>
                         ))}
                      </div>
                      <h3 className="text-3xl font-black text-white mb-2 italic tracking-tighter group-hover:text-cyan-400 transition-colors uppercase">
                        {proj.title}
                      </h3>
                    </div>

                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                       <a href={proj.liveUrl || '#'} target="_blank" className="w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center text-[#0A1128] hover:scale-110 transition-transform shadow-2xl">
                          <ArrowUpRight size={24} />
                       </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Empty State */}
        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white/3 rounded-[40px] border border-dashed border-white/10">
            <h3 className="text-2xl font-bold text-white mb-2">No projects found in this category</h3>
            <p className="text-[#94A3B8]">Try selecting a different filter or check back later.</p>
          </div>
        )}

        {/* CTA */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-16 rounded-[60px] bg-gradient-to-br from-[#0D1B3E] to-[#0A1128] border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyan-500/10 blur-[100px]" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight italic">
            Ready to Build Your <br /> Digital Legacy?
          </h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-white text-[#0A1128] font-black px-12 py-5 rounded-full hover:bg-cyan-400 hover:text-white transition-all transform hover:scale-105 shadow-2xl"
          >
            GET IN TOUCH <ArrowUpRight size={20} />
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default Portfolio;
