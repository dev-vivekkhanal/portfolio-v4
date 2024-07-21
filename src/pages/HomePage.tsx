import SkillSection from "@/customComponents/homeComponents/SkillSection";
import HeroSection from "../customComponents/homeComponents/HeroSection";
import WorkExperience from "../customComponents/homeComponents/WorkExperience";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <WorkExperience />
      <SkillSection />
    </div>
  );
};

export default HomePage;
