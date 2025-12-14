import Beams from "../ui_components/Beams";
import LogoLoop from "../ui_components/LoopLoop";
import GlareHover from "../ui_components/GlareHover";
import SplitText from "../ui_components/SplitText";
import RotatingText from "../ui_components/RotatingText";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { Mail } from "lucide-react";

const techLogos = [
  {
    node: <SiReact color="#d1d1d1" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiNextdotjs color="#d1d1d1" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript color="#d1d1d1" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss color="#d1d1d1" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

const Home = ({ onContactClick }) => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <>
      {/* BackGround */}
      <div className="relative max-w-screen h-svh">
        <div style={{ width: "100%", height: "100%", opacity: "70%" }}>
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#155dfc"
            speed={6}
            noiseIntensity={1.75}
            scale={0.1}
            rotation={30}
          />
        </div>
      </div>
      <div className="absolute h-screen text-white flex flex-col justify-center items-center">
        {/* <Navbar /> */}
        <div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-lg lg:text-3xl">Hi, I'm Angad Patil</h4>
            <SplitText
              text="Software Developer"
              className="mt-3 md:mt-5 tracking-wide md:tracking-normal text-7xl lg:text-8xl font-black"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <div className="mt-5 md:mt-5 w-full flex justify-center items-center gap-3 text-2xl md:text-4xl font-black">
              <h1>Creative</h1>
              <RotatingText
                texts={["Coding", "Thinking", "Components!"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-[#155dfc] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
            <div className="mt-7 md:mt-5 flex justify-center items-center h-10 lg:h-20 gap-5">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                height="55px"
                width="55px"
                background="transparent"
              >
                <a
                  href="https://www.linkedin.com/in/angad-patil/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLinkedin size={35} color="#808080" />
                </a>
              </GlareHover>
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                height="55px"
                width="55px"
                background="transparent"
              >
                <a
                  href="mailto:angadpatil1141@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail size={40} color="#808080" />
                </a>
              </GlareHover>
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                height="55px"
                width="55px"
                background="transparent"
              >
                <a
                  href="https://github.com/Angad0045"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub size={35} color="#808080" />
                </a>
              </GlareHover>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="mt-3 text-center p-5 lg:w-3/4  text-md lg:text-lg">
              Enthusiastic Web Developer with a passion for creating scalable,
              high-performance, and user-centric applications using React and
              Node.js
            </h1>
            <button
              className="bg-transparent font-black px-4 py-2 rounded-3xl border-2 border-[#155dfc] hover:bg-neutral-900 cursor-pointer hover:shadow-[0_0_10px_#155dfc,0_0_20px_#155dfc,0_0_30px_#155dfc] transition-shadow duration-300"
              onClick={onContactClick}
            >
              Let's Connect
            </button>
          </div>
        </div>
        <div className="relative -bottom-30 max-w-screen h-30 flex md:hidden xl:flex items-center overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={40}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
