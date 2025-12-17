import React from "react";

const About = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black to-neutral-900 p-5 pt-10 flex flex-col justify-center items-center">
      <div className="my-10 w-full lg:w-3/4 bg-[#155dfc]/80 flex flex-col justify-center rounded-[80px]">
        <h1 className="font-black text-4xl text-center text-white my-7">
          About Me
        </h1>
        <div className="text-white text-md md:text-xl text-center w-full flex flex-col justify-center items-start px-10 lg:px-20 pb-10 space-y-2 md:space-y-5">
          <h1>
            👋 Hello! My Name is{" "}
            <span className="md:text-2xl font-black">Angad Patil</span>
          </h1>
          <p className="text-white/70 text-md lg:text-lg text-justify">
            I'm a passionate software developer with a strong foundation in web
            development. I love the challenge of building scalable and
            responsive web applications. My go-to technologies include React and
            Node.js, and I'm always excited to learn more.
          </p>
          <p className="text-white/70 text-md lg:text-lg text-justify">
            When I'm not at the keyboard, you'll usually find me either playing
            or watching football — I'm a huge fan!
          </p>
          <div className="flex mx-auto gap-10 mt-5">
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold">1+</h1>
              <p className="text-sm lg:text-lg text-white/70">
                Years Experience
              </p>
            </div>
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold">7+</h1>
              <p className="text-sm lg:text-lg text-white/70">
                Project Completed
              </p>
            </div>
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold">1</h1>
              <p className="text-sm lg:text-lg text-white/70">Research Paper</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center px-5 pb-7 md:px-10 lg:px-0">
          <h1 className="font-black text-4xl text-center text-white">
            Education
          </h1>
          <div className="w-full lg:w-3/4 bg-white/10 rounded-[80px] mt-5">
            <div className="w-full text-white text-center p-5">
              <h1 className="text-md md:text-3xl font-bold">
                Bachelor of Engineering in Electronics & Telecommunication
              </h1>
              <h3 className="text-white/70 text-sm md:text-lg font-extralight mt-1">
                Rajiv Gandhi Institute of Technology
              </h3>
              <div className="text-sm flex justify-between items-center px-10 lg:px-16 mt-5">
                <h4>2020-2024</h4>
                <h4>GPA 8.23/10</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
