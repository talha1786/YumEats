import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { topPicks } from "../data/Data";

const TopPicks = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-orange-500 text-2xl">
        Top Picks
      </h1>

      <div className="lg:flex max-w-[1520px] m-auto py-8 px-2">
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "0.5rem",
          }}
        >
          {topPicks.map((top) => {
            return (
              <SplideSlide key={top.id}>
                <div className="relative rounded-3xl">
                  <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
                    <p className="px-2 font-bold lg:pt-4 lg:text-2xl">
                      {top.title}
                    </p>
                    <p className="px-2">{top.price}</p>
                    <button className="lg:border-dotted border-white text-white mx-2 absolute bottom-4">
                      Add To Cart
                    </button>
                  </div>
                  <img
                    className="rounded-3xl w-full h-[200px] object-cover cursor-pointer hover:scale-105 ease-out duration-300"
                    src={top.image}
                    alt={top.title}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default TopPicks;
