import React, { useState } from "react";
import { mealData } from "../data/Data";
import { AiOutlineArrowRight } from "react-icons/ai";
const Meals = () => {
  const [food, setFood] = useState(mealData);
  const fillterCat = (category) => {
    setFood(
      mealData.filter((meal) => {
        return meal.category === category;
      })
    );
  };
  return (
    <div className="max-w-[1520] m-auto px-4 py-4">
      <h1 className="text-center font-bold text-orange-500 text-2xl py-2">
        Our Meal
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center md:justify-center">
          <button
            className="m-1 border-orange-800 bg-orange-800 text-white hover:bg-white hover:text-orange-800 hover:border-orange-800"
            onClick={() => setFood(mealData)}
          >
            All
          </button>
          <button
            className="m-1 border-orange-800 bg-orange-800 text-white hover:bg-white hover:text-orange-800 hover:border-orange-800"
            onClick={() => fillterCat("pizza")}
          >
            Pizza
          </button>
          <button
            className="m-1 border-orange-800 bg-orange-800 text-white hover:bg-white hover:text-orange-800 hover:border-orange-800"
            onClick={() => fillterCat("Salad")}
          >
            Salad
          </button>
          <button
            className="m-1 border-orange-800 bg-orange-800 text-white hover:bg-white hover:text-orange-800 hover:border-orange-800"
            onClick={() => fillterCat("chicken")}
          >
            Chicken
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
        {food.map((meal) => (
          <div
            key={meal.id}
            className="border-none hover:scale-105 duration-300"
          >
            <img
              src={meal.img}
              className="rounded-lg w-full h-[200px] object-cover"
              alt={meal.title}
            />
            <div className="flex justify-between py-2 px-2">
              <p className="font-bold">{meal.title}</p>
              <p className="bg-orange-800 w-16 h-16 rounded-full -mt-10 text-white py-4 px-2 border-8">
                {meal.price}
              </p>
            </div>
            <div className="pl-2 py-4 -mt-6">
              <p className="flex items-center text-indigo-600">
                View More
                <AiOutlineArrowRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
