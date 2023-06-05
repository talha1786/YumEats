import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Featured = () => {
  return (
    <div className="max-w-[1520px] h-[160px] lg:h-[500px] w-full py-4 px-4">
      <Splide
        options={{
          type: "loop",
          pagination: false,
          drag: "free",
          arrows: false,
          gap: "1rem",
          autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
        }}
      >
        <SplideSlide>
          <img
            className="w-full h-[60%] lg:h-1/2 bg-center rounded-2xl bg-cover duration-500"
            src={require("../assets/burger.webp")}
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="w-full h-1/2 bg-center rounded-2xl bg-cover duration-500"
            src={require("../assets/pizza.avif")}
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="w-full h-1/2 bg-center rounded-2xl bg-cover duration-500"
            src={require("../assets/rice.png")}
            alt=""
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Featured;
