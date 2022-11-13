import React, { useEffect, useState } from "react";

const Day = ({
  weather,
  setDays,
  weekday,
  workouts,
  mainMeals,
  snacks,
  beverages,
}) => {
  const [temp, setTemp] = useState("");
  useEffect(() => {
    if (weather.list !== undefined) {
      console.log(weekday.date);
      if (
        weekday.date.split("/")[1] ==
        Date(weather.list[0].dt).toString().split(" ")[2]
      ) {
        setTemp(weather.list[0].main.temp);
      }
    }
  }, [weekday.date, weather.list]);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h3>{Math.round(temp)}°F</h3>
        <h5 className="card-title">{weekday.day}</h5>
        <h6>{weekday.date}</h6>
        <h3>Workouts</h3>

        <span>Morning Workout: </span>
        <select
          className="form-select"
          aria-label="Morning Workout"
          // onChange fires an event, we want to take this value and assign it to a key
          onChange={(event) => {
            weekday.morningWorkout = event.target.value;
            setDays((items) => {
              // make a copy of the current state
              const array = [...items].filter(
                // remove the weekday the selection is changing
                (item) => item.day !== weekday.day
              );
              // append updated weekday and reset order
              return [...array, weekday].sort(
                // compare items to sort in acending order
                (item1, item2) => item1.order - item2.order
              );
            });
          }}
        >
          <option value="">Select Workout</option>
          {workouts.map((workout, index) => {
            // we are mapping each workout in workouts array to an option in the select menu
            return (
              <option value={workout} key={index}>
                {workout}
              </option>
            );
          })}
        </select>
        <span>Afternoon Workout: </span>
        <select
          className="form-select"
          aria-label="Afternoon Workout"
          // onChange fires an event, we want to take this value and assign it to a key
          onChange={(event) => {
            weekday.afternoonWorkout = event.target.value;
            setDays((items) => {
              // make a copy of the current state
              const array = [...items].filter(
                // remove the weekday the selection is changing
                (item) => item.day !== weekday.day
              );
              // append updated weekday and reset order
              return [...array, weekday].sort(
                // compare items to sort in acending order
                (item1, item2) => item1.order - item2.order
              );
            });
          }}
        >
          <option value="">Select Workout</option>
          {workouts.map((workout, index) => {
            // we are mapping each workout in workouts array to an option in the select menu
            return (
              <option value={workout} key={index}>
                {workout}
              </option>
            );
          })}
        </select>
        <h3>Diet</h3>
        <span>Breakfast: </span>
        <select
          className="form-select"
          aria-label="Breakfast"
          // onChange fires an event, we want to take this value and assign it to a key
          onChange={(event) => {
            weekday.breakfast = event.target.value;
            setDays((items) => {
              // make a copy of the current state
              const array = [...items].filter(
                // remove the weekday the selection is changing
                (item) => item.day !== weekday.day
              );
              // append updated weekday and reset order
              return [...array, weekday].sort(
                // compare items to sort in acending order
                (item1, item2) => item1.order - item2.order
              );
            });
          }}
        >
          <option value="">Select Breakfast</option>
          {mainMeals.map((meal, index) => {
            // we are mapping each meal in mainMeals array to an option in the select menu
            return (
              <option value={meal} key={index}>
                {meal}
              </option>
            );
          })}
        </select>
        <span>Breakfast Beverage: </span>
        <select
          className="form-select"
          aria-label="Breakfast Beverage"
          // onChange fires an event, we want to take this value and assign it to a key
          onChange={(event) => {
            weekday.breakfastBeverage = event.target.value;
            setDays((items) => {
              // make a copy of the current state
              const array = [...items].filter(
                // remove the weekday the selection is changing
                (item) => item.day !== weekday.day
              );
              // append updated weekday and reset order
              return [...array, weekday].sort(
                // compare items to sort in acending order
                (item1, item2) => item1.order - item2.order
              );
            });
          }}
        >
          <option value="">Select Beverage</option>
          {beverages.map((drink, index) => {
            // we are mapping each meal in mainMeals array to an option in the select menu
            return (
              <option value={drink} key={index}>
                {drink}
              </option>
            );
          })}
        </select>
        <span>Lunch: </span>
        <select
          className="form-select"
          aria-label="Lunch"
          // onChange fires an event, we want to take this value and assign it to a key
          onChange={(event) => {
            weekday.lunch = event.target.value;
            setDays((items) => {
              // make a copy of the current state
              const array = [...items].filter(
                // remove the weekday the selection is changing
                (item) => item.day !== weekday.day
              );
              // append updated weekday and reset order
              return [...array, weekday].sort(
                // compare items to sort in acending order
                (item1, item2) => item1.order - item2.order
              );
            });
          }}
        >
          <option value="">Select Lunch</option>
          {mainMeals.map((meal, index) => {
            // we are mapping each meal in mainMeals array to an option in the select menu
            return (
              <option value={meal} key={index}>
                {meal}
              </option>
            );
          })}
        </select>
        <span>Lunch Beverage: </span>
        <select
          className="form-select"
          aria-label="Lunch Beverage"
          // onChange fires an event, we want to take this value and assign it to a key
          onChange={(event) => {
            weekday.lunchBeverage = event.target.value;
            setDays((items) => {
              // make a copy of the current state
              const array = [...items].filter(
                // remove the weekday the selection is changing
                (item) => item.day !== weekday.day
              );
              // append updated weekday and reset order
              return [...array, weekday].sort(
                // compare items to sort in acending order
                (item1, item2) => item1.order - item2.order
              );
            });
          }}
        >
          <option value="">Select Beverage</option>
          {beverages.map((drink, index) => {
            // we are mapping each meal in mainMeals array to an option in the select menu
            return (
              <option value={drink} key={index}>
                {drink}
              </option>
            );
          })}
        </select>
        <span>Dinner: </span>
        <select
          className="form-select"
          aria-label="Dinner"
          // onChange fires an event, we want to take this value and assign it to a key
          onChange={(event) => {
            weekday.dinner = event.target.value;
            setDays((items) => {
              // make a copy of the current state
              const array = [...items].filter(
                // remove the weekday the selection is changing
                (item) => item.day !== weekday.day
              );
              // append updated weekday and reset order
              return [...array, weekday].sort(
                // compare items to sort in acending order
                (item1, item2) => item1.order - item2.order
              );
            });
          }}
        >
          <option value="">Select Dinner</option>
          {mainMeals.map((meal, index) => {
            // we are mapping each meal in mainMeals array to an option in the select menu
            return (
              <option value={meal} key={index}>
                {meal}
              </option>
            );
          })}
        </select>
        <span>Dinner Beverage: </span>
        <select
          className="form-select"
          aria-label="Dinner Beverage"
          // onChange fires an event, we want to take this value and assign it to a key
          onChange={(event) => {
            weekday.dinnerBeverage = event.target.value;
            setDays((items) => {
              // make a copy of the current state
              const array = [...items].filter(
                // remove the weekday the selection is changing
                (item) => item.day !== weekday.day
              );
              // append updated weekday and reset order
              return [...array, weekday].sort(
                // compare items to sort in acending order
                (item1, item2) => item1.order - item2.order
              );
            });
          }}
        >
          <option value="">Select Beverage</option>
          {beverages.map((drink, index) => {
            // we are mapping each meal in mainMeals array to an option in the select menu
            return (
              <option value={drink} key={index}>
                {drink}
              </option>
            );
          })}
        </select>
        <span>Snacks: </span>
        <select
          className="form-select"
          aria-label="Snacks"
          // onChange fires an event, we want to take this value and assign it to a key
          onChange={(event) => {
            weekday.snack = event.target.value;
            setDays((items) => {
              // make a copy of the current state
              const array = [...items].filter(
                // remove the weekday the selection is changing
                (item) => item.day !== weekday.day
              );
              // append updated weekday and reset order
              return [...array, weekday].sort(
                // compare items to sort in acending order
                (item1, item2) => item1.order - item2.order
              );
            });
          }}
        >
          <option value="">Select Snack</option>
          {snacks.map((snack, index) => {
            // we are mapping each meal in mainMeals array to an option in the select menu
            return (
              <option value={snack} key={index}>
                {snack}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Day;
