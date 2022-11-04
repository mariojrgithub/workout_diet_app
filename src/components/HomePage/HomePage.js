import React, { useEffect, useState } from "react";
import axios from "axios";
import Day from "../Day/Day";

const HomePage = () => {
  // create an array of strings for workout selections
  const workouts = [
    "Climbing",
    "Resistance Training",
    "Running",
    "Walking",
    "Run/Walk",
    "Rest",
  ];

  // selection for mealtime
  const mealtime = ["breakfast", "lunch", "dinner", "snack"];
  // selection for diet
  const mainMeals = [
    "eggs",
    "yogurt",
    "sandwich",
    "salmon",
    "pasta",
    "fresh vegetables",
    "burger",
    "ramen",
    "BW3's",
    "tacos",
    "fish",
    "stuffed peppers",
    "misc. homemade dish",
    "fast",
  ];
  const snacks = [
    "potato chips",
    "grapes",
    "oranges",
    "pudding",
    "nuts",
    "tortilla chips and salsa",
    "ice cream drumstick",
    "milkshake",
    "candy",
    "none",
  ];
  const beverages = [
    "coffee",
    "tea",
    "soda",
    "beer",
    "mixed drink",
    "atole",
    "boba",
    "fruit juice",
    "milk",
  ];
  // create an array of weekday names
  const weekdays = [
    {
      order: 1,
      day: "Sunday",
      morningWorkout: "",
      afternoonWorkout: "",
      breakfast: "",
      breakfastBeverage: "",
      lunch: "",
      lunchBeverage: "",
      dinner: "",
      dinnerBeverage: "",
      snack: "",
      date: "",
      weather: "",
    },
    {
      order: 2,
      day: "Monday",
      morningWorkout: "",
      afternoonWorkout: "",
      breakfast: "",
      breakfastBeverage: "",
      lunch: "",
      lunchBeverage: "",
      dinner: "",
      dinnerBeverage: "",
      snack: "",
      date: "",
      weather: "",
    },
    {
      order: 3,
      day: "Tuesday",
      morningWorkout: "",
      afternoonWorkout: "",
      breakfast: "",
      breakfastBeverage: "",
      lunch: "",
      lunchBeverage: "",
      dinner: "",
      dinnerBeverage: "",
      snack: "",
      date: "",
      weather: "",
    },
    {
      order: 4,
      day: "Wednesday",
      morningWorkout: "",
      afternoonWorkout: "",
      breakfast: "",
      breakfastBeverage: "",
      lunch: "",
      lunchBeverage: "",
      dinner: "",
      dinnerBeverage: "",
      snack: "",
      date: "",
      weather: "",
    },
    {
      order: 5,
      day: "Thursday",
      morningWorkout: "",
      afternoonWorkout: "",
      breakfast: "",
      breakfastBeverage: "",
      lunch: "",
      lunchBeverage: "",
      dinner: "",
      dinnerBeverage: "",
      snack: "",
      date: "",
      weather: "",
    },
    {
      order: 6,
      day: "Friday",
      morningWorkout: "",
      afternoonWorkout: "",
      breakfast: "",
      breakfastBeverage: "",
      lunch: "",
      lunchBeverage: "",
      dinner: "",
      dinnerBeverage: "",
      snack: "",
      date: "",
      weather: "",
    },
    {
      order: 7,
      day: "Saturday",
      morningWorkout: "",
      afternoonWorkout: "",
      breakfast: "",
      breakfastBeverage: "",
      lunch: "",
      lunchBeverage: "",
      dinner: "",
      dinnerBeverage: "",
      snack: "",
      date: "",
      weather: "",
    },
  ];
  // Adding date to weekdays array
  const addDate = () => {
    // Get today's date from Date API
    const todaysDate = new Date();
    // new date constructor:  new Date(year, monthIndex, day)
    const today = new Date(
      todaysDate.getFullYear(),
      todaysDate.getMonth(),
      todaysDate.getDate() - 1
    );
    // Get day of week from today's date
    const dayOfWeek = todaysDate.getDay();

    // assign date to weekdays before today
    for (let i = 0; i < 7; i++) {
      // j is variable for moving forward in the week
      let j = dayOfWeek + i;
      // days after today but not going past Saturday
      if (j < 7) {
        // weekdays array has index 0-6, j will index from today to 6
        weekdays[j].date = new Date(
          todaysDate.getFullYear(),
          todaysDate.getMonth(),
          // add a value that increases by one for each index farther from today
          todaysDate.getDate() + i
        ).toLocaleDateString();
      }
      // add variable k to decrease and assign prev days
      let k = dayOfWeek - i;
      // k will index from today to 0
      if (k >= 0) {
        // index weekdays array for days before today
        weekdays[k].date = new Date(
          todaysDate.getFullYear(),
          todaysDate.getMonth(),
          // subtract a value that increases by one for each index farther from today
          todaysDate.getDate() - i
        ).toLocaleDateString();
      }
    }
  };

  addDate();

  const addWeather = () => {
    const fiveDayWeatherForecast =
      "https://api.openweathermap.org/data/2.5/forecast?lat=32.85568960637094&lon=-96.95943195562664&appid=";
    axios.get(fiveDayWeatherForecast).then((response) => {
      console.log(response);
    });
  };
  // useEffect function handles all the lifecycle hooks
  useEffect(() => {
    // addWeather();
  }, []);
  // Setting State
  // this is a 'hook'
  // useState hook provides the name of the state and a function to set that state
  const [days, setDays] = useState(weekdays);
<<<<<<< Updated upstream
  console.log(days);
=======
  console.table(days);
>>>>>>> Stashed changes
  return (
    <div>
      <h1>Workout Tracker</h1>
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        {/* mapping each day to 'Day' component. index is the unique key for each day */}
        {days.map((day, index) => {
          return (
            // passing 'props' into each components so that we can use these props in the component
            <Day
              setDays={setDays}
              key={index}
              weekday={day}
              workouts={workouts}
              mainMeals={mainMeals}
              snacks={snacks}
              beverages={beverages}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
