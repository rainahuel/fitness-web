const tabataData = {
    tabata: {
      loseFat: {
        beginner: {
          "3": [
            {
              day: "Day 1",
              focus: "Tabata Full Body",
              blocks: [
                {
                  name: "Tabata Block A",
                  exercises: [
                    { name: "Bodyweight Squats", work: "20 sec", rest: "10 sec", rounds: 8 },
                    { name: "Push-ups", work: "20 sec", rest: "10 sec", rounds: 8 }
                  ]
                }
              ]
            },
            {
              day: "Day 2",
              focus: "Mobility or Light Walking",
              blocks: []
            },
            {
              day: "Day 3",
              focus: "Tabata Cardio & Core",
              blocks: [
                {
                  name: "Tabata Block B",
                  exercises: [
                    { name: "High Knees", work: "20 sec", rest: "10 sec", rounds: 8 },
                    { name: "Plank Hold", work: "20 sec", rest: "10 sec", rounds: 8 }
                  ]
                }
              ]
            }
          ]
        },
        intermediate: {
          "4": [
            {
              day: "Day 1",
              focus: "Strength-Focused Tabata",
              blocks: [
                {
                  name: "Tabata Strength Block",
                  exercises: [
                    { name: "Jump Squats", work: "20 sec", rest: "10 sec", rounds: 8 },
                    { name: "Burpees", work: "20 sec", rest: "10 sec", rounds: 8 }
                  ]
                }
              ]
            },
            {
              day: "Day 2",
              focus: "Mobility / Recovery",
              blocks: []
            },
            {
              day: "Day 3",
              focus: "Tabata Power Mix",
              blocks: [
                {
                  name: "Power Block",
                  exercises: [
                    { name: "Mountain Climbers", work: "20 sec", rest: "10 sec", rounds: 8 },
                    { name: "Push Press (Dumbbell or Band)", work: "20 sec", rest: "10 sec", rounds: 8 }
                  ]
                }
              ]
            },
            {
              day: "Day 4",
              focus: "Stretching / Light Activity",
              blocks: []
            }
          ]
        }
      }
    }
  };
  
  export default tabataData;
  