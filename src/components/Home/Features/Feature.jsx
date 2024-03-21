import PropTypes from "prop-types";
import { memo } from "react";

const Feature = memo(({ icon: Icon, title, description }) => {
  return (
    <div className="rounded-2xl p-3 w-full md:w-72 min-h-60 flex-grow bg-transparent border-primary-light border-2 flex flex-col gap-3">
      <div className="w-full h-2/5 flex items-center justify-start">
        <div className="w-16 aspect-square rounded-full p-1 bg-primary flex justify-center items-center">
          <div className="rounded-full p-3 bg-gradient-to-b from-tertiary to-primary flex justify-center items-center">
            {Icon && <Icon className="text-white size-8" />}
          </div>
        </div>
      </div>
      <div className="flex-grow flex flex-col justify-start gap-3">
        <div className="w-full">
          <h2 className="text-white font-medium text-lg">{title}</h2>
        </div>
        <div className="w-full">
          <p className="text-neutral-300 text-sm font-light">{description}</p>
        </div>
      </div>
    </div>
  );
});

Feature.displayName = "Feature";

Feature.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Feature;
