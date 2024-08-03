import { useOutsideClick } from "@/hooks/use-outside-click";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BorderBeam } from "@/components/magicui/border-beam";
import wrkin from "../../assets/wrkin-full.webp";
import eko from "../../assets/eko-full.webp";
import mag from "../../assets/mag-full.webp";
import taswin from "../../assets/taswin-full.webp";
import sriakriti from "../../assets/srikakriti-full.webp";
import colorPalette from "../../assets/color-palette.png";

const ProjectSection = () => {
  const [active, setActive] = useState<
    (typeof projectData)[number] | boolean | null
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));
  return (
    <>
      {/* backdrop */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      {/* pop up */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100] ">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-950 sm:rounded-3xl overflow-hidden border-accent-foreground/30 border-2"
            >
              <motion.div layoutId={`image-${active.name}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.cover}
                  alt={active.name}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`name-${active.name}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-2xl uppercase mb-2"
                    >
                      {active.name}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.name}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-sm"
                    >
                      {active.stackUsed.toString()}
                    </motion.p>
                  </div>

                  <div>
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.link}
                      target="_blank"
                      className="block w-fit md:mx-auto relative px-8 py-2 shadow-md  border rounded-3xl font-semibold hover:text-foreground/100 bg-foreground/15"
                    >
                      <span className="w-max block tracking-widest">Visit</span>
                      <BorderBeam size={50} duration={5} delay={0} />
                    </motion.a>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-base pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {active.desc}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* grid */}

      <section
        id="projects"
        className="min-h-screen px-10 pb-32 max-w-[90rem] mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-16  z-10">Projects</h2>
        <ul className=" mx-auto w-full grid grid-cols-1 sm:grid-cols-2 items-start gap-4">
          {projectData.map((card) => (
            <motion.div
              layoutId={`card-${card.name}-${id}`}
              key={card.name}
              onClick={() => setActive(card)}
              className=" border-2 border-accent-foreground/10 flex flex-col bg-neutral-950  rounded-xl cursor-pointer overflow-hidden group
                "
            >
              <div className="w-full">
                <motion.div
                  layoutId={`image-${card.name}-${id}`}
                  className="relative"
                >
                  <img
                    src={card.cover}
                    alt={card.name}
                    className={`h-96 w-full  overflow-hidden group relative object-cover object-top group-hover:scale-105 transition-all duration-500 rounded-xl`}
                  />
                  <div className="project-card-bg absolute inset-0 p-5 border flex flex-col justify-end">
                    <motion.h3
                      layoutId={`name-${card.name}-${id}`}
                      className="font-medium text-neutral-200 text-xl uppercase mb-2 "
                    >
                      {card.name}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${card.name}-${id}`}
                      className="text-neutral-400 text-sm "
                    >
                      {card.stackUsed.toString()}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ProjectSection;

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const projectData = [
  {
    name: "Taswin Trading",
    link: "https://www.tashwintradingpvt.com/",
    stackUsed: [
      "HTML ",
      " CSS ",
      " JavaScript ",
      " Tailwind CSS ",
      " React JS ",
      "Recoil JS",
      " Vercel ",
    ],
    desc: "Created a dynamic and engaging website for Tashwin Trading Private Limited, a leader in the food export industry. The site showcases their rich heritage and extensive range of Indian spices, pulses, grains, fruits, and vegetables, highlighting their global partnerships and commitment to redefining the culinary experience with quality exports from India.",
    cover: taswin,
  },
  {
    name: "Eko Infomatics",
    link: "https://www.ekoinfomatics.com/",
    stackUsed: [
      "HTML ",
      " CSS ",
      " JavaScript ",
      " Tailwind CSS ",
      " React JS ",
      " Vercel ",
      " Email JS",
    ],
    desc: "Developed a professional and impactful website for a global solutions company that enhances ROI, builds customer loyalty, and achieves business goals. The site highlights their customized solutions in Risk Management, Marketing Automation, Security Analytics, and Loyalty Management, emphasizing the expertise of their team with over 100 years of combined experience in Research, Data Analytics, and Strategic Management Consulting.",
    cover: eko,
  },
  {
    name: "Sri Akriti Jewellers",
    link: "https://sriakriti-vk.vercel.app/",
    stackUsed: [
      "HTML ",
      " CSS ",
      " JavaScript ",
      " Tailwind CSS ",
      " React JS ",
      "Recoil JS",
      " Vercel ",
    ],
    desc: "Developed a sophisticated and elegant website for Sri Aakriti Jewels, a premier jeweler specializing in meticulously crafted Platinum and Gold Jewelry. The site highlights their exceptional handmade craftsmanship and showcases a stunning array of chains, bracelets, necklaces, pendants, and rings, reflecting the brand's commitment to timeless elegance and grace.",
    cover: sriakriti,
  },
  {
    name: "Wrkin App",
    link: "https://wrkin-web.vercel.app/",
    stackUsed: [
      "HTML ",
      "CSS ",
      "JavaScript ",
      "Tailwind CSS ",
      "React JS ",
      "Vercel ",
      "Vite ",
    ],
    desc: "Designed an innovative and user-friendly website for Wrkin.app, a digital platform that transforms work collaboration, task management, and Human Resource Management (HRM). The site presents a holistic solution aimed at enhancing workplace productivity, organization, and communication for professionals and businesses.",
    cover: wrkin,
  },
  {
    name: "Mag Production",
    link: "https://mag-swart.vercel.app/",
    stackUsed: [
      "HTML ",
      " CSS ",
      " JavaScript ",
      " Tailwind CSS ",
      " React JS ",
      " Vercel ",
      " Email JS",
    ],
    desc: "Developed an elegant and captivating website for a company dedicated to crafting everlasting impressions by catering to all weddings and events needs. The site showcases their commitment to creating exceptional projects that refine intimate moments and grand occasions into lasting treasures, adhering to global excellence standards and focusing on elegance, class, and beauty.",
    cover: mag,
  },

  {
    name: "Palettes",
    link: "https://color-palette-generator-devvivekkhanals-projects.vercel.app/",
    stackUsed: [
      "HTML ",
      " CSS ",
      " JavaScript ",
      " Tailwind CSS ",
      " React JS ",
      " Vercel ",
    ],
    desc: "Created a responsive web tool named Palettes, designed for generating color palettes from a single base color. The site includes features to set base and palette color formats (RGB, HEX, HSL), choose the number of colors (2 to 20), and export palettes as JSON, PDF, or image. Users can easily copy individual color codes with a click.",
    cover: colorPalette,
  },
];
