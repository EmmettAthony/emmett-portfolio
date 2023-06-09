import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen  text-black md:mt-1"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-2">
          <p className="text-4xl  justify-center text-center font-bold inline border-b-4 border-gray-500 sm:text-center">
            About
          </p>
        </div>

        <p className="text-xl mt-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          deserunt illum mollitia officiis qui exercitationem perferendis neque
          quasi a recusandae necessitatibus tempora iusto! Blanditiis error
          iste, totam fugiat recusandae rerum laborum perferendis molestiae
          aperiam asperiores nemo. Magni dolor maxime debitis vitae, eaque hic
          ab mollitia voluptatibus, a nostrum eveniet laborum!
        </p>

        <br />

        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          pariatur, vel similique sint, nobis aspernatur ut praesentium
          explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
          quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
          Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
          magni quo! Eum cupiditate debitis labore.
        </p>
      </div>
    </div>
  );
};

export default About;