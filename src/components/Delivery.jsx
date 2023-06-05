import React from "react";

const Delivery = () => {
  return (
    <div className="w-full bg-white py-10 px-4">
      <h3 className="text-center font-bold text-orange-500 text-2xl">
        Quick Delivery App
      </h3>
      <div className="w-[340px] mx-auto grid md:grid-cols-2 md:w-[1240px] lg:w-[1240px]">
        <img
          className="w-[550px] mx-auto my-4"
          src={require("../assets/delivery.webp")}
          alt=""
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Limitless Convenience on-demand
          </h1>
          <p>
            Would you like millions of new customers to enjoy your amazing food
            and groceries? So would we! It's simple: we list your menu and
            product lists online, help you process orders, pick them up, and
            deliver them to hungry pandas – in a heartbeat! Interested? Let's
            start our partnership today!
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
