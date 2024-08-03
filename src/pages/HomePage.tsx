import SkillSection from "@/customComponents/homeComponents/SkillSection";
import HeroSection from "../customComponents/homeComponents/HeroSection";
import WorkExperience, {
  EducationSection,
} from "../customComponents/homeComponents/WorkExperience";
import TextRevealByWord from "@/components/magicui/text-reveal";
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
      <TextRevealByWord text="Got a project in mind?💡" />
      <TextRevealByWord text="Don&#39;t be shy, say Hi!👋 Let's bring your ideas to life." />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
