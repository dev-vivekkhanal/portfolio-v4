import BlurFade from "@/components/magicui/blur-fade";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleCopyAndNotify = () => {
    const email = "dev.vivekkhanal.com";

    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast({
          title: "Email Copied ✅",
          description: email,
        });
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        toast({
          variant: "destructive",
          title: "Failed to Copy Email",
          description: "Try Again!",
        });
      });
  };
  return (
    <BlurFade
      blur={"1px"}
      duration={1}
      delay={0.3}
      inView
      inViewMargin="-100px"
    >
      <section
        id="contact"
        className="px-10 pb-96 max-w-[80rem] min-h-fit  mx-auto  bg-transparent relative z-10 flex flex-wrap gap-10 justify-between items-center"
      >
        <div className="w-[120px] md:flex-1 md:max-w-[220px]">
          <a
            href="https://www.linkedin.com/in/vivek-khanal/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-linkedin stroke-foreground opacity-80 dark:opacity-50 dark:hover:opacity-90 transition-all"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <p className="text-2xl text-center text-foreground/75 dark:text-foreground/30">
            Connect in Linkedin
          </p>
        </div>

        <div className="w-[120px] md:flex-1 md:max-w-[220px]">
          <button onClick={handleCopyAndNotify}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-at-sign stroke-foreground opacity-80 dark:opacity-50 dark:hover:opacity-90 active:scale-95 transition-all"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
            </svg>
          </button>

          <p className="text-2xl text-center text-foreground/75 dark:text-foreground/30">
            Get my email
          </p>
        </div>

        <div className="w-[120px] md:flex-1 md:max-w-[220px]">
          <a
            href="mailto:dev.vivekkhanal@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-send-horizontal stroke-foreground opacity-80 dark:opacity-50 dark:hover:opacity-90 transition-all"
            >
              <path d="m3 3 3 9-3 9 19-9Z" />
              <path d="M6 12h16" />
            </svg>
          </a>
          <p className="text-2xl text-center text-foreground/75 dark:text-foreground/30">
            Open email app
          </p>
        </div>
      </section>
    </BlurFade>
  );
};

export default ContactSection;