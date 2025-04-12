
import React from "react";

export default function Contact() {
  return (
    <section className="section centered-page">
      <div className="box box-content has-text-centered">
        <h2 className="title is-4">Contact</h2>

        <div className="mb-3">
          <a
            href="https://www.youtube.com/@builtByRain"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-text mr-4"
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
          >
            <span className="icon">
            <i className="fab fa-instagram icon-instagram"></i>
            </span>
            <span>@builtByRain</span>
          </a>
        </div>

        <p className="mt-4">
          If you have questions or just want to say hi — feel free to reach out!
        </p>
      </div>
    </section>
  );
}
