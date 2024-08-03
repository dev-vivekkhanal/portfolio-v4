import { Toaster } from "./components/ui/toaster";
import DockMenu from "./customComponents/globalComponents/DockMenu";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <main className="bg-background relative min-w-[20rem]">
      <HomePage />
      <div className="fixed bottom-5 z-10 left-0 right-0">
        <DockMenu />
      </div>
      <Toaster />
    </main>
  );
};

export default App;
