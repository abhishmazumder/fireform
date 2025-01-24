import { useMemo } from "react";

import Step from "./Step";
import SectionHeading from "../SectionHeading";
import SectionParagraph from "../SectionParagraph";

import { FaUser, FaCopy, FaFileCode, FaWandMagicSparkles } from "react-icons/fa6";

const Steps = () => {
  const steps = useMemo(() => [
    {
      icon: FaUser,
      title: "Sign up and log In",
      description:
        "Register an account and log in to fireform. You'll be directed to your user dashboard, where you can create forms and get unique form endpoints.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019",
    },
    {
      icon: FaCopy,
      title: "Copy your unique endpoint",
      description:
        "Once you create a form from your user dashboard, you'll immediately receive a unique URL for the created form.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019",
    },
    {
      icon: FaFileCode,
      title: "Paste the form URL",
      description:
        "Paste your form URL as the action value to start collecting submissions and make your form dynamic right away.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019",
    },
    {
      icon: FaWandMagicSparkles,
      title: "All done and ready",
      description:
        "Congratulations! Your form is now ready to collect submissions. You'll receive submission notifications via email and connected apps, and you can view submission data from your account.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019",
    },
  ], []);

  return (
    <div className="flex flex-col gap-y-12 md:gap-y-10 items-center">
      <SectionHeading>How to use?</SectionHeading>
      <SectionParagraph>
        Follow these simple steps below to set up your account and start
        collecting form submissions in minutes.
      </SectionParagraph>
        <div className="flex flex-col gap-y-12 lg:gap-6">
          {steps.map((step, index) => (
            <Step
              key={index}
              {...step}
              stepNo={index + 1}
              flip={index % 2 !== 0}
            />
          ))}
        </div>
    </div>
  );
};

export default Steps;
