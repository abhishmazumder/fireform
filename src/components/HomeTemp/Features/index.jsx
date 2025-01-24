import SectionHeading from "../SectionHeading";
import Feature from "./Feature";

import { FaGift, FaShieldHalved, FaCode, FaBell, FaFileExport, FaSpellCheck  } from "react-icons/fa6";

const Features = () => {
  const features = [
    {
      icon: FaGift,
      title: "Always Free, Always Unlimited",
      description:
        "formfire remains perpetually free and unlimited. No plans, just unrestricted access for personal projects, experiments, and hobbies.",
    },
    {
      icon: FaSpellCheck,
      title: "Backend Validation Guaranteed",
      description:
        "We ensure spam-free submissions and end-to-end encryption through rigorous server-side validation.",
    },
    {
      icon: FaShieldHalved,
      title: "Powered by Google",
      description:
        "Leverage the reliability of Google Cloud Infrastructure, ensuring unmatched deliverability and uptime.",
    },
    {
      icon: FaFileExport,
      title: "Effortless Data Export",
      description:
        "Visualize and export form submission data with ease, all in a single click.",
    },
    {
      icon: FaCode,
      title: "No Coding Needed",
      description:
        "formfire is designed for everyone. Simply paste your endpoint, and you're set—no coding skills required.",
    },
    {
      icon: FaBell,
      title: "Real-Time Notifications, Always",
      description:
        "Stay instantly updated with real-time notifications, keeping you in sync with the latest submissions.",
    },
  ];
  
  return (
    <div className="flex flex-col items-center gap-y-12 md:gap-y-10">
      <SectionHeading>
        Secure, easy to use with all essential features!
      </SectionHeading>
        <div className="flex flex-wrap w-full justify-center">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
    </div>
  );
};

export default Features;
