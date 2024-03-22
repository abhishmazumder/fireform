import { memo } from "react";
import Review from "./Review";
import SectionHeading from "../SectionHeading";

const Reviews = memo(() => {
  return (
    <div className="flex flex-col gap-y-12 md:gap-y-10 items-center">
      <SectionHeading>
        Here&apos;s what our user feel about fireform.
      </SectionHeading>
      <div className="grid grid-col-1 md:grid-cols-3 gap-10">
        {[
          {
            image:
              "https://saiuniversity.edu.in/wp-content/uploads/2020/12/narayana_murthy_img-1.jpg",
            name: "Narayan Murty",
            designation: "Founder, Infosys",
            review:
              "Fireform impresses with its intuitive interface and powerful features, simplifying tasks and enhancing productivity seamlessly. Its reliability ensures consistent performance, making it a top choice for streamlined workflows.",
          },
          {
            image:
              "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/Elon_Musk_Twitter_1200x768.jpeg?VersionId=YCaTrP_O2lgfznmp4t6aIw2PhMAHfjRo&size=690:388",
            name: "Elon Musk",
            designation: "CEO, Tesla",
            review:
              "Experience efficiency at its finest with Fireform. Its user-friendly interface and advanced capabilities streamline tasks effortlessly, ensuring reliable performance and boosting productivity.",
          },
          {
            image:
              "https://i.pinimg.com/564x/6a/ca/84/6aca84b748a7db37daef2805fc62a1e1.jpg",
            name: "Narendra Modi",
            designation: "CEO, India",
            review:
              "Fireform excels with its sleek interface and efficient tools, streamlining tasks effortlessly. Its reliability ensures consistent performance, making it a must-have for enhancing productivity. Highly recommended for seamless workflow management.",
          },
        ].map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>
    </div>
  );
});

Reviews.displayName = "Reviews";

export default Reviews;
