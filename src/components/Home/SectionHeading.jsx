import PropTypes from "prop-types";

const SectionHeading = ({ children }) => {
  return (
    <div className="w-full md:w-5/6 self-center">
      <p className="text-white text-center text-3xl font-bold">{children}</p>
    </div>
  );
};

SectionHeading.propTypes = {
  children: PropTypes.node,
};

export default SectionHeading;
