import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import bitmoji from "../../assets/bitmoji.png";

import nextjs from "../../assets/nextjs.png";
import git from "../../assets/git.png";
import reactjs from "../../assets/reactjs.png";
import angularjs from "../../assets/angular.png";
import tailwindCss from "../../assets/tailwindCss.png";
import javascript from "../../assets/javascript.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import bootstrape from "../../assets/bootstrape.png";
import cpp from "../../assets/cpp.png";
import firebase from "../../assets/firebase.png";
import flutter from "../../assets/flutter.png";
import github from "../../assets/github.png";
import heroku from "../../assets/heroku.svg";
import mobx from "../../assets/mobx.png";
import netlify from "../../assets/netlify.svg";
import python from "../../assets/python.png";
import recoil from "../../assets/recoil.svg";
import redux from "../../assets/redux.svg";
import shadcn from "../../assets/shadcn.png";
import typescript from "../../assets/typescript.png";
import tanstack from "../../assets/tanstack.png";
import vercel from "../../assets/vercel.svg";
import amazon from "../../assets/amazon.jpeg";
import BlurFade from "@/components/magicui/blur-fade";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex w-14 aspect-square items-center justify-center rounded-full border-2 bg-white p-1 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

const SkillSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const skill1Ref = useRef<HTMLDivElement>(null);
  const skill2Ref = useRef<HTMLDivElement>(null);
  const skill3Ref = useRef<HTMLDivElement>(null);
  const skill4Ref = useRef<HTMLDivElement>(null);
  const skill5Ref = useRef<HTMLDivElement>(null);
  const skill6Ref = useRef<HTMLDivElement>(null);
  const skill7Ref = useRef<HTMLDivElement>(null);
  const skill8Ref = useRef<HTMLDivElement>(null);

  const skillData = [
    {
      title: "Web Frontend",
      ref: skill1Ref,
      skills: [
        {
          name: "HTML",
          logo: html,
        },
        {
          name: "CSS",
          logo: css,
        },
      ],
    },

    {
      title: "State Management",
      ref: skill2Ref,
      skills: [
        {
          name: "Recoil Js",
          logo: recoil,
        },
        {
          name: "MobX",
          logo: mobx,
        },
        {
          name: "Redux",
          logo: redux,
        },
      ],
    },

    {
      title: "Frameworks / Libraries",
      ref: skill3Ref,
      skills: [
        {
          name: "React Js",
          logo: reactjs,
        },
        {
          name: "Next Js",
          logo: nextjs,
        },
        {
          name: "Angular Js",
          logo: angularjs,
        },
        {
          name: "Flutter",
          logo: flutter,
        },

        {
          name: "Tailwind CSS",
          logo: tailwindCss,
        },
        {
          name: "Bootstrap",
          logo: bootstrape,
        },
        {
          name: "Shadcn",
          logo: shadcn,
        },
      ],
    },
    {
      title: "Design System",
      ref: skill4Ref,
      skills: [
        {
          name: "Meridian",
          logo: amazon,
        },
      ],
    },

    {
      title: "Programming Languages",
      ref: skill5Ref,
      skills: [
        {
          name: "JavaScript",
          logo: javascript,
        },
        {
          name: "TypeScript",
          logo: typescript,
        },
        {
          name: "Python",
          logo: python,
        },
        {
          name: "C/C++",
          logo: cpp,
        },
      ],
    },

    {
      title: "Version Control",
      ref: skill6Ref,
      skills: [
        {
          name: "Git",
          logo: git,
        },
        {
          name: "GitHub",
          logo: github,
        },
      ],
    },

    {
      title: "Hosting",
      ref: skill7Ref,
      skills: [
        {
          name: "Vercel",
          logo: vercel,
        },
        {
          name: "Netlify",
          logo: netlify,
        },
        {
          name: "Heroku",
          logo: heroku,
        },
      ],
    },

    {
      title: "Others",
      ref: skill8Ref,
      skills: [
        {
          name: "Firebase",
          logo: firebase,
        },
        {
          name: "Tanstack Query",
          logo: tanstack,
        },
      ],
    },
  ];

  return (
    <BlurFade
      blur={"1px"}
      duration={1}
      delay={0.3}
      inView
      inViewMargin="-100px"
    >
      <section id="skills" className="p-10 py-32 max-w-[80rem] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 relative z-10">
          Technical Skills
        </h2>

        <div className="relative " ref={containerRef}>
          <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
            <div className="flex flex-row justify-between items-start relative z-10 flex-wrap md:flex-nowrap">
              {/* row 1 */}
              <div>
                {skillData?.map((skillGroup, idx) => {
                  if (idx < 4) {
                    return (
                      <div
                        key={idx}
                        ref={skillGroup?.ref}
                        className="relative bg-background/50 z-10 rounded-2xl mb-8"
                      >
                        <h3 className="mb-2 tracking-wider text-foreground/50">
                          {skillGroup?.title}
                        </h3>
                        <div className="flex gap-5 items-center md:max-w-[18rem] flex-wrap justify-start">
                          {skillGroup?.skills?.map((skill, skillIdx) => {
                            return (
                              <div
                                key={skillIdx}
                                className="flex flex-col justify-center items-center gap-1  min-w-[4rem]"
                              >
                                <Circle className="p-1">
                                  {skill?.logo ? (
                                    <div className="rounded-full overflow-hidden flex justify-center items-center w-[5rem]">
                                      <img
                                        src={skill?.logo}
                                        alt={skill.name}
                                        className="w-full"
                                      />
                                    </div>
                                  ) : (
                                    <Icons.openai />
                                  )}
                                </Circle>
                                <span className="text-sm text-foreground/40">
                                  {skill?.name}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              {/* row 2 */}
              <div className="hidden md:block self-center ">
                <Circle ref={avatarRef} className="p-0 w-32 bg-foreground/80">
                  <img src={bitmoji} alt="Vivek's Bitmoji" />
                </Circle>
              </div>
              {/* row 3 */}
              <div>
                {skillData?.map((skillGroup, idx) => {
                  if (idx > 3) {
                    return (
                      <div
                        key={idx}
                        ref={skillGroup?.ref}
                        className="relative bg-background/50 z-10 rounded-2xl mb-8"
                      >
                        <h3 className="mb-2 tracking-wider text-foreground/50">
                          {skillGroup?.title}
                        </h3>
                        <div className="flex gap-5 items-center md:max-w-[18rem] flex-wrap justify-start">
                          {skillGroup?.skills?.map((skill, skillIdx) => {
                            return (
                              <div
                                key={skillIdx}
                                className="flex flex-col justify-center items-center gap-1  min-w-[5rem]"
                              >
                                <Circle className="p-1 ">
                                  {skill?.logo ? (
                                    <div className="rounded-full overflow-hidden flex justify-center items-center w-[5rem]">
                                      <img
                                        src={skill?.logo}
                                        alt={skill.name}
                                        className="w-full"
                                      />
                                    </div>
                                  ) : (
                                    <Icons.openai />
                                  )}
                                </Circle>
                                <span className="text-sm text-foreground/40">
                                  {skill?.name}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>

          {skillData?.map((skillGroup, idx) => {
            if (idx < 4) {
              return (
                <AnimatedBeam
                  key={idx}
                  duration={5}
                  containerRef={containerRef}
                  fromRef={skillGroup?.ref}
                  toRef={avatarRef}
                  delay={idx * (Math.floor(Math.random() * 5) + 1)}
                  className="hidden md:block"
                />
              );
            } else {
              return (
                <AnimatedBeam
                  key={idx}
                  duration={5}
                  containerRef={containerRef}
                  fromRef={skillGroup?.ref}
                  toRef={avatarRef}
                  delay={idx * (Math.floor(Math.random() * 2) + 1)}
                  reverse
                  className="hidden md:block"
                />
              );
            }
          })}
        </div>
      </section>
    </BlurFade>
  );
};

export default SkillSection;

const Icons = {
  openai: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};
