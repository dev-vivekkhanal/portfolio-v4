const Footer = () => {
  return (
    <footer className=" p-10 text-center pb-64 text-lg relative z-20">
      <p className=" text text-foreground/50 ">
        That’s a Wrap! Thanks for Stopping By ✨
      </p>
      <p className="text-foreground/50 ">
        Site Crafted by{" "}
        <a
          href="http://www.vivekkhanal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-text text-3xl font-pacifico"
        >
          Vivek
        </a>
      </p>
    </footer>
  );
};

export default Footer;
