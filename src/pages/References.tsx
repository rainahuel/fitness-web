
import React from "react";

export default function References() {
  return (
    <section className="section centered-page">
      <div className="box box-content">
        <h2 className="title is-4 has-text-centered">Scientific References</h2>
        <p className="mb-4">
          These are the scientific sources we used to build the macro and calorie calculators for Built by Rain:
        </p>

        <h3 className="title is-5 mt-4">Macro Calculator</h3>
        <ul>
          <li>
            <strong>Protein intake (1.6–2.2g/kg):</strong><br />
            Morton RW, et al. (2018). 
            <a href="https://pubmed.ncbi.nlm.nih.gov/28698222/" target="_blank" rel="noopener noreferrer">
              PubMed – Protein supplementation and resistance training.
            </a>
          </li>
          <li className="mt-3">
            <strong>Fat intake (min. 0.8g/kg):</strong><br />
            Helms ER, et al. (2014). 
            <a href="https://jissn.biomedcentral.com/articles/10.1186/1550-2783-11-20" target="_blank" rel="noopener noreferrer">
              JISSN – Evidence-based recommendations for contest prep.
            </a>
          </li>
          <li className="mt-3">
            <strong>Carbs: remainder of calories:</strong><br />
            Kerksick CM, et al. (2017). 
            <a href="https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0184-5" target="_blank" rel="noopener noreferrer">
              JISSN Position Stand – Nutrient timing and athlete needs.
            </a>
          </li>
        </ul>

        <h3 className="title is-5 mt-5">Calorie Calculator</h3>
        <ul>
          <li>
            <strong>BMR (Mifflin-St Jeor Equation):</strong><br />
            Frankenfield D, et al. (2005).
            <a href="https://pubmed.ncbi.nlm.nih.gov/15883556/" target="_blank" rel="noopener noreferrer">
              PubMed – Comparison of predictive equations for resting metabolic rate.
            </a>
          </li>
          <li className="mt-3">
            <strong>TDEE Estimation via activity multiplier:</strong><br />
            Black AE, et al. (1996).
            <a href="https://academic.oup.com/ajcn/article/51/2/241/4695475" target="_blank" rel="noopener noreferrer">
              American Journal of Clinical Nutrition – Critical evaluation of energy intake.
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
