
const foods =  {
  "carbohydrates": [
    {
      "name": "White Rice",
      "calories": 130,
      "protein": 2.7,
      "carbs": 28,
      "fat": 0.3
    },
    {
      "name": "Brown Rice",
      "calories": 111,
      "protein": 2.6,
      "carbs": 23,
      "fat": 0.9
    },
    {
      "name": "Oats",
      "calories": 389,
      "protein": 16.9,
      "carbs": 66.3,
      "fat": 6.9
    },
    {
      "name": "Potato",
      "calories": 77,
      "protein": 2,
      "carbs": 17,
      "fat": 0.1
    },
    {
      "name": "Sweet Potato",
      "calories": 86,
      "protein": 1.6,
      "carbs": 20.1,
      "fat": 0.1
    },
    {
      "name": "Whole Wheat Bread",
      "calories": 247,
      "protein": 13,
      "carbs": 41,
      "fat": 4.2
    },
    {
      "name": "Lentils",
      "calories": 116,
      "protein": 9.0,
      "carbs": 20.1,
      "fat": 0.4
    },
    {
      "name": "Quinoa",
      "calories": 120,
      "protein": 4.1,
      "carbs": 21.3,
      "fat": 1.9
    },
    {
      "name": "Chickpeas",
      "calories": 164,
      "protein": 8.9,
      "carbs": 27.4,
      "fat": 2.6
    },
    {
      "name": "Black Beans",
      "calories": 132,
      "protein": 8.9,
      "carbs": 23.7,
      "fat": 0.5
    }
  ],
  "proteins": [
    {
      "name": "Chicken Breast",
      "calories": 165,
      "protein": 31,
      "carbs": 0,
      "fat": 3.6
    },
    {
      "name": "Lean Beef",
      "calories": 250,
      "protein": 26,
      "carbs": 0,
      "fat": 15
    },
    {
      "name": "Eggs",
      "calories": 155,
      "protein": 13,
      "carbs": 1.1,
      "fat": 11
    },
    {
      "name": "Egg Whites",
      "calories": 52,
      "protein": 11,
      "carbs": 0.7,
      "fat": 0.2
    },
    {
      "name": "Tuna",
      "calories": 132,
      "protein": 28,
      "carbs": 0,
      "fat": 1.3
    },
    {
      "name": "Salmon",
      "calories": 206,
      "protein": 22,
      "carbs": 0,
      "fat": 13
    },
    {
      "name": "Tofu",
      "calories": 76,
      "protein": 8,
      "carbs": 1.9,
      "fat": 4.8
    },
    {
      "name": "Tempeh",
      "calories": 192,
      "protein": 20,
      "carbs": 7.6,
      "fat": 11
    },
    {
      "name": "Greek Yogurt (plain)",
      "calories": 59,
      "protein": 10,
      "carbs": 3.6,
      "fat": 0.4
    },
    {
      "name": "Protein Powder",
      "calories": 120,
      "protein": 24,
      "carbs": 2,
      "fat": 1.5
    }
  ],
  "fats": [
    {
      "name": "Almonds",
      "calories": 579,
      "protein": 21,
      "carbs": 22,
      "fat": 50
    },
    {
      "name": "Peanuts",
      "calories": 567,
      "protein": 25.8,
      "carbs": 16.1,
      "fat": 49.2
    },
    {
      "name": "Peanut Butter",
      "calories": 588,
      "protein": 25,
      "carbs": 20,
      "fat": 50
    },
    {
      "name": "Avocado",
      "calories": 160,
      "protein": 2,
      "carbs": 9,
      "fat": 15
    },
    {
      "name": "Chia Seeds",
      "calories": 486,
      "protein": 17,
      "carbs": 42,
      "fat": 31
    },
    {
      "name": "Olive Oil",
      "calories": 884,
      "protein": 0,
      "carbs": 0,
      "fat": 100
    },
    {
      "name": "Coconut Oil",
      "calories": 862,
      "protein": 0,
      "carbs": 0,
      "fat": 100
    },
    {
      "name": "Walnuts",
      "calories": 654,
      "protein": 15,
      "carbs": 14,
      "fat": 65
    },
    {
      "name": "Sunflower Seeds",
      "calories": 584,
      "protein": 21,
      "carbs": 20,
      "fat": 51
    },
    {
      "name": "Flaxseeds",
      "calories": 534,
      "protein": 18,
      "carbs": 29,
      "fat": 42
    }
  ],
  "vegetables": [
    {
      "name": "Broccoli",
      "calories": 34,
      "protein": 2.8,
      "carbs": 6.6,
      "fat": 0.3
    },
    {
      "name": "Spinach",
      "calories": 23,
      "protein": 2.9,
      "carbs": 3.6,
      "fat": 0.4
    },
    {
      "name": "Carrot",
      "calories": 41,
      "protein": 0.9,
      "carbs": 9.6,
      "fat": 0.2
    },
    {
      "name": "Zucchini",
      "calories": 17,
      "protein": 1.2,
      "carbs": 3.1,
      "fat": 0.3
    },
    {
      "name": "Tomato",
      "calories": 18,
      "protein": 0.9,
      "carbs": 3.9,
      "fat": 0.2
    },
    {
      "name": "Cucumber",
      "calories": 15,
      "protein": 0.7,
      "carbs": 3.6,
      "fat": 0.1
    },
    {
      "name": "Bell Pepper",
      "calories": 31,
      "protein": 1,
      "carbs": 6,
      "fat": 0.3
    },
    {
      "name": "Asparagus",
      "calories": 20,
      "protein": 2.2,
      "carbs": 3.9,
      "fat": 0.2
    },
    {
      "name": "Green Beans",
      "calories": 31,
      "protein": 1.8,
      "carbs": 7.1,
      "fat": 0.1
    },
    {
      "name": "Lettuce",
      "calories": 15,
      "protein": 1.4,
      "carbs": 2.9,
      "fat": 0.2
    }
  ],
  "fruits": [
    {
      "name": "Banana",
      "calories": 89,
      "protein": 1.1,
      "carbs": 23,
      "fat": 0.3
    },
    {
      "name": "Apple",
      "calories": 52,
      "protein": 0.3,
      "carbs": 14,
      "fat": 0.2
    },
    {
      "name": "Orange",
      "calories": 47,
      "protein": 0.9,
      "carbs": 12,
      "fat": 0.1
    },
    {
      "name": "Blueberries",
      "calories": 57,
      "protein": 0.7,
      "carbs": 14,
      "fat": 0.3
    },
    {
      "name": "Strawberries",
      "calories": 32,
      "protein": 0.7,
      "carbs": 7.7,
      "fat": 0.3
    },
    {
      "name": "Grapes",
      "calories": 69,
      "protein": 0.7,
      "carbs": 18,
      "fat": 0.2
    },
    {
      "name": "Pineapple",
      "calories": 50,
      "protein": 0.5,
      "carbs": 13,
      "fat": 0.1
    },
    {
      "name": "Watermelon",
      "calories": 30,
      "protein": 0.6,
      "carbs": 8,
      "fat": 0.2
    },
    {
      "name": "Mango",
      "calories": 60,
      "protein": 0.8,
      "carbs": 15,
      "fat": 0.4
    },
    {
      "name": "Papaya",
      "calories": 43,
      "protein": 0.5,
      "carbs": 11,
      "fat": 0.3
    }
  ]
  
}

export default foods;
