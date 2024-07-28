import SkillSection from "@/customComponents/homeComponents/SkillSection";
import HeroSection from "../customComponents/homeComponents/HeroSection";
import WorkExperience, {
  EducationSection,
} from "../customComponents/homeComponents/WorkExperience";
import TextRevealByWord from "@/components/magicui/text-reveal";
import ProjectSection from "@/customComponents/homeComponents/ProjectSection";

const HomePage = () => {
  return (
    <div className="dark:bg-image-dark dark:sm:bg-none sm:bg-fixed">
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <WorkExperience />
      <TextRevealByWord text="I'm passionate about creating innovative web solutions. Bringing my creative visions to life with clean, efficient and scalable code." />
      <EducationSection />
    </div>
  );
};

export default HomePage;
