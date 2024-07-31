import { HashLink } from "react-router-hash-link";
import BlurFade from "../../components/magicui/blur-fade";
import { BorderBeam } from "../../components/magicui/border-beam";
import { OrbitingCircleContainer } from "./OrbitingCircleContainer";

const HeroSection = () => {
  return (
    <section className="min-h-[100dvh] relative bg-transparent pt-10 md:pt-16">
      <BlurFade blur={"2px"} duration={1}>
        {/* Text Content */}
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
                className="underline"
              >
                LinkedIn
              </a>
            </p>
            <HashLink
              smooth
              to={"/#projects"}
              className="mt-5 block w-fit md:mx-auto relative px-8 py-2 shadow-md  border rounded-3xl font-semibold hover:text-foreground/100 bg-foreground/10"
            >
              <span>Explore my work ✨ </span>
              <BorderBeam size={75} duration={5} delay={0} />
            </HashLink>
          </div>
        </div>
      </BlurFade>
      <OrbitingCircleContainer />
    </section>
  );
};

export default HeroSection;
