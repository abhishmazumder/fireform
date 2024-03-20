import PropTypes from "prop-types";
import { memo } from "react";

const LeftSide = ({ flip = false, icon: Icon, stepNo, title, description }) => {
  return (
    <div
      className={`w-1/2 h-auto flex flex-col item justify-center items-${
        flip ? "end" : "start"
      } gap-y-3`}
    >
      <div className="w-28 h-10 rounded-full p-2 flex justify-center items-center gap-2 bg-gradient-to-r from-tertiary to-primary">
        <div className="text-white">
          <Icon className="size-4" />
        </div>
        <p className="text-white font-medium text-md">{`Step ${stepNo}`}</p>
      </div>
      <h2
        className={`font-medium text-2xl text-${
          flip ? "end" : "start"
        } text-white`}
      >
        {title}
      </h2>
      <p
        className={`text-sm font-light text-${
          flip ? "end" : "start"
        } text-neutral-300`}
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
      className={`w-1/2 h-auto flex justify-${flip ? "start" : "end"} items-center`}
    >
      <div className="h-full max-w-full flex items-center">
        <img src={"placeholder.png"} className="max-h-full object-contain" alt="placeholder" />
      </div>
    </div>
  );
};

RightSide.propTypes = {
  flip: PropTypes.bool,
  image: PropTypes.string.isRequired,
};

const Step = memo(({ flip = false, ...props }) => {
    return (
      <div className="h-60 flex flex-row transition-height duration-500 hover:h-96">
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
