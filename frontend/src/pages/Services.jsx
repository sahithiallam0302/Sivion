
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code,
  Globe,
  BarChart,
  Search,
  Headphones,
  Zap,
  ArrowRight
} from "lucide-react";

/* =========================
   Icon Mapping
========================= */

const iconMap = {
  Code: Code,
  Globe: Globe,
  BarChart: BarChart,
  Search: Search,
  Headphones: Headphones,
  Zap: Zap
};

/* =========================
   Default Services
========================= */

const defaultServices = [
  {
    _id: "1",
    title: "Java Full Stack Development",
    shortDescription:
      "End-to-end Java application development using Spring Boot, REST APIs, and modern frontend frameworks.",
    iconName: "Code",
    color: "from-blue-500 to-cyan-400"
  },
  {
    _id: "2",
    title: "Website Design & Development",
    shortDescription:
      "Professional business websites with clean UI, mobile-first design, and SEO-ready structure.",
    iconName: "Globe",
    color: "from-purple-500 to-pink-400"
  },
  {
    _id: "3",
    title: "Web Application Development",
    shortDescription:
      "Full-featured web applications with scalable architecture and modern frameworks.",
    iconName: "Zap",
    color: "from-indigo-500 to-blue-400"
  },
  {
    _id: "4",
    title: "Digital Marketing Services",
    shortDescription:
      "Complete digital marketing solutions including SEO, paid ads, and campaign management.",
    iconName: "BarChart",
    color: "from-green-500 to-emerald-400"
  },
  {
    _id: "5",
    title: "SEO Services",
    shortDescription:
      "Technical and on-page SEO strategies to improve rankings and drive organic traffic.",
    iconName: "Search",
    color: "from-orange-500 to-yellow-400"
  },
  {
    _id: "6",
    title: "Website Maintenance & Support",
    shortDescription:
      "Ongoing updates, security monitoring, and performance optimization for your website.",
    iconName: "Headphones",
    color: "from-cyan-500 to-blue-500"
  }
];

const Services = () => {

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  /* =========================
     Fetch Services API
  ========================= */

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          setServices(data.data);
        } else {
          setServices(defaultServices);
        }
      })
      .catch(() => setServices(defaultServices))
      .finally(() => setLoading(false));
  }, []);

  return (

    <section className="bg-[#0F172A] pt-40 pb-24 px-6 min-h-screen">

      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-20">

          <span className="text-cyan-400 font-semibold tracking-widest uppercase text-xs">
            Our Services
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Innovative Technology Solutions for
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Modern Businesses
            </span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto mt-5">
            At SiviOn Global Technologies we deliver scalable digital solutions
            including full stack development, website development, digital
            marketing, and custom web applications designed to accelerate
            business growth.
          </p>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-8 rounded-full"></div>

        </div>

        {/* ================= LOADING ================= */}

        {loading ? (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-64 bg-white/5 rounded-xl animate-pulse"
              />
            ))}

          </div>

        ) : (

          /* ================= SERVICES GRID ================= */

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => {

              const Icon = iconMap[service.iconName] || Code;

              return (

                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="bg-white/5 backdrop-blur-lg border border-white/10
                  rounded-xl p-6 transition
                  hover:border-cyan-400/40
                  hover:shadow-xl hover:shadow-cyan-500/10"
                >

                  {/* Icon */}

                  <div className={`w - 16 h - 16 rounded - xl flex items - center justify - center
bg - gradient - to - br ${service.color} shadow - lg mb - 5`}>

                    <Icon size={30} className="text-white" />

                  </div>

                  {/* Title */}

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="text-slate-400 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Button */}

                  <Link to={`/ services / ${service._id} `}>
                    <button className="flex items-center gap-2 text-cyan-400 font-semibold group">
                      Learn More
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition"
                      />
                    </button>
                  </Link>

                </motion.div>

              );

            })}

          </div>

        )}

        {/* ================= CTA SECTION ================= */}

        <div className="mt-28 text-center">

          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your Next Digital Project With Us
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Our team helps businesses build scalable websites, modern
            applications, and powerful digital marketing strategies.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link to="/contact">
              <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400
               text-white font-semibold rounded-lg transition">
                Get a Quote
              </button>
            </Link>

            <Link to="/portfolio">
              <button className="px-8 py-3 border border-white/20
               hover:border-cyan-400 text-white font-semibold rounded-lg transition">
                View Portfolio
              </button>
            </Link>

          </div>

        </div>

      </div>

    </section>

  );
};

export default Services;
```
