import React from "react";
import { categories } from "../data/Data";

const Categories = () => {
  return (
    <div className="max-w-[1520px] mx-auto px-4 py-8">
      <h1 className="text-center font-bold text-orange-500 text-2xl">
        Trending Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2">
        {categories.map((items) => {
          return (
            <div
              key={items.id}
              className="p-4 flex justify-center items-center hover:scale-105 duration-300"
            >
              <img
                className="object-cover rounded-xl w-40 h-16 cursor-pointer shadow-xl"
                src={items.img}
                alt={items.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
