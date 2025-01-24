import PropTypes from "prop-types";

const SectionSubHeading = ({ children }) => {
  return (
    <div className="w-full md:w-5/6">
      <p className="text-xs md:text-sm font-medium text-center text-neutral-300">
        {children}
      </p>
    </div>
  );
};

SectionSubHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionSubHeading;
