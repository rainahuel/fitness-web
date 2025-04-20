import React from "react";
import foods from "../data/nutrition/nutrition-foods";

export default function Nutrition() {
  return (
    <section className="section centered-page">
      <div
        className="box box-content"
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
        <h2 className="title is-3 has-text-centered" style={{ color: "#ffffff", fontWeight: 800 }}>
          Nutrition Basics (Raw Weight)
        </h2>
        <p className="mb-4" style={{ color: "#e2e8f0" }}>
          This table shows the macronutrients for common foods per 100g of raw weight.
          Cooking methods can change the volume and weight, but the nutritional values
          remain roughly the same. Measuring in raw weight gives more accurate tracking
          when planning your macros.
        </p>

        <div className="has-text-centered mt-5">
          <a href="/meal-planner" className="button is-primary is-medium">
            Generate Meal Plan
          </a>
        </div>

        {Object.entries(foods).map(([category, items]) => (
          <div key={category} className="mt-5">
            <h3 className="title is-5 has-text-centered has-text-link capitalize" style={{ textTransform: "capitalize" }}>
              {category}
            </h3>
            <div className="table-container">
              <table className="table is-striped is-fullwidth is-hoverable" style={{ backgroundColor: "rgba(255,255,255,0.03)", color: "#ffffff" }}>
                <thead>
                  <tr style={{ color: "#ffffff" }}>
                    <th style={{ color: "#ffffff" }}>Food (Raw)</th>
                    <th style={{ color: "#ffffff" }}>Calories</th>
                    <th style={{ color: "#ffffff" }}>Protein (g)</th>
                    <th style={{ color: "#ffffff" }}>Carbs (g)</th>
                    <th style={{ color: "#ffffff" }}>Fat (g)</th>
                  </tr>
                </thead>

                <tbody>
                  {(items as any[]).map((food, index) => (
                    <tr key={index}>
                      <td>{food.name}</td>
                      <td>{food.calories}</td>
                      <td>{food.protein}</td>
                      <td>{food.carbs}</td>
                      <td>{food.fat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
