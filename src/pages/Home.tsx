
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="section centered-page">
      <div className="box box-content has-text-centered">
        <h1 className="title is-3">It's never too late to rebuild.</h1>
        <p className="subtitle is-5">
          Start strong, start simple — this is your comeback.
          Track your progress, plan your training, and build your best shape with science and consistency.
        </p>
        <div className="mt-5">
          <Link to="/startnow" className="button is-primary is-medium">
            🚀 Start Now
          </Link>
        </div>
      </div>
    </section>
  );
}
