import React from "react";

export default function Contact() {
  return (
    <section className="section centered-page">
      <div
        className="box box-content has-text-centered"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          color: "#ffffff",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          backdropFilter: "blur(8px)"
        }}
      >
        <h2 className="title is-3" style={{ fontWeight: 800, color: "#ffffff" }}>Contact</h2>

        <div className="mb-3">
          <a
            href="https://www.youtube.com/@builtByRain"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-text mr-4"
            style={{ color: "#ffffff", fontSize: "1.25rem", marginRight: "1.5rem" }}
          >
            <span className="icon">
              <i className="fab fa-youtube icon-youtube"></i>
            </span>
            <span>@builtByRain</span>
          </a>

          <a
            href="https://www.instagram.com/builtByRain"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-text"
            style={{ color: "#ffffff", fontSize: "1.25rem" }}
          >
            <span className="icon">
              <i className="fab fa-instagram icon-instagram"></i>
            </span>
            <span>@builtByRain</span>
          </a>
        </div>

        <p className="mt-4" style={{ color: "#e2e8f0", fontSize: "1rem" }}>
          If you have questions or just want to say hi — feel free to reach out!
        </p>
      </div>
    </section>
  );
}