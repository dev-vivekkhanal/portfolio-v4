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
import Ripple from "../../components/magicui/ripple";
import BlurFade from "@/components/magicui/blur-fade";

export function OrbitingCircleContainer() {
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
  return (
    <div className="relative min-h-[800px] overflow-hidden">
      <BlurFade blur={"2px"} duration={0.5} delay={0.9}>
        <div className="relative min-h-[800px]   flex w-full flex-col items-center justify-center overflow-hidden ">
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
      </BlurFade>
      <Ripple mainCircleSize={170} mainCircleOpacity={0.18} numCircles={5} />
    </div>
  );
}
