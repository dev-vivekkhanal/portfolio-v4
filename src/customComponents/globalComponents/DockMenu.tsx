import { Dock, DockIcon } from "../../components/magicui/dock";
import {
  HomeIcon,
  Code,
  GraduationCap,
  Phone,
  Mail,
  Linkedin,
  Github,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { Separator } from "../../components/ui/separator";
import ThemeToggle from "./ThemeToggle";
import { Button } from "../../components/ui/button";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#", icon: Code, label: "Projects" },
    { href: "#", icon: GraduationCap, label: "Experience" },
    { href: "#", icon: Phone, label: "Contact" },
  ],
  contact: {
    social: [
      {
        href: "https://github.com/dev-vivekkhanal",
        icon: Github,
        label: "Github",
      },
      {
        href: "https://www.linkedin.com/in/vivek-khanal/",
        icon: Linkedin,
        label: "Linkedin",
      },
      { href: "mailto:dev.vivekkhanal@gmail.com", icon: Mail, label: "Gmail" },
    ],
  },
};

const DockMenu = () => {
  return (
    <div className="relative w-fit mx-auto">
      <TooltipProvider>
        <Dock direction="middle" className="bg-foreground/10">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className="rounded-full size-12 hover:bg-foreground/20"
                  >
                    <item.icon className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-foreground text-background">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator
            orientation="vertical"
            className="h-full bg-foreground/20 hidden sm:block"
          />
          {DATA.contact.social.map((item) => (
            <DockIcon key={item.label} className="hidden sm:block">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      className="rounded-full size-12 hover:bg-foreground/20"
                    >
                      <item.icon className="size-4" />
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent className="bg-foreground text-background">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator
            orientation="vertical"
            className="h-full bg-foreground/20"
          />
          <DockIcon key="Theme">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  className="rounded-full size-8  hover:bg-foreground/20"
                >
                  <ThemeToggle />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-foreground text-background">
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
};

export default DockMenu;
