import PropTypes from "prop-types";
import { memo } from "react";

const LeftSide = ({ flip = false, icon: Icon, stepNo, title, description }) => {
  return (
    <div
      className={`w-full md:w-1/2 h-auto flex flex-col justify-center gap-y-3`}
    >
      <div
        className={`w-28 h-10 rounded-full p-2 flex justify-center items-center gap-2 self-${flip ? "end" : "start"} bg-gradient-to-r from-tertiary to-primary`}
      >
        <div className="text-white">
          <Icon className="size-4" />
        </div>
        <p
          className="text-white font-medium text-md"
        >{`Step ${stepNo}`}</p>
      </div>
      <h2
        className={`font-medium text-2xl  text-${flip ? "end" : "start"} text-white`}
      >
        {title}
      </h2>
      <p
        className={`text-sm font-light text-${flip ? "end" : "start"} text-neutral-300`}
      >
        {description}
      </p>
    </div>
  );
};

LeftSide.propTypes = {
  flip: PropTypes.bool,
  icon: PropTypes.elementType.isRequired,
  stepNo: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const RightSide = ({ flip = false }) => {
  return (
    <div
      className={`w-full md:w-1/2 flex flex-row justify-center md:justify-${flip ? "start" : "end"}
      }`}
    >
      <img
        src={"placeholder.png"}
        loading="lazy"
        className="object-contain"
        alt="placeholder"
      />
    </div>
  );
};

RightSide.propTypes = {
  flip: PropTypes.bool,
  image: PropTypes.string.isRequired,
};

const Step = memo(({ flip = false, ...props }) => {
  return (
    <div
      className={`min-h-64 flex ${
        flip ? "flex-col-reverse" : "flex-col"
      } md:flex-row items-center gap-y-6`}
    >
      {flip ? (
        <>
          <RightSide flip={flip} {...props} />
          <LeftSide flip={flip} {...props} />
        </>
      ) : (
        <>
          <LeftSide flip={flip} {...props} />
          <RightSide flip={flip} {...props} />
        </>
      )}
    </div>
  );
});

Step.displayName = "Step";

Step.propTypes = {
  flip: PropTypes.bool,
};

export default Step;
