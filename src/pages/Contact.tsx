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
        </div>

        <p className="mt-4" style={{ color: "#e2e8f0", fontSize: "1rem" }}>
          If you have questions or just want to say hi — feel free to reach out!
        </p>

        <div 
          id="account-deletion" 
          className="mt-5 pt-4" 
          style={{ 
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            textAlign: "left" 
          }}
        >
          <h3 className="title is-4" style={{ fontWeight: 700, color: "#ffffff" }}>Account Deletion</h3>
          
          <p style={{ color: "#e2e8f0", fontSize: "1rem" }}>
            To request deletion of your Built by Rain account and associated data, please:
          </p>
          
          <ol style={{ color: "#e2e8f0", marginLeft: "1.5rem", marginTop: "0.75rem" }}>
            <li>Send an email to <a href="mailto:builtbyrain.fit@gmail.com" style={{ color: "#4dabf7" }}>builtbyrain.fit@gmail.com</a></li>
            <li>Use the subject line: "Account Deletion Request"</li>
            <li>Include the email address associated with your account</li>
          </ol>
          
          <p style={{ color: "#e2e8f0", fontSize: "1rem", marginTop: "0.75rem" }}>
            We will process your request and delete all your personal data within 30 days. After deletion, all your data will be permanently removed from our systems.
          </p>
        </div>
      </div>
    </section>
  );
}