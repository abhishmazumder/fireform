import { Link } from "react-router-dom";
import { memo } from "react";

import SectionHeading from "../SectionHeading";
import SectionParagraph from "../SectionParagraph";
import SectionSubHeading from "../SectionSubHeading";

import {
  SiHtml5,
  SiReact,
  SiAngular,
  SiJquery,
  SiNextdotjs,
} from "react-icons/si";
import { GoArrowRight } from "react-icons/go";

const Frameworks = memo(() => {
  return (
    <div className="flex flex-col gap-y-12 md:gap-y-10 items-center">
      <SectionHeading>
        Super easy to integrate, no library, dependency needed.
      </SectionHeading>
      <SectionParagraph>
        Form backend handling is not meant to be difficult. Getform gives you
        the possibility to integrate your HTML form with all the major
        development frameworks, JAMStack, no-code and CMS platforms.
      </SectionParagraph>
      <SectionSubHeading>
        Works with all frameworks and platforms
      </SectionSubHeading>
        <div className="flex flex-wrap justify-around w-full gap-y-3">
          {[
            {
              icon: SiHtml5,
              link: "/docs",
            },
            {
              icon: SiReact,
              link: "/docs",
            },
            {
              icon: SiAngular,
              link: "/docs",
            },
            {
              icon: SiJquery,
              link: "/docs",
            },
            {
              icon: SiNextdotjs,
              link: "/docs",
            },
          ].map(({ icon: Icon, link }, index) => (
            <Link key={index} to={link}>
              <span className="group h-auto w-auto rounded-full p-[6px] md:p-2 flex justify-center items-center text-primary-light hover:bg-primary-light hover:text-white transition-all">
                <Icon className="size-10 md:size-12 transition-transform transform scale-100 group-hover:scale-75" />
              </span>
            </Link>
          ))}
          <Link className="my-auto">
            <button className="group w-auto flex flex-row items-center gap-x-1 text-primary-light font-medium">
              <div>
                <p className="text-sm md:text-lg">See more</p>
                <div className="bg-primary-light h-[2px] w-0 group-hover:w-full transition-all duration-150"></div>
              </div>
              <GoArrowRight className="size-4 md:size-6" />
            </button>
          </Link>
        </div>
    </div>
  );
});

Frameworks.displayName = "Frameworks";

export default Frameworks;
