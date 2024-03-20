import Feature from "./Feature";
import { FaGift, FaShieldHalved, FaCode } from "react-icons/fa6";
import { GrValidate, GrDocumentCsv } from "react-icons/gr";
import { HiMiniBellAlert } from "react-icons/hi2";

const Features = () => {
    const features = [
        {
          icon: FaGift,
          title: "Always Free, Always Unlimited",
          description:
            "formfire remains perpetually free and unlimited. No plans, just unrestricted access for personal projects, experiments, and hobbies.",
        },
        {
          icon: GrValidate,
          title: "Backend Validation Guaranteed",
          description:
            "We ensure spam-free submissions and end-to-end encryption through rigorous server-side validation.",
        },
        {
          icon: FaShieldHalved,
          title: "Powered by Google, Secured by Us",
          description:
            "Leverage the reliability of Google Cloud Infrastructure, ensuring unmatched deliverability and uptime.",
        },
        {
          icon: GrDocumentCsv,
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
          icon: HiMiniBellAlert,
          title: "Real-Time Notifications, Always",
          description:
            "Stay instantly updated with real-time notifications, keeping you in sync with the latest submissions.",
        },
      ];
  return (
    <div className="flex flex-col gap-y-12 md:gap-y-10">
      <div className="w-full self-center">
        <h1 className="text-white text-center text-3xl font-bold">
          Secure, easy to use with all essential features!
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
