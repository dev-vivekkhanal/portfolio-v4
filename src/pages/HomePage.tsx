import SkillSection from "@/customComponents/homeComponents/SkillSection";
import HeroSection from "../customComponents/homeComponents/HeroSection";
import WorkExperience, {
  EducationSection,
} from "../customComponents/homeComponents/WorkExperience";
import TextRevealByWord from "@/components/magicui/text-reveal";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TextRevealByWord text="I'm passionate about creating innovative web solutions. Bringing my creative visions to life with clean, efficient and scalable code." />
      <WorkExperience />
      <EducationSection />
      <SkillSection />
    </div>
  );
};

export default HomePage;
