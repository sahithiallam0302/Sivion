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
  ArrowRight,
  Layers,
  Settings,
  Database,
  Shield,
  Cpu,
} from "lucide-react";

const iconMap = {
  Code,
  Globe,
  BarChart,
  Search,
  Headphones,
  Zap,
  Layers,
  Settings,
  Database,
  Shield,
  Cpu,
};

const gradientOptions = [
  "from-cyan-500 to-blue-600",
  "from-purple-500 to-pink-500",
  "from-indigo-500 to-blue-400",
  "from-green-500 to-emerald-400",
  "from-orange-500 to-yellow-400",
  "from-rose-500 to-pink-400",
];

const accent = "#06B6D4";
const primaryBg = "#0A1128";
const cardBg = "#0D1B3E";
const secondaryText = "#94A3B8";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          setServices(data.data);
        } else {
          setServices([]);
        }
      })
      .catch(() => setServices([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ background: primaryBg, minHeight: "100vh", color: "#FFFFFF" }}>

      {/* ── Breadcrumbs ── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "120px 24px 20px",
          display: "flex",
          gap: "8px",
          fontSize: "0.9rem",
          color: secondaryText,
        }}
      >
        <Link to="/" style={{ color: accent, textDecoration: "none" }}>Home</Link>
        <span>&gt;</span>
        <span style={{ color: "#FFFFFF" }}>Services</span>
      </div>

      {/* ── Hero Banner ── */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px 80px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            width: "100%",
            paddingBottom: "32%",
            borderRadius: "16px",
            overflow: "hidden",
            position: "relative",
            background: "linear-gradient(135deg, #0A1128 0%, #0D2248 100%)",
          }}
        >
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="/vision-banner.jpg"
              alt="Services"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <h1
              style={{
                position: "relative",
                zIndex: 1,
                fontSize: "min(5rem, 10vw)",
                fontWeight: 900,
                color: "#FFFFFF",
                margin: 0,
                textShadow: "0 10px 30px rgba(0,0,0,0.8)",
              }}
            >
              Services
            </h1>
          </div>
        </motion.div>
      </div>

      {/* ── Services Grid ── */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px 80px" }}>
        {loading ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} style={{ height: "240px", background: "rgba(255,255,255,0.04)", borderRadius: "16px" }} />
            ))}
          </div>
        ) : services.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
            {services.map((service, index) => {
              const Icon = iconMap[service.iconName] || Code;
              const gradient = service.color || gradientOptions[index % gradientOptions.length];

              return (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  style={{
                    background: cardBg,
                    border: "1px solid rgba(6, 182, 212, 0.12)",
                    borderRadius: "16px",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    transition: "border-color 0.3s",
                    cursor: "pointer",
                  }}
                >
                  <div
                    className={`bg-gradient-to-br ${gradient}`}
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={24} color="#ffffff" />
                  </div>

                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
                    {service.title}
                  </h3>

                  <p style={{ fontSize: "14px", color: secondaryText, lineHeight: "1.7", margin: 0, flexGrow: 1 }}>
                    {service.shortDescription}
                  </p>

                  <Link
                    to={`/services/${service._id}`}
                    style={{ color: accent, fontSize: "14px", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px", textDecoration: "none" }}
                  >
                    Get Started <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 0" }}>
            <div style={{ width: "72px", height: "72px", background: "rgba(255,255,255,0.05)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <Layers size={32} color={secondaryText} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#FFFFFF", marginBottom: "8px" }}>No Services Yet</h3>
            <p style={{ color: secondaryText, maxWidth: "340px", lineHeight: "1.6" }}>
              Services will appear here once they have been added via the admin panel.
            </p>
          </div>
        )}
      </div>

      {/* ── CTA Section ── */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px 100px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            background: "linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(37,99,235,0.12) 100%)",
            border: "1px solid rgba(6, 182, 212, 0.15)",
            borderRadius: "24px",
            padding: "64px 40px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>
            Start Your Next Digital Project
          </h2>
          <p style={{ color: secondaryText, fontSize: "16px", maxWidth: "520px", margin: "0 auto 40px", lineHeight: "1.7" }}>
            Our team helps businesses build scalable websites, modern applications, and powerful digital marketing strategies.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            <Link to="/contact">
              <button
                style={{
                  padding: "14px 36px",
                  background: `linear-gradient(to right, ${accent}, #2563EB)`,
                  color: "#FFFFFF",
                  fontWeight: 600,
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontSize: "15px",
                }}
              >
                Get a Free Quote
              </button>
            </Link>
            <Link to="/portfolio">
              <button
                style={{
                  padding: "14px 36px",
                  background: "rgba(255,255,255,0.05)",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontSize: "15px",
                }}
              >
                View Our Work
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Services;