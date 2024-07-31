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
    <div className="dark:bg-image-dark dark:sm:bg-none sm:bg-fixed">
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <WorkExperience />
      <EducationSection />
      <TextRevealByWord text="Got a project in mind?💡" />
      <TextRevealByWord text="Don&#39;t be shy, say Hi!👋 Let's bring your ideas to life." />
      <ContactSection />
      <Footer />
      {/* <TextRevealByWord text="I'm passionate about creating innovative web solutions. Bringing my creative visions to life with clean, efficient and scalable code." /> */}
    </div>
  );
};

export default HomePage;
