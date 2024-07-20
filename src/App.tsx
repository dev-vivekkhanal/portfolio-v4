import BlurFade from "./components/magicui/blur-fade";
import Particles from "./components/magicui/particles";
import DockMenu from "./customComponents/globalComponents/DockMenu";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <main className="bg-background relative min-w-[400px]">
      {/* Background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={1000}
        ease={80}
        color={"#eeeeee"}
        refresh
      />
      <HomePage />
      <BlurFade
        duration={0.5}
        delay={1.8}
        className="fixed bottom-5 z-10 left-0 right-0"
      >
        <DockMenu />
      </BlurFade>
    </main>
  );
}

export default App;
