import { HashLink } from "react-router-hash-link";
import { BorderBeam } from "../../components/magicui/border-beam";
import Ripple from "@/components/magicui/ripple";

import OrbitingCircles from "../../components/magicui/orbiting-circles";

import nextjs from "../../assets/nextjs.png";
import git from "../../assets/git.png";
import reactjs from "../../assets/reactjs.png";
import angularjs from "../../assets/angular.png";
import tailwindCss from "../../assets/tailwindCss.png";
import javascript from "../../assets/javascript.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import bitmoji2 from "../../assets/bitmoji2.png";

const HeroSection = () => {
  return (
    <section className=" relative bg-transparent overflow-hidden">
      {/* Text Content */}
      <div className="absolute top-0 left-0 right-0 pt-10 md:pt-16">
        <div className="pt-0 px-10 relative z-10 text-foreground/85 w-full max-w-[80rem] mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter  md:text-center">
            Hi, I'm <span className="gradient-text font-pacifico">Vivek</span>{" "}
            <span className="animate-handshake inline-block">👋</span>
          </h1>

          <div className="md:text-center space-y-7 text-base md:text-lg lg:text-xl mt-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Electronics Engineer <br /> turned Software Developer
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/65">
              I'm driven by a passion for software development and{" "}
              <br className="hidden sm:block" /> continuous learning. Connect
              with me on{" "}
              <a
                href="https://www.linkedin.com/in/vivek-khanal/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-1"
              >
                LinkedIn
              </a>
              to know more
            </p>
            <HashLink
              smooth
              to={"/#projects"}
              className="mt-5 block w-fit md:mx-auto relative px-8 py-2 shadow-md border border-foreground/10  rounded-3xl font-semibold text-foreground/100 bg-background/80 group hover:bg-background transition-all"
            >
              <span>
                Explore my work{" "}
                <span className="text-foreground/100 group-hover:animate-pulse">
                  ✨{" "}
                </span>
              </span>
              <BorderBeam size={75} duration={5} delay={0} />
            </HashLink>
          </div>
        </div>
      </div>
      {/* <OrbitingCircleContainer /> */}
      <div className="flex flex-col w-full min-h-[120vh] xl:min-h-[80rem] items-center justify-center overflow-hidden ">
        <img
          src={bitmoji2}
          alt="Vivek's bitmoji"
          className="w-32 animate-pop-in"
        />

        {axisData?.map((skill) => {
          return (
            <OrbitingCircles
              key={skill.name}
              className={`size-[${skill.size}] border-none `}
              duration={skill.duration}
              delay={skill.delay}
              radius={skill.radius}
              reverse={skill.reverse}
              path={false}
            >
              <div
                style={{ width: skill.size }}
                className="aspect-square flex justify-center items-center  animate-pop-in"
              >
                <img
                  src={skill.image}
                  alt=""
                  className="w-full"
                  title={skill.name}
                />
              </div>
            </OrbitingCircles>
          );
        })}
      </div>
      <Ripple mainCircleSize={170} mainCircleOpacity={0.18} numCircles={10} />
    </section>
  );
};

export default HeroSection;

const axisData = [
  {
    name: "Git",
    image: git,
    radius: 80,
    duration: 20,
    delay: 50,
    size: "30px",
  },
  {
    name: "HTML",
    image: html,
    radius: 80,
    duration: 20,
    delay: 40,
    size: "30px",
  },
  {
    name: "CSS",
    image: css,
    radius: 160,
    duration: 30,
    delay: 120,
    size: "40px",
    reverse: true,
  },
  {
    name: "Tailwind css",
    image: tailwindCss,
    radius: 160,
    duration: 30,
    delay: 100,
    size: "40px",
    reverse: true,
  },
  {
    name: "React Js",
    image: reactjs,
    radius: 240,
    duration: 40,
    delay: 200,
    size: "50px",
  },
  {
    name: "Javascript",
    image: javascript,
    radius: 240,
    duration: 40,
    delay: 290,
    size: "50px",
  },
  {
    name: "Angular Js",
    image: angularjs,
    radius: 320,
    duration: 50,
    delay: 280,
    size: "60px",
    reverse: true,
  },
  {
    name: "Next Js",
    image: nextjs,
    radius: 320,
    duration: 50,
    delay: 360,
    size: "60px",
    reverse: true,
  },
];
