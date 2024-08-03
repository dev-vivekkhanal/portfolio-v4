import SkillSection from "@/customComponents/homeComponents/SkillSection";
import HeroSection from "../customComponents/homeComponents/HeroSection";
import WorkExperience, {
  EducationSection,
} from "../customComponents/homeComponents/WorkExperience";
import ProjectSection from "@/customComponents/homeComponents/ProjectSection";
import ContactSection from "@/customComponents/homeComponents/ContactSection";
import Footer from "@/customComponents/globalComponents/Footer";

const HomePage = () => {
  return (
    <div className="dark:bg-star-less-dark bg-fixed">
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <WorkExperience />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
