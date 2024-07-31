import cdac from "../../assets/cdac.jpeg";
import eko from "../../assets/eko.jpeg";
import internForte from "../../assets/intrnForte.jpeg";
import cureskin from "../../assets/cureskin.jpeg";
import amazon from "../../assets/amazon.jpeg";
import BlurFade from "../../components/magicui/blur-fade";

import stmarys from "../../assets/stmarys.jpeg";
import svjc from "../../assets/svjc.png";
import cgc from "../../assets/cgc.jpg";
import graduate from "../../assets/graduate.png";

const WorkExperience = () => {
  const experienceData = [
    {
      id: 4,
      companyName: "CDAC",
      designation: "Engineering Trainee",
      startDate: "Jan 2021",
      endDate: "Jul 2021",
      duration: "6 Months",
      workMode: "On-site",
      companyLogo: cdac,
    },
    {
      id: 5,
      companyName: "IntrnForte",
      designation: "Academic Tutor",
      startDate: "Oct 2022",
      endDate: "Jan 2023",
      duration: "3 Months",
      workMode: "Remote",
      companyLogo: internForte,
    },

    {
      id: 6,
      companyName: "Eko Infomatics",
      designation: "React Developer",
      startDate: "Mar 2022",
      endDate: "Jun 2024",
      duration: "2 Years 3 Months",
      workMode: "On-site",
      companyLogo: eko,
      children: [
        {
          id: 61,
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
      id: 7,
      companyName: "Cureskin",
      designation: "Frontend Engineer",
      startDate: "Jun 2024",
      endDate: "Present",
      workMode: "Hybrid",
      companyLogo: cureskin,
    },
  ];

  const now = new Date(),
    start = new Date("2024-06-12"),
    years = now.getFullYear() - start.getFullYear(),
    months = now.getMonth() - start.getMonth() + years * 12,
    result =
      months >= 12
        ? `${Math.floor(months / 12)} years and ${months % 12} months`
        : `${months} months`;

  return (
    <>
      <BlurFade
        blur={"1px"}
        duration={1}
        delay={0.3}
        inView
        inViewMargin="-100px"
      >
        <section
          id="experience"
          className="p-10 py-32 max-w-[80rem] mx-auto  bg-transparent relative z-10"
        >
          <div className="">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 relative z-10">
              Work Experience
            </h2>
          </div>

          <div className="my-5">
            {experienceData?.reverse()?.map((data, idx) => {
              return (
                <div key={data?.id} className="mb-10 ">
                  <div className="flex justify-between items-start gap-10 ">
                    <div className="flex gap-5 items-center">
                      {/* image */}
                      <div className="flex justify-center items-center aspect-square w-16 rounded-full overflow-hidden bg-foreground">
                        <img
                          src={data?.companyLogo}
                          alt={data?.companyName}
                          className=""
                        />
                      </div>
                      {/* company and designation */}
                      <div>
                        <h3 className="font-bold text-lg sm:text-xl leading-relaxed tracking-wide">
                          {data?.companyName}
                        </h3>
                        <p>{data?.designation}</p>
                        <p className="text-foreground/50">{data?.workMode}</p>
                        <div className="sm:hidden">
                          <p className="text-foreground/50 flex gap-1">
                            <span>{data?.startDate}</span>
                            {data?.endDate && <span>-</span>}
                            <span
                              className={` ${
                                data?.endDate === "Present"
                                  ? "text-green-700 dark:text-green-300 font-semibold tracking-wider"
                                  : ""
                              } `}
                            >
                              {data?.endDate}
                            </span>
                          </p>
                          <p className="capitalize">
                            {idx === 0 ? result : data?.duration}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="min-w-40 hidden sm:block">
                      <p className="text-foreground/50 flex gap-1">
                        <span>{data?.startDate}</span>
                        {data?.endDate && <span>-</span>}
                        <span
                          className={` ${
                            data?.endDate === "Present"
                              ? "text-green-700 dark:text-green-300 font-semibold tracking-wider"
                              : ""
                          } `}
                        >
                          {data?.endDate}
                        </span>
                      </p>
                      <p className="capitalize">
                        {idx === 0 ? result : data?.duration}
                      </p>
                    </div>
                  </div>
                  {data?.children?.length && (
                    <div>
                      {data?.children?.map((childData) => {
                        return (
                          <div key={childData?.id} className="flex">
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
    </>
  );
};

export default WorkExperience;

export const EducationSection = () => {
  const educationData = [
    {
      id: 1,
      institutionName: "St. Mary's High School",
      standard: "10th Standard",
      batch: "2015 Batch",
      duration: "12 Years",
      workMode: "SEBA Board",
      companyLogo: stmarys,
    },
    {
      id: 2,
      institutionName: "Sai Vikash Junior College",
      standard: "12th Standard",
      batch: "2017 Batch",
      duration: "2 Years",
      workMode: "AHSEC Board",
      companyLogo: svjc,
    },
    {
      id: 3,
      institutionName: "Chandigarh Engineering College",
      standard: "BTech in Electronics and Communiction Engg",
      batch: "2021 Batch",
      duration: "4 Years",
      workMode: "Punjab Technical University",
      companyLogo: cgc,
    },
  ];
  return (
    <BlurFade
      blur={"1px"}
      duration={1}
      delay={0.3}
      inView
      inViewMargin="-100px"
    >
      <section
        id="education"
        className="p-10 py-32 max-w-[80rem] mx-auto  bg-transparent relative z-10"
      >
        <div className="">
          <img
            src={graduate}
            alt="Vivek's graduat btmoji"
            className="w-32 translate-y-4"
          />
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 relative z-10">
            Education
          </h2>
        </div>

        <div className="my-5">
          {educationData?.reverse()?.map((data) => {
            return (
              <div key={data?.id} className="mb-10 ">
                <div className="flex justify-between items-start gap-10 ">
                  <div className="flex gap-5 items-center">
                    {/* image */}
                    <div className="flex justify-center items-center aspect-square w-16 rounded-full overflow-hidden bg-foreground">
                      <img
                        src={data?.companyLogo}
                        alt={data?.institutionName}
                        className=""
                      />
                    </div>
                    {/* institution and standard */}
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl leading-relaxed tracking-wide">
                        {data?.institutionName}
                      </h3>
                      <p>{data?.standard}</p>
                      <p className="text-foreground/50">{data?.workMode}</p>
                      <div className="sm:hidden">
                        <p className="text-foreground/50 flex gap-1">
                          <span>{data?.batch}</span>
                        </p>
                        <p className="capitalize">{data?.duration}</p>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-40 hidden sm:block">
                    <p className="text-foreground/50 flex gap-1">
                      <span>{data?.batch}</span>
                    </p>
                    <p className="capitalize">{data?.duration}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </BlurFade>
  );
};
