import PropTypes from "prop-types";

const LeftSide = ({ icon: Icon, stepNo, title, description }) => (
  <div className="w-full md:w-1/2 h-auto flex flex-col gap-y-3 justify-end">
    <div className="w-28 h-10 rounded-full p-2 flex justify-center items-center gap-2 bg-gradient-to-r from-tertiary to-primary">
      <Icon className="size-4 text-white" />
      <p className="text-white font-medium text-md">{`Step ${stepNo}`}</p>
    </div>
    <h2 className="font-medium text-2xl text-white">{title}</h2>
    <p className="text-sm font-light text-neutral-300">{description}</p>
  </div>
);

LeftSide.propTypes = {
  icon: PropTypes.elementType.isRequired,
  stepNo: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const RightSide = ({ flip, image }) => (
  <div
    className={`w-full md:w-1/2 flex ${
      flip ? "md:justify-start" : "md:justify-end"
    } justify-center`}
  >
    <img
      src={"placeholder.png"}
      loading="lazy"
      className="object-contain"
      alt="placeholder"
    />
  </div>
);

RightSide.propTypes = {
  flip: PropTypes.bool,
  image: PropTypes.string.isRequired,
};

const Step = ({ flip = false, ...props }) => (
  <div
    className={`min-h-64 flex ${
      flip ? "flex-col-reverse" : "flex-col"
    } md:flex-row items-center gap-y-6`}
  >
    {flip ? (
      <>
        <RightSide flip={flip} {...props} />
        <LeftSide {...props} />
      </>
    ) : (
      <>
        <LeftSide {...props} />
        <RightSide flip={flip} {...props} />
      </>
    )}
  </div>
);

Step.propTypes = {
  flip: PropTypes.bool,
  icon: PropTypes.elementType.isRequired,
  stepNo: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Step;