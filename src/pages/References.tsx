import React from "react";
import referencesData from "../data/references/references-data";

export default function References() {
  return (
    <section className="section centered-page">
      <div className="box box-content" style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        color: "#ffffff",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        backdropFilter: "blur(8px)"
      }}>
        <h2 className="title is-3 has-text-centered" style={{ color: "#ffffff", fontWeight: 800 }}>
          Scientific References
        </h2>
        <p className="mb-4" style={{ color: "#e2e8f0" }}>{referencesData.intro}</p>

        {referencesData.sections.map((section, index) => (
          <div key={index}>
            <h3 className="title is-5 mt-5">{section.title}</h3>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx} className="mt-3">
                  <strong>{item.name}:</strong><br />
                  {item.reference}.{" "}
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                  {item.extra && (
                    <><br /><em>{item.extra}</em></>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
