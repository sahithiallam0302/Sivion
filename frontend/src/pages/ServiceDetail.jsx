import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
  Code, Globe, BarChart, Search, Headphones, Zap,
  Layers, Settings, Database, Shield, Cpu, ArrowLeft,
  CheckCircle, ArrowRight
} from "lucide-react";

const iconMap = {
  Code, Globe, BarChart, Search, Headphones, Zap,
  Layers, Settings, Database, Shield, Cpu,
};

const accent = "#06B6D4";
const primaryBg = "#0A1128";
const cardBg = "#0D1B3E";
const secondaryText = "#94A3B8";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/api/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setService(data.data);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div style={{ background: primaryBg, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "48px", height: "48px", border: `3px solid ${accent}`, borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div style={{ background: primaryBg, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#FFFFFF", textAlign: "center", padding: "24px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "12px" }}>Service Not Found</h2>
        <p style={{ color: secondaryText, marginBottom: "32px" }}>This service may no longer be available.</p>
        <Link to="/services">
          <button style={{ padding: "12px 28px", background: accent, color: "#FFFFFF", border: "none", borderRadius: "10px", fontWeight: 600, cursor: "pointer" }}>
            Back to Services
          </button>
        </Link>
      </div>
    );
  }

  const Icon = iconMap[service.iconName] || Zap;

  return (
    <div style={{ background: primaryBg, minHeight: "100vh", color: "#FFFFFF" }}>

      {/* ── Breadcrumbs ── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "120px 24px 20px", display: "flex", gap: "8px", fontSize: "0.9rem", color: secondaryText }}>
        <Link to="/" style={{ color: accent, textDecoration: "none" }}>Home</Link>
        <span>&gt;</span>
        <Link to="/services" style={{ color: accent, textDecoration: "none" }}>Services</Link>
        <span>&gt;</span>
        <span style={{ color: "#FFFFFF" }}>{service.title}</span>
      </div>

      {/* ── Back Button ── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 32px" }}>
        <Link to="/services" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: secondaryText, textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
          <ArrowLeft size={16} /> Back to Services
        </Link>
      </div>

      {/* ── Cover Image ── */}
      {service.coverImage && (
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 48px" }}>
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src={service.coverImage}
            alt={service.title}
            style={{ width: "100%", height: "360px", objectFit: "cover", borderRadius: "16px" }}
          />
        </div>
      )}

      {/* ── Title + Icon ── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 48px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", alignItems: "flex-start", gap: "24px", flexWrap: "wrap" }}
        >
          <div style={{ width: "72px", height: "72px", background: `linear-gradient(135deg, ${accent}, #2563EB)`, borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon size={36} color="#FFFFFF" />
          </div>
          <div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "#FFFFFF", margin: "0 0 12px" }}>
              {service.title}
            </h1>
            <p style={{ fontSize: "18px", color: secondaryText, lineHeight: "1.7", margin: 0, maxWidth: "720px" }}>
              {service.shortDescription}
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Long Description ── */}
      {service.longDescription && (
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 56px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ background: cardBg, border: "1px solid rgba(6,182,212,0.12)", borderLeft: `3px solid ${accent}`, borderRadius: "16px", padding: "36px 40px" }}
          >
            <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>About This Service</h2>
            <p style={{ fontSize: "16px", color: secondaryText, lineHeight: "1.8", margin: 0, whiteSpace: "pre-line" }}>
              {service.longDescription}
            </p>
          </motion.div>
        </div>
      )}

      {/* ── Technologies ── */}
      {service.technologies && service.technologies.length > 0 && (
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 56px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "20px" }}>Technologies & Tools</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {service.technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  style={{ display: "flex", alignItems: "center", gap: "8px", background: cardBg, border: "1px solid rgba(6,182,212,0.15)", borderRadius: "8px", padding: "8px 16px" }}
                >
                  <CheckCircle size={14} color={accent} />
                  <span style={{ fontSize: "14px", color: "#FFFFFF", fontWeight: 500 }}>{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* ── CTA ── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 100px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ background: `linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(37,99,235,0.12) 100%)`, border: "1px solid rgba(6,182,212,0.15)", borderRadius: "20px", padding: "52px 40px", textAlign: "center" }}
        >
          <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>
            Interested in {service.title}?
          </h2>
          <p style={{ color: secondaryText, fontSize: "16px", maxWidth: "480px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Get in touch with our team today and let's build something great together.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link to="/contact">
              <button style={{ padding: "14px 36px", background: `linear-gradient(to right, ${accent}, #2563EB)`, color: "#FFFFFF", fontWeight: 600, border: "none", borderRadius: "10px", cursor: "pointer", fontSize: "15px", display: "flex", alignItems: "center", gap: "8px" }}>
                Contact Us <ArrowRight size={16} />
              </button>
            </Link>
            <Link to="/services">
              <button style={{ padding: "14px 36px", background: "rgba(255,255,255,0.05)", color: "#FFFFFF", fontWeight: 600, border: "1px solid rgba(255,255,255,0.15)", borderRadius: "10px", cursor: "pointer", fontSize: "15px" }}>
                View All Services
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default ServiceDetail;
