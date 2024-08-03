import BlurFade from "./components/magicui/blur-fade";
import Particles from "./components/magicui/particles";
import { Toaster } from "./components/ui/toaster";
import DockMenu from "./customComponents/globalComponents/DockMenu";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <main className="bg-background relative min-w-[24rem]">
      <Particles
        className="absolute inset-0 z-0 hidden sm:block"
        quantity={800}
        ease={80}
        color={"#eeeeee"}
        refresh
      />
      <HomePage />
      <div className="fixed bottom-5 z-10 left-0 right-0">
        <DockMenu />
      </div>
      <Toaster />
    </main>
  );
};

export default App;
