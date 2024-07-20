import BlurFade from "../../components/magicui/blur-fade";
import { BorderBeam } from "../../components/magicui/border-beam";
import { OrbitingCircleContainer } from "./OrbitingCircleContainer";

const HeroSection = () => {
  return (
    <section className="min-h-[100dvh] relative">
      {/* Text Content */}
      <div className="p-5 relative z-10 text-foreground/85 w-full max-w-[80rem] mx-auto mt-16">
        <BlurFade blur={"2px"} duration={1} delay={0.3}>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter  md:text-center px-5">
            Hi, I'm Vivek 👋
          </h1>
        </BlurFade>
        <BlurFade blur={"2px"} duration={1.5} delay={1.5}>
          <div className="md:text-center space-y-7 text-base md:text-lg lg:text-xl mt-5 px-5">
            <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold">
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
                className="underline"
              >
                LinkedIn
              </a>
            </p>
            <button className="relative px-8 py-2 shadow-md  border rounded-3xl font-semibold hover:text-foreground/100 bg-foreground/10">
              <span>Explore my work ✨ </span>
              <BorderBeam size={80} duration={5} delay={0} />
            </button>
          </div>
        </BlurFade>
      </div>

      <BlurFade blur={"2px"} duration={1.5} delay={1.5}>
        <OrbitingCircleContainer />
      </BlurFade>
    </section>
  );
};

export default HeroSection;
