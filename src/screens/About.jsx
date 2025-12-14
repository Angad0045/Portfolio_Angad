import React from "react";
import RotatingText from "../ui_components/RotatingText";

const About = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black to-neutral-900 flex flex-col justify-center items-center">
      <div className="my-10 w-full lg:w-3/4">
        <h1 className="font-black text-4xl text-center text-[#155dfc] my-5">
          About Me
        </h1>
        <div className="w-full flex flex-col justify-center items-center md:grid md:grid-cols-4 p-5 lg:p-10 rounded-[50px] space-y-5 md:space-y-0">
          <div className="col-span-2">
            <img
              src="Angad.jpg"
              alt="Photo"
              className="md:h-[375px] lg:h-[500px] rounded-[50px] object-contain opacity-75"
            />
          </div>
          <div className="col-span-2 text-white text-md md:text-xl text-center md:text-left font-extralight flex flex-col items-start justify-center lg:mb-40 space-y-2 md:space-y-5">
            <h1>
              👋 Hello! My Name is{" "}
              <span className="text-[#155dfc] font-black">Angad Patil</span>
            </h1>
            <p className="text-md lg:text-lg text-justify">
              I'm a passionate software developer with a strong foundation in
              web development. I love the challenge of building scalable and
              responsive web applications. My go-to technologies include React
              and Node.js, and I'm always excited to learn more.
            </p>
            <p className="text-md lg:text-lg text-justify">
              When I'm not at the keyboard, you'll usually find me either
              playing or watching football — I'm a huge fan!
            </p>
          </div>
        </div>
        {/* <div className="grid grid-cols-6 bg-neutral-900 rounded-[50px] h-auto">
          <div className="col-span-2 overflow-hidden">
            <img
              src="Angad.jpeg"
              alt="Photo"
              className="h-full rounded-l-[50px] object-cover scale-125 opacity-70"
            />
          </div>
          <div className="col-span-4 py-10 px-10">
            <h1 className="text-9xl text-[#155dfc] font-black">About Me</h1>
            <div className="col-span-2 text-white text-md md:text-xl text-center md:text-left font-extralight space-y-3">
              <h1 className="text-3xl font-semibold mt-5">
                👋 Hello! My Name is{" "}
                <span className="text-[#155dfc] font-black">Angad Patil</span>
              </h1>
              <p className="text-md lg:text-xl lg:text-justify">
                I'm a passionate software developer with a strong foundation in
                web development. I love the challenge of building scalable and
                responsive web applications. My go-to technologies include React
                and Node.js, and I'm always excited to learn more.
              </p>
              <p className="text-md lg:text-xl lg:text-justify">
                When I'm not at the keyboard, you'll usually find me either
                playing or watching football — I'm a huge fan!
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="w-full flex flex-col justify-center items-center px-5 md:px-10 lg:px-0">
        <h1 className="font-black text-4xl text-center text-[#155dfc] my-5">
          Education
        </h1>
        <div className="w-full lg:w-1/2 relative grid grid-cols-4 bg-white/5 rounded-[40px] mt-5">
          <div className="md:col-span-1 w-full ">
            <img
              src="Bachelors.png"
              alt="Bachelors_Cap"
              className="absolute -rotate-12 -left-4 md:-left-6 lg:-left-16 -top-9 md:-top-10 h-[100px] md:h-[200px] lg:h-[250px] w-auto "
            />
          </div>
          <div className="col-span-4 md:col-span-3 w-full text-white p-5">
            <h1 className=" text-md md:text-3xl font-bold">
              Bachelor of Engineering in Electronics & Telecommunication
            </h1>
            <h3 className="text-sm md:text-lg font-extralight mt-1">
              Rajiv Gandhi Institute of Technology
            </h3>
            <div className="text-sm flex justify-between items-center pr-5 mt-5">
              <h4>2020-2024</h4>
              <h4>GPA 8.23/10</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
