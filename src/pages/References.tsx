import React from "react";

export default function References() {
  return (
    <section className="section centered-page">
      <div className="box box-content">
        <h2 className="title is-4 has-text-centered">Scientific References</h2>
        <p className="mb-4">
          These references are here to help you better understand how to train, eat, and recover.
          Every body is different — there’s no single formula that works for everyone.
          But having science-based foundations gives you a solid starting point to build your own path with confidence.
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
            <strong>TDEE via activity multiplier:</strong><br />
            Black AE, et al. (1996).
            <a href="https://academic.oup.com/ajcn/article/51/2/241/4695475" target="_blank" rel="noopener noreferrer">
              American Journal of Clinical Nutrition – Evaluation of energy intake.
            </a>
          </li>
        </ul>

        <h3 className="title is-5 mt-5">Training</h3>
        <ul>
          <li>
            <strong>Muscle hypertrophy & volume:</strong><br />
            Schoenfeld BJ (2010).
            <a href="https://pubmed.ncbi.nlm.nih.gov/20847704/" target="_blank" rel="noopener noreferrer">
              PubMed – Mechanisms of muscle hypertrophy and application to resistance training.
            </a>
          </li>
          <li className="mt-3">
            <strong>Weekly sets per muscle group:</strong><br />
            Schoenfeld BJ & Krieger JW (2016).
            <a href="https://pubmed.ncbi.nlm.nih.gov/27102172/" target="_blank" rel="noopener noreferrer">
              PubMed – Dose-response relationship between weekly sets and hypertrophy.
            </a>
          </li>
        </ul>

        <h3 className="title is-5 mt-5">Nutrition & Recomposition</h3>
        <ul>
          <li>
            <strong>Evidence-based contest prep & fat loss:</strong><br />
            Helms ER, Aragon AA, Fitschen PJ (2014).
            <a href="https://jissn.biomedcentral.com/articles/10.1186/1550-2783-11-20" target="_blank" rel="noopener noreferrer">
              JISSN – Recommendations for natural bodybuilders.
            </a>
          </li>
          <li className="mt-3">
            <strong>Body composition in sport:</strong><br />
            Trexler ET, et al. (2019).
            <a href="https://jissn.biomedcentral.com/articles/10.1186/s12970-018-0242-y" target="_blank" rel="noopener noreferrer">
              JISSN – Position stand on body composition.
            </a>
          </li>
        </ul>

        <h3 className="title is-5 mt-5">Recovery & Sleep</h3>
        <ul>
          <li>
            <strong>Sleep and performance:</strong><br />
            Simpson NS, Gibbs EL, Matheson GO (2017).
            <a href="https://pubmed.ncbi.nlm.nih.gov/29083410/" target="_blank" rel="noopener noreferrer">
              PubMed – Sleep and performance in elite athletes.
            </a>
          </li>
          <li className="mt-3">
            <strong>Sleep and athletic recovery:</strong><br />
            Bird SP (2013).
            <a href="https://www.researchgate.net/publication/258686799" target="_blank" rel="noopener noreferrer">
              ResearchGate – Review on sleep, recovery, and athletic performance.
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
