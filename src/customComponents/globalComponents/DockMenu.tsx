import { Dock, DockIcon } from "../../components/magicui/dock";
import {
  HomeIcon,
  Code,
  GraduationCap,
  //   Phone,
  Mail,
  Linkedin,
  Github,
  BriefcaseBusiness,
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
import { HashLink } from "react-router-hash-link";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  navbar: [
    { href: "#", icon: HomeIcon, label: "Home" },
    { href: "/#projects", icon: Code, label: "Projects" },
    { href: "/#experience", icon: BriefcaseBusiness, label: "Experience" },
    { href: "/#education", icon: GraduationCap, label: "Education" },
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
        <Dock direction="middle" className="bg-foreground/25">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label} className="mx-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <HashLink smooth to={item?.href}>
                    <Button
                      variant="ghost"
                      className="rounded-full size-14 hover:bg-foreground/20"
                    >
                      <item.icon className="size-8" />
                    </Button>
                  </HashLink>
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
            <DockIcon key={item.label} className="hidden sm:block mx-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="ghost"
                      className="rounded-full size-14 hover:bg-foreground/20"
                    >
                      <item.icon className="size-8" />
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
                  className="rounded-full size-12  hover:bg-foreground/20"
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
