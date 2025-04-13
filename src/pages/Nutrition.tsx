import React from "react";

export default function Nutrition() {
  const foods = [
    { name: "Chicken breast", calories: 165, protein: 31, carbs: 0, fat: 3.6 },
    { name: "Turkey breast", calories: 135, protein: 29, carbs: 0, fat: 1 },
    { name: "Lean ground beef (5%)", calories: 137, protein: 26, carbs: 0, fat: 5 },
    { name: "Salmon", calories: 206, protein: 20, carbs: 0, fat: 13 },
    { name: "Tuna (in water)", calories: 132, protein: 28, carbs: 0, fat: 1 },
    { name: "Eggs (whole)", calories: 143, protein: 13, carbs: 1, fat: 10 },
    { name: "Egg whites", calories: 52, protein: 11, carbs: 1, fat: 0.2 },
    { name: "Tofu (firm)", calories: 144, protein: 15, carbs: 4, fat: 8 },
    { name: "Tempeh", calories: 193, protein: 20, carbs: 9, fat: 11 },
    { name: "Greek yogurt (non-fat)", calories: 59, protein: 10, carbs: 3.6, fat: 0.4 },
    { name: "White rice", calories: 360, protein: 7, carbs: 78, fat: 1 },
    { name: "Brown rice", calories: 370, protein: 7.5, carbs: 77, fat: 2.7 },
    { name: "Oats", calories: 389, protein: 11.7, carbs: 66.3, fat: 6.9 },
    { name: "Sweet potato", calories: 86, protein: 1.6, carbs: 20, fat: 0.1 },
    { name: "Quinoa", calories: 368, protein: 14.1, carbs: 64, fat: 6.1 },
    { name: "Whole wheat bread", calories: 247, protein: 13, carbs: 41, fat: 4.2 },
    { name: "Pasta (dry)", calories: 371, protein: 13, carbs: 75, fat: 1.5 },
    { name: "Almonds", calories: 579, protein: 21, carbs: 22, fat: 50 },
    { name: "Peanut butter", calories: 588, protein: 25, carbs: 20, fat: 50 },
    { name: "Olive oil", calories: 884, protein: 0, carbs: 0, fat: 100 },
  ];

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
              {foods.map((food, index) => (
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
    </section>
  );
}
