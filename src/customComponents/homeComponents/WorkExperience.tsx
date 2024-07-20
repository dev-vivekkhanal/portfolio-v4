import cdac from "../../assets/cdac.jpeg";
import eko from "../../assets/eko.jpeg";
import internForte from "../../assets/intrnForte.jpeg";
import cureskin from "../../assets/cureskin.jpeg";
import amazon from "../../assets/amazon.jpeg";
import BlurFade from "../../components/magicui/blur-fade";
import TextRevealByWord from "../../components/magicui/text-reveal";
const WorkExperience = () => {
  const experienceData = [
    {
      id: 1,
      companyName: "CDAC",
      designation: "Engineering Trainee",
      startDate: "Jan 2021",
      endDate: "Jul 2021",
      duration: "6 Months",
      workMode: "On-site",
      companyLogo: cdac,
    },
    {
      id: 2,
      companyName: "IntrnForte",
      designation: "Academic Tutor",
      startDate: "Oct 2022",
      endDate: "Jan 2023",
      duration: "3 Months",
      workMode: "Remote",
      companyLogo: internForte,
    },

    {
      id: 3,
      companyName: "Eko Infomatics",
      designation: "React Developer",
      startDate: "Mar 2022",
      endDate: "Jun 2024",
      duration: "2 Years 3 Months",
      workMode: "On-site",
      companyLogo: eko,
      children: [
        {
          id: 31,
          companyName: "Amazon",
          designation: "SDE 1",
          startDate: "Jul 2023",
          endDate: "Jun 2024",
          duration: "11 Months",
          workMode: "On-site [Contract Employee]",
          companyLogo: amazon,
        },
      ],
    },

    {
      id: 4,
      companyName: "Cureskin",
      designation: "Frontend Engineer",
      startDate: "Jun 2024",
      endDate: "Current",
      workMode: "Hybrid",
      companyLogo: cureskin,
    },
  ];

  return (
    <>
      <BlurFade
        blur={"1px"}
        duration={2}
        delay={0.3}
        inView
        inViewMargin="-200px"
      >
        <section
          id="#experience"
          className="p-5 py-32 max-w-[80rem] min-h-screen mx-auto  bg-transparent relative z-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-20">
            Work Experience
          </h2>

          <div className="my-5">
            {experienceData?.reverse()?.map((data) => {
              return (
                <div key={data?.id} className="mb-10 ">
                  <div className="flex justify-between items-start gap-10 ">
                    <div className="flex gap-5 items-center">
                      {/* image */}
                      <div className="flex justify-center items-center aspect-square w-16 rounded-full overflow-hidden">
                        <img src={data?.companyLogo} alt={data?.companyName} />
                      </div>
                      {/* company and designation */}
                      <div>
                        <h3 className="font-bold text-lg sm:text-xl leading-relaxed tracking-wide">
                          {data?.companyName}
                        </h3>
                        <p>{data?.designation}</p>
                        <p className="text-foreground/50">{data?.workMode}</p>
                        <div className="sm:hidden">
                          <p className="text-foreground/50">
                            {data?.startDate} - {data?.endDate}
                          </p>
                          <p>{data?.duration}</p>
                        </div>
                      </div>
                    </div>

                    <div className="min-w-40 hidden sm:block">
                      <p className="text-foreground/50">
                        {data?.startDate} - {data?.endDate}
                      </p>
                      <p>{data?.duration}</p>
                    </div>
                  </div>
                  {data?.children?.length && (
                    <div>
                      {data?.children?.map((childData) => {
                        return (
                          <div className="flex">
                            <div className="flex  w-16">
                              <div className="flex-1"></div>
                              <div className="border-l-2 border-b-2 h-20 border-foreground/20 flex-1"></div>
                            </div>

                            <div className="flex justify-between items-start gap-10 w-full pt-10 pl-1">
                              <div className="flex gap-5 items-center">
                                {/* image */}
                                <div className="flex justify-center items-center aspect-square w-16 rounded-full overflow-hidden">
                                  <img
                                    src={childData?.companyLogo}
                                    alt={childData?.companyName}
                                  />
                                </div>
                                {/* company and designation */}
                                <div>
                                  <h3 className="font-bold text-lg sm:text-xl leading-relaxed tracking-wide">
                                    {childData?.companyName}
                                  </h3>
                                  <p>{childData?.designation}</p>
                                  <p className="text-foreground/50">
                                    {childData?.workMode}
                                  </p>

                                  <div className="sm:hidden">
                                    <p className="text-foreground/50">
                                      {childData?.startDate} -{" "}
                                      {childData?.endDate}
                                    </p>
                                    <p>{childData?.duration}</p>
                                  </div>
                                </div>
                              </div>

                              <div className="min-w-40 hidden sm:block">
                                <p className="text-foreground/50">
                                  {childData?.startDate} - {childData?.endDate}
                                </p>
                                <p>{childData?.duration}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </BlurFade>
      <TextRevealByWord text="I'm passionate about creating innovative web solutions. Bringing my creative visions to life with clean, efficient and scalable code." />
    </>
  );
};

export default WorkExperience;
