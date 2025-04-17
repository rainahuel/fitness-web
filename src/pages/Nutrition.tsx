import React from "react";
import foods from "../data/nutrition/nutrition-foods";

export default function Nutrition() {
  return (
    <section className="section centered-page">
      <div className="box box-content">
        <h2 className="title is-4 has-text-centered">Nutrition Basics (Raw Weight)</h2>
        <p className="mb-4">
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
            <h3 className="title is-5 has-text-centered has-text-link capitalize">
              {category}
            </h3>
            <div className="table-container">
              <table className="table is-striped is-fullwidth is-hoverable">
                <thead>
                  <tr>
                    <th>Food (Raw)</th>
                    <th>Calories</th>
                    <th>Protein (g)</th>
                    <th>Carbs (g)</th>
                    <th>Fat (g)</th>
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
