import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="section centered-page">
      <div className="box box-content has-text-centered" style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.2)", transition: "box-shadow 0.3s ease", backgroundColor: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
        <h1 className="title is-3" style={{ fontWeight: 800, color: "#ffffff", textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}>
          It's never too late to rebuild.
        </h1>
        <p className="subtitle is-5" style={{ color: "#e2e8f0", lineHeight: "1.6" }}>
          Start strong, start simple — this is your comeback.<br />
          Track your progress, plan your training, and build your best shape with science and consistency.
        </p>
        <div className="mt-5">
          <Link
            to="/startnow"
            className="button is-primary is-medium"
            style={{
              transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)"
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "none"}
          >
            🚀 Start Now
          </Link>
        </div>
      </div>
    </section>
  );
}