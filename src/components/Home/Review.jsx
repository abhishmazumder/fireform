import PropTypes from "prop-types";

const Review = ({image, name, designation, review}) => {
  return (
    <div className="group w-full h-full rounded-2xl p-4 flex flex-col gap-y-3 transition-all duration-300 bg-gradient-to-t from-primary via-tertiary to-primary bg-size-200 bg-pos-0 hover:bg-pos-100">
      <div>
        <div className="h-20 aspect-square rounded-full p-1 flex justify-center items-center bg-white transition-all group-hover:scale-110">
          <div className="h-full w-full rounded-full overflow-hidden">
            <img
              src={image}
              className="h-full w-full object-cover"
              alt="placeholder"
            />
          </div>
        </div>
      </div>
      <div className="w-full">
      <h2 className="text-white font-medium text-md">{name}</h2>
      <p className="text-white text-sm font-medium">{designation}</p>
      </div>
      <div className="w-full mt-auto">
      <h2 className="text-white text-md font-light leading-5">{review}</h2>
      </div>
    </div>
  );
};

Review.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
  }

export default Review;
