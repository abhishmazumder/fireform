import PropTypes from "prop-types";

const SectionHeading = ({ children }) => {
  return (
    <div className="w-full md:w-5/6 self-center">
      <h1 className="text-white text-center text-3xl font-bold">{children}</h1>
    </div>
  );
};

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionHeading;
