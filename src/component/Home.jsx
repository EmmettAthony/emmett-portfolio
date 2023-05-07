import React from "react";
import HeroImage from "../assets/hero.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen bg-gradient-to-b from-black via-black to-gray md:h-screen sm:h-screen"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row sm:flex-row">
        <div className="flex flex-col justify-center ">
          <h2 className="text-4xl font-bold text-white lg:text-7xl md:text-7xl sm:text-5xl">
            I'm a Front-End Developer
          </h2>
          <p className="text-white mt-6 py-4 max-w-md">
            I have 3 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 hover:scale-90 delay-150 my-2 flex items-center rounded-md bg-blue mt-2 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto md:w-full sm:w-full lg:w-full lg:h-full md:h-full sm:visible md:visible lg:visible"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;