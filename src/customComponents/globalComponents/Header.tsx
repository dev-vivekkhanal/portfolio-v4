import ThemeToggle from "./ThemeToggle";
import github from "../../assets/github.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10">
      <nav className="w-full p-5 flex items-center justify-between">
        <div className="flex justify-center items-center gap-10">
          <h1 className="font-bold tracking-widest">Vivek Khanal</h1>
          <ul className="list-none flex justify-between items-center gap-5 dark:text-foreground/60">
            <li>
              <a href="#" className="hover:text-foreground/80">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground/80">
                Skills
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground/80">
                Experience
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground/80">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-fit flex items-center gap-2 justify-between">
          <a
            href="https://github.com/dev-vivekkhanal"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full h-6 aspect-square flex justify-center items-center"
            title="Github Account"
          >
            <img src={github} alt={github} className="" />
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
