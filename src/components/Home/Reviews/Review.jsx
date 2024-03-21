import PropTypes from "prop-types";
import { memo } from "react";

const Review = memo(({ image, name, designation, review }) => {
  return (
    <div className="group w-full h-auto rounded-2xl p-4 flex flex-col gap-3 transition-all duration-300 bg-primary-light">
      <div className="h:20 md:h-40 flex flex-row md:flex-col gap-3">
          <div className="h-20 w-20 rounded-full p-1 flex justify-center items-center bg-white transition-all group-hover:scale-110">
            <div className="h-full w-full rounded-full overflow-hidden">
              <img
                src={image}
                loading="lazy"
                className="h-full w-full object-cover"
                alt="placeholder"
              />
            </div>
        </div>
        <div className="w-auto flex flex-col justify-center">
          <h2 className="text-white font-medium text-md">{name}</h2>
          <p className="text-white text-sm font-medium">{designation}</p>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-white text-md font-light leading-5">{review}</h2>
      </div>
    </div>
  );
});

Review.displayName = "Review";

Review.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

export default Review;
